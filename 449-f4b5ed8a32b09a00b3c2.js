(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{2765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(899));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement(o.default,{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu",onClick:function(){},isOpen:!0,className:"accordionContent"})};t.default=a},899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),o=s(n(3)),i=s(n(5)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=s(n(185)),u=s(n(900));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=i.default.bind(u.default),g={title:o.default.string.isRequired,onClick:o.default.func,isOpen:o.default.bool,level:o.default.oneOf([1,2,3,4,5,6]),isTransparent:o.default.bool},P={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},S=function(e){return e.nativeEvent.keyCode===a.KEY_RETURN||e.nativeEvent.keyCode===a.KEY_SPACE},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,o,i=_(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(w(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(w(t)),t}return t=a,(n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){S(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){S(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.onClick,o=e.isOpen,i=e.isTransparent,a=e.level,u=b(e,["title","onClick","isOpen","isTransparent","level"]),l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);n&&(l.tabIndex="0",l.onKeyDown=this.wrapOnKeyDown(l.onKeyDown),l.onKeyUp=this.wrapOnKeyUp(l.onKeyUp),l.role="button");var s=j(["accordion-icon",{"is-open":n&&o}]),f=r.default.createElement("div",{className:j("accordion-icon-wrapper")},r.default.createElement("span",{className:s})),v=j(["section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":i},u.className]),O="h".concat(a);return r.default.createElement("div",p({},l,{onClick:n,className:v}),r.default.createElement(c.default,{fitStart:n&&f,fill:r.default.createElement(O,{className:j("title")},t)}))}}])&&v(t.prototype,n),o&&v(t,o),a}(r.default.Component);k.propTypes=g,k.defaultProps=P;var E=k;t.default=E},900:function(e,t,n){e.exports={"section-header":"SectionHeader-module__section-header___PT5gM","is-interactable":"SectionHeader-module__is-interactable___3N5_L","is-active":"SectionHeader-module__is-active___1XrZF","is-transparent":"SectionHeader-module__is-transparent___27OCV",title:"SectionHeader-module__title___3SaN6","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___3gLG0","accordion-icon":"SectionHeader-module__accordion-icon___1-oTK","is-open":"SectionHeader-module__is-open___3Bcmi"}}}]);
//# sourceMappingURL=449-f4b5ed8a32b09a00b3c2.js.map