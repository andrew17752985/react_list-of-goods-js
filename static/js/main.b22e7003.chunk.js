(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),a=n(3),s=n(4),o=n(1),r=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(o.useState)(l),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(o.useState)(""),u=Object(s.a)(i,2),j=u[0],h=u[1],d=Object(o.useState)(!0),O=Object(s.a)(d,2),f=O[0],p=O[1],m=Object(o.useState)(!1),g=Object(s.a)(m,2),x=g[0],y=g[1],v=function(t){var e=Object(a.a)(n);"alphabetically"===t?e=b(Object(a.a)(n),(function(t,e){return t.localeCompare(e)})):"length"===t&&(e=b(Object(a.a)(n),(function(t,e){return t.length-e.length||n.indexOf(t)-n.indexOf(e)}))),f||e.reverse(),c(e),h(t),p(!0),y(!1)};return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"button is-info ".concat("alphabetically"===j?"":"is-light"),onClick:function(){return v("alphabetically")},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"button is-success ".concat("length"===j?"":"is-light"),onClick:function(){return v("length")},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:"button is-warning ".concat(!x&&j&&f?"is-light":""),onClick:function(){if(j)c(Object(a.a)(n).reverse()),p(!f),y(!1);else{var t=[].concat(l).reverse();c(t),y(!x)}},children:"Reverse"}),Object(r.jsx)("button",{type:"button",className:"button is-danger ".concat(j||!f||x?"":"is-light"),onClick:function(){c(l),h(""),p(!0),y(!1)},children:"Reset"})]}),Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)("li",{"data-cy":t,children:t},t)}))})]})},b=function(t,e){return t.map((function(t,e){return{item:t,index:e}})).sort((function(t,n){return e(t.item,n.item)||t.index-n.index})).map((function(t){return t.item}))};i.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b22e7003.chunk.js.map