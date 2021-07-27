!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/view-cover"]=t():e["utils/view-cover"]=t()}(self,(function(){return function(){"use strict";var e={544:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{staticClass:"view-cover",attrs:{disabled:!e.imageUrl,name:"查看封面",icon:"mdi-image-outline"},on:{click:function(t){return e.viewCover()}}})};n._withStripped=!0;var i=coreApis.ajax,r=coreApis.observer,s=o(569),c=coreApis.utils.log,a=coreApis.ui,l=coreApis.componentApis.video.videoInfo;var u=function(e,t,o,n,i,r,s,c){var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):i&&(a=c?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),a)if(l.functional){l._injectStyles=a;var u=l.render;l.render=function(e,t){return a.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:a.DefaultWidget},data:()=>({imageUrl:""}),async mounted(){if(document.URL.includes("live.bilibili.com")){const e=await(0,s.select)(".header-info-ctnr .room-cover");if(!e)return;const t=e.getAttribute("href").match(/space\.bilibili\.com\/([\d]+)/);if(t&&t[1]){const e=`https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${t[1]}`,o=await(0,i.getJson)(e);this.imageUrl=o.data.cover.replace("http:","https:")}}else(0,r.videoChange)((async()=>{const{aid:e}=unsafeWindow,t=new l.VideoInfo(e);try{await t.fetchInfo()}catch(e){throw(0,c.logError)(e),e}this.imageUrl=t.coverUrl.replace("http:","https:")}))},methods:{async viewCover(){(0,a.showImage)(this.imageUrl)}}}),n,[],!1,null,null,null);u.options.__file="registry/lib/components/utils/view-cover/ViewCover.vue";var d=u.exports},569:function(e){e.exports=coreApis.spinQuery}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){o.d(n,{component:function(){return i}});var e=o(569),t=coreApis.utils.urls;const i={name:"viewCover",displayName:"查看封面",tags:[componentsTags.utils,componentsTags.video,componentsTags.live],entry:none,reload:none,unload:none,widget:{component:()=>Promise.resolve().then(o.bind(o,544)).then((e=>e.default)),condition:e.hasVideo},description:{"zh-CN":"在视频和直播页面中, 可从功能面板中查看封面."},urlInclude:[...t.videoAndBangumiUrls,...t.liveUrls]}}(),n=n.component}()}));