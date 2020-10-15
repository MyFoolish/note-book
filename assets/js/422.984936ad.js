(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1479:function(s,a,n){"use strict";n.r(a);var e=n(20),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"打标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打标签"}},[s._v("#")]),s._v(" 打标签")]),s._v(" "),n("p",[s._v("像其他版本控制系统（VCS）一样，Git 可以给 "),n("strong",[s._v("历史中的某一个提交")]),s._v(" 打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）。 在本节中，你将会学习如何列出已有的标签、如何创建新标签、以及不同类型的标签分别是什么。")]),s._v(" "),n("h2",{attrs:{id:"列出标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#列出标签"}},[s._v("#")]),s._v(" 列出标签")]),s._v(" "),n("p",[s._v("在 Git 中列出已有的标签是非常简单直观的。 只需要输入 "),n("code",[s._v("git tag")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git tag\nv0.1\nv1.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这个命令以字母顺序列出标签；但是它们出现的顺序并不重要。")]),s._v(" "),n("p",[s._v("你也可以使用特定的模式查找标签。 例如，Git 自身的源代码仓库包含标签的数量超过 500 个。 如果只对 1.8.5 系列感兴趣，可以运行：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git tag -l 'v1.8.5*'\nv1.8.5\nv1.8.5-rc0\nv1.8.5-rc1\nv1.8.5-rc2\nv1.8.5-rc3\nv1.8.5.1\nv1.8.5.2\nv1.8.5.3\nv1.8.5.4\nv1.8.5.5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("上面这种就是左前缀模糊搜索")]),s._v(" "),n("h2",{attrs:{id:"创建标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[s._v("#")]),s._v(" 创建标签")]),s._v(" "),n("p",[s._v("Git 使用两种主要类型的标签：")]),s._v(" "),n("ul",[n("li",[s._v("轻量标签（lightweight）")]),s._v(" "),n("li",[s._v("附注标签（annotated）")])]),s._v(" "),n("p",[s._v("一个轻量标签很像一个不会改变的分支 – 它只是一个 "),n("strong",[s._v("特定提交的引用")]),s._v("。")]),s._v(" "),n("p",[s._v("然而，附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 GNU Privacy Guard （GPG）签名与验证。 通常建议创建附注标签，这样你可以拥有以上所有信息；但是如果你只是想用一个临时的标签，或者因为某些原因不想要保存那些信息，轻量标签也是可用的。")]),s._v(" "),n("h3",{attrs:{id:"附注标签-tag-a"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附注标签-tag-a"}},[s._v("#")]),s._v(" 附注标签（"),n("code",[s._v("tag -a")]),s._v("）")]),s._v(" "),n("p",[s._v("在 Git 中创建一个附注标签是很简单的。 最简单的方式是当你在运行 tag 命令时指定 -a 选项：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git tag -a v1.4 -m 'my version 1.4'\n$ git tag\nv0.1\nv1.3\nv1.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("-m 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，Git 会运行编辑器要求你输入信息。")]),s._v(" "),n("p",[s._v("通过使用 git show 命令可以看到标签信息与对应的提交信息：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git show v1.4\ntag v1.4\nTagger: Ben Straub <ben@straub.cc>\nDate:   Sat May 3 20:19:12 2014 -0700\n\nmy version 1.4\n\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon <schacon@gee-mail.com>\nDate:   Mon Mar 17 21:52:11 2008 -0700\n\n    changed the version number\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("输出显示了打标签者的信息、打标签的日期时间、附注信息，然后显示具体的提交信息。")]),s._v(" "),n("h3",{attrs:{id:"轻量标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轻量标签"}},[s._v("#")]),s._v(" 轻量标签")]),s._v(" "),n("p",[s._v("另一种给提交打标签的方式是使用轻量标签。 轻量标签本质上是将提交校验和存储到一个文件中 – 没有保存任何其他信息。 创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要提供标签名字：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git tag v1.4-lw\n$ git tag\nv0.1\nv1.3\nv1.4\nv1.4-lw\nv1.5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这时，如果在标签上运行 git show，你不会看到额外的标签信息。 命令只会显示出提交信息：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git show v1.4-lw\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon <schacon@gee-mail.com>\nDate:   Mon Mar 17 21:52:11 2008 -0700\n\n    changed the version number\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"后期打标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后期打标签"}},[s._v("#")]),s._v(" 后期打标签")]),s._v(" "),n("p",[s._v("你也可以对过去的提交打标签。 假设提交历史是这样的：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git log --pretty=oneline\n15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'experiment'\na6b4c97498bd301d84096da251c98a07c7723e65 beginning write support\n0d52aaab4479697da7686c15f77a3d64d9165190 one more thing\n6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'\n0b7434d86859cc7b8c3d5e1dddfed66ff742fcbc added a commit function\n4682c3261057305bdd616e23b64b0857d832627b added a todo file\n166ae0c4d3f420721acbb115cc33848dfcc2121a started write support\n9fceb02d0ae598e95dc970b74767f19372d61af8 updated rakefile\n964f16d36dfccde844893cac5b347e7b3d44abbc commit the todo\n8a5cbc430f1a9c3d00faaeffd07798508422908a updated readme\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("现在，假设在 v1.2 时你忘记给项目打标签，也就是在 “updated rakefile” 提交。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定 "),n("strong",[s._v("提交的校验和（或部分校验和）:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git tag -a v1.2 9fceb02\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以看到你已经在那次提交上打上标签了：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git tag\nv0.1\nv1.2\nv1.3\nv1.4\nv1.4-lw\nv1.5\n\n$ git show v1.2\ntag v1.2\nTagger: Scott Chacon <schacon@gee-mail.com>\nDate:   Mon Feb 9 15:32:16 2009 -0800\n\nversion 1.2\ncommit 9fceb02d0ae598e95dc970b74767f19372d61af8\nAuthor: Magnus Chacon <mchacon@gee-mail.com>\nDate:   Sun Apr 27 20:43:35 2008 -0700\n\n    updated rakefile\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"共享标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共享标签"}},[s._v("#")]),s._v(" 共享标签")]),s._v(" "),n("p",[s._v("默认情况下，"),n("strong",[s._v("git push 命令并不会传送标签到远程仓库服务器上")]),s._v("。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样 – 你可以运行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git push origin [tagname]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git push origin v1.5\nCounting objects: 14, done.\nDelta compression using up to 8 threads.\nCompressing objects: 100% (12/12), done.\nWriting objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.\nTotal 14 (delta 3), reused 0 (delta 0)\nTo git@github.com:schacon/simplegit.git\n * [new tag]         v1.5 -> v1.5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("如果想要 "),n("strong",[s._v("一次性推送很多标签")]),s._v("，也可以使用带有 –tags 选项的 git push 命令。 这将会把所有不在远程仓库服务器上的标签全部传送到那里。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git push origin --tags\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 160 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:schacon/simplegit.git\n * [new tag]         v1.4 -> v1.4\n * [new tag]         v1.4-lw -> v1.4-lw\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("现在，当其他人从仓库中克隆或拉取，他们也能得到你的那些标签。")]),s._v(" "),n("h2",{attrs:{id:"检出标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检出标签"}},[s._v("#")]),s._v(" 检出标签")]),s._v(" "),n("p",[n("strong",[s._v("在 Git 中你并不能真的检出一个标签")]),s._v("，因为它们并不能像分支一样来回移动。 如果你想要工作目录与仓库中特定的标签版本完全一样，可以使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git checkout -b [branchname] [tagname]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在特定的标签上创建一个新分支：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git checkout -b version2 v2.0.0\nSwitched to a new branch 'version2'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("当然，如果在这之后又进行了一次提交，version2 分支会因为改动向前移动了，那么 version2 分支就会和 v2.0.0 标签稍微有些不同，这时就应该当心了。")])])}),[],!1,null,null,null);a.default=t.exports}}]);