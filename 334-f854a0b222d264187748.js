(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1105:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=a(855),s=a.n(o),l=function(e){var t=e.url;return r.a.createElement(s.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-i18n",name:"terra-i18n",version:"4.28.0",url:t})}},2359:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));a(0);var n=a(281),r=a(1105);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={};function i(e){var t=e.components,a=s(e,["components"]);return Object(n.mdx)("wrapper",o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)(r.a,{mdxType:"Badge"}),Object(n.mdx)("h1",{id:"terra-i18n-upgrade-guide"},"Terra i18n Upgrade Guide"),Object(n.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),Object(n.mdx)("p",null,"The terra-i18n ",Object(n.mdx)("inlineCode",{parentName:"p"},"aggregate-translations")," pre-build tool has been removed from this package."),Object(n.mdx)("p",null,"Along with this, the post-install script which wrote default intl and translation loaders has been removed."),Object(n.mdx)("p",null,"To upgrade, use the ",Object(n.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-aggregate-translations#--terra-aggregate-translations"}),Object(n.mdx)("inlineCode",{parentName:"a"},"aggregate-translations")," pre-build tool")," to generate ",Object(n.mdx)("inlineCode",{parentName:"p"},"intlLoaders")," and ",Object(n.mdx)("inlineCode",{parentName:"p"},"translationLoaders")," files needed for internationalizing terra components instead of relying on the ",Object(n.mdx)("inlineCode",{parentName:"p"},"intlLoaders")," and ",Object(n.mdx)("inlineCode",{parentName:"p"},"translationLoaders")," files being generated by the terra-i18n postinstall step."),Object(n.mdx)("p",null,"If you require translations in your Jest tests, you can create a ",Object(n.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js")," file for your app to call the aggregate-translations pre-build tool."),Object(n.mdx)("p",null,"Add the following code to ",Object(n.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js"),":"),Object(n.mdx)("pre",null,Object(n.mdx)("code",o({parentName:"pre"},{className:"language-js"}),"const aggregateTranslations = require('terra-aggregate-translations');\n\nmodule.exports = () => {\n  aggregateTranslations();\n};\n")),Object(n.mdx)("p",null,"In your app's jest config file, add the following:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",o({parentName:"pre"},{className:"language-js"}),"globalSetup: './jestglobalsetup.js',\n// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules\nmoduleDirectories: [\n  'aggregated-translations',\n  'node_modules',\n],\n")),Object(n.mdx)("p",null,"Alternatively, you can use ",Object(n.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-enzyme-intl"}),"terra-enzyme-intl"),", which will make aggregating translations for Jest tests unnecessary. The ",Object(n.mdx)("a",o({parentName:"p"},{href:"https://github.com/cerner/terra-enzyme-intl"}),"terra-enzyme-intl")," package will use the translation keys for the translation strings instead of the actual translations. If you want to test the actual translation string values, we recommend testing translations with a tool like webdriver.io."),Object(n.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),Object(n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(n.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"terra-doc-template")))}i.isMDXComponent=!0},855:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(3)),o=l(a(5)),s=l(a(856));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(s.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,s=n.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},n.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=t?n.default.createElement("a",{className:i("badge"),href:t},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},s,l)};c.propTypes=d;var u=c;t.default=u},856:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=334-f854a0b222d264187748.js.map