(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1063:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),n=a.n(r),o=a(855),d=a.n(o),s=function(e){var t=e.url;return n.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-base",name:"terra-base",version:"5.33.0",url:t})}},2335:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(0);var r=a(281),n=a(1063);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s={};function c(e){var t=e.components,a=d(e,["components"]);return Object(r.mdx)("wrapper",o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(n.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-base-upgrade-guide"},"Terra Base Upgrade Guide"),Object(r.mdx)("h2",{id:"changes-from-40-to-50"},"Changes from 4.0 to 5.0"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"To upgrade to terra-base v5, you now need to define a locale via the locale prop when using the ",Object(r.mdx)("inlineCode",{parentName:"li"},"<Base>")," component."),Object(r.mdx)("li",{parentName:"ul"},"Any react-intl based exports that you were importing from terra-base should now be imported directly from react-intl.")),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-diff"}),"- import { injectIntl, intlShape, FormattedMessage, IntlProvider } from terra-base;\n+ import { injectIntl, intlShape, FormattedMessage, IntlProvider } from react-intl;\n")),Object(r.mdx)("p",null,"Terra-base v5.x depends on terra-i18n v4.x. It is recommended to ",Object(r.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-core/blob/master/packages/terra-i18n/docs/UPGRADEGUIDE.md"}),"review the terra-i18n v3 to v4 upgrade guide")," when updating terra-base to v5."),Object(r.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),Object(r.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(r.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"terra-doc-template")))}c.isMDXComponent=!0},855:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),n=s(a(3)),o=s(a(5)),d=s(a(856));function s(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(d.default),i={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},l=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,d=r.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o))),s=t?r.default.createElement("a",{className:c("badge"),href:t},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},d,s)};l.propTypes=i;var u=l;t.default=u},856:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=285-c91e1d53fa4ae891fc8d.js.map