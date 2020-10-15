(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1318:function(s,e,a){"use strict";a.r(e);var n=a(20),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_183-商品详情页动态渲染系统-通过-jenkins-docker-部署-eureka-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_183-商品详情页动态渲染系统-通过-jenkins-docker-部署-eureka-服务"}},[s._v("#")]),s._v(" 183. 商品详情页动态渲染系统：通过 jenkins+docker 部署 eureka 服务")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("开始创建一个新任务。")])]),s._v(" "),n("li",[n("p",[s._v("任务信息")])])]),s._v(" "),n("ul",[n("li",[s._v("任务名称：eshop-eureka-server")]),s._v(" "),n("li",[s._v("选择：构建一个自由风格的软件项目")])]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("General -> 源码管理")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(403),alt:""}}),s._v(" "),n("img",{attrs:{src:a(404),alt:""}}),s._v("\n4. 添加构建步骤")]),s._v(" "),n("p",[n("img",{attrs:{src:a(405),alt:""}})]),s._v(" "),n("p",[s._v("说明，由于我们这里的仓库只有一个，所以需要手动进入到服务注册中心这个目录，来构建。\n就无法使用 jenkins 自带的，gradle 或者 maven 来构建了。")]),s._v(" "),n("ul",[n("li",[s._v("pwd: 显示当前在那个目录下，可以看到当前目录在 "),n("code",[s._v("/var/lib/jenkins/workspace/eshop-eureka-server")]),s._v(" 下，注意这里的 eshop-eureka-server 是任务名称。而这个目录下就是我们的 git 源代码了。")]),s._v(" "),n("li",[n("code",[s._v("echo $PATH")]),s._v("：显示当前的环境变量，当遇到执行系统中的某些命令提示 command not found 时，对比本机上的环境变量信息（后面有解决方案）")])]),s._v(" "),n("p",[s._v("上面是尝试和解决 command not found 的测试，下面是 gradle build 构建步骤的完整 shell 脚本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" eshop-eureka-server\ngradle build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("保存之后，可以点击立即构建，")]),s._v(" "),n("p",[n("img",{attrs:{src:a(406),alt:""}})]),s._v(" "),n("p",[s._v("构建成功之后，会在 "),n("code",[s._v("/var/lib/jenkins/workspace/eshop-eureka-server/eshop-eureka-server/build/libs")]),s._v(" 中生成 eshop-eureka-server-1.0.0.jar 包。构建成功")]),s._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[s._v("给项目添加 DockerFile")])]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("H:\\dev\\project\\mrcode\\cache-eshop\\eshop-eureka-server")]),s._v(" 也就是服务注册中心的项目根目录下添加一个名为 Dockerfile 的文件，\n内容如下，有关 docker 的使用这里没有深入讲解，"),n("a",{attrs:{href:"https://github.com/zq99299/essay-note/blob/master/chapter/container/index.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("可以参考这个入门教程 "),n("OutboundLink")],1),s._v(" 和这个"),n("a",{attrs:{href:"https://github.com/zq99299/essay-note/blob/master/chapter/imooc/spring_cloud/container_deployment/first.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("第一个 docker jar"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 从这个地址获取一个 doker 镜像\nFROM frolvlad/alpine-oraclejdk8:slim\nVOLUME /tmp\n# 使用 gradle build 打包好那个 jar\nADD build/libs/eshop-eureka-server-1.0.0.jar app.jar\n#RUN bash -c \'touch /app.jar\'\n\n# 运行这个 jar 包\nENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]\n\n# 暴露端口\nEXPOSE 8761\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("添加构建步骤 - docker")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# doker 地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGISTRY_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.20:2375\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择一个目录进行打包，这里写 /var/lib/jenkins 是为了简化 linux 权限相关，执行命令是用 jenkins 用户执行的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所以这里直接写在 jenkins 目录下，跳过了目录权限等问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WORK_DIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/jenkins/work_build\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROJECT_NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eshop-eureka-server\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROJECT_VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果这个目录不存在则创建它")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Create Dir: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 Dockerfile 这个文件存在，则删除它")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("/Dockerfile "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("/Dockerfile\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Remove File: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v('/Dockerfile"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把项目中的 Dockerfile 与 打好包的 boot jar 包 复制到目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/lib/jenkins/workspace/eshop-eureka-server/eshop-eureka-server/Dockerfile "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/lib/jenkins/workspace/eshop-eureka-server/eshop-eureka-server/build/libs/*.jar "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WORK_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 构建")]),s._v("\ndocker build -t "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REGISTRY_URL}")]),s._v("/eshop-detail/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_VERSION}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仓库 192.168.99.20:2375/eshop-detail/eshop-eureka-server")]),s._v("\ndocker push "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REGISTRY_URL}")]),s._v("/eshop-detail/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_VERSION}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否有这个服务运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps -a | grep eshop-eureka-server")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除正在运行的镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker rm -f eshop-eureka-server")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Remove Docker Container: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 docker 运行镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在运行时可能报错端口等问题，可参考后面的 重置 docker 网络 解决")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 docker 中的 8761 与宿主机的 8761 相关联，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 192.168.99.20:2375/eshop-detail/eshop-eureka-server:1.0.0 并取名 eshop-eureka-server")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d -p 8761:8761 --name eshop-eureka-server 192.168.99.20:2375/eshop-detail/eshop-eureka-server:1.0.0")]),s._v("\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8761")]),s._v(":8761 --name "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REGISTRY_URL}")]),s._v("/eshop-detail/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_NAME}")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT_VERSION}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("添加好之后，就可以尝试立即构建了，构建成功之后可以访问：http://192.168.99.20:8761/ 看到注册中心界面")]),s._v(" "),n("p",[s._v("后面的是这个实验过程中的各种错误解决。")]),s._v(" "),n("h2",{attrs:{id:"jenkins-shell-command-not-found"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-shell-command-not-found"}},[s._v("#")]),s._v(" jenkins shell command not found")]),s._v(" "),n("p",[s._v("在 jenkins 中执行 shell 脚本提示 command not found，比如上面我们用到了 gradle，\n居然报错：gradle command not found；")]),s._v(" "),n("p",[s._v("解决方案：")]),s._v(" "),n("p",[s._v("在终端上查看当前 path 信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost eshop-eureka-server]# echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin:/usr/local/gradle/gradle-4.8.1/bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("覆盖 jenkins 中的 path 变量：jenkins -> 系统管理 -> 系统设置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(407),alt:""}})]),s._v(" "),n("p",[s._v("如上图，使用终端上的 path 信息覆盖之后，就可以正常使用了")]),s._v(" "),n("h2",{attrs:{id:"dial-unix-var-run-docker-sock-connect-permission-denied"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dial-unix-var-run-docker-sock-connect-permission-denied"}},[s._v("#")]),s._v(" dial unix /var/run/docker.sock: connect: permission denied")]),s._v(" "),n("p",[s._v("使用 jenkins 中执行 shell 出现权限不足的提示，这里还是让 jenkins 用 root 身份执行执行把，\n不然要修改的脚本太多了。")]),s._v(" "),n("p",[s._v("让 jenkins 使用 root 身份执行设置如下：")]),s._v(" "),n("h2",{attrs:{id:"让-jenkins-使用-root-用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#让-jenkins-使用-root-用户"}},[s._v("#")]),s._v(" 让 jenkins 使用 root 用户")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 将配置中的 JENKINS_USER="jenkins" 修改为 root')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/jenkins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并将相关几个目录修改为 root 所有")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/lib/jenkins\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/cache/jenkins\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/log/jenkins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启Jenkins（若是其他方式安装的jenkins则重启方式略不同）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkins restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Jenkins进程所属用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若显示为 root 用户，则表示修改完成")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" jenkins\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"docker-run-报错-docker0-重置-docker-网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-run-报错-docker0-重置-docker-网络"}},[s._v("#")]),s._v(" docker run 报错 docker0，重置 docker 网络")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost eshop-eureka-server]# docker ps -a | grep eshop-eureka-server\n[root@localhost eshop-eureka-server]# docker run -d -p 8761:8761 --name eshop-eureka-server  192.168.99.20:2375/eshop-detail/eshop-eureka-server:1.0.0\n0fbb1b660dede294593a540bb6c5d64ea55517572e5f6fa49deeae4077f65238\ndocker: Error response from daemon: driver failed programming external connectivity on endpoint eshop-eureka-server (4f4111c8f21f1d4c29c14aeb4e5775b065e9e955819861f2a34ef23652ea6238):  (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 8761 -j DNAT --to-destination 172.17.0.2:8761 ! -i docker0: iptables: No chain/target/match by that name.\n (exit status 1)).\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("重置 docker 网络")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pkill")]),s._v(" docker\niptables -t nat -F\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install net-tools  安装后可用 ifconfig 命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" docker0 down\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install bridge-utils 安装后可用 brctl")]),s._v("\nbrctl delbr docker0\ndocker -d\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports},403:function(s,e,a){s.exports=a.p+"assets/img/markdown-img-paste-20190923221253134.f6dea6ab.png"},404:function(s,e,a){s.exports=a.p+"assets/img/markdown-img-paste-20190923221446197.163362d4.png"},405:function(s,e){s.exports="data:image/png;base64,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"},406:function(s,e,a){s.exports=a.p+"assets/img/markdown-img-paste-20190923231738574.52714b6e.png"},407:function(s,e,a){s.exports=a.p+"assets/img/markdown-img-paste-20190923230940699.8a399e0f.png"}}]);