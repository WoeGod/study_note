# `JavaScript` 的 `height`总结
```js
网页可见区域宽[仅针对body]： document.body.clientWidth
网页可见区域高[仅针对body]： document.body.clientHeight
网页可见区域宽[仅针对body]： document.body.offsetWidth (包括滚动条和边框，若滚动条和边框为0，则和clientWidth相等)
网页可见区域高[仅针对body]： document.body.offsetHeight (包括滚动条和边框，若滚动条和边框为0，则和clientHeight相等)
可视窗口宽度(包括滚动轴宽度)：window.innerWidth; //IE9+、Chrome、Firefox、Opera 以及 Safari
可视窗口高度，不包括浏览器顶部工具栏： window.innerHeight;//IE9+、Chrome、Firefox、Opera 以及 Safari
网页正文全文宽(不包括滚动轴的宽度)： document.body.scrollWidth
网页正文全文高：document.body.scrollHeight
//假如网页中没有滚动轴，document.body.scrollWidth和window.innerWidth相等，document.body.scrollHeight和window.innerHeight相等。
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft
网页正文部分上： window.screenTop
网页正文部分左： window.screenLeft
屏幕分辨率的高（整个屏幕的高度）： window.screen.height
屏幕分辨率的宽（整个屏幕的宽度）： window.screen.width
屏幕可用工作区高度： window.screen.availHeight
屏幕可用工作区宽度： window.screen.availWidth
整个浏览器可用工作区高度： window.outerHeight
整个浏览器可用工作区宽度： window.outerWidth
```
>文章来源 [jquery的height()和javascript的height总结，js获取屏幕高度](https://www.haorooms.com/post/js_jquery_height)