"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[949],{26:function(e,t,r){r.d(t,{v:function(){return o}});var n=r(861),a=r(757),u=r.n(a),i=r(243),c=r(779),s="?api_key=62c12a1369857be405b25f1458785604&language=en-US",o=function(){var e=(0,n.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",e.t0=r,e.next=e.t0===c.E.TRENDING?4:e.t0===c.E.DETAILS?6:e.t0===c.E.CAST?8:e.t0===c.E.REVIEWS?10:e.t0===c.E.QUERY?12:14;break;case 4:return n="/trending/movie/week"+s,e.abrupt("break",15);case 6:return n="/movie/"+t+s,e.abrupt("break",15);case 8:return n="/movie/"+t+"/credits"+s,e.abrupt("break",15);case 10:return n="/movie/"+t+"/reviews"+s+"&page=1",e.abrupt("break",15);case 12:return n="/search/movie"+s+"&query="+t+"&page=1&include_adult=false",e.abrupt("break",15);case 14:console.log("Wrong command");case 15:return e.next=17,i.Z.get(n);case 17:return a=e.sent,e.abrupt("return",a);case 19:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},779:function(e,t,r){r.d(t,{E:function(){return n}});var n={TRENDING:"TRENDING",DETAILS:"DETAILS",CAST:"CAST",REVIEWS:"REVIEWS",QUERY:"QUERY"}},949:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(791),a=r(861),u=r(439),i=r(757),c=r.n(i),s=r(87),o=r(689),v="MovieSearch_item-list__iFF97",f="MovieSearch_item__FDvop",l="MovieSearch_item-img__Z1D6s",p=r(779),h=r(26),m=r(99),d=r(184),_=function(){var e=(0,o.TH)(),t=(0,s.lr)(),r=(0,u.Z)(t,2),i=r[0],_=r[1],E=i.get("query"),g=(0,n.useState)([]),b=(0,u.Z)(g,2),k=b[0],w=b[1],x=(0,n.useState)(!1),S=(0,u.Z)(x,2),R=S[0],N=S[1],T=(0,n.useRef)(!1),y=function(){var e=(0,a.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,(0,h.v)(t,r);case 4:n=e.sent,a=n.data.results,w(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.prev=12,N(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t,r){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){E&&(T.current||(T.current=!0,y(E,p.E.QUERY),T.current=!1))}),[E]);return(0,d.jsxs)("div",{children:[" ",(0,d.jsx)("input",{type:"text",onChange:function(e){e.preventDefault();var t=e.target.value;_({query:t})}}),!R&&k.length>0&&(0,d.jsx)("ul",{className:v,children:k.map((function(t){var r;return(0,d.jsx)(m.rU,{to:"/movies/".concat(t.id),state:{from:e},children:(0,d.jsxs)("li",{className:f,children:[t.poster_path&&(0,d.jsx)("img",{className:l,src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+t.poster_path,alt:t.title})," ",!t.poster_path&&(0,d.jsx)("img",{className:l,src:"https://media.comicbook.com/files/img/default-movie.png",alt:t.title}),t.title]},null===(r=t.id)||void 0===r?void 0:r.toString())})}))})]})},E=function(){return(0,d.jsx)(_,{})}},861:function(e,t,r){function n(e,t,r,n,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void r(o)}c.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,u){var i=e.apply(t,r);function c(e){n(i,a,u,c,s,"next",e)}function s(e){n(i,a,u,c,s,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=949.2320e86c.chunk.js.map