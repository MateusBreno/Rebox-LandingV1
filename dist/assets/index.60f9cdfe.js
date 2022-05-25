import{r as S}from"./index.24a0137a.js";function A(e,r){return r.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(t){if(t!=="default"&&!(t in e)){var o=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:function(){return n[t]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function C(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var c=S.exports,l=C(c);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(r){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},s.apply(this,arguments)};function N(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n}function B(e,r){r===void 0&&(r={});var n=r.insertAt;if(!(!e||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var z=`.styles_scroll-to-top__2A70v {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  transition: opacity 1s ease-in-out;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
  outline: none;
}

.styles_scroll-to-top__2A70v:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`,L={"scroll-to-top":"styles_scroll-to-top__2A70v"};B(z);function V(e){e===void 0&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}var D=function(e){var r=e.top,n=r===void 0?20:r,t=e.className,o=t===void 0?L["scroll-to-top"]:t,i=e.color,g=i===void 0?"black":i,a=e.smooth,b=a===void 0?!1:a,d=e.component,_=d===void 0?"":d,u=e.viewBox,x=u===void 0?"0 0 256 256":u,f=e.svgPath,w=f===void 0?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":f,p=e.width,O=p===void 0?"28":p,v=e.height,j=v===void 0?"28":v,E=N(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),m=c.useState(!1),T=m[0],P=m[1],h=function(){P(document.documentElement.scrollTop>n)};return c.useEffect(function(){return document.addEventListener("scroll",h),function(){return document.removeEventListener("scroll",h)}},[]),l.createElement(l.Fragment,null,T&&l.createElement("button",s({className:o,onClick:function(){return V(b)}},E),_||l.createElement("svg",{width:O,height:j,fill:g,viewBox:x},l.createElement("path",{d:w}))))},y=D,M=A({__proto__:null,default:y},[y]);export{M as i};
