(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=g(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(V,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),V=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,R=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,d.default)({opacity:k?1:0,transition:z?"opacity "+b+"ms":"none"},o),C="boolean"==typeof v?"lightgray":v,_={transitionDelay:b+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&_,{},o,{},f),W={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:S};if(h){var j=h,q=p(h);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&_)}),q.base64&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:j,generateSources:L}),q.tracedSVG&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:j,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(j),l.default.createElement(V,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},q,{imageVariants:j}))}}))}if(m){var P=m,M=p(m),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},z&&_)}),M.base64&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:W,imageVariants:P,generateSources:L}),M.tracedSVG&&l.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:W,imageVariants:P,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,E(P),l.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},M,{imageVariants:P}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});z.propTypes={resolutions:x,sizes:C,fixed:u.default.oneOfType([x,u.default.arrayOf(x)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var _=z;t.default=_},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,h=Object.isExtensible,m=l.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",v,b,l,!0,!0);f&&g&&(d((r=l.getConstructor(v,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},G8jJ:function(e,t,a){e.exports={container:"markdown-module--container--31WZk",mainImage:"markdown-module--mainImage--2ZEyk",subtitle:"markdown-module--subtitle--UsRm9",content:"markdown-module--content--2VYRf"}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},ZYLW:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"pageQuery",(function(){return f}));var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=a("vrFN"),o=a("9eSz"),d=a.n(o),l=a("G8jJ"),u=a.n(l);function c(e){var t=e.data.markdownRemark,a=t.frontmatter,r=t.html,o=a.image.childImageSharp.fluid;return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:a.title,description:a.desc}),i.a.createElement("div",{className:u.a.container},i.a.createElement("div",{className:"blog-post"},i.a.createElement("p",{className:"my-h1"},a.title),i.a.createElement(d.a,{className:u.a.mainImage,fluid:o}),i.a.createElement("div",{className:u.a.subtitle},i.a.createElement("p",{className:"my-h2"},a.desc),i.a.createElement("p",{className:"my-body"},a.additional)),i.a.createElement("div",{className:u.a.content,style:{maxWidth:"600px",margin:"auto"},dangerouslySetInnerHTML:{__html:r}}))))}var f="1626481563"}}]);
//# sourceMappingURL=component---src-components-md-template-js-541423d4d5fc0d4cdeac.js.map