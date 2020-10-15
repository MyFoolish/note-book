(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1311:function(t,n,s){"use strict";s.r(n);var e=s(20),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_178-商品详情页动态渲染系统-高可用架构优化之读链路多级降级思路介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_178-商品详情页动态渲染系统-高可用架构优化之读链路多级降级思路介绍"}},[t._v("#")]),t._v(" 178. 商品详情页动态渲染系统：高可用架构优化之读链路多级降级思路介绍")]),t._v(" "),s("p",[t._v("本章节也只是思路介绍，脚本也会有示例。")]),t._v(" "),s("p",[t._v("读链路：nginx local cache -> 本机房 redis 从集群 -> 数据直连服务的 jvm 堆缓存（之前讲解，这次没做） -> 其他机房 redis 主集群 -> 依赖服务")]),t._v(" "),s("p",[t._v("这里最有可能出现问题的就是：redis 从集群、 数据直连服务、redis 主集群。\n如果这三个都挂了，在读链路上来看，也是灾难性的了，依赖服务很有可能被干死嘛。")]),t._v(" "),s("p",[t._v("那么针对这三个出问题的地方进行降级处理，思路如下脚本，当访问失败时做标记，失败一定次数就标记为挂掉，\n在一定时间内就不再提供服务或访问降级策略（降级策略都失败就不再提供服务）。\n其实这里做的功能就是之前 hystrix 中的熔断器类似的功能。")]),t._v(" "),s("p",[t._v("这个思路是没有问题，唯一的问题就是对于计数处理等场景，如：下面先从缓存获取失败次数，然后加 1，再更新到缓存中，\n这种操作方式不会有数据竞争问题导致脏数据吗？还是说在这种高并发的场景下，脏一点无关紧要？")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('local cjson = require("cjson")\nlocal http = require("resty.http")\nlocal redis = require("resty.redis")  \n\nlocal function close_redis(red)  \n\tif not red then  \n\t\t\treturn  \n\tend  \n\tlocal pool_max_idle_time = 10000\n\tlocal pool_size = 100\n\tlocal ok, err = red:set_keepalive(pool_max_idle_time, pool_size)  \n\tif not ok then  \n\t\t\tngx.say("set keepalive error : ", err)  \n\tend  \nend\n\nlocal uri_args = ngx.req.get_uri_args()\nlocal productId = uri_args["productId"]\n\nlocal cache_ngx = ngx.shared.my_cache\nlocal productCacheKey = "product_"..productId\nlocal productCache = cache_ngx:get(productCacheKey)\n\nif productCache == "" or productCache == nil then\n  local slaveRedisDegrade = cache_ngx:get("slaveRedisDegrade")\n  -- redis 从集群是否挂掉  \n  if slaveRedisDegrade == "true" then\n        local dataLinkDegrade = cache_ngx:get("dataLinkDegrade")\n\t\t-- 数据直连服务是否挂掉\n\t\tif dataLinkDegrade == true then\n\t\t\t  local red = redis:new()  \n\t\t\t  red:set_timeout(1000)  \n\t\t\t  local ip = "192.168.31.223"  \n\t\t\t  local port = 1111  \n\t\t\t  local ok, err = red:connect(ip, port)\n\t\t\t  local redisResp, redisErr = red:get("dim_product_"..productId)\n\t\t\t  productCache = redisResp\n\n\t\t\t    local curTime = os.time()\n\t\t\t\tlocal diffTime = os.difftime(curTime, cache_ngx:get("startdataLinkDegradeTime"))\n\t\t\t\t// 当挂掉时间超过 60 秒的时候，再次尝试从数据直连服务获取数据\n\t\t\t\tif diffTime > 60 then\n\t\t\t\t    local httpc = http.new()\n\t\t\t\t\tlocal resp, err = httpc:request_uri("http://192.168.31.179:8767",{\n\t\t\t\t\t  method = "GET",\n\t\t\t\t\t  path = "/product?productId="..productId\n\t\t\t\t\t})\n\n\t\t\t\t    if resp then\n\t\t\t\t      cache_ngx:set("dataLinkDegrade", "false")\n\t\t\t\t    end\n\t\t\t\tend\n\t\telse\n\t\t\tlocal httpc = http.new()\n\t\t\tlocal resp, err = httpc:request_uri("http://192.168.31.179:8767",{\n\t\t\t  method = "GET",\n\t\t\t  path = "/product?productId="..productId\n\t\t\t})\n\t\t\t-- 当从数据直连服务访问不到数据时，就计数\n\t\t\tif not resp then  \n\t\t\t\tngx.say("request error :", err)  \n\n\t\t\t\tlocal dataLinkFailureCnt = cache_ngx:get("dataLinkFailureCnt")\n\t\t\t\tcache_ngx:set("dataLinkFailureCnt", dataLinkFailureCnt + 1)\n\t\t\t\t-- 当数据直连服务访问失败到达 10 次时，就标记为数据直连服务已经挂掉了\n\t\t\t\tif dataLinkFailureCnt > 10 then\n\t\t\t\t  cache_ngx:set("dataLinkDegrade", "true")\n\t\t\t\t  cache_ngx:set("startDataLinkDegradeTime", os.time())\n\t\t\t\tend\n\t\t\tend\n\n\t\t\tproductCache = resp.body\n\n\t\t\tlocal curTime = os.time()\n\t\t\tlocal diffTime = os.difftime(curTime, cache_ngx:get("startSlaveRedisDegradeTime"))\n\n\t\t\tif diffTime > 60 then\n\t\t\t  local red = redis:new()  \n\t\t\t  red:set_timeout(1000)  \n\t\t\t  local ip = "192.168.31.223"  \n\t\t\t  local port = 1112  \n\t\t\t  local ok, err = red:connect(ip, port)  \n\n\t\t\t  if ok then\n\t\t\t\tcache_ngx:set("slaveRedisDegrade", "false")\n\t\t\t  end\n\t\t\tend\n\t\tend\n  else\n\t  local red = redis:new()  \n\t  red:set_timeout(1000)  \n\t  local ip = "192.168.31.223"  \n\t  local port = 1112  \n\t  local ok, err = red:connect(ip, port)  \n\n\t  if not ok then  \n\t\tngx.say("connect to redis error : ", err)  \n\n\t\tlocal slaveRedisFailureCnt = cache_ngx:get("slaveRedisFailureCnt")\n\t\tcache_ngx:set("slaveRedisFailureCnt", slaveRedisFailureCnt + 1)\n\n\t\tif slaveRedisFailureCnt > 10 then\n\t\t  cache_ngx:set("slaveRedisDegrade", "true")\n\t\t  cache_ngx:set("startSlaveRedisDegradeTime", os.time())\n\t\tend\n\n\t\treturn close_redis(red)  \n\t  end\n\n\t  local redisResp, redisErr = red:get("dim_product_"..productId)\n\n\t  if redisResp == ngx.null or redisResp == "" or redisResp == nil then  \n\t    local dataLinkDegrade = cache_ngx:get("dataLinkDegrade")\n\n\t\tif dataLinkDegrade == "true" then\n\t\t\t  local red = redis:new()  \n\t\t\t  red:set_timeout(1000)  \n\t\t\t  local ip = "192.168.31.223"  \n\t\t\t  local port = 1111  \n\t\t\t  local ok, err = red:connect(ip, port)\n\t\t\t  local redisResp, redisErr = red:get("dim_product_"..productId)\n\t\t\t  productCache = redisResp\n\n\t\t\t  local curTime = os.time()\n\t\t\t\tlocal diffTime = os.difftime(curTime, cache_ngx:get("startdataLinkDegradeTime"))\n\n\t\t\t\tif diffTime > 60 then\n\t\t\t\t    local httpc = http.new()\n\t\t\t\t\tlocal resp, err = httpc:request_uri("http://192.168.31.179:8767",{\n\t\t\t\t\t  method = "GET",\n\t\t\t\t\t  path = "/product?productId="..productId\n\t\t\t\t\t})\n\n\t\t\t\t    if resp then\n\t\t\t\t      cache_ngx:set("dataLinkDegrade", "false")\n\t\t\t\t    end\n\t\t\t\tend\n\t\telse\n\t\t\tlocal httpc = http.new()\n\t\t\tlocal resp, err = httpc:request_uri("http://192.168.31.179:8767",{\n\t\t\t  method = "GET",\n\t\t\t  path = "/product?productId="..productId\n\t\t\t})\n\n\t\t\tif not resp then  \n\t\t\t\tngx.say("request error :", err)  \n\n\t\t\t\tlocal dataLinkFailureCnt = cache_ngx:get("dataLinkFailureCnt")\n\t\t\t\tcache_ngx:set("dataLinkFailureCnt", dataLinkFailureCnt + 1)\n\n\t\t\t\tif dataLinkFailureCnt > 10 then\n\t\t\t\t  cache_ngx:set("dataLinkDegrade", "true")\n\t\t\t\t  cache_ngx:set("startDataLinkDegradeTime", os.time())\n\t\t\t\tend\n\t\t\tend\n\n\t\t\tproductCache = resp.body\n\t\tend\n\t  else\n\t\tproductCache = redisResp\n\t  end\n  end\n\n  math.randomseed(tostring(os.time()):reverse():sub(1, 7))\n  local expireTime = math.random(600, 1200)  \n\n  cache_ngx:set(productCacheKey, productCache, expireTime)\nend\n\nlocal context = {\n  productInfo = productCache,\n}\n\nlocal template = require("resty.template")\ntemplate.render("product.html", context)\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br"),s("span",{staticClass:"line-number"},[t._v("67")]),s("br"),s("span",{staticClass:"line-number"},[t._v("68")]),s("br"),s("span",{staticClass:"line-number"},[t._v("69")]),s("br"),s("span",{staticClass:"line-number"},[t._v("70")]),s("br"),s("span",{staticClass:"line-number"},[t._v("71")]),s("br"),s("span",{staticClass:"line-number"},[t._v("72")]),s("br"),s("span",{staticClass:"line-number"},[t._v("73")]),s("br"),s("span",{staticClass:"line-number"},[t._v("74")]),s("br"),s("span",{staticClass:"line-number"},[t._v("75")]),s("br"),s("span",{staticClass:"line-number"},[t._v("76")]),s("br"),s("span",{staticClass:"line-number"},[t._v("77")]),s("br"),s("span",{staticClass:"line-number"},[t._v("78")]),s("br"),s("span",{staticClass:"line-number"},[t._v("79")]),s("br"),s("span",{staticClass:"line-number"},[t._v("80")]),s("br"),s("span",{staticClass:"line-number"},[t._v("81")]),s("br"),s("span",{staticClass:"line-number"},[t._v("82")]),s("br"),s("span",{staticClass:"line-number"},[t._v("83")]),s("br"),s("span",{staticClass:"line-number"},[t._v("84")]),s("br"),s("span",{staticClass:"line-number"},[t._v("85")]),s("br"),s("span",{staticClass:"line-number"},[t._v("86")]),s("br"),s("span",{staticClass:"line-number"},[t._v("87")]),s("br"),s("span",{staticClass:"line-number"},[t._v("88")]),s("br"),s("span",{staticClass:"line-number"},[t._v("89")]),s("br"),s("span",{staticClass:"line-number"},[t._v("90")]),s("br"),s("span",{staticClass:"line-number"},[t._v("91")]),s("br"),s("span",{staticClass:"line-number"},[t._v("92")]),s("br"),s("span",{staticClass:"line-number"},[t._v("93")]),s("br"),s("span",{staticClass:"line-number"},[t._v("94")]),s("br"),s("span",{staticClass:"line-number"},[t._v("95")]),s("br"),s("span",{staticClass:"line-number"},[t._v("96")]),s("br"),s("span",{staticClass:"line-number"},[t._v("97")]),s("br"),s("span",{staticClass:"line-number"},[t._v("98")]),s("br"),s("span",{staticClass:"line-number"},[t._v("99")]),s("br"),s("span",{staticClass:"line-number"},[t._v("100")]),s("br"),s("span",{staticClass:"line-number"},[t._v("101")]),s("br"),s("span",{staticClass:"line-number"},[t._v("102")]),s("br"),s("span",{staticClass:"line-number"},[t._v("103")]),s("br"),s("span",{staticClass:"line-number"},[t._v("104")]),s("br"),s("span",{staticClass:"line-number"},[t._v("105")]),s("br"),s("span",{staticClass:"line-number"},[t._v("106")]),s("br"),s("span",{staticClass:"line-number"},[t._v("107")]),s("br"),s("span",{staticClass:"line-number"},[t._v("108")]),s("br"),s("span",{staticClass:"line-number"},[t._v("109")]),s("br"),s("span",{staticClass:"line-number"},[t._v("110")]),s("br"),s("span",{staticClass:"line-number"},[t._v("111")]),s("br"),s("span",{staticClass:"line-number"},[t._v("112")]),s("br"),s("span",{staticClass:"line-number"},[t._v("113")]),s("br"),s("span",{staticClass:"line-number"},[t._v("114")]),s("br"),s("span",{staticClass:"line-number"},[t._v("115")]),s("br"),s("span",{staticClass:"line-number"},[t._v("116")]),s("br"),s("span",{staticClass:"line-number"},[t._v("117")]),s("br"),s("span",{staticClass:"line-number"},[t._v("118")]),s("br"),s("span",{staticClass:"line-number"},[t._v("119")]),s("br"),s("span",{staticClass:"line-number"},[t._v("120")]),s("br"),s("span",{staticClass:"line-number"},[t._v("121")]),s("br"),s("span",{staticClass:"line-number"},[t._v("122")]),s("br"),s("span",{staticClass:"line-number"},[t._v("123")]),s("br"),s("span",{staticClass:"line-number"},[t._v("124")]),s("br"),s("span",{staticClass:"line-number"},[t._v("125")]),s("br"),s("span",{staticClass:"line-number"},[t._v("126")]),s("br"),s("span",{staticClass:"line-number"},[t._v("127")]),s("br"),s("span",{staticClass:"line-number"},[t._v("128")]),s("br"),s("span",{staticClass:"line-number"},[t._v("129")]),s("br"),s("span",{staticClass:"line-number"},[t._v("130")]),s("br"),s("span",{staticClass:"line-number"},[t._v("131")]),s("br"),s("span",{staticClass:"line-number"},[t._v("132")]),s("br"),s("span",{staticClass:"line-number"},[t._v("133")]),s("br"),s("span",{staticClass:"line-number"},[t._v("134")]),s("br"),s("span",{staticClass:"line-number"},[t._v("135")]),s("br"),s("span",{staticClass:"line-number"},[t._v("136")]),s("br"),s("span",{staticClass:"line-number"},[t._v("137")]),s("br"),s("span",{staticClass:"line-number"},[t._v("138")]),s("br"),s("span",{staticClass:"line-number"},[t._v("139")]),s("br"),s("span",{staticClass:"line-number"},[t._v("140")]),s("br"),s("span",{staticClass:"line-number"},[t._v("141")]),s("br"),s("span",{staticClass:"line-number"},[t._v("142")]),s("br"),s("span",{staticClass:"line-number"},[t._v("143")]),s("br"),s("span",{staticClass:"line-number"},[t._v("144")]),s("br"),s("span",{staticClass:"line-number"},[t._v("145")]),s("br"),s("span",{staticClass:"line-number"},[t._v("146")]),s("br"),s("span",{staticClass:"line-number"},[t._v("147")]),s("br"),s("span",{staticClass:"line-number"},[t._v("148")]),s("br"),s("span",{staticClass:"line-number"},[t._v("149")]),s("br"),s("span",{staticClass:"line-number"},[t._v("150")]),s("br"),s("span",{staticClass:"line-number"},[t._v("151")]),s("br"),s("span",{staticClass:"line-number"},[t._v("152")]),s("br"),s("span",{staticClass:"line-number"},[t._v("153")]),s("br"),s("span",{staticClass:"line-number"},[t._v("154")]),s("br"),s("span",{staticClass:"line-number"},[t._v("155")]),s("br"),s("span",{staticClass:"line-number"},[t._v("156")]),s("br"),s("span",{staticClass:"line-number"},[t._v("157")]),s("br"),s("span",{staticClass:"line-number"},[t._v("158")]),s("br"),s("span",{staticClass:"line-number"},[t._v("159")]),s("br"),s("span",{staticClass:"line-number"},[t._v("160")]),s("br"),s("span",{staticClass:"line-number"},[t._v("161")]),s("br"),s("span",{staticClass:"line-number"},[t._v("162")]),s("br"),s("span",{staticClass:"line-number"},[t._v("163")]),s("br"),s("span",{staticClass:"line-number"},[t._v("164")]),s("br"),s("span",{staticClass:"line-number"},[t._v("165")]),s("br"),s("span",{staticClass:"line-number"},[t._v("166")]),s("br"),s("span",{staticClass:"line-number"},[t._v("167")]),s("br"),s("span",{staticClass:"line-number"},[t._v("168")]),s("br"),s("span",{staticClass:"line-number"},[t._v("169")]),s("br"),s("span",{staticClass:"line-number"},[t._v("170")]),s("br"),s("span",{staticClass:"line-number"},[t._v("171")]),s("br"),s("span",{staticClass:"line-number"},[t._v("172")]),s("br"),s("span",{staticClass:"line-number"},[t._v("173")]),s("br"),s("span",{staticClass:"line-number"},[t._v("174")]),s("br"),s("span",{staticClass:"line-number"},[t._v("175")]),s("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);