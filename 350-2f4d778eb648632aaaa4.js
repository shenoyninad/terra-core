(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1111:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),l=n(855),d=n.n(l),i=function(e){var t=e.url;return r.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element",name:"terra-responsive-element",version:"5.18.0",url:t})}},2369:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n(0);var a=n(281),r=n(1111);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={};function m(e){var t=e.components,n=d(e,["components"]);return Object(a.mdx)("wrapper",l({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(r.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-responsive-element-upgrade-guide"},"Terra Responsive Element Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-40-to-50"},"Changes from 4.0 to 5.0"),Object(a.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"The ",Object(a.mdx)("inlineCode",{parentName:"li"},"breakpoints.scss")," file has been removed."),Object(a.mdx)("li",{parentName:"ul"},"The ",Object(a.mdx)("inlineCode",{parentName:"li"},"defaultElement")," prop has been removed."),Object(a.mdx)("li",{parentName:"ul"},"The breakpoint ranges have been changed to align with ",Object(a.mdx)("a",l({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about"}),"terra-breakpoints"),"."),Object(a.mdx)("li",{parentName:"ul"},"The width calculation has been changed to use the total width of parent container when responsiveTo prop is set as 'parent'. This means the padding and border of the parent container is included in the available width.")),Object(a.mdx)("h3",{id:"new-features"},"New Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Added an ",Object(a.mdx)("inlineCode",{parentName:"li"},"onChange")," callback function that is invoked when a breakpoint range changes to enable creating controlled responsive elements."),Object(a.mdx)("li",{parentName:"ul"},"Added an ",Object(a.mdx)("inlineCode",{parentName:"li"},"onResize")," callback function that is invoked when the responsive target triggers a resize event."),Object(a.mdx)("li",{parentName:"ul"},"Added ",Object(a.mdx)("inlineCode",{parentName:"li"},"children")," as a prop to use in conjunction with ",Object(a.mdx)("inlineCode",{parentName:"li"},"onChange")," to create controlled components.")),Object(a.mdx)("h3",{id:"breakpoint-changes"},"Breakpoint Changes"),Object(a.mdx)("p",null,"The breakpoint ranges have all shifted. This change was made to remove the ambiguous breakpoint range in-between 0 and tiny. Previously tiny started at 544px. The range from 0 to 543px had no associated breakpoint. It was considered the default size. Tiny now starts at 0."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Breakpoint"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",l({parentName:"tr"},{align:null}),"Updated"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"tiny"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"544 - 767"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"0 - 543")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"small"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"768 - 991"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"544 - 767")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"medium"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"992 - 1215"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"768 - 991")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"large"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"1216 - 1439"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"992 - 1215")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"huge"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"1440 - ∞"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"1216 - 1439")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"enormous"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"--"),Object(a.mdx)("td",l({parentName:"tr"},{align:null}),"1440 - ∞")))),Object(a.mdx)("p",null,"To upgrade, shift all declared breakpoint props by one breakpoint. During this uplift it is recommended to consider implementing a controlled version of the responsive element using the ",Object(a.mdx)("inlineCode",{parentName:"p"},"children")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"onChange")," props that have been added. Examples can be found on the doc site."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"defaultElement -> tiny"),Object(a.mdx)("li",{parentName:"ul"},"tiny -> small"),Object(a.mdx)("li",{parentName:"ul"},"small -> medium"),Object(a.mdx)("li",{parentName:"ul"},"medium -> large"),Object(a.mdx)("li",{parentName:"ul"},"large -> huge"),Object(a.mdx)("li",{parentName:"ul"},"huge -> enormous")),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"breakpoints.scss")," file has been removed. Any files previously referencing ",Object(a.mdx)("inlineCode",{parentName:"p"},"breakpoints.scss")," should import the new values provided by ",Object(a.mdx)("a",l({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about"}),"terra-breakpoints"),"."),Object(a.mdx)("h3",{id:"examples"},"Examples"),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-diff"}),"- <ResponsiveElement defaultElement={<div />} large={<div />} />\n+ <ResponsiveElement tiny={<div />} huge={<div />} />\n")),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-diff"}),"- <ResponsiveElement tiny={<div />} huge={<div />} />\n+ <ResponsiveElement small={<div />} enormous={<div />} />\n")),Object(a.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"terra-doc-template")))}m.isMDXComponent=!0},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(3)),l=i(n(5)),d=i(n(856));function i(e){return e&&e.__esModule?e:{default:e}}var m=l.default.bind(d.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,d=a.default.createElement("a",{className:m("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:m("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:m("badge"),href:t},a.default.createElement("span",{className:m("badge-name")},"github"),a.default.createElement("span",{className:m("badge-version")},"source")):void 0;return a.default.createElement("div",{className:m("badge-container")},d,i)};c.propTypes=o;var s=c;t.default=s},856:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=350-2f4d778eb648632aaaa4.js.map