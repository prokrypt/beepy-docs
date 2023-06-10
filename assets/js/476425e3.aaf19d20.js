"use strict";(self.webpackChunkbeepberry=self.webpackChunkbeepberry||[]).push([[908],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=n,u=m["".concat(p,".").concat(d)]||m[d]||b[d]||s;return t?a.createElement(u,i(i({ref:r},c),{},{components:t})):a.createElement(u,i({ref:r},c))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6691:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const s={sidebar_position:5},i="Case Designs & 3D Models",o={unversionedId:"3D",id:"3D",title:"Case Designs & 3D Models",description:"Beepberry STEP model",source:"@site/docs/3D.md",sourceDirName:".",slug:"/3D",permalink:"/docs/3D",draft:!1,editUrl:"https://github.com/sqfmi/beepberry-docs/blob/main/docs/3D.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Schematic",permalink:"/docs/hardware/schematic"},next:{title:"FAQ",permalink:"/docs/faq"}},p={},l=[{value:"Beepberry STEP model",id:"beepberry-step-model",level:2},{value:"Case Designs",id:"case-designs",level:2},{value:"V1",id:"v1",level:3},{value:"Slim Flat",id:"slim-flat",level:3},{value:"CNC Case",id:"cnc-case",level:3},{value:"Transparent Plastic",id:"transparent-plastic",level:3}],c={toc:l},m="wrapper";function b(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"case-designs--3d-models"},"Case Designs & 3D Models"),(0,n.kt)("h2",{id:"beepberry-step-model"},"Beepberry STEP model"),(0,n.kt)("img",{src:"/img/beepberry-v1-3D-render.png",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepberry-hardware/blob/main/3D/beepberry-device/beepberry-v1.step"},(0,n.kt)("strong",{parentName:"a"},"beepberry-v1.step"))),(0,n.kt)("h2",{id:"case-designs"},"Case Designs"),(0,n.kt)("p",null,"Below are some case designs for the Beepberry. If you have any designs you'd like to share with the community, please submit a Pull Request to this repo (include a brief description and some renders/pics): ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepberry-hardware"},(0,n.kt)("strong",{parentName:"a"},"https://github.com/sqfmi/beepberry-hardware")),"."),(0,n.kt)("h3",{id:"v1"},"V1"),(0,n.kt)("p",null,"V1 design of a Beepberry case, suitable for 3D printing, requires some tweaking for a proper fit. Screws are M2.5x5mm."),(0,n.kt)("img",{src:"/img/beepberry-edc.jpg",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepberry-hardware/tree/main/3D/beepberry-cases/v1"},(0,n.kt)("strong",{parentName:"a"},"STLs and STEP model"))),(0,n.kt)("h3",{id:"slim-flat"},"Slim Flat"),(0,n.kt)("p",null,"Slim, flat, minimal case for the Beepberry"),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepberry-hardware/main/3D/beepberry-cases/slim_flat/images/01.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepberry-hardware/main/3D/beepberry-cases/slim_flat/images/02.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepberry-hardware/main/3D/beepberry-cases/slim_flat/images/03.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepberry-hardware/main/3D/beepberry-cases/slim_flat/images/04.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepberry-hardware/main/3D/beepberry-cases/slim_flat/images/06.jpg",width:"300"}),(0,n.kt)("img",{src:"https://raw.githubusercontent.com/sqfmi/beepberry-hardware/main/3D/beepberry-cases/slim_flat/images/07.jpg",width:"300"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sqfmi/beepberry-hardware/tree/main/3D/beepberry-cases/slim_flat"},(0,n.kt)("strong",{parentName:"a"},"STLs and STEP model"))),(0,n.kt)("h3",{id:"cnc-case"},"CNC Case"),(0,n.kt)("p",null,"Coming Soon"),(0,n.kt)("h3",{id:"transparent-plastic"},"Transparent Plastic"),(0,n.kt)("p",null,"Coming Soon"))}b.isMDXComponent=!0}}]);