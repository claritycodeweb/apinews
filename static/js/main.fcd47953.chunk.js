(this.webpackJsonphackernewsapis=this.webpackJsonphackernewsapis||[]).push([[0],{51:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e.n(c),a=e(22),i=e.n(a),u=e(5),s=function(){var n=Object(c.useRef)(null);return Object(c.useEffect)((function(){return function(){var t=n.current;t&&t.disconnect()}}),[]),[Object(c.useCallback)((function(t){var e=(n.current||(n.current=new IntersectionObserver((function(n){n.forEach((function(n){if(n.intersectionRatio>0){var t=n.target,e=t.dataset.src;e?t.src=e:console.warn("not data-src attribute")}}))}))),n.current);e.disconnect(),t&&e.observe(t)}),[])]},l=function(n){var t=Math.floor((new Date-1e3*n)/1e3),e=Math.floor(t/31536e3);return e>1?"".concat(e," years"):(e=Math.floor(t/2592e3))>1?"".concat(e," months"):(e=Math.floor(t/86400))>1?"".concat(e," days"):(e=Math.floor(t/3600))>1?"".concat(e," hours"):(e=Math.floor(t/60))>1?"".concat(e," minutes"):"".concat(Math.floor(t)," seconds")},d=e(7),f=e.n(d),b=e(23),j=e(8),h=e.n(j),p=function(n){return{id:n.id,by:n.by,url:n.url,time:n.time,title:n.title}},m="https://hacker-news.firebaseio.com/v0/",x="".concat(m,"newstories.json"),O="".concat(m,"item/"),g=function(){var n=Object(b.a)(f.a.mark((function n(t){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("".concat(O).concat(t,".json")).then((function(n){var t=n.data;return t&&p(t)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=e(3),v=e(4);function w(){var n=Object(y.a)(["\n  max-width: 100%;\n  object-fit: cover;\n  min-height: 300px;\n  border: 1px solid lightgray;\n"]);return w=function(){return n},n}function S(){var n=Object(y.a)(["\n  font-weight: bold;\n  color: ",";\n"]);return S=function(){return n},n}function E(){var n=Object(y.a)(["\n  font-style: italic;\n"]);return E=function(){return n},n}function M(){var n=Object(y.a)(["\n  display: flex;\n\n  flex-direction: column;\n  font-style: italic;\n\n  > span:first-child {\n    margin-right: 10px;\n    margin-top: 15px;\n  }\n\n  > span {\n    margin-top: 5px;\n  }\n\n  .story__meta-bold {\n    font-weight: bold;\n  }\n"]);return M=function(){return n},n}function k(){var n=Object(y.a)(["\n  margin-bottom: 5px;\n  font-size: 35px;\n  line-height: 1.8;\n  margin: 0;\n  text-decoration: none;\n"]);return k=function(){return n},n}function z(){var n=Object(y.a)(["\n  padding-top: 10px;\n  margin-bottom: 20px;\n  border-top: 1px solid #cccccc;\n  animation: ",";\n  animation-duration: 1s;\n  animation-timing-function: ease-out;\n  a {\n    color: #2e2e2c;\n    text-decoration: none;\n  }\n"]);return z=function(){return n},n}function I(){var n=Object(y.a)(["\n    0% {\n        opacity: 0;\n    }\n\n    80% {\n    }\n\n    100% {\n        opacity: 1;\n    }\n"]);return I=function(){return n},n}var H=Object(v.c)(I()),L={StoryWrapper:v.b.section(z(),H),StoryTitle:v.b.h1(k()),StoryMeta:v.b.div(M()),StoryUrl:v.b.div(E()),StoryMetaElement:v.b.span(S(),(function(n){return n.color||"red"})),StoryImage:v.b.img(w())},R=function(n){var t=n.storyId,e=Object(c.useState)(null),o=Object(u.a)(e,2),a=o[0],i=o[1],d=s(),f=Object(u.a)(d,1)[0];return Object(c.useEffect)((function(){g(t).then((function(n){return n&&i(n)}))}),[t]),a?Object(r.jsx)(L.StoryWrapper,{"data-testid":"story",children:Object(r.jsxs)("a",{href:a.url,target:"_blank",rel:"noreferrer",children:[Object(r.jsx)(L.StoryTitle,{children:a.title}),Object(r.jsx)(L.StoryImage,{ref:f,alt:a.title,"data-src":"https://picsum.photos/900/300?random=".concat(t),"data-lazy":"true",src:"https://via.placeholder.com/900x300?text=Loading...",width:"900",height:"300"}),Object(r.jsxs)(L.StoryMeta,{children:[Object(r.jsxs)("span",{"data-testid":"story-by",children:[Object(r.jsx)(L.StoryMetaElement,{color:"#000",children:"By: "}),a.by]}),Object(r.jsxs)("span",{"data-testid":"story-time",children:[Object(r.jsx)(L.StoryMetaElement,{color:"#000",children:"Posted: "}),l(a.time)]}),Object(r.jsxs)("span",{"data-testid":"story-url",children:[Object(r.jsx)(L.StoryMetaElement,{color:"#000",children:"Url: "}),a.url]})]})]})}):null},T=o.a.memo(R),_=e(10),A="make-request",B="get-data",J="error";function P(n,t){switch(t.type){case A:return{loading:!0,result:[]};case B:return Object(_.a)(Object(_.a)({},n),{},{loading:!1,result:t.payload.result});default:return n}}var U=function(){var n=Object(c.useReducer)(P,{result:[],loading:!0}),t=Object(u.a)(n,2),e=t[0],r=t[1];return Object(c.useEffect)((function(){r({type:A}),h.a.get(x).then((function(n){return n.data})).then((function(n){r({type:B,payload:{result:n}})})).catch((function(n){r({type:J,payload:{error:n}})}))}),[]),e};function W(){var n=Object(y.a)(["\n  max-width: 900px;\n  padding: 20px 15px;\n  margin: 0 auto;\n  > h1 {\n    font-size: 40px;\n  }\n"]);return W=function(){return n},n}function q(){var n=Object(y.a)(["\n  html {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    color: #202020;\n    background-color: #fafafe;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n  }\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n"]);return q=function(){return n},n}var C=Object(v.a)(q()),D=v.b.main(W()),F=function(){var n=U(),t=n.loading,e=n.result,o=function(){var n=Object(c.useState)(!1),t=Object(u.a)(n,2),e=t[0],r=t[1],o=Object(c.useState)(1),a=Object(u.a)(o,2),i=a[0],s=a[1],l=function(){return window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&!e&&(r(!0),!0)};return Object(c.useEffect)((function(){e&&(s((function(n){return n+1})),r(!1))}),[e]),Object(c.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}}),[]),{count:i}}().count;if(t)return Object(r.jsx)("div",{children:"Loading"});var a=5*o;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C,{}),Object(r.jsxs)(D,{"data-test-id":"stories-container",children:[Object(r.jsx)("h1",{children:"Hacker News API"}),e.slice(0,a).map((function(n){return Object(r.jsx)(T,{storyId:n},n)}))]})]})},N=function(){return Object(r.jsx)(F,{})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.fcd47953.chunk.js.map