(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(0)),i=s(n(3)),r=s(n(1216));function s(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g={EXTRA_FINE:1,FINE:2,MEDIUM:4,HEAVY:6},b=0,S={lineWidth:i.default.oneOf([g.EXTRA_FINE,g.FINE,g.MEDIUM,g.HEAVY]),lineSegments:i.default.array,onChange:i.default.func},w={lineWidth:g.FINE,lineSegments:[],onChange:void 0},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,i,s=p(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=s.call(this,e)).state={lineSegments:e.lineSegments},t.mouseInBounds=t.mouseInBounds.bind(v(t)),t.mouseDown=t.mouseDown.bind(v(t)),t.mouseUp=t.mouseUp.bind(v(t)),t.mouseXY=t.mouseXY.bind(v(t)),t.mouseLeave=t.mouseLeave.bind(v(t)),t.addLine=t.addLine.bind(v(t)),t.draw=t.draw.bind(v(t)),t.drawSignature=t.drawSignature.bind(v(t)),t.clearSignature=t.clearSignature.bind(v(t)),t.updateDimensions=t.updateDimensions.bind(v(t)),t}return t=a,(n=[{key:"componentDidMount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.addEventListener("touchstart",this.mouseDown,!1),this.canvas.addEventListener("touchmove",this.mouseXY,!0),this.canvas.addEventListener("touchend",this.mouseUp,!1),document.body.addEventListener("touchleave",this.mouseLeave,!1),document.body.addEventListener("touchcancel",this.mouseUp,!1)):(this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mousemove",this.mouseXY),document.body.addEventListener("mouseleave",this.mouseLeave,!1),document.body.addEventListener("mouseup",this.mouseUp)),this.canvas.getContext("2d").lineWidth=this.props.lineWidth,this.updateDimensions(),this.canvas.addEventListener("resize",this.updateDimensions)}},{key:"componentDidUpdate",value:function(e){this.props.lineSegments===e.lineSegments&&this.props.lineWidth===e.lineWidth||(this.setState({lineSegments:this.props.lineSegments}),this.drawSignature(this.props.lineSegments,this.props.lineWidth))}},{key:"componentWillUnmount",value:function(){"ontouchstart"in document.documentElement?(this.canvas.removeEventListener("touchstart",this.mouseDown),this.canvas.removeEventListener("touchmove",this.mouseXY),this.canvas.removeEventListener("touchend",this.mouseUp),document.body.removeEventListener("touchleave",this.mouseLeave),document.body.removeEventListener("touchcancel",this.mouseUp)):(this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mousemove",this.mouseXY),document.body.removeEventListener("mouseleave",this.mouseLeave),document.body.removeEventListener("mouseup",this.mouseUp)),this.canvas.removeEventListener("resize",this.updateDimensions)}},{key:"mouseInBounds",value:function(e){var t=this.canvasRect;return t.top<e.pageY&&t.left<e.pageX&&t.bottom>e.pageY&&t.right>e.pageX}},{key:"mouseDown",value:function(e){"button"in e&&e.button!==b||(this.setState({lastLineSegments:[],painting:!0}),this.canvasRect=this.canvas.getBoundingClientRect(),this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!1),this.draw())}},{key:"mouseUp",value:function(e){this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments)}},{key:"mouseXY",value:function(e){this.state.painting&&this.mouseInBounds(e)&&(this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!0),this.draw())}},{key:"mouseLeave",value:function(e){this.state.painting&&(this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments))}},{key:"addLine",value:function(e,t,n){var o;if(n){var i=this.state.lineSegments[this.state.lineSegments.length-1];o={x1:i.x2,y1:i.y2,x2:e,y2:t}}else o={x1:e,y1:t,x2:e,y2:t};this.setState((function(e){return{lineSegments:[].concat(l(e.lineSegments),[o]),lastLineSegments:[].concat(l(e.lastLineSegments),[o])}}))}},{key:"draw",value:function(){var e=this.canvas.getContext("2d");if(this.state.lineSegments.length>0){var t=this.state.lineSegments[this.state.lineSegments.length-1],n=window.getComputedStyle(this.canvas).getPropertyValue("color");e.lineJoin="round",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.strokeStyle=n,e.stroke()}}},{key:"drawSignature",value:function(e,t){var n=this.canvas.getContext("2d"),o=window.getComputedStyle(this.canvas).getPropertyValue("color");n.lineJoin="round",n.lineWidth=t,n.clearRect(0,0,this.canvasRect.width,this.canvasRect.height);for(var i=e.length,r=0;r<i;r+=1)n.beginPath(),n.moveTo(e[r].x1,e[r].y1),n.lineTo(e[r].x2,e[r].y2),n.strokeStyle=o,n.stroke()}},{key:"clearSignature",value:function(){this.setState({lineSegments:[]}),this.canvas.getContext("2d").clearRect(0,0,this.canvasRect.width,this.canvasRect.height)}},{key:"updateDimensions",value:function(){var e=this;setTimeout((function(){e.canvasRect=e.canvas.getBoundingClientRect(),e.canvas.width=e.canvasRect.width,e.canvas.height=e.canvasRect.height,e.drawSignature(e.state.lineSegments)}),250)}},{key:"render",value:function(){var e=this,t=this.props,n=(t.lineSegments,t.lineWidth,t.onChange,c(t,["lineSegments","lineWidth","onChange"]));return o.default.createElement("canvas",u({},n,{className:r.default.signature,ref:function(t){e.canvas=t}}))}}])&&h(t.prototype,n),i&&h(t,i),a}(o.default.Component);E.propTypes=S,E.defaultProps=w,E.Opts={},E.Opts.Width=g;var O=E;t.default=O},1216:function(e,t,n){e.exports={signature:"Signature-module__signature___3eX5Q"}},2324:function(e,t,n){e.exports={"signature-wrapper":"SignatureDefaultTest-module__signature-wrapper___1o-Mk"}},2779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(5)),r=a(n(1215)),s=a(n(2324));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=i.default.bind(s.default),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,i,s=f(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=s.call(this)).state={lineSegments:[],lineWidth:r.default.Opts.Width.FINE},e}return t=a,(n=[{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{id:"othersection"}),o.default.createElement("div",{className:p("signature-wrapper")},o.default.createElement(r.default,{id:"drawline",lineWidth:this.state.lineWidth,lineSegments:this.state.lineSegments,ref:function(t){e.signature=t}})))}}])&&c(t.prototype,n),i&&c(t,i),a}(o.default.Component);t.default=m}}]);
//# sourceMappingURL=259-782979190e0d52f3cb9d.js.map