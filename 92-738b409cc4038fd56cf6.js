(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1052:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(20));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M23.5 1.5C22.6.7 21.9 0 21.9 0H0v21.9l1.5 1.5 23.8 23.8c.8.8 2.2.8 3.1 0l18.9-18.9c.8-.8.8-2.2 0-3.1L23.5 1.5zm-9.8 16.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}))};c.displayName="IconTag",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var u=c;t.default=u},1120:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(855),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-tag",name:"terra-tag",version:"2.33.0",url:t})}},2268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1052)),o=l(n(927));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{text:"Default OnClick Tag",onClick:function(){return window.alert("Tag has been clicked!")}}),r.default.createElement(o.default,{icon:r.default.createElement(a.default,null),onClick:function(){return window.alert("Tag has been clicked!")},text:"Icon & Text OnClick Tag"}))};t.default=c},2269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1052)),o=l(n(927));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{href:"http://google.com",text:"HREF Tag"}),r.default.createElement(o.default,{icon:r.default.createElement(a.default,null),href:"http://google.com",text:"Icon & Text HREF Tag"}))};t.default=c},2270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1052)),o=l(n(927));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{text:"No OnClick/HREF Tag"}),r.default.createElement(o.default,{icon:r.default.createElement(a.default,null),text:"Icon & Text - No OnClick/HREF Tag"}))};t.default=c},2896:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var r=n(0),a=n.n(r),o=n(281),l=n(1120),c=n(2268),u=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function s(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagDefault = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag text=\"Default OnClick Tag\" onClick={() => window.alert('Tag has been clicked!')} />\n    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text=\"Icon &amp; Text OnClick Tag\" />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagDefault;\n\n")))}s.isMDXComponent=!0;var m=n(854),f=n.n(m),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Tag Default",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},b=n(2269),g=n.n(b);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function O(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport IconTag from \'terra-icon/lib/icon/IconTag\';\nimport Tag from \'terra-tag\';\n\nconst HrefTag = () => (\n  <div>\n    <Tag href="http://google.com" text="HREF Tag" />\n    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />\n  </div>\n);\n\nexport default HrefTag;\n\n')))}O.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Href Tag",description:n,example:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(O,null),isExpanded:r})},T=n(2270),j=n.n(T);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function N(e){var t=e.components,n=w(e,["components"]);return Object(o.mdx)("wrapper",E({},P,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",E({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagFallbacks = () => (\n  <div>\n    <Tag text=\"No OnClick/HREF Tag\" />\n    <Tag icon={<IconTag />} text=\"Icon &amp; Text - No OnClick/HREF Tag\" />\n  </div>\n);\n\nexport default TagFallbacks;\n\n")))}N.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Tag Fallbacks",description:n,example:a.a.createElement(j.a,null),exampleSrc:a.a.createElement(N,null),isExpanded:r})},C=n(857),D=n.n(C);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X=function(){return Object(o.mdx)(D.a,{rows:[{name:"href",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the href. When set will render the component as an anchor tag."))}return t.isMDXComponent=!0,t({})}},{name:"icon",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An optional icon."))}return t.isMDXComponent=!0,t({})}},{name:"onClick",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when clicked."))}return t.isMDXComponent=!0,t({})}},{name:"onBlur",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when tag loses focus."))}return t.isMDXComponent=!0,t({})}},{name:"onFocus",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when tag gains focus."))}return t.isMDXComponent=!0,t({})}},{name:"onKeyUp",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when key is released."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=S(t,["components"]);return Object(o.mdx)("wrapper",M({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the tag text."))}return t.isMDXComponent=!0,t({})}}]})};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={};function q(e){var t=e.components,n=R(e,["components"]);return Object(o.mdx)("wrapper",B({},I,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-tag"},"Terra Tag"),Object(o.mdx)("p",null,"The tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text.\nIt can optionally display an icon along with the text."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",B({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-tag"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",B({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",B({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",B({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-jsx"}),"import Tag from 'terra-tag';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{title:"Default Tag with onClick",mdxType:"TagDefault"}),Object(o.mdx)(x,{title:"Tag with href",mdxType:"TagHref"}),Object(o.mdx)(k,{title:"Tag with no onClick or href",description:"These styles are provided for when this compoment is missing recomended elements for best practice use.",mdxType:"TagFallbacks"}),Object(o.mdx)("h2",{id:"tag-props"},"Tag Props"),Object(o.mdx)(X,{mdxType:"TagPropsTable"}))}q.isMDXComponent=!0},854:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(858));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=o.default.bind(l.default),g={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=s(n);function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},r.handleBgToggle=r.handleBgToggle.bind(f(r)),r.handleCodeToggle=r.handleCodeToggle.bind(f(r)),r}return p(n,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:b("header")},r.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:b("description")},e):null}}]),p(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,a=e.exampleSrc,o=e.title,l=e.description,c=this.state,u=c.isExpanded,i=c.isBackgroundTransparent;return r.default.createElement("div",{className:b("template")},n.renderHeader(o),r.default.createElement("div",{className:b("content",{"dynamic-content":i})},n.renderDescription(l),t),a&&r.default.createElement("div",{className:b("footer")},r.default.createElement("div",{className:b("button-container")},r.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:b("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:b("chevron-right")}))),u&&r.default.createElement("div",{className:b("code")},a)))}}]),n}(r.default.Component);y.propTypes=g,y.defaultProps={isExpanded:!1};var h=y;t.default=h},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(856));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),i={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),c=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,c)};p.propTypes=i;var d=p;t.default=d},856:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(859));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),i={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},p=function(e){var t=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};p.propTypes=i;var d=p;t.default=d},858:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},859:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(3)),o=i(n(5)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=i(n(935));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=o.default.bind(c.default),v={href:a.default.string,icon:a.default.element,onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyUp:a.default.func,text:a.default.string.isRequired},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,a,o=_(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(g(t)),t.handleOnBlur=t.handleOnBlur.bind(g(t)),t}return t=c,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,a=e.href,o=e.onClick,l=(e.onBlur,e.onFocus),c=(e.onKeyUp,s(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),u=h(["tag",{"is-focused":this.state.focused},{"is-interactive":a||o},c.className]),i=h("icon"),p=t?r.default.createElement("span",{className:i},t):null,m=a||o?a?"a":"button":"span";return r.default.createElement(m,d({},c,{className:u,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:o,onFocus:l,href:a}),p,n)}}])&&m(t.prototype,n),a&&m(t,a),c}(r.default.Component);O.propTypes=v;var x=O;t.default=x},935:function(e,t,n){e.exports={tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=92-738b409cc4038fd56cf6.js.map