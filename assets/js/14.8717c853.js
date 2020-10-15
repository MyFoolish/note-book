(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1414:function(t,a,e){"use strict";e.r(a);var s=e(20),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"relative-相对定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relative-相对定位"}},[t._v("#")]),t._v(" relative 相对定位")]),t._v(" "),s("p",[t._v("简介：relative 和 absolute 的关系总让我们头疼。")]),t._v(" "),s("p",[t._v("张鑫旭大大将在本次课程中给大家生动且深入的剖析二者的关系，以及 relative 与 z-index 层级的关系，\n同时给大家分享一些好的 relative 实践准则。小伙伴们还等什么？")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-relative-和-absolute-相煎关系"}},[t._v("1. relative 和 absolute 相煎关系")]),s("ul",[s("li",[s("a",{attrs:{href:"#同源性"}},[t._v("同源性")])]),s("li",[s("a",{attrs:{href:"#限制作用"}},[t._v("限制作用")])]),s("li",[s("a",{attrs:{href:"#relative-与-fixed"}},[t._v("relative 与 fixed")])])])]),s("li",[s("a",{attrs:{href:"#_2-relative-与定位"}},[t._v("2. relative 与定位")]),s("ul",[s("li",[s("a",{attrs:{href:"#相对自身"}},[t._v("相对自身")])]),s("li",[s("a",{attrs:{href:"#无侵入"}},[t._v("无侵入")])]),s("li",[s("a",{attrs:{href:"#无侵入定位的用作-自定义拖拽"}},[t._v("无侵入定位的用作：自定义拖拽")])]),s("li",[s("a",{attrs:{href:"#对立属性同时存在有什么表现"}},[t._v("对立属性同时存在有什么表现？")])])])]),s("li",[s("a",{attrs:{href:"#_3-relative-与-z-index-层级的关系"}},[t._v("3. relative 与 z-index 层级的关系")]),s("ul",[s("li",[s("a",{attrs:{href:"#提高层叠上下文"}},[t._v("提高层叠上下文")])]),s("li",[s("a",{attrs:{href:"#新建层叠上下文与层级控制"}},[t._v("新建层叠上下文与层级控制")])])])]),s("li",[s("a",{attrs:{href:"#_4-relative-的最小化影响准则"}},[t._v("4. relative 的最小化影响准则")]),s("ul",[s("li",[s("a",{attrs:{href:"#尽量避免使用-relative"}},[t._v("尽量避免使用 relative")])]),s("li",[s("a",{attrs:{href:"#relative-最小化原则"}},[t._v("relative 最小化原则")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-relative-和-absolute-相煎关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-relative-和-absolute-相煎关系"}},[t._v("#")]),t._v(" 1. relative 和 absolute 相煎关系")]),t._v(" "),s("h3",{attrs:{id:"同源性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源性"}},[t._v("#")]),t._v(" 同源性")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:e(539),alt:"image-20200502223008577"}})]),t._v(" "),s("p",[t._v("absolute 太厉害了，它哥哥 reative 管束它")]),t._v(" "),s("h3",{attrs:{id:"限制作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制作用"}},[t._v("#")]),t._v(" 限制作用")]),t._v(" "),s("ol",[s("li",[t._v("限制 "),s("code",[t._v("left/top/right/bottom")]),t._v("定位")]),t._v(" "),s("li",[t._v("限制 "),s("code",[t._v("z-index")]),t._v("层级")]),t._v(" "),s("li",[t._v("限制在 "),s("code",[t._v("overflow")]),t._v("下的嚣张气焰")])]),t._v(" "),s("h4",{attrs:{id:"限制定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制定位"}},[t._v("#")]),t._v(" 限制定位")]),t._v(" "),s("p",[s("img",{attrs:{src:e(540),alt:"image-20200502223242519"}})]),t._v(" "),s("p",[t._v("没有 relative 限制的 absolute ，可以飞到天空上去，限制之后，就只能被关在屋子里了")]),t._v(" "),s("h4",{attrs:{id:"限制层级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制层级"}},[t._v("#")]),t._v(" 限制层级")]),t._v(" "),s("p",[s("img",{attrs:{src:e(541),alt:"image-20200502223444538"}})]),t._v(" "),s("p",[t._v("在没有 relative 时，哪个的层级高，就高，当 relative 出现后，就要看 relative 的层级了，他们自己的层级不对外影响了")]),t._v(" "),s("h4",{attrs:{id:"限制超越-overflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制超越-overflow"}},[t._v("#")]),t._v(" 限制超越  overflow")]),t._v(" "),s("p",[s("img",{attrs:{src:e(542),alt:"image-20200502223647391"}})]),t._v(" "),s("p",[t._v("absolute 可以超越 overflow，relative 后，就不能超越了")]),t._v(" "),s("h3",{attrs:{id:"relative-与-fixed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relative-与-fixed"}},[t._v("#")]),t._v(" relative 与 fixed")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("同源性")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("限制性")]),t._v(" "),s("p",[t._v("只能限制 z-index 属性")])])]),t._v(" "),s("h2",{attrs:{id:"_2-relative-与定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-relative-与定位"}},[t._v("#")]),t._v(" 2. relative 与定位")]),t._v(" "),s("p",[t._v("relative 自身的定位有两个特性：")]),t._v(" "),s("ul",[s("li",[t._v("相对自身")]),t._v(" "),s("li",[t._v("无侵入")])]),t._v(" "),s("h3",{attrs:{id:"相对自身"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对自身"}},[t._v("#")]),t._v(" 相对自身")]),t._v(" "),s("p",[s("img",{attrs:{src:e(543),alt:"image-20200502224413994"}})]),t._v(" "),s("p",[t._v("天使是 absolute，右边的是 relative， 都定位，relative 还在原地。。")]),t._v(" "),s("p",[t._v("因为是它相对自身的定位，绝对定位是找限制它的边界定位的。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(544),alt:"image-20200502224609297"}})]),t._v(" "),s("p",[s("code",[t._v("left 100 px,right 100px")]),t._v(" 就看到 relative 在自身的基础上飘了一点")]),t._v(" "),s("h3",{attrs:{id:"无侵入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无侵入"}},[t._v("#")]),t._v(" 无侵入")]),t._v(" "),s("p",[t._v("一个网页中 6 个格子，排列得很整齐")]),t._v(" "),s("p",[s("img",{attrs:{src:e(545),alt:"image-20200502224915203"}})]),t._v(" "),s("p",[t._v("当他们各自执行自己的任务后，就发生了不同的变化；右侧是 relative 的。")]),t._v(" "),s("p",[t._v("对于他们自身的表现都是相同的，都是网上偏移 100px，重点是跟随他们的元素")]),t._v(" "),s("p",[s("img",{attrs:{src:e(546),alt:"image-20200502225107982"}})]),t._v(" "),s("p",[t._v("relative 后面的元素没有发生任何的变化。这就是它的特性")]),t._v(" "),s("h3",{attrs:{id:"无侵入定位的用作-自定义拖拽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无侵入定位的用作-自定义拖拽"}},[t._v("#")]),t._v(" 无侵入定位的用作：自定义拖拽")]),t._v(" "),s("p",[t._v("浏览器其实有他们自己的拖拽 API，缺点是不能自定义一些东西，比如手型")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/./image-20200502225424788.png",alt:"image-20200502225424788"}})]),t._v(" "),s("p",[t._v("可以利用 relative 来实现之定义拖拽，如上图，将 左侧的拖动超过右侧一半的时候，操作 下面的元素移动到左边来，放下后，再完整的将拖动的 dom 交换")]),t._v(" "),s("h3",{attrs:{id:"对立属性同时存在有什么表现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对立属性同时存在有什么表现"}},[t._v("#")]),t._v(" 对立属性同时存在有什么表现？")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("top/bottom")]),t._v(" 和 "),s("code",[t._v("left/right")]),t._v(" 对立属性同时存在时的表现是？")]),t._v(" "),s("ul",[s("li",[t._v("绝对定位是拉伸")]),t._v(" "),s("li",[t._v("相对定位是斗争")])]),t._v(" "),s("p",[s("code",[t._v("top/bottom")]),t._v(" 同时存在，只有 top 生效")]),t._v(" "),s("p",[s("code",[t._v("left/right")]),t._v(" 同时存在，只有 left 生效")]),t._v(" "),s("h2",{attrs:{id:"_3-relative-与-z-index-层级的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-relative-与-z-index-层级的关系"}},[t._v("#")]),t._v(" 3. relative 与 z-index 层级的关系")]),t._v(" "),s("h3",{attrs:{id:"提高层叠上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提高层叠上下文"}},[t._v("#")]),t._v(" 提高层叠上下文")]),t._v(" "),s("p",[t._v("这里不深入讲解，后续再 z-index 章节讲解；")]),t._v(" "),s("p",[t._v("可以想象成是提高它的层级，而且是鬼畜级别（相当厉害）")]),t._v(" "),s("p",[s("img",{attrs:{src:e(547),alt:"image-20200502230204110"}})]),t._v(" "),s("p",[t._v("当两张图片重叠实，没有其他样式的时候，是后来居上的，直接施加 relative，则直接反超了")]),t._v(" "),s("h3",{attrs:{id:"新建层叠上下文与层级控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建层叠上下文与层级控制"}},[t._v("#")]),t._v(" 新建层叠上下文与层级控制")]),t._v(" "),s("p",[t._v("前面说到，两个绝对定位元素的层级大小，被 relative 后，层级是看 relative 这个父级元素的层级，这个前提是：z-index 是一个数值，因为会产生一个新的层叠上下文")]),t._v(" "),s("p",[t._v("relative 的默认层级是 auto，可以看到，原来绝对定位元素的层级为 3 ，和左边的层级一样了，在官网文档里面的描述事件，当 relative 层级为 auto 时，是不会新建层叠上下文的")]),t._v(" "),s("p",[s("img",{attrs:{src:e(548),alt:"image-20200502230637561"}})]),t._v(" "),s("p",[s("strong",[t._v("结论")]),t._v("：没有限制内部 absolute 元素层叠的问题（不包括 IE6 和 IE 7）")]),t._v(" "),s("h2",{attrs:{id:"_4-relative-的最小化影响准则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-relative-的最小化影响准则"}},[t._v("#")]),t._v(" 4. relative 的最小化影响准则")]),t._v(" "),s("p",[t._v("本章是讲心得干货，最佳实践")]),t._v(" "),s("p",[t._v("**所谓 relative 的最小化影响准则：**指的是，尽量降低 relative 属性对其他元素或布局的潜在影响")]),t._v(" "),s("p",[t._v("有两点：")]),t._v(" "),s("ol",[s("li",[t._v("尽量避免使用 relative")]),t._v(" "),s("li",[t._v("非要使用的化，让它最小化")])]),t._v(" "),s("h3",{attrs:{id:"尽量避免使用-relative"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽量避免使用-relative"}},[t._v("#")]),t._v(" 尽量避免使用 relative")]),t._v(" "),s("p",[t._v("absolute 不依赖 relative，这个在绝对定位中讲过了。")]),t._v(" "),s("h3",{attrs:{id:"relative-最小化原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relative-最小化原则"}},[t._v("#")]),t._v(" relative 最小化原则")]),t._v(" "),s("p",[t._v("将猪头定位到右上角，如果非要用 relative 的话：")]),t._v(" "),s("p",[s("img",{attrs:{src:e(549),alt:"image-20200502232007765"}})]),t._v(" "),s("p",[t._v("这一张是作用在整个大容器上，范围过大； 上图是最小化原则的代码；如果是应用下面的代码，那么表现就应该是整个框框都被圈起来的")]),t._v(" "),s("p",[s("img",{attrs:{src:e(550),alt:"image-20200502231639484"}})]),t._v(" "),s("p",[t._v("将它提出来，只针对这一个猪头进行 relative 定位，最小化原则")]),t._v(" "),s("p",[s("img",{attrs:{src:e(551),alt:"image-20200502231700722"}})]),t._v(" "),s("p",[t._v("这个代码它不会占据任何空间，不会有任何的问题。不会影响其它的，比如出现各种重叠问题")])])}),[],!1,null,null,null);a.default=r.exports},539:function(t,a,e){t.exports=e.p+"assets/img/image-20200502223008577.e5e61e1e.png"},540:function(t,a,e){t.exports=e.p+"assets/img/image-20200502223242519.bc64f49f.png"},541:function(t,a,e){t.exports=e.p+"assets/img/image-20200502223444538.40532338.png"},542:function(t,a,e){t.exports=e.p+"assets/img/image-20200502223647391.d2bd77a0.png"},543:function(t,a,e){t.exports=e.p+"assets/img/image-20200502224413994.ee30c14b.png"},544:function(t,a,e){t.exports=e.p+"assets/img/image-20200502224609297.994eb2de.png"},545:function(t,a,e){t.exports=e.p+"assets/img/image-20200502224915203.2dd4da0a.png"},546:function(t,a,e){t.exports=e.p+"assets/img/image-20200502225107982.d1b6fdcb.png"},547:function(t,a,e){t.exports=e.p+"assets/img/image-20200502230204110.b3a85449.png"},548:function(t,a,e){t.exports=e.p+"assets/img/image-20200502230637561.27c2fede.png"},549:function(t,a,e){t.exports=e.p+"assets/img/image-20200502232007765.6b6371a8.png"},550:function(t,a,e){t.exports=e.p+"assets/img/image-20200502231639484.452d3478.png"},551:function(t,a,e){t.exports=e.p+"assets/img/image-20200502231700722.b4fb3b78.png"}}]);