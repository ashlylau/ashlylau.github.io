(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1anG":function(e,t,a){e.exports=a.p+"static/googlelogo-9b224c9884c2bb081d4ac92b23675c2e.png"},"3V3o":function(e,t,a){e.exports={mediaContainer:"contact-module--mediaContainer--3eIOS",container:"contact-module--container--HgCNH",title:"contact-module--title--2ALNL",image:"contact-module--image--3MoQ_"}},"3Z9Z":function(e,t,a){"use strict";a("8+KV");var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),A=a("vUet"),l=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.noGutters,u=e.as,p=void 0===u?"div":u,m=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(A.a)(a,"row"),d=f+"-cols",h=[];return l.forEach((function(e){var t,a=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+d+n+"-"+t)})),c.a.createElement(p,Object(n.a)({ref:t},m,{className:i.a.apply(void 0,[r,f,o&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"5lXZ":function(e,t,a){e.exports=a.p+"static/stitch-call-d1d9763de53d492a02837c8650ba51ab.png"},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),A=a("vUet"),l=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,o=e.as,l=void 0===o?"div":o,u=e.className,p=Object(s.a)(e,["bsPrefix","fluid","as","className"]),m=Object(A.a)(a,"container"),f="string"==typeof r?"-"+r:"-fluid";return c.a.createElement(l,Object(n.a)({ref:t},p,{className:i()(u,r?""+m+f:m)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},ELNm:function(e,t,a){var n;a("Tze0"),a("bWfx"),a("91GP"),a("Vd3H"),a("HAE/"),n=function(){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}return a.m=e,a.c=t,a.p="",a(0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(1),r=a(3),i=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s.initializer.load(this,a,t),this.begin()}return n(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var a=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=r.htmlParser.typeHtmlChars(e,t,a);var n=0,i=e.substr(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,n=parseInt(i),a.temporaryPause=!0,a.options.onTypingPaused(a.arrayPos,a),e=e.substring(0,t)+e.substring(t+o),a.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substr(t+s).charAt(0)&&(s++,!(t+s>e.length)););var c=e.substring(0,t),A=e.substring(c.length+1,t+s),l=e.substring(t+s+1);e=c+A+l,s--}a.timeout=setTimeout((function(){a.toggleBlinking(!1),t>=e.length?a.doneTyping(e,t):a.keepTyping(e,t,s),a.temporaryPause&&(a.temporaryPause=!1,a.options.onTypingResumed(a.arrayPos,a))}),n)}),n):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,a){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=a;var n=e.substr(0,t);this.replaceText(n),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var a=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){a.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var a=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=r.htmlParser.backSpaceHtmlChars(e,t,a);var n=e.substr(0,t);if(a.replaceText(n),a.smartBackspace){var s=a.strings[a.arrayPos+1];s&&n===s.substr(0,t)?a.stopNum=t:a.stopNum=0}t>a.stopNum?(t--,a.backspace(e,t)):t<=a.stopNum&&(a.arrayPos++,a.arrayPos===a.strings.length?(a.arrayPos=0,a.options.onLastStringBackspaced(),a.shuffleStringsIfNeeded(),a.begin()):a.typewrite(a.strings[a.sequence[a.arrayPos]],t))}),n)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,a){this.pause.typewrite=a,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=i,e.exports=t.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(2),o=(n=i)&&n.__esModule?n:{default:n},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"load",value:function(e,t,a){if(e.el="string"==typeof a?document.querySelector(a):a,e.options=s({},o.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var n=Array.prototype.slice.apply(e.stringsElement.children),r=n.length;if(r)for(var i=0;i<r;i+=1){var c=n[i];e.strings.push(c.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var a="";e.showCursor&&(a+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(a+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=a,document.body.appendChild(t))}}}]),e}();t.default=c;var A=new c;t.initializer=A},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=a,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"typeHtmlChars",value:function(e,t,a){if("html"!==a.contentType)return t;var n=e.substr(t).charAt(0);if("<"===n||"&"===n){var s="";for(s="<"===n?">":";";e.substr(t+1).charAt(0)!==s&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,a){if("html"!==a.contentType)return t;var n=e.substr(t).charAt(0);if(">"===n||";"===n){var s="";for(s=">"===n?"<":"&";e.substr(t-1).charAt(0)!==s&&!(--t<0););t--}return t}}]),e}();t.default=n;var s=new n;t.htmlParser=s}])},e.exports=n()},GpZ2:function(e,t,a){e.exports=a.p+"static/movies-1f00e207d92384f73289b3fd3f9abff2.jpg"},JCYj:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n);t.a=function(e){var t=e.props;return s.a.createElement("h1",{className:"my-h1",style:{color:""+t.color,marginTop:"3rem",marginBottom:"1rem"}},t.title)}},JI6e:function(e,t,a){"use strict";a("8+KV");var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),A=a("vUet"),l=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,u=void 0===o?"div":o,p=Object(s.a)(e,["bsPrefix","className","as"]),m=Object(A.a)(a,"col"),f=[],d=[];return l.forEach((function(e){var t,a,n,s=p[e];if(delete p[e],null!=s&&"object"==typeof s){var r=s.span;t=void 0===r||r,a=s.offset,n=s.order}else t=s;var i="xs"!==e?"-"+e:"";null!=t&&f.push(!0===t?""+m+i:""+m+i+"-"+t),null!=n&&d.push("order"+i+"-"+n),null!=a&&d.push("offset"+i+"-"+a)})),f.length||f.push(m),c.a.createElement(u,Object(n.a)({},p,{ref:t,className:i.a.apply(void 0,[r].concat(f,d))}))}));u.displayName="Col",t.a=u},JIoc:function(e,t){e.exports="data:image/jpeg;base64,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"},P6bw:function(e,t,a){e.exports=a.p+"static/AshlyResume-00b2f1183322feb26450f177dabec40e.pdf"},Pe40:function(e,t,a){e.exports=a.p+"static/iclcrest-a829ec5ed8ae36d76f4cef34a8aa1392.png"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=a("Bl7J"),i=a("vrFN"),o=a("ELNm"),c=a.n(o);var A=["programming","listening to the Hamilton soundtrack","re-watching Killing Eve","doodling","petting a dog"],l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){var e={strings:A,typeSpeed:50,backSpeed:20,loop:!0};this.typed=new c.a(this.el,e)},r.componentWillUnmount=function(){this.typed.destroy()},r.render=function(){var e=this;return s.a.createElement("div",null,s.a.createElement("p",null,"I'm likely ",s.a.createElement("span",{ref:function(t){e.el=t}}),"."))},n}(s.a.Component),u=a("7vrA"),p=a("3Z9Z"),m=a("JI6e"),f=a("Wbzz"),d=a("neDq"),h=a.n(d),y=a("JCYj"),g=a("1anG"),v=a.n(g),E=a("JIoc"),b=a.n(E),C=a("aqvE"),k=a.n(C),B=[{image:v.a,title:"STEP Intern",path:"google-step",company:"Google",date:"JUL 2019 - SEP 2019"},{image:b.a,title:"Teaching Assistant",path:"imperial-ta",company:"Imperial College",date:"OCT 2019 - MAR 2020"},{image:k.a,title:"Software R&D Intern",path:"hp",company:"HP Inc.",date:"JUL 2018 - SEP 2018"}];function N(){return s.a.createElement("div",null,s.a.createElement(y.a,{props:{title:"EXPERIENCE",color:"#92BAAA"}}),s.a.createElement(u.a,null,s.a.createElement(p.a,null,B.map((function(e){return s.a.createElement(w,{props:e})})))))}var w=function(e){var t=e.props;return s.a.createElement(m.a,{sm:4},s.a.createElement(f.Link,{className:"my-link",to:t.path},s.a.createElement("div",{className:h.a.imageContainer},s.a.createElement("img",{className:h.a.logo,src:t.image,alt:t.title})),s.a.createElement("div",{className:h.a.container},s.a.createElement("p",{className:"my-h2"},t.title),s.a.createElement("p",{className:"my-body"},t.company),s.a.createElement("p",{className:"my-tag"},t.date))))},P=a("uOWf"),T=a("s+Ps"),x=a.n(T),j=a("S75P"),Q=a.n(j),q=a("5lXZ"),U=a.n(q),I=[{image:x.a,title:"Cinect",path:"/projects/cinect",desc:"Social film discovery"},{image:Q.a,title:"CHARJE",path:"/projects/charje",desc:"An agent-based prediction marketplace implemented on a blockchain"},{image:U.a,title:"Stitch Call",path:"/projects/stitch-call",desc:"A non-conventional video call platform"}];function O(){return s.a.createElement("div",null,s.a.createElement(y.a,{props:{title:"PROJECTS",color:"#30838D"}}),s.a.createElement(u.a,null,s.a.createElement(p.a,null,I.map((function(e){return s.a.createElement(P.a,{props:e})})))))}var S=a("kpTP"),L=a("c7ty"),D=a.n(L),V=a("Pe40"),M=a.n(V),Z=a("eoh1"),F=a.n(Z),R=[{image:M.a,title:"Imperial College London",path:"imperial",course:"Computing (Artificial Intelligence)",date:"2017 - 2021"},{image:F.a,title:"Raffles Institution",path:"raffles",course:"Cambridge-Singapore GCE-A Levels",date:"2015 - 2016"}];function z(){return s.a.createElement("div",null,s.a.createElement(y.a,{props:{title:"EDUCATION",color:"#215A75"}}),s.a.createElement(u.a,null,s.a.createElement(p.a,null,R.map((function(e){return s.a.createElement(J,{props:e})})))))}var J=function(e){var t=e.props;return s.a.createElement(m.a,{md:6},s.a.createElement(f.Link,{className:"my-link",to:t.path},s.a.createElement(S.a,{className:D.a.mediaContainer},s.a.createElement("div",{className:D.a.imageContainer},s.a.createElement("img",{className:D.a.logo,src:t.image,alt:t.title})),s.a.createElement(S.a.Body,{className:D.a.container},s.a.createElement("p",{className:"my-h2"},t.title),s.a.createElement("p",{className:"my-body"},t.course),s.a.createElement("p",{className:"my-tag"},t.date)))))},H=a("yAXv"),W=a("o4xh"),G=a.n(W),Y=a("GpZ2"),K=a.n(Y),X=a("RY4Q"),_=a.n(X),$=[{image:G.a,title:"Gymnastics",path:"about/gymnastics",desc:"Another life"},{image:K.a,title:"Movies",path:"about/movies",desc:"A form of escapism perhaps?"},{image:_.a,title:"Doodles",path:"about/doodles",desc:"I get bored easily"}];function ee(){return s.a.createElement("div",null,s.a.createElement(y.a,{props:{title:"ABOUT",color:"#3598C1"}}),s.a.createElement(u.a,null,s.a.createElement(p.a,null,$.map((function(e){return s.a.createElement(H.a,{props:e})})))))}var te=a("geEj");t.default=function(){return s.a.createElement(r.a,null,s.a.createElement(i.a,{title:"Home"}),s.a.createElement("div",{className:"hero"},s.a.createElement("p",null,"Hey, I'm Ashly."),s.a.createElement("p",null,"Currently a Software Engineering Intern at Google."),s.a.createElement(l,null)),s.a.createElement(N,null),s.a.createElement(O,null),s.a.createElement(z,null),s.a.createElement(ee,null),s.a.createElement(te.a,null))}},RY4Q:function(e,t,a){e.exports=a.p+"static/doodles-0715e972a3efed46ccb73258eaab62a6.jpg"},S75P:function(e,t,a){e.exports=a.p+"static/charje-142ffc446d510f960c2950d678eb2409.png"},SwC9:function(e,t,a){e.exports=a.p+"static/me-baad1f1af588f3fe88080fb0e504aed3.jpg"},"UA/k":function(e,t,a){e.exports={aboutContainer:"about-module--aboutContainer--3anvE",container:"about-module--container--17zLm"}},aqvE:function(e,t,a){e.exports=a.p+"static/hplogo-742fa59d6924dce46f1824d7e8573ed3.png"},bkUW:function(e,t,a){e.exports={imageContainer:"image-thumbnail-module--imageContainer--KVnhq",image:"image-thumbnail-module--image--2XmqV"}},c7ty:function(e,t,a){e.exports={container:"education-module--container--1AfWy",mediaContainer:"education-module--mediaContainer--3h5ZH",imageContainer:"education-module--imageContainer--3WvLW",logo:"education-module--logo--1fXjG"}},eoh1:function(e,t,a){e.exports=a.p+"static/ri-551e2b7f5aa0a81c7c8c94d7311090c9.png"},geEj:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),s=a.n(n),r=a("7vrA"),i=a("kpTP"),o=a("3V3o"),c=a.n(o),A=a("JCYj"),l=a("P6bw"),u=a.n(l),p=a("SwC9"),m=a.n(p);function f(){return s.a.createElement("div",null,s.a.createElement(A.a,{props:{title:"CONTACT",color:"#D9A400"}}),s.a.createElement(r.a,null,s.a.createElement(i.a,{className:c.a.mediaContainer},s.a.createElement("img",{className:c.a.image,src:m.a,alt:"hey im ashly"}),s.a.createElement(i.a.Body,{className:c.a.container},s.a.createElement("h4",{className:c.a.title,style:{color:"#FFDA66"}},"Let's work together!"),s.a.createElement("p",{className:"my-h2"},s.a.createElement("a",{className:"my-link",href:"mailto: ashlylau@gmail.com"},"EMAIL")),s.a.createElement("p",{className:"my-h2"},s.a.createElement("a",{className:"my-link",href:"https://www.linkedin.com/in/ashly-lau/"},"LINKEDIN")),s.a.createElement("p",{className:"my-h2"},s.a.createElement("a",{className:"my-link",href:"https://github.com/ashlylau"},"GITHUB")),s.a.createElement("p",{className:"my-h2"},s.a.createElement("a",{className:"my-link",href:u.a,download:"AshlyLauResume.pdf"},"RESUME"))))))}},h2vv:function(e,t,a){e.exports={projectContainer:"projects-module--projectContainer--1sk7w",container:"projects-module--container--8xGec"}},kpTP:function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),A=a("YdCC"),l=a("vUet"),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,A=void 0===o?"div":o,u=Object(s.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(a,"media");return c.a.createElement(A,Object(n.a)({},u,{ref:t,className:i()(r,p)}))}));u.displayName="Media",u.Body=Object(A.a)("media-body"),t.a=u},neDq:function(e,t,a){e.exports={container:"experience-module--container--39tRB",imageContainer:"experience-module--imageContainer--S9jje",logo:"experience-module--logo--1vc06"}},o4xh:function(e,t,a){e.exports=a.p+"static/ashly-getty-336d5474273354e63652461c744470af.jpg"},"s+Ps":function(e,t,a){e.exports=a.p+"static/cinect-f9d998189c3269b6d67ff56584d4f787.png"},tBDR:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("bkUW"),i=a.n(r);t.a=function(e){var t=e.props;return s.a.createElement("div",{className:i.a.imageContainer},s.a.createElement("img",{className:i.a.image,src:t.image,alt:t.title}))}},uOWf:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("JI6e"),i=a("Wbzz"),o=a("tBDR"),c=a("h2vv"),A=a.n(c);t.a=function(e){var t=e.props;return s.a.createElement(r.a,{md:4},s.a.createElement(i.Link,{className:"my-link",to:t.path},s.a.createElement(o.a,{props:t}),s.a.createElement("div",{className:A.a.container},s.a.createElement("p",{className:"my-h2"},t.title),s.a.createElement("p",{className:"my-body"},t.desc))))}},yAXv:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("JI6e"),i=a("Wbzz"),o=a("tBDR"),c=a("UA/k"),A=a.n(c);t.a=function(e){var t=e.props;return s.a.createElement(r.a,{sm:4},s.a.createElement(i.Link,{className:"my-link",to:t.path},s.a.createElement(o.a,{props:t}),s.a.createElement("div",{className:A.a.container},s.a.createElement("p",{className:"my-h2"},t.title),s.a.createElement("p",{className:"my-body"},t.desc))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-61b58cb4a11846dec3e3.js.map