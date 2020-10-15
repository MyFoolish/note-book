(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1432:function(s,e,a){"use strict";a.r(e);var n=a(20),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2-节点-shard-replica-机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点-shard-replica-机制"}},[s._v("#")]),s._v(" 2 节点 shard & replica 机制")]),s._v(" "),n("p",[s._v("图解 2个 node 环境下 replica shard 是如何分配的")]),s._v(" "),n("ol",[n("li",[s._v("replica shard 分配：3个 primary shard，3个 replica shard，1 node")]),s._v(" "),n("li",[s._v("primary ---\x3e replica 同步")]),s._v(" "),n("li",[s._v("读请求：primary/replica")])]),s._v(" "),n("p",[s._v("再启动一个 es 实例后，再次查看：")]),s._v(" "),n("p",[s._v("health status 变成了 green； shards 变成了 18")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("GET /_cat/health?v\n\nepoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1546324075")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("  elasticsearch green           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                  -                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),s._v("%\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("indices 是没有任何变化的")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("GET /_cat/indices?v\n\nhealth status index      uuid                   pri rep docs.count docs.deleted store.size pri.store.size\ngreen  open   ecommerce  ZpGp7bIBQBaZFk9SYmbJVQ   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v(".5kb         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(".2kb\ngreen  open   test_index g4RJx2v8TXK95LdwlhRx5A   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       780b           390b\ngreen  open   .kibana    id1SV_oGSjyGosKxeJApww   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".3kb          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".1kb\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:a(572),alt:""}})])])}),[],!1,null,null,null);e.default=t.exports},572:function(s,e,a){s.exports=a.p+"assets/img/markdown-img-paste-2019010114333074.1164c23f.png"}}]);