(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1239:function(_,v,t){"use strict";t.r(v);var s=t(20),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"_129-商品详情页动态渲染系统-复杂的消息队列架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_129-商品详情页动态渲染系统-复杂的消息队列架构设计"}},[_._v("#")]),_._v(" 129. 商品详情页动态渲染系统：复杂的消息队列架构设计")]),_._v(" "),s("p",[_._v("消息队列很多时候并不是简单的使用一个 MQ 就可以的，为了应对复杂的场景，需要设计一套复杂的队列")]),_._v(" "),s("h2",{attrs:{id:"几种队列解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几种队列解释"}},[_._v("#")]),_._v(" 几种队列解释")]),_._v(" "),s("p",[_._v("本列有以下几种队列：")]),_._v(" "),s("ul",[s("li",[_._v("任务等待队列")]),_._v(" "),s("li",[_._v("任务排重队列（异构 Worker 对一个时间段内的变更消息做排重）")]),_._v(" "),s("li",[_._v("失败任务队列（失败重试机制）")]),_._v(" "),s("li",[_._v("优先级队列，刷数据队列（依赖服务洗数据）、高优先级队列（活动商品优先级高）")])]),_._v(" "),s("p",[_._v("这些队列服务于某一种业务场景而存在的，如下图，已经很复杂了")]),_._v(" "),s("p",[s("img",{attrs:{src:t(392),alt:""}})]),_._v(" "),s("ul",[s("li",[s("p",[_._v("依赖服务")]),_._v(" "),s("ul",[s("li",[_._v("数据变更信息投递到 "),s("strong",[_._v("消息等待队列")]),_._v(" 中")]),_._v(" "),s("li",[_._v("针对活动商品需要快速响应，投递到 "),s("strong",[_._v("高优先级队列")]),_._v(" 中")])])]),_._v(" "),s("li",[s("p",[_._v("数据同步服务")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("消费 "),s("strong",[_._v("消息等待队列")]),_._v(" 中的事件，把原子数据写入到缓存集群中")])]),_._v(" "),s("li",[s("p",[_._v("消费 "),s("strong",[_._v("高优先级队列")])])]),_._v(" "),s("li",[s("p",[_._v("同时可以对短时间内多次修改的商品去重，然后投递到 "),s("strong",[_._v("去重队列")])]),_._v(" "),s("p",[_._v("这里猜想应该是设置一个阀值，比如 5 分钟往去重队列投递一次")])]),_._v(" "),s("li",[s("p",[_._v("需要写缓存，可能因为网络问题导致写入失败，投递到 "),s("strong",[_._v("数据同步服务异常消息队列")])])]),_._v(" "),s("li",[s("p",[_._v("自己又要消费 "),s("strong",[_._v("数据同步服务异常消息队列")]),_._v(" 中的数据（相当于重试）")]),_._v(" "),s("p",[_._v("还要保证脏数据的处理，比如一个商品修改三次，中间那一次写失败，\n那么在处理中间这次重试的时候，还要保证这条脏数据不被写入缓存中")])])])]),_._v(" "),s("li",[s("p",[_._v("数据聚合服务")]),_._v(" "),s("ul",[s("li",[_._v("消费 "),s("strong",[_._v("去重队列")]),_._v(" 进行数据的聚合，然后写入 缓存集群 中")]),_._v(" "),s("li",[_._v("消费 "),s("strong",[_._v("自己的高优先级队列")])]),_._v(" "),s("li",[_._v("消费 "),s("strong",[_._v("数据聚合服务异常消息队列")])])])]),_._v(" "),s("li",[s("p",[_._v("刷数据队列")]),_._v(" "),s("p",[_._v("用来解决全量数据更新，这个队列只在晚上 12 点之后开始消费。")])])]),_._v(" "),s("h2",{attrs:{id:"多队列架构总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多队列架构总结"}},[_._v("#")]),_._v(" 多队列架构总结")]),_._v(" "),s("p",[_._v("看图很复杂，简单一点：")]),_._v(" "),s("ol",[s("li",[s("strong",[_._v("数据同步服务")]),_._v(" 通过 "),s("strong",[_._v("消息等待队列")]),_._v(" 与源服务交互")]),_._v(" "),s("li",[s("strong",[_._v("数据聚合服务")]),_._v(" 通过 "),s("strong",[_._v("去重队列")]),_._v(" 与数据同步服务进行交互")])]),_._v(" "),s("p",[_._v("三个服务之间的交互，每个服务之间的交互都有以下队列：")]),_._v(" "),s("ol",[s("li",[_._v("正常交互队列")]),_._v(" "),s("li",[_._v("重试队列")]),_._v(" "),s("li",[_._v("高优先级队列")])]),_._v(" "),s("p",[_._v("另外的队列就是全量刷数据。")]),_._v(" "),s("p",[_._v("总结结束；大概意思本人明白了，其中一些细节点还不知道，期待后续")])])}),[],!1,null,null,null);v.default=r.exports},392:function(_,v,t){_.exports=t.p+"assets/img/markdown-img-paste-20190712232633231.f235e2f9.png"}}]);