(this["webpackJsonppythagoras-react"]=this["webpackJsonppythagoras-react"]||[]).push([[0],[,,,,,,,,,,,function(A,e,i){"use strict";var c=i(26),C=i(0),g=i(1);i(45);e.a=function(A){var e=A.k1,i=A.k2,a=A.gyp,E=Object(g.useRef)(null);return Object(g.useEffect)((function(){var A=E.current,c=A.getContext("2d"),C=+e+ +i+ +a,g=[Math.round(e/C*100),Math.round(i/C*100),Math.round(a/C*100)];c.clearRect(0,0,A.width,A.height),c.fillStyle="white",c.beginPath(),c.moveTo(300,300),c.lineTo(300,2.5*g[1]),c.lineTo(2.5*g[0],2.5*g[1]),c.closePath(),c.lineWidth=10,c.strokeStyle="#191919",c.stroke(),c.fillStyle="white",c.fill()}),[e,i,a]),Object(C.jsx)("canvas",Object(c.a)({className:"calculator__canvas",ref:E},A))}},function(A,e,i){"use strict";var c=i(0);i(43),i(1);e.a=function(A){var e=A.isHidden,i=A.message;return Object(c.jsxs)("div",{className:"success ".concat(e?"":"success__shown"),children:[Object(c.jsx)("img",{className:"success__image",src:"data:image/png;base64,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",alt:"checkmark"}),Object(c.jsx)("p",{className:"success__message",children:i})]})}},,,function(A,e,i){"use strict";var c=i(0),C=i(4),g=i(11),a=(i(48),i(12)),E=i(1);e.a=function(A){var e=A.counter,i=A.p,s=A.q,Q=A.k1,I=A.k2,t=A.gyp,B=A.viewable,o=Object(E.useState)(!1),j=Object(C.a)(o,2),h=j[0],n=j[1];return Object(c.jsxs)("section",{className:"card",children:[Object(c.jsxs)("header",{className:"card__header",children:[Object(c.jsxs)("p",{className:"card__num",children:[e,"."]}),Object(c.jsx)("p",{className:"card__num",children:i||1}),Object(c.jsx)("p",{className:"card__num",children:s||1}),Object(c.jsx)("p",{className:"card__num",children:Q||1}),Object(c.jsx)("p",{className:"card__num",children:I||1}),Object(c.jsx)("p",{className:"card__num",children:t||1}),Object(c.jsx)("button",{onClick:function(){n(!h)},className:"card__view",disabled:!B,children:"+"})]}),Object(c.jsxs)("div",{className:"card__main ".concat(h?"":"card__main-hidden"),children:[Object(c.jsxs)("div",{className:"card__data",children:[Object(c.jsxs)("p",{className:"card__num",children:["\u041f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 : ",e||2]}),Object(c.jsxs)("p",{className:"card__num",children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c P : ",i||1]}),Object(c.jsxs)("p",{className:"card__num",children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c Q : ",s||1]}),Object(c.jsxs)("p",{className:"card__num",children:["\u041f\u0435\u0440\u0432\u044b\u0439 \u043a\u0430\u0442\u0435\u0442 : ",Q]}),Object(c.jsxs)("p",{className:"card__num",children:["\u0412\u0442\u043e\u0440\u043e\u0439 \u043a\u0430\u0442\u0435\u0442 : ",I]}),Object(c.jsxs)("p",{className:"card__num",children:["\u0413\u0438\u043f\u043e\u0442\u0435\u043d\u0443\u0437\u0430 : ",t]}),Object(c.jsx)(a.a,{message:"\u0422\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d \u043d\u0430\u043f\u0438\u0448\u0438 \u0442\u0435\u0441\u0442\u0430\u043c\u0438!",isHidden:!1})]}),Object(c.jsx)("div",{className:"card__canvas",children:Object(c.jsx)(g.a,{width:"400",height:"400",k1:Q,k2:I,gyp:t})})]})]})}},,,,function(A,e,i){"use strict";i.d(e,"a",(function(){return g}));var c=i(23),C=i(24),g=function(){function A(e){Object(c.a)(this,A),this._max=e}return Object(C.a)(A,[{key:"_isEven",value:function(A){return A%2===0}},{key:"_isRelative",value:function(A,e){if("number"!==typeof A||"number"!==typeof e)return!1;for(A=Math.abs(A),e=Math.abs(e);e;){var i=e;e=A%e,A=i}return 1!==A}},{key:"_isPrime",value:function(A){for(var e=2;e<A;e++)if(A%e===0)return!1;return A>1}},{key:"renderArray",value:function(){for(var A=0,e=0,i=[],c=2;A<this._max;c++)for(var C=1;C<c;C++)if((this._isEven(c)&&!this._isEven(C)||!this._isEven(c)&&this._isEven(C))&&!this._isRelative(c,C)){var g={counter:++e,p:c,q:C,k1:Math.pow(c,2)-Math.pow(C,2),k2:2*c*C,gyp:A=Math.pow(c,2)+Math.pow(C,2)};i.push(g)}return i}},{key:"addTriangles",value:function(A,e){var i=this.renderArray(),c=i[A-1],C=c.gyp,g=c.k2,a=c.k1,E=i[e-1],s=E.gyp,Q=E.k2,I=E.k1,t={};t.gyp=C*s,t.k2=a*I+g*Q,t.k1=Math.abs(g*I-a*Q),console.log(t)}}]),A}()},,,,,,,,,,,,,function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){},,,,,,function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){},function(A,e,i){"use strict";i.r(e);var c=i(0),C=i(1),g=i.n(C),a=i(22),E=i.n(a),s=(i(32),i(33),i(19));i(34);var Q=function(){return Object(c.jsx)("section",{className:"spinner",children:Object(c.jsx)("img",{className:"spinner__image",src:"data:image/gif;base64,R0lGODlhoACgAPUvAKGhoaSkpLW1tbGxsaysrL+/v7u7u8XFxc3NzdHR0djY2N7e3vr6+qioqP39/be3t6+vr6mpqdvb29PT08fHx/b29qampsnJyeLi4tXV1cHBwerq6qWlpdzc3Obm5u7u7r29vfLy8q2trfT09LOzs7m5uaCgoMvLy8/Pz9fX18PDw/j4+ODg4Ozs7Ojo6PDw8OTk5JqampmZmZycnP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Nzk3MjVFNTc0RjExMUUyQUUwNDgxQzcwNkRGODkzNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Nzk3MjVFNjc0RjExMUUyQUUwNDgxQzcwNkRGODkzNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3OTcyNUUzNzRGMTExRTJBRTA0ODFDNzA2REY4OTM0IiBzdFJl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",alt:"spinner"})})},I=(i(35),i(8));var t=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("ul",{className:"header__links",children:[Object(c.jsx)("li",{className:"header__li",children:Object(c.jsx)(I.b,{exact:!0,to:"/",className:"header__link",activeClassName:"header__link-active",children:"\u0414\u043e\u043c\u043e\u0439"})}),Object(c.jsx)("li",{className:"header__li",children:Object(c.jsx)(I.b,{to:"/calculator",className:"header__link",activeClassName:"header__link-active",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})}),Object(c.jsx)("li",{className:"header__li",children:Object(c.jsx)(I.b,{to:"/list",className:"header__link",activeClassName:"header__link-active",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430"})}),Object(c.jsx)("li",{className:"header__li",children:Object(c.jsx)(I.b,{to:"/blog",className:"header__link",activeClassName:"header__link-active",children:"\u0411\u043b\u043e\u0433"})})]})})},B=i(4),o=(i(41),i(42),i(12));i(44);var j=function(A){var e=A.message,i=A.isHidden;return Object(c.jsxs)("div",{className:"error ".concat(i?"error__shown":""),children:[Object(c.jsx)("img",{className:"error__image",src:"data:image/png;base64,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",alt:"error"}),Object(c.jsx)("p",{className:"error__message",children:e})]})},h=i(11);var n=function(A){var e=A.title,i=A.onTriangleChange,g=Object(C.useState)(2),a=Object(B.a)(g,2),E=a[0],s=a[1],Q=Object(C.useState)(2),I=Object(B.a)(Q,2),t=I[0],n=I[1],J=Object(C.useState)(2),w=Object(B.a)(J,2),r=w[0],l=w[1];return Object(C.useEffect)((function(){i({k1:+E,k2:+t,gyp:+r,isValid:Math.pow(Number(E),2)+Math.pow(Number(t),2)===Math.pow(Number(r),2)&&""!==Number(E)&&""!==Number(t)&&""!=Number(r)})}),[E,t,r]),Object(c.jsxs)("div",{className:"calculator__zone",children:[Object(c.jsx)("p",{className:"calculator__title",children:e}),Object(c.jsxs)("fieldset",{className:"calculator__fieldset",children:[Object(c.jsx)("input",{type:"number",className:"calculator__input",placeholder:"\u041a\u0430\u0442\u0435\u0442",onChange:function(A){s(A.target.value)}}),Object(c.jsx)("input",{type:"number",className:"calculator__input",placeholder:"\u041a\u0430\u0442\u0435\u0442",onChange:function(A){n(A.target.value)}}),Object(c.jsx)("input",{type:"number",className:"calculator__input",placeholder:"\u0413\u0438\u043f\u043e\u0442\u0435\u043d\u0443\u0437\u0430",onChange:function(A){l(A.target.value)}})]}),Object(c.jsx)(o.a,{message:"\u0412\u0430\u0448 \u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d \u043d\u0430\u043f\u0438\u0448\u0438 \u0442\u0435\u0441\u0442\u0430\u043c\u0438!",isHidden:!(Math.pow(Number(E),2)+Math.pow(Number(t),2)==Math.pow(Number(r),2)&&""!=Number(E)&&""!=Number(t)&&""!=Number(r))}),Object(c.jsx)(j,{message:"\u0412\u0430\u0448 \u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442",isHidden:!(Math.pow(Number(E),2)+Math.pow(Number(t),2)==Math.pow(Number(r),2))||""==Number(E)||""==Number(t)||""==Number(r)}),Object(c.jsxs)("div",{className:"canvas ".concat(Math.pow(Number(E),2)+Math.pow(Number(t),2)!=Math.pow(Number(r),2)||""==Number(E)||""==Number(t)||""==Number(r)?"canvas-none":""),children:[Object(c.jsx)("p",{className:"canvas__value k1",children:E}),Object(c.jsx)("p",{className:"canvas__value k2",children:t}),Object(c.jsx)("p",{className:"canvas__value gyp",children:r}),Object(c.jsx)(h.a,{width:"400",height:"400",k1:E,k2:t,gyp:r})]})]})};i(46),i(47);var J=function(A){var e=A.limit;return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("p",{className:"card__text-404",children:["\u041c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0443\u044e \u043f\u0438\u0444\u0430\u0433\u043e\u0440\u043e\u0432\u0443 \u0442\u0440\u043e\u0439\u043a\u0443. \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f, \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432 \u043b\u0438\u043c\u0438\u0442 \u0433\u0438\u043f\u043e\u0442\u0435\u043d\u0443\u0437\u044b. \u0422\u0435\u043a\u0443\u044e\u0449\u0438\u0439 \u043b\u0438\u043c\u0438\u0442 - ",e]})})},w=i(15);var r=function(A){var e=A.x1,i=A.x2,g=A.opened,a=A.array,E=Object(C.useState)(!1),s=Object(B.a)(E,2),Q=s[0],I=s[1],t=[];function o(A,e,i,c,C,g){var a={};return a.gyp=i*c,a.k2=e*g+A*C,a.k1=Math.abs(A*g-e*C),a}return Object(C.useEffect)((function(){!function(){var A=e.gyp,c=o(e.k2,e.k1,A,i.gyp,i.k2,i.k1);t.push(c)}(),function(){var A=e.gyp,c=e.k2,C=o(e.k1,c,A,i.gyp,i.k2,i.k1);t.push(C)}(),function(){var A=e.gyp,c=e.k2,C=e.k1,g=i.gyp,a=i.k2,E=o(c,C,A,g,i.k1,a);t.push(E)}(),function(){var A=e.gyp,c=e.k2,C=e.k1,g=i.gyp,a=i.k2,E=o(C,c,A,g,i.k1,a);t.push(E)}(),t.forEach((function(A){var e=A.k1,i=A.k2,c=A.gyp;if(c>a.length)I(!1);else{var C=a.find((function(A){return A.gyp==c&&A.k1==e&&A.k2==i}));C&&I(C)}}))}),[g]),Object(c.jsxs)("div",{className:"calculator__answer ".concat(g?"":"calculator__answer-hidden"),children:[Object(c.jsx)(w.a,{counter:"\u2116",p:"P",q:"Q",k1:"K1",k2:"K2",gyp:"GYP",viewable:!1}),Q?Object(c.jsx)(w.a,{counter:Q.counter,p:Q.p,q:Q.q,k1:Q.k1,k2:Q.k2,gyp:Q.gyp,viewable:!0}):Object(c.jsx)(J,{limit:a.length})]})};var l=function(A){var e=A.array,i=Object(C.useState)({}),g=Object(B.a)(i,2),a=g[0],E=g[1],s=Object(C.useState)({}),Q=Object(B.a)(s,2),I=Q[0],t=Q[1],o=Object(C.useState)(!1),j=Object(B.a)(o,2),h=j[0],J=j[1],w=Object(C.useState)(!1),l=Object(B.a)(w,2),D=l[0],G=l[1];return Object(C.useEffect)((function(){G(!1)}),[a,I]),Object(C.useEffect)((function(){a.isValid&&I.isValid?J(!0):J(!1)}),[a,I]),Object(c.jsxs)("section",{className:"calculator",children:[Object(c.jsxs)("div",{className:"calculator__interface",children:[Object(c.jsx)(n,{onTriangleChange:function(A){E(A)},title:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a"}),Object(c.jsx)("button",{type:"submit",className:"calculator__add",disabled:!h,onClick:function(){G(!0)},children:"\u041f\u0440\u0438\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0432\u0438\u0435\u0442\u0430"}),Object(c.jsx)(n,{onTriangleChange:function(A){t(A)},title:"\u0412\u0442\u043e\u0440\u043e\u0439 \u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a"})]}),Object(c.jsx)(r,{array:e,x1:a,x2:I,opened:D})]})},D=g.a.createContext(),G=i(2),M=g.a.lazy((function(){return i.e(3).then(i.bind(null,53))}));var K=function(){var A=new s.a(1e4).renderArray();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(D.Provider,{value:A,children:[Object(c.jsx)(t,{}),Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)(G.c,{children:[Object(c.jsx)(G.a,{exact:!0,path:"/",children:Object(c.jsx)("h1",{children:"Hello"})}),Object(c.jsx)(G.a,{path:"/list",children:Object(c.jsx)(g.a.Suspense,{fallback:Object(c.jsx)(Q,{}),children:Object(c.jsx)("div",{children:Object(c.jsx)(M,{array:A})})})}),Object(c.jsx)(G.a,{path:"/calculator",children:Object(c.jsx)(l,{array:A})})]})})]})})},R=function(A){A&&A instanceof Function&&i.e(4).then(i.bind(null,52)).then((function(e){var i=e.getCLS,c=e.getFID,C=e.getFCP,g=e.getLCP,a=e.getTTFB;i(A),c(A),C(A),g(A),a(A)}))};E.a.render(Object(c.jsx)(g.a.StrictMode,{children:Object(c.jsx)(I.a,{children:Object(c.jsx)(K,{})})}),document.getElementById("root")),R()}],[[49,1,2]]]);
//# sourceMappingURL=main.ddd5ec61.chunk.js.map