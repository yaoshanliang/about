;/*!/common/static/js/analytics.js*/
dataHost="a.lagou.com",function(i,s,o,a,r,c,m){i.LgAnalytics=r,i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date,c=s.createElement(o),m=s.getElementsByTagName(o)[0],c.async=1,c.src=a,m.parentNode.insertBefore(c,m)}(window,document,"script","//a.lagou.com/js/a.js","gatherer"),gatherer("create","UA-41268416-1",{alwaysSendReferrer:!0}),gatherer("send","pageview");var _hmt=_hmt||[];!function(){var a=document.createElement("script");a.src="//hm.baidu.com/hm.js?0466745945679d4d54e2170729b0c864";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s)}(),function(i,s,o,a,r,c,m){i.GoogleAnalyticsObject=r,i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date,c=s.createElement(o),m=s.getElementsByTagName(o)[0],c.async=1,c.src=a,m.parentNode.insertBefore(c,m)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-41268416-1","auto"),ga("require","displayfeatures"),ga("require","linker"),ga("send","pageview");
;/*!/common/static/js/cities.js*/
define("common/static/js/cities",["require","exports","module"],function(require,exports,module){module.exports=[{key:"热门城市",value:[{id:22,name:"全国"},{id:1,name:"北京"},{id:2,name:"上海"},{id:4,name:"深圳"},{id:3,name:"广州"},{id:5,name:"杭州"},{id:6,name:"成都"},{id:7,name:"南京"},{id:9,name:"武汉"},{id:8,name:"西安"},{id:10,name:"厦门"},{id:15,name:"长沙"},{id:12,name:"苏州"},{id:17,name:"天津"},{id:19,name:"台湾"},{id:20,name:"国外"},{id:21,name:"其他"}]},{key:"ABCDEF",value:[{id:24,name:"鞍山"},{id:25,name:"蚌埠"},{id:26,name:"保定"},{id:1,name:"北京"},{id:27,name:"长春"},{id:6,name:"成都"},{id:16,name:"重庆"},{id:15,name:"长沙"},{id:28,name:"常熟"},{id:29,name:"朝阳"},{id:30,name:"常州"},{id:31,name:"东莞"},{id:32,name:"大连"},{id:33,name:"东营"},{id:34,name:"佛山"},{id:14,name:"福州"}]},{key:"GHIJ",value:[{id:35,name:"桂林"},{id:36,name:"贵阳"},{id:3,name:"广州"},{id:37,name:"哈尔滨"},{id:38,name:"合肥"},{id:39,name:"呼和浩特"},{id:40,name:"海口"},{id:5,name:"杭州"},{id:41,name:"惠州"},{id:42,name:"湖州"},{id:43,name:"金华"},{id:44,name:"江门"},{id:11,name:"济南"},{id:46,name:"济宁"},{id:47,name:"嘉兴"},{id:48,name:"江阴"}]},{key:"KLMN",value:[{id:49,name:"昆明"},{id:50,name:"昆山"},{id:51,name:"聊城"},{id:52,name:"廊坊"},{id:53,name:"丽水"},{id:54,name:"洛阳"},{id:55,name:"临沂"},{id:56,name:"龙岩"},{id:57,name:"连云港"},{id:58,name:"兰州"},{id:59,name:"柳州"},{id:60,name:"绵阳"},{id:18,name:"宁波"},{id:61,name:"南昌"},{id:7,name:"南京"},{id:62,name:"南宁"},{id:63,name:"南通"}]},{key:"OPQR",value:[{id:64,name:"青岛"},{id:65,name:"秦皇岛"},{id:66,name:"泉州"},{id:67,name:"日照"}]},{key:"STUV",value:[{id:2,name:"上海"},{id:68,name:"石家庄"},{id:69,name:"汕头"},{id:70,name:"绍兴"},{id:71,name:"沈阳"},{id:72,name:"三亚"},{id:4,name:"深圳"},{id:12,name:"苏州"},{id:17,name:"天津"},{id:73,name:"唐山"},{id:74,name:"太原"},{id:75,name:"台州"}]},{key:"WXYZ",value:[{id:76,name:"潍坊"},{id:9,name:"武汉"},{id:77,name:"芜湖"},{id:78,name:"威海"},{id:79,name:"乌鲁木齐"},{id:80,name:"无锡"},{id:81,name:"温州"},{id:8,name:"西安"},{id:82,name:"香港"},{id:10,name:"厦门"},{id:83,name:"西宁"},{id:84,name:"邢台"},{id:85,name:"徐州"},{id:86,name:"盐城"},{id:87,name:"银川"},{id:88,name:"烟台"},{id:89,name:"扬州"},{id:90,name:"珠海"},{id:91,name:"张家港"},{id:92,name:"肇庆"},{id:93,name:"中山"},{id:13,name:"郑州"}]}]});
;/*!/common/static/js/plat_tj.js*/
!function(){function a(e){for(var a=e.target||e.srcElement,A=[];a&&a.getAttribute&&!a.getAttribute("data-lg-tj-id")&&!a.getAttribute("data-lg-gatj-msg");)a=a.parentNode;if(a&&a.getAttribute)try{if(v=(a.getAttribute("data-lg-tj-id")||"idnull").trim(),w=("idnull"==a.getAttribute("data-lg-tj-no")?"idnull":a.getAttribute("data-lg-tj-no")||"idnull").trim(),j=("idnull"==a.getAttribute("data-lg-tj-cid")?"idnull":a.getAttribute("data-lg-tj-cid")||"idnull").trim(),h=c(),_=(a.getAttribute("data-lg-gatj-method")||"send").trim(),C=(a.getAttribute("data-lg-gatj-msgtype")||"event").trim(),E=(a.getAttribute("data-lg-gatj-msg")||"").trim(),M=parseInt(a.getAttribute("data-lg-gatj-val")||0),E&&"function"==typeof ga&&(A.push(_,C),A=A.concat(E.split(",")),!!M&&A.push(M),ga.apply(null,A)),"idnull"==v)return;var D={};D.v=N,D.t=a.tagName.toLocaleLowerCase(),D.dl=encodeURIComponent(R),D.dr=encodeURIComponent(S),D.dt=y,D.aid=[v,w,b,j,h].join("_"),g(D)}catch(e){}}function g(a){var g=new Image;paramsArr=[];for(var c in a)"string"==typeof c&&paramsArr.push(c+"="+a[c]);g.src=A.server+"?"+paramsArr.join("&")}function c(a){function g(){for(var a="",i=0;A>i;i++){var r=Math.floor(10*Math.random());a+=r.toString()}return a.toString()}window._CASH_RANDOM?"":window._CASH_RANDOM={};for(var c=window._CASH_RANDOM||{},A=a||4,v=g();c[v]&&(v=g(),c[v]););return window._CASH_RANDOM[v]=v,v}var A={server:"http://a.lagou.com/track"},v="",w="",b=0,j="",h="",_="",C="",E="",M=0,N=1,R=window.location.href,S=document.referrer,y=document.title,D=document;D.addEventListener?D.addEventListener("click",a,!1):D.attachEvent&&D.attachEvent("onclick",a),window._PTJ=window._PTJ||{postEncodingID:a}}();
;/*!/common/static/js/share.js*/
function share(a){function c(a){return encodeURIComponent(a).replace(/'/g,"%27").replace(/"/g,"%22")}surl=a.surl?a.surl:window.location.href;var w='https://pro.lagou.com/weixin/wxShare.json?req={"url":"'+c(surl)+'"}',g=function(c){0===c.errCode&&(wx.config({debug:!1,appId:c.appId,timestamp:c.timestamp,nonceStr:c.nonceStr,signature:c.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),wx.ready(function(){var c={title:a.title,desc:a.desc,link:surl,imgUrl:a.imgUrl,success:function(){a.goToUrl&&(window.location.href="http://mp.weixin.qq.com/s?__biz=MzAxNzEyODA2NQ==&mid=204001564&idx=1&sn=940c1a21ef9d50dd645e6129e1a17f06#rd")}};wx.onMenuShareAppMessage(c),wx.onMenuShareTimeline(c),wx.onMenuShareQQ(c),wx.onMenuShareWeibo(c),console.log("weixin support set success.")}),wx.error(function(){}))};$.ajax({url:w,dataType:"jsonp",jsonp:"jsoncallback",success:function(a){g&&g(a)},error:function(){console.log("获取微信分享签名出错")}})}