(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{2449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=n(8),c=u(n(299));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d={en:{"App.locale":"en"},"en-US":{"App.locale":"en-US"}},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,e);var t,n,u,a=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).state={locale:"en"},t.handleSwitchLocale=t.handleSwitchLocale.bind(p(t)),t}return t=s,(n=[{key:"handleSwitchLocale",value:function(){"en"!==this.state.locale?this.setState({locale:"en"}):this.setState({locale:"en-US"})}},{key:"render",value:function(){return o.default.createElement(c.default,{locale:this.state.locale,customMessages:d[this.state.locale]},o.default.createElement("div",{id:"message"},o.default.createElement(r.FormattedMessage,{id:"App.locale"})),o.default.createElement("button",{type:"button",id:"switch",onClick:this.handleSwitchLocale},"Switch"))}}])&&l(t.prototype,n),u&&l(t,u),s}(o.default.Component);t.default=h}}]);
//# sourceMappingURL=674-d1bfb0197bc56b15b20f.js.map