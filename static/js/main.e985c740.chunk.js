(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[0],{117:function(e,t,n){},211:function(e,t,n){e.exports=n(404)},216:function(e,t,n){},404:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),o=n.n(c),i=(n(216),n(117),n(199)),u=n(27),l={cartBooks:[]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case" ADD_TO_CART":return Object(u.a)(Object(u.a)({},e),{},{cartBooks:[].concat(Object(i.a)(e.cartBooks),[t.book])});case"REMOVE_FROM_CART":return Object(u.a)(Object(u.a)({},e),{},{cartBooks:e.cartBooks.filter((function(e){return e.id!=t.id}))});default:return e}},m=n(19),f=n(417),E=n(198),h=n(41),b=n(406),d=function(e){return r.a.createElement(f.a,{itemsPerRow:4},r.a.createElement(E.a,{src:e.book.image,wrapped:!0,ui:!1}),r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,null,e.book.title),r.a.createElement(f.a.Meta,null,r.a.createElement("span",{className:"date"},e.book.author))),r.a.createElement(f.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(h.a,{name:"usd"}),e.book.price)),r.a.createElement(b.a,{onClick:function(){var t;t=e.book,e.addToCart(t)},basic:!0,color:"green"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))},k=Object(m.b)(null,(function(e){return{addToCart:function(t){e(function(e){return{type:" ADD_TO_CART",book:e}}(t))}}}))(d),p=n(86),v=n.n(p),O=n(109),g=n.n(O),w=n(185),C=n(186),j=n.n(C),y=function(){return j.a.get("https://nomen1.github.io/online-shop/books.json")},_={books:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS":return{books:t.books};default:return e}},T=n(418),R=n(415),I=n(416),S=function(e){var t=e.cartBooks.map((function(t){return r.a.createElement(I.a,null,r.a.createElement(I.a.Image,{size:"tiny",src:t.image}),r.a.createElement(I.a.Content,null,r.a.createElement(I.a.Header,{as:"a"},t.title),r.a.createElement(I.a.Extra,null,t.author),r.a.createElement(b.a,{onClick:function(){var n;n=t.id,e.deleteFromCart(n)},basic:!0,color:"red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}));return r.a.createElement(I.a.Group,null,t)},M=Object(m.b)((function(e){return{cartBooks:e.cart.cartBooks}}),(function(e){return{deleteFromCart:function(t){e(function(e){return{type:"REMOVE_FROM_CART",id:e}}(t))}}}))(S);var x=function(e){var t=function(){};return r.a.createElement(T.a,null,r.a.createElement(T.a.Menu,{position:"right"},r.a.createElement(T.a.Item,{name:"price",onClick:t},"\u0418\u0442\u043e\u0433\u043e ",e.totalPrice," ",r.a.createElement(h.a,{name:"usd"})),r.a.createElement(R.a,{content:r.a.createElement(M,null),on:"click",pinned:!0,trigger:r.a.createElement(T.a.Item,{name:"card",onClick:t}," ",r.a.createElement(h.a,{name:"shop"}),e.count)})))},F=Object(m.b)((function(e){return{totalPrice:e.cart.cartBooks.reduce((function(e,t){return e+t.price}),0),count:e.cart.cartBooks.length}}))(x),L=n(413),Q=function(e){return{type:"SET_FILTER",filter:e}},A={filter:"all",searchQuery:" "},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filter:t.filter});case"SET_QUERY":return Object(u.a)(Object(u.a)({},e),{},{searchQuery:t.query});default:return e}},D=n(412),P=function(e){var t=e.setFilter,n=e.setQuery,a=function(e){t(e)};return r.a.createElement(T.a,{vertical:!0},r.a.createElement(T.a.Item,{onClick:function(){a("all")}},"\u0412\u0441\u0435"),r.a.createElement(T.a.Item,{onClick:function(){a("price_low")}},"\u041f\u043e \u0446\u0435\u043d\u0435 (\u0434\u0435\u0448\u0435\u0432\u043b\u0435)"),r.a.createElement(T.a.Item,{onClick:function(){a("price_high")}},"\u041f\u043e \u0446\u0435\u043d\u0435 (\u0434\u043e\u0440\u043e\u0436\u0435)"),r.a.createElement(T.a.Item,{onClick:function(){a("name")}},"\u041f\u043e \u0430\u0432\u0442\u043e\u0440\u0443"),r.a.createElement(T.a.Item,null,r.a.createElement(D.a,{value:e.query,onChange:function(e){var t,a;t="search",a=e.target.value,n(t,a)},className:"icon",icon:"search",placeholder:"Search..."})))},G=Object(m.b)((function(e){return{query:e.filter.rearchQuery}}),(function(e){return{setFilter:function(t){e(Q(t))},setQuery:function(t,n){e(function(e,t){return function(n){n(Q(e)),n(function(e){return{type:"SET_QUERY",query:e}}(t))}}(t,n))}}}))(P),H=n(200),J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.matchMedia(e).matches,n=Object(a.useState)(t),r=Object(H.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var t=window.matchMedia(e);t.matches!==c&&o(t.matches);var n=function(){return o(t.matches)};return t.addListener(n),function(){return t.removeListener(n)}}),[e,c]),c},K=function(e){var t=J("(min-width: 1200px)");return r.a.createElement(L.a,null,r.a.createElement(F,null),r.a.createElement(G,null),r.a.createElement(f.a.Group,{itemsPerRow:t&&8},e.books))},N=function(e,t,n){switch(t){case"price_high":return v()(e,"price","desc");case"price_low":return v()(e,"price","asc");case"name":return v()(e,"author","asc");case"search":return function(e,t){return e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.toLowerCase())>=0}))}(e,n);default:return e}},U=Object(m.b)((function(e){return{books:N(e.books.books,e.filter.filter,e.filter.searchQuery)}}),(function(e){return{getBooks:function(){e(function(){var e=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,t({type:"SET_BOOKS",books:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.books,n=e.getBooks;Object(a.useEffect)((function(){n()}),[]);var c=t.map((function(e,t){return r.a.createElement(k,{book:e,key:t})}));return r.a.createElement(K,{books:c})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=n(50),W=n(195),Y=Object(V.c)({books:B,cart:s,filter:q}),z=Object(V.d)(Y,Object(V.a)(W.a)),$=(n(399),n(196)),X=n.n($);o.a.render(r.a.createElement(X.a,{basename:"https://nomen1.github.io/online-shop"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:z},r.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.e985c740.chunk.js.map