(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1551:function(a,t,e){"use strict";e.r(t);var r=e(20),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"多-shard-下评分不准确大揭秘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多-shard-下评分不准确大揭秘"}},[a._v("#")]),a._v(" 多 shard 下评分不准确大揭秘")]),a._v(" "),e("h2",{attrs:{id:"得分不准的产生"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#得分不准的产生"}},[a._v("#")]),a._v(" 得分不准的产生")]),a._v(" "),e("p",[a._v("1 个 index 有多个 shard（副本）的情况下，有时会导致 relevance score 不准确的情况；")]),a._v(" "),e("p",[a._v("那么这个情况是怎么产生的呢？es 官网自己说该得分计算是有一点问题的（不知道哪里写的），")]),a._v(" "),e("p",[a._v("在 "),e("RouterLink",{attrs:{to:"/elasticsearch-core/search-engine/55-tf-idf.html"}},[a._v("相关度评分 TF&IDF 算法独家解密")]),a._v("\n中有讲到过得分的计算规则。")],1),a._v(" "),e("p",[a._v("比如在 title 中查询 java")]),a._v(" "),e("ol",[e("li",[a._v("在一个 document 中 java 出现了几次")]),a._v(" "),e("li",[a._v("在所有的 document 中 java 出现了几次")]),a._v(" "),e("li",[a._v("这个 document 的长度")])]),a._v(" "),e("p",[a._v("这里只有第二条会涉及到多 shard 的情况，在计算得分的时候默认只是在本地计算，而不是全局计算；")]),a._v(" "),e("p",[a._v("比如 10 条数据，分散在 3 个 shard 中，在第一个中有 5 条数据参与计算，在第二个中只有 1 条数据参与计算，\n那么这个时候第二个中的那一条数据得分就会很高。这个时候就可能会出现原本得分很高的会被排在后面去")]),a._v(" "),e("h2",{attrs:{id:"怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎么解决"}},[a._v("#")]),a._v(" 怎么解决？")]),a._v(" "),e("blockquote",[e("p",[a._v("生产环境下，数据量大，尽可能实现均匀分配")])]),a._v(" "),e("p",[a._v("数据量很大的话，其实一般情况下，在概率学的背景下，es 都是在多个 shard 中均匀路由数据的，\n路由的时候根据 "),e("code",[a._v("_id")]),a._v("，负载均衡")]),a._v(" "),e("p",[a._v("比如说有 10 个 document，title 都包含 java，一共有 5 个 shard，那么在概率学的背景下，\n如果负载均衡的话，其实每个 shard 都应该有 2 个 doc，title 包含 java，如果说数据分布均匀的话，\n其实就没有刚才说的那个问题了")]),a._v(" "),e("blockquote",[e("p",[a._v("测试环境下，将索引的 primary shard 设置为 1 个，number_of_shards=1，index settings")])]),a._v(" "),e("p",[a._v("如果说只有一个 shard，那么当然，所有的 document 都在这个 shard 里面，就没有这个问题了")]),a._v(" "),e("blockquote",[e("p",[a._v("测试环境下，搜索附带 search_type=dfs_query_then_fetch 参数，会将 local IDF 取出来计算 global IDF")])]),a._v(" "),e("p",[a._v("计算一个 doc 的相关度分数的时候，就会将所有 shard 的 local IDF 计算一下，获取出来，\n在本地进行 global IDF 分数的计算，会将所有 shard 的 doc 作为上下文来进行计算，也能确保准确性。\n但是 production 生产环境下，不推荐这个参数，因为性能很差。")])])}),[],!1,null,null,null);t.default=s.exports}}]);