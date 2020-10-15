(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1292:function(t,e,o){"use strict";o.r(e);var i=o(20),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"push-通知-push-notifications-和-spring-cloud-bus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#push-通知-push-notifications-和-spring-cloud-bus"}},[t._v("#")]),t._v(" Push 通知（Push Notifications）和 Spring Cloud Bus")]),t._v(" "),o("p",[t._v("许多源代码存储库提供者(如 Github、Gitlab、Gitea、Gitee、Gogs 或 Bitbucket)通过 webhook 通知您存储库中的更改。\n您可以通过提供者的用户界面将 webhook 配置为 URL 和订阅一组你感兴趣的事件。\n例如，Github webhook 支持使用一个 POST 回调 ，它的 JSON 主体包含一个提交列表和一个设置为 push 的头(X-Github-Event)。\n如果您添加了对 "),o("code",[t._v("spring-cloud-config-monitor")]),t._v(" 库的依赖，并激活配置服务器中的 Spring Cloud Bus ，那么就启用了 "),o("code",[t._v("/monitor")]),t._v(" 端点。")]),t._v(" "),o("div",{staticClass:"language-groovy line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-groovy"}},[o("code",[t._v("implementation "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.springframework.cloud:spring-cloud-config-monitor'")]),t._v("\n")])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br")])]),o("p",[t._v("只依赖如上依赖，启动程序后报错")]),t._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("org.springframework.context.ApplicationContextException: Failed to start bean 'outputBindingLifecycle'; nested exception is java.lang.IllegalArgumentException: A default binder has been requested, but there is no binder available\n")])]),t._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[t._v("1")]),o("br")])]),o("p",[t._v("以上测试暂时不管了，后续看完再过来补充 Bus 到底是怎么用的")]),t._v(" "),o("p",[t._v("当 webhook 被激活时，配置服务器发送一个 RefreshRemoteApplicationEvent，目标是它认为可能已经更改的应用程序。\n变更检测可以制定策略。但是，默认情况下，它查找与应用程序名称匹配的文件中的更改（如 "),o("code",[t._v("foo.properties")]),t._v(" 是针对 "),o("code",[t._v("foo")]),t._v(" 应用，\n而 "),o("code",[t._v("application.properties")]),t._v(" 是针对所有应用）。\n当您想要覆盖行为时要使用的策略是 "),o("code",[t._v("PropertyPathNotificationExtractor")]),t._v("，它接受 headers 和 body 作为参数，并返回已更改的文件路径列表。")]),t._v(" "),o("p",[t._v("默认配置使用 Github、Gitlab、Gitea、Gitee、Gogs 或 Bitbucket。除了来自 Github、Gitlab、Gitee 或 Bitbucket 的 JSON 通知之外，\n您还可以通过以 post form-encoded 方式 将参数 path={name} 发送到 /monitor 来触发更改通知。这样做向匹配 {name} 模式的应用程序广播(该模式可以包含通配符)。")]),t._v(" "),o("p",[t._v("以上 /monitor 路径在线上使用 Spring Clud Bus 的配置中心中没有找到，不知道是怎么弄的")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("只有在配置服务器和客户机应用程序中同时激活 spring-cloud-bus 时，才会传输 RefreshRemoteApplicationEvent。")]),t._v(" "),o("p",[t._v("默认配置还检测本地 git 存储库中的文件系统更改。在这种情况下，不使用 webhook。但是，只要编辑配置文件，就会广播刷新。")])]),t._v(" "),o("p",[t._v("配置这一章看完了，关于 Spring Cloud Bus 需要查阅其他资料学习")])])}),[],!1,null,null,null);e.default=s.exports}}]);