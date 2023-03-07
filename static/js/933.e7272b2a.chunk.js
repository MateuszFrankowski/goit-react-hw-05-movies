"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[933],{26:function(e,r,n){n.d(r,{v:function(){return u}});var t=n(861),a=n(757),s=n.n(a),i=n(243),c=n(779),o="?api_key=62c12a1369857be405b25f1458785604&language=en-US",u=function(){var e=(0,t.Z)(s().mark((function e(r,n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="",e.t0=n,e.next=e.t0===c.E.TRENDING?4:e.t0===c.E.DETAILS?6:e.t0===c.E.CAST?8:e.t0===c.E.REVIEWS?10:e.t0===c.E.QUERY?12:14;break;case 4:return t="/trending/movie/week"+o,e.abrupt("break",15);case 6:return t="/movie/"+r+o,e.abrupt("break",15);case 8:return t="/movie/"+r+"/credits"+o,e.abrupt("break",15);case 10:return t="/movie/"+r+"/reviews"+o+"&page=1",e.abrupt("break",15);case 12:return t="/search/movie"+o+"&query="+r+"&page=1&include_adult=false",e.abrupt("break",15);case 14:console.log("Wrong command");case 15:return e.next=17,i.Z.get(t);case 17:return a=e.sent,e.abrupt("return",a);case 19:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()},779:function(e,r,n){n.d(r,{E:function(){return t}});var t={TRENDING:"TRENDING",DETAILS:"DETAILS",CAST:"CAST",REVIEWS:"REVIEWS",QUERY:"QUERY"}},933:function(e,r,n){n.r(r),n.d(r,{default:function(){return j}});var t,a=n(861),s=n(439),i=n(757),c=n.n(i),o=n(791),u=n(168),l=n(128),d=n(87),h=n(444),p=n(184),v=(0,h.ZP)(d.rU)(t||(t=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),f=function(e){var r=e.to,n=e.children;return(0,p.jsxs)(v,{to:r,children:[(0,p.jsx)(l.jTe,{size:"24"}),n]})},x=n(689),m=n(779),g=n(26),j=function(){var e,r,n,t=(0,x.TH)(),i=null!==(e=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies",u=(0,o.useState)({}),l=(0,s.Z)(u,2),h=l[0],v=l[1],j=(0,o.useState)(!1),E=(0,s.Z)(j,2),b=E[0],k=E[1],w=(0,o.useRef)(!1),S=(0,x.UO)().movieId,_=Number(S),T=function(){var e=(0,a.Z)(c().mark((function e(r,n){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,(0,g.v)(r,n);case 4:t=e.sent,a=t.data,v(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(r,n){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){w.current||(T(_,m.E.DETAILS),w.current=!0)})),(0,p.jsxs)("div",{children:[(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(f,{to:i,children:"Back to movies"})}),h&&!b&&w.current&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+h.backdrop_path,alt:h.original_title}),(0,p.jsx)("h1",{children:h.original_title}),(0,p.jsxs)("p",{children:["User score: ",Math.round(h.vote_average/10*100),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:null===(n=h.genres)||void 0===n?void 0:n.map((function(e,r){return(0,p.jsxs)("span",{children:[e.name," "]},r+100)}))})]}),(0,p.jsxs)("ul",{children:[(0,p.jsx)(p.Fragment,{children:"Additional information"}),(0,p.jsx)("li",{children:(0,p.jsx)(d.rU,{to:"cast",state:{from:t.state.from},children:"Check the credits"})}),(0,p.jsx)("li",{children:(0,p.jsx)(d.rU,{to:"reviews",state:{from:t.state.from},children:"Read some rewiews..."})})]}),(0,p.jsx)(x.j3,{}),!h&&!b&&(0,p.jsx)("h2",{children:"Sorry, project not found"})]})}}}]);
//# sourceMappingURL=933.e7272b2a.chunk.js.map