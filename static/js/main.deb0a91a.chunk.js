(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1353:function(e,t,a){},1356:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),l=a(16),c=a.n(l),o=(a(30),a(17)),u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,1357)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root")),u()},17:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return s});a(32);var n=a(24),r=a(18),l=a(19),c=a(23),o=a(3),u=a.n(o),i=a(6),m=a(4);function s(){return u.a.createElement(i.a,{basename:e.evn.PUBLIC_URL},u.a.createElement(m.c,null,u.a.createElement(m.a,{path:"/",element:u.a.createElement(l.a,null)}),u.a.createElement(m.a,{path:"/Dictionary",element:u.a.createElement(n.a,null)}),u.a.createElement(m.a,{path:"/Community/*",element:u.a.createElement(r.a,null)}),u.a.createElement(m.a,{path:"/Games/*",element:u.a.createElement(c.a,null)})))}}).call(this,a(15))},18:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(3),r=a.n(n),l=a(6),c=a(4),o=(a(34),[{id:1,title:"HTML",desc:"HTML is ..."},{id:2,title:"CSS",desc:"CSS is ..."},{id:3,title:"React",desc:"React is ..."}]);function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Welcome to Community"),r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement("p",null),r.a.createElement("div",null,"Here is for community each others...."),r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:"/Community/"+e.id},e.title))})),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:":id",element:r.a.createElement(i,{title:"xx"})})))}function i(e){var t=Object(c.g)().id;return console.log(t,"*",e.title),r.a.createElement("div",null,t,") ",o[t-1].desc)}},19:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(3),r=a.n(n),l=a(6);function c(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Welcome to Internet World..."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/Dictionary"},"Dictionary")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/Community"},"Community")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/Games"},"Games"))))}},23:function(e,t,a){"use strict";var n=a(5),r=a(3),l=a.n(r),c=a(6),o=a(4),u=a(7),i=(a(36),l.a.memo(function(e){var t;return t=e.number<=10?"red":e.number<=20?"orange":e.number<=30?"yellow":e.number<=40?"blue":"green",l.a.createElement("div",{className:"ball",style:{backgroundColor:"".concat(t)}},e.number)})),m=function(){console.log("getWinNumber was ran..");for(var e=Array(45).fill().map(function(e,t){return t+1}),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);var a=t[t.length-1],n=t.slice(0,6).sort(function(e,t){return e-t});return[].concat(Object(u.a)(n),[a])};function s(){var e=Object(r.useMemo)(function(){return m()},[]),t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)([]),E=Object(n.a)(s,2),f=E[0],b=E[1],d=Object(r.useState)(null),p=Object(n.a)(d,2),h=p[0],O=p[1],v=Object(r.useState)(!1),g=Object(n.a)(v,2),j=g[0],C=g[1],N=Object(r.useRef)([]);Object(r.useEffect)(function(){return c.map(function(e,t){return t<c.length-1?N.current[t]=setTimeout(function(){return b(function(t){return[].concat(Object(u.a)(t),[e])})},1e3*(t+1)):N.current[t]=setTimeout(function(){O([e]),C(!0)},1e3*(t+1)),function(){return N.current.forEach(function(e){return clearInterval(e)})}}),function(){}},[c]);var w=Object(r.useCallback)(function(){o(m),b([]),O(null),C(!1),N.current=[]},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null," Welcome to Lotto Number"),l.a.createElement("div",null,"Winning Numbers are ..."),l.a.createElement("div",{id:"resultWindow"},f.map(function(e){return l.a.createElement(i,{key:e,number:e})})),l.a.createElement("div",null,"Bonus Number is ..."),h&&l.a.createElement(i,{number:h}),j&&l.a.createElement("button",{onClick:w},"Again?"))}var E=l.a.memo(function(e){var t=e.result;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,t))});var f=l.a.memo(function(e){var t=e.title;return l.a.createElement("h3",null," ",t)});var b=l.a.memo(function(e){var t=e.trial;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,t))});function d(){var e=[],t=[1,2,3,4].map(function(t,a){for(;;){var n=Math.floor(10*Math.random(),1);if(!e.includes(n))return e.push(n),n}});return console.log("create : ",t),t}var p=Object(r.memo)(function(){var e=Object(r.useState)("Let's start~~"),t=Object(n.a)(e,2),a=t[0],c=t[1],o=[],i=Object(r.useState)([]),m=Object(n.a)(i,2),s=m[0],p=m[1],h=Object(r.useState)([]),O=Object(n.a)(h,2),v=O[0],g=O[1];Object(r.useEffect)(function(){g(d())},[]);var j=Object(r.useCallback)(function(e){e.preventDefault();var t=Array.from(e.target.value.value).map(function(e){return parseInt(e)});if((o=t).join("")===v.join(""))c("Homerun~~"),alert("Cong. Homerun~~ Try again?"),c("Let's start~~"),o=[],p([]),g(d());else if(s.length>=9)c("fail to find the answer~~"),alert("more than 10 wrong answers.. Try again?"),c("Let's start~~"),o=[],p([]),g(d());else{for(var a=0,n=0,r=0;r<4;r++)o[r]===v[r]?a+=1:v.includes(o[r])&&(n+=1);c("Wrong Answer : ".concat(a," Strikes, ").concat(n," balls."));var l="".concat(o.join(""),", ").concat(a," S, ").concat(n," B");p(function(e){return[].concat(Object(u.a)(e),[l])})}e.target.value.value=""},[s,v,o]),C=Object(r.useCallback)(function(e){},[o]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{title:"Welcome to Number Baseball~~"}),l.a.createElement(E,{result:a}),l.a.createElement("form",{onSubmit:j},l.a.createElement("input",{autoFocus:!0,autoComplete:"off",maxLength:4,type:"text",name:"value",onChange:C})),l.a.createElement("div",null,"Trial no. : ",s.length),l.a.createElement("ul",null,s.map(function(e,t){return l.a.createElement(b,{key:t,trial:e})})))});a(38);function h(){var e=Object(r.useState)("waiting"),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)("click for starting~~"),i=Object(n.a)(o,2),m=i[0],s=i[1],E=Object(r.useState)([]),f=Object(n.a)(E,2),b=f[0],d=f[1],p=Object(r.useRef)(null),h=Object(r.useRef)(),O=function(){d([])};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null," Welcome to Response Test"),l.a.createElement("div",{id:"screen",className:a,onClick:function(){if(console.log("clicked"),"waiting"===a)c("ready"),s("Click at green ASAP!!"),p.current=setTimeout(function(){c("start"),s("Click now~~~~"),h.current=new Date},Math.floor(1e3*Math.random())+2e3);else if("ready"===a)clearTimeout(p.current),c("waiting"),s("Click too early...");else if("start"===a){var e=new Date;c("waiting"),s("click for starting~~"),d(function(t){return[].concat(Object(u.a)(t),[e-h.current])})}}},m),l.a.createElement("div",null,"Average Response Time : ",0===b.length?"N/A ms":l.a.createElement(l.a.Fragment,null,Math.floor(b.reduce(function(e,t){return e+t})/b.length)," ms",l.a.createElement("div",null,l.a.createElement("button",{onClick:O},"Reset!")))),l.a.createElement("div",null,b.map(function(e){return e+", "})))}a(40);var O={rock:"0",scissor:"-142px",paper:"-284px"},v={rock:0,scissor:1,paper:-1};function g(){var e=Object(r.useState)(O.rock),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),u=Object(n.a)(o,2),i=u[0],m=u[1],s=Object(r.useState)(v.rock),E=Object(n.a)(s,2),f=E[0],b=E[1],d=Object(r.useState)(!1),p=Object(n.a)(d,2),h=p[0],g=p[1],j=Object(r.useRef)(),C=Object(r.useCallback)(function(){a===O.rock?c(O.scissor):a===O.scissor?c(O.paper):a===O.paper&&c(O.rock)},[a]);Object(r.useEffect)(function(){return j.current=setInterval(C,50),function(){return clearInterval(j.current)}},[a,C]);var N=function(e){return function(t){g(!0),clearInterval(j.current);var n=v[e]-v[function(e){return Object.entries(O).find(function(t){return t[1]===e})[0]}(a)];0===n?m("Draw"):[-1,2].includes(n)?(m("You win!!"),b(function(e){return e+1})):(m("You lose~~"),b(function(e){return e-1})),setTimeout(function(){g(!1),j.current=setInterval(C,50)},1e3)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null," Welcome to Rock Scissor Paper"),l.a.createElement("div",{id:"computer",style:{background:"url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ".concat(a," 0px")}}),l.a.createElement("div",null,l.a.createElement("button",{id:"rock",className:"btn",disabled:h,onClick:N("rock")},"\ubc14\uc704"),l.a.createElement("button",{id:"scissor",className:"btn",disabled:h,onClick:N("scissor")},"\uac00\uc704"),l.a.createElement("button",{id:"paper",className:"btn",disabled:h,onClick:N("paper")},"\ubcf4")),l.a.createElement("div",null,i),l.a.createElement("div",null,"Score: ",f," points"))}var j=a(9),C=(a(42),l.a.memo(function(e){var t=e.rowIndex,a=e.cellIndex,n=e.dispatch,c=e.cellData,o=Object(r.useCallback)(function(){c||n({type:S,row:t,cell:a})},[c,a,n,t]);return l.a.createElement("td",{onClick:o},c)}));var N=function(e){var t=e.rowData,a=e.rowIndex,n=e.dispatch;return l.a.createElement("tr",null,Array(t.length).fill().map(function(e,r){return l.a.createElement(C,{dispatch:n,rowIndex:a,cellIndex:r,cellData:t[r],key:"d"+r},"")}))};function w(e){var t=e.tableData,a=e.dispatch;return l.a.createElement("table",null,l.a.createElement("tbody",null,Array(t.length).fill().map(function(e,n){return l.a.createElement(N,{dispatch:a,rowIndex:n,key:"t"+n,rowData:t[n]})})))}var I="SET_WINNER",S="CLICK_CELL",M="CHANGE_TURN",y="RESET_GAME",k={winner:"",turn:"O",tableData:[["","",""],["","",""],["","",""]],clickedCell:[-1,-1]},D=function(e,t){switch(t.type){case I:return Object(j.a)({},e,{winner:t.winner});case S:var a=Object(u.a)(e.tableData);return a[t.row][t.cell]=e.turn,Object(j.a)({},e,{tableData:a,clickedCell:[t.row,t.cell]});case M:return Object(j.a)({},e,{turn:"O"===e.turn?"X":"O"});case y:return Object(j.a)({},e,{turn:"O",tableData:[["","",""],["","",""],["","",""]],clickedCell:[-1,-1]});default:return e}};function T(){var e=Object(r.useReducer)(D,k),t=Object(n.a)(e,2),a=t[0],c=t[1],o=a.tableData,u=a.turn,i=a.winner,m=a.clickedCell;return Object(r.useEffect)(function(){var e=Object(n.a)(m,2),t=e[0],a=e[1];if(!(t<0)){var r=!1;if(o[t][0]===u&&o[t][1]===u&&o[t][2]===u&&(r=!0),o[0][a]===u&&o[1][a]===u&&o[2][a]===u&&(r=!0),o[0][0]===u&&o[1][1]===u&&o[2][2]===u&&(r=!0),o[2][0]===u&&o[1][1]===u&&o[0][2]===u&&(r=!0),r)c({type:I,winner:u}),c({type:y});else{var l=!0;o.forEach(function(e){e.forEach(function(e){e||(l=!1)})}),l?(c({type:I,winner:"Nobody"}),c({type:y})):c({type:M})}}},[m]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null," Welcome to Tic Tac Toe "),l.a.createElement(w,{tableData:o,dispatch:c}),i&&l.a.createElement("div",null,i," wins~~~"))}var L=l.a.memo(function(){var e=Object(r.useState)(10),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(12),u=Object(n.a)(o,2),i=u[0],m=u[1],s=Object(r.useState)(20),E=Object(n.a)(s,2),f=E[0],b=E[1],d=Object(r.useContext)(G).dispatch,p=Object(r.useCallback)(function(e){c(e.target.value)},[]),h=Object(r.useCallback)(function(e){m(e.target.value)},[]),O=Object(r.useCallback)(function(e){b(e.target.value)},[]),v=Object(r.useCallback)(function(){d({type:P,row:a,col:i,mine:f})},[a,i,f]);return Object(r.useMemo)(function(){return l.a.createElement("div",null,l.a.createElement("input",{style:{width:50},type:"number",value:a,onChange:p}),l.a.createElement("input",{style:{width:50},type:"number",value:i,onChange:h}),l.a.createElement("input",{style:{width:50},type:"number",value:f,onChange:O}),l.a.createElement("button",{onClick:v},"Start"))},[a,i,f])}),x=function(e){switch(e){case F.NORMAL:case F.MINE:return{background:"#444"};case F.CLICKED_MINE:case F.OPENED:return{background:"white"};case F.QUESTION:case F.QUESTION_MINE:return{background:"yellow"};case F.FLAG:case F.FLAG_MINE:return{background:"red"};default:return{background:"white"}}},A=l.a.memo(function(e){var t=e.rowIndex,a=e.colIndex,n=Object(r.useContext)(G),c=n.tableData,o=n.halted,u=n.dispatch,i=Object(r.useCallback)(function(){if(!o)switch(c[t][a]){case F.OPENED:case F.FLAG:case F.FLAG_MINE:case F.QUESTION:case F.QUESTION_MINE:return;case F.NORMAL:return void u({type:Q,row:t,col:a});case F.MINE:return void u({type:H,row:t,col:a});default:return}},[c[t][a],o]),m=Object(r.useCallback)(function(e){if(e.preventDefault(),!o)switch(c[t][a]){case F.NORMAL:case F.MINE:return void u({type:B,row:t,col:a});case F.FLAG:case F.FLAG_MINE:return void u({type:K,row:t,col:a});case F.QUESTION:case F.QUESTION_MINE:return void u({type:J,row:t,col:a});default:return}},[c[t][a],o]);return Object(r.useMemo)(function(){return l.a.createElement("td",{style:x(c[t][a]),onClick:i,onContextMenu:m},function(e){switch(e){case F.NORMAL:case F.MINE:return"";case F.CLICKED_MINE:return"\ud391";case F.FLAG:case F.FLAG_MINE:return"!";case F.QUESTION:case F.QUESTION_MINE:return"?";default:return e||""}}(c[t][a]))},[c[t][a],o])}),R=l.a.memo(function(e){var t=e.rowIndex,a=Object(r.useContext)(G).tableData;return l.a.createElement("tr",null,a[0]&&Array(a[0].length).fill().map(function(e,a){return l.a.createElement(A,{key:"Td"+a,rowIndex:t,colIndex:a})}))}),_=l.a.memo(function(){var e=Object(r.useContext)(G).tableData;return l.a.createElement("table",{width:"500",height:"2"},l.a.createElement("tbody",null,Array(e.length).fill().map(function(e,t){return l.a.createElement(R,{key:"Tr"+t,rowIndex:t})})))}),F={MINE:-7,NORMAL:-1,QUESTION:-2,FLAG:-3,QUESTION_MINE:-4,FLAG_MINE:-5,CLICKED_MINE:-6,OPENED:0},G=Object(r.createContext)({tableData:[],halted:!0,dispatch:function(){}}),U={tableData:[],gameInfor:{row:0,col:0,mine:0},timer:0,result:"",halted:!0,nOpenCell:0},W=function(e,t,a){for(var n=[],r=0;r<e;r++){var l=[];n.push(l);for(var c=0;c<t;c++)l.push(F.NORMAL)}for(var o=Array(e*t).fill().map(function(e,t){return t}),u=[],i=0;i<a;i++){var m=o.splice(Math.floor(Math.random()*o.length),1)[0];u.push(m)}for(var s=0;s<u.length;s++){var E=Math.floor(u[s]/t),f=u[s]%t;n[E][f]=F.MINE}return n},P="START_GAME",Q="OPEN_CELL",H="CLICKED_MINE",B="FLAG_CELL",K="QUESTION_CELL",J="NORMALIZE_CELL",Y=function(e,t){switch(t.type){case P:return Object(j.a)({},e,{gameInfor:{row:t.row,col:t.col,mine:t.mine},tableData:W(t.row,t.col,t.mine),halted:!1,nOpenCell:0,timer:0});case Q:var a=Object(u.a)(e.tableData);a.forEach(function(e,t){return a[t]=Object(u.a)(e)});var n=[],r=0;!function e(t,l){if(!(t<0||t>a.length-1||l<0||l>a[0].length-1)&&!(a[t][l]<-1)&&!n.includes(t+"/"+l)){n.push(t+"/"+l);var c=[a[t][l-1],a[t][l+1]];a[t-1]&&(c=c.concat(a[t-1][l-1],a[t-1][l],a[t-1][l+1])),a[t+1]&&(c=c.concat(a[t+1][l-1],a[t+1][l],a[t+1][l+1]));var o=c.filter(function(e){return[F.MINE,F.FLAG_MINE,F.QUESTION_MINE].includes(e)}).length;if(0===o){var u=[];t-1>-1&&(u.push([t-1,l-1]),u.push([t-1,l]),u.push([t-1,l+1])),u.push([t,l-1]),u.push([t,l+1]),t+1<a.length&&(u.push([t+1,l-1]),u.push([t+1,l]),u.push([t+1,l+1])),u.forEach(function(t){a[t[0]][t[1]]!==F.OPENED&&e(t[0],t[1])})}a[t][l]===F.NORMAL&&(r+=1),a[t][l]=o}}(t.row,t.col);var l="",c=!1;return e.gameInfor.row*e.gameInfor.col-e.gameInfor.mine===e.nOpenCell+r&&(l="You succeed in ".concat(e.timer,"sec"),c=!0),Object(j.a)({},e,{tableData:a,nOpenCell:e.nOpenCell+r,result:l,halted:c});case H:var o=Object(u.a)(e.tableData);return o[t.row]=Object(u.a)(e.tableData[t.row]),o[t.row][t.col]=F.CLICKED_MINE,Object(j.a)({},e,{tableData:o,halted:!0});case B:var i=Object(u.a)(e.tableData);return i[t.row]=Object(u.a)(e.tableData[t.row]),i[t.row][t.col]===F.MINE?i[t.row][t.col]=F.FLAG_MINE:i[t.row][t.col]=F.FLAG,Object(j.a)({},e,{tableData:i});case K:var m=Object(u.a)(e.tableData);return m[t.row]=Object(u.a)(e.tableData[t.row]),m[t.row][t.col]===F.FLAG_MINE?m[t.row][t.col]=F.QUESTION_MINE:m[t.row][t.col]=F.QUESTION,Object(j.a)({},e,{tableData:m});case J:var s=Object(u.a)(e.tableData);return s[t.row]=Object(u.a)(e.tableData[t.row]),s[t.row][t.col]===F.QUESTION_MINE?s[t.row][t.col]=F.MINE:s[t.row][t.col]=F.NORMAL,Object(j.a)({},e,{tableData:s});case"INCREMENT_TIMER":return Object(j.a)({},e,{timer:e.timer+1});default:return e}},X=function(){var e=Object(r.useReducer)(Y,U),t=Object(n.a)(e,2),a=t[0],c=t[1],o=a.tableData,u=a.halted,i=a.timer,m=a.result,s=Object(r.useMemo)(function(){return{tableData:o,halted:u,dispatch:c}},[o,u]);return Object(r.useEffect)(function(){var e;return!1===u&&(e=setInterval(function(){c({type:"INCREMENT_TIMER"})},1e3)),function(){return clearInterval(e)}},[u]),l.a.createElement(G.Provider,{value:s},l.a.createElement("h3",null," Welcome to Mine Search "),l.a.createElement(L,null),l.a.createElement("div",null,i),l.a.createElement(_,null),l.a.createElement("div",null,m))},Z=a(10),q=(a(1353),function(e){var t=Object(o.g)();return console.log("others",t),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"\xa0 "),l.a.createElement("div",null,"Welcome Others"),l.a.createElement("div",null,"\xa0 "),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"other1",element:l.a.createElement("div",null,"Other1")}),l.a.createElement(o.a,{path:"other2",element:l.a.createElement("div",null,"Other2")}),l.a.createElement(o.a,{path:"other3",element:l.a.createElement("div",null,"Other3")}),l.a.createElement(o.a,{path:"*",element:l.a.createElement("div",null,"no page 404")})))});function z(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],u=t[1],i=function(e){var t=Array(a.length).fill("");t[e]="active",u(t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," Welcome to Game World"),l.a.createElement(c.b,{to:"/"},"Home"),l.a.createElement("p",null),l.a.createElement("div",null,"Choose any game you want..."),l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement("li",{className:"list ".concat(a[0])},l.a.createElement(c.b,{className:"nl",onClick:function(){return i(0)},to:"/Games/NumberBaseball"},l.a.createElement("span",{className:"icon"},l.a.createElement(Z.BaseballOutline,{color:"#00000",title:"Baseball",height:"40px",width:"40px"})),l.a.createElement("span",{className:"text"},"Number Baseball"))),l.a.createElement("li",{className:"list ".concat(a[1])},l.a.createElement(c.b,{className:"nl",onClick:function(){return i(1)},to:"/Games/ResponseTest"},l.a.createElement("span",{className:"icon"},l.a.createElement(Z.SpeedometerOutline,{color:"#00000",title:"Speedometer",height:"40px",width:"40px"})),l.a.createElement("span",{className:"text"},"Response Test"))),l.a.createElement("li",{className:"list ".concat(a[2])},l.a.createElement(c.b,{className:"nl",onClick:function(){return i(2)},to:"/Games/RSP"},l.a.createElement("span",{className:"icon"},l.a.createElement(Z.CutOutline,{color:"#00000",title:"RSP",height:"40px",width:"40px"})),l.a.createElement("span",{className:"text"},"Rock Scissors Paper"))),l.a.createElement("li",{className:"list ".concat(a[3])},l.a.createElement(c.b,{className:"nl",onClick:function(){return i(3)},to:"/Games/Lotto"},l.a.createElement("span",{className:"icon"},l.a.createElement(Z.DiceOutline,{color:"#00000",title:"Lotto",height:"40px",width:"40px"})),l.a.createElement("span",{className:"text"},"Lotto"))),l.a.createElement("li",{className:"list ".concat(a[4])},l.a.createElement(c.b,{className:"nl",onClick:function(){return i(4)},to:"/Games/TicTacToe"},l.a.createElement("span",{className:"icon"},l.a.createElement(Z.CloseCircleOutline,{color:"#00000",title:"TicTacToe",height:"40px",width:"40px"})),l.a.createElement("span",{className:"text"},"Tic Tac Toe"))),l.a.createElement("li",{className:"list ".concat(a[5])},l.a.createElement(c.b,{className:"nl",onClick:function(){return i(5)},to:"/Games/MineSearch"},l.a.createElement("span",{className:"icon"},l.a.createElement(Z.AppsOutline,{color:"#00000",title:"Mine",height:"40px",width:"40px"})),l.a.createElement("span",{className:"text"},"Mine Search"))),a.length>0?l.a.createElement("div",{className:"indicator"}):null)),l.a.createElement(c.b,{to:"/Games/Others/other1"},"other1")," \xa0",l.a.createElement(c.b,{to:"/Games/Others/other2"},"other2")," \xa0",l.a.createElement(c.b,{to:"/Games/Others/other3"},"other3"),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/NumberBaseball",element:l.a.createElement(p,null)}),l.a.createElement(o.a,{path:"/ResponseTest",element:l.a.createElement(h,null)}),l.a.createElement(o.a,{path:"/RSP",element:l.a.createElement(g,null)}),l.a.createElement(o.a,{path:"/Lotto",element:l.a.createElement(s,null)}),l.a.createElement(o.a,{path:"/TicTacToe",element:l.a.createElement(T,null)}),l.a.createElement(o.a,{path:"/MineSearch",element:l.a.createElement(X,null)}),l.a.createElement(o.a,{path:":name/*",element:l.a.createElement(q,null)})))}a.d(t,"a",function(){return z})},24:function(e,t,a){"use strict";var n=a(5),r=a(3),l=a.n(r),c=a(6);function o(e){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("a",{href:"/",onClick:function(t){t.preventDefault(),e.onChange()}},e.title)),l.a.createElement(c.b,{to:"/"},"Home"),l.a.createElement("p",null),e.sub)}var u=l.a.memo(function(e){return l.a.createElement("nav",null,console.log("TOD is rendered.."),l.a.createElement("ul",null,e.lists.map(function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:"/contents/"+t,onClick:function(t){t.preventDefault(),e.onChange({id:a})}},t))})))},function(e,t){return e.lists===t.lists});function i(e){return l.a.createElement("article",null,l.a.createElement("h2",null,e.title),e.desc)}function m(e){return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/create/",onClick:function(t){t.preventDefault(),e.onModeChange("create")}}," Create ")),console.log(""===e.index),""!==e.index?l.a.createElement("li",null,l.a.createElement("a",{href:"/update/",onClick:function(t){t.preventDefault(),e.onModeChange("update")}}," Update ")):"",""!==e.index?l.a.createElement("li",null,l.a.createElement("input",{type:"button",value:"delete",onClick:function(t){t.preventDefault(),e.onModeChange("delete")}})):"")}function s(e){return l.a.createElement("div",null,l.a.createElement("h2",null,"Create"),l.a.createElement("form",{action:"/create_process",method:"post",onSubmit:function(t){t.preventDefault(),e.onCreateContent(t.target.title.value,t.target.desc.value)}},l.a.createElement("p",null,l.a.createElement("input",{type:"text",name:"title",placeholder:"input title"})," "),l.a.createElement("p",null,l.a.createElement("textarea",{name:"desc",placeholder:"input description"})),l.a.createElement("p",null,l.a.createElement("input",{type:"submit"}))))}function E(e){var t=Object(r.useState)(e.title),a=Object(n.a)(t,2),c=a[0],o=a[1],u=Object(r.useState)(e.desc),i=Object(n.a)(u,2),m=i[0],s=i[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"Update"),l.a.createElement("form",{action:"/update_process",method:"post",onSubmit:function(t){t.preventDefault(),e.onUpdateContent(t.target.title.value,t.target.desc.value)}},l.a.createElement("p",null,l.a.createElement("input",{type:"text",name:"title",placeholder:"input title",value:c,onChange:function(e){o(e.target.value)}})," "),l.a.createElement("p",null,l.a.createElement("textarea",{name:"desc",placeholder:"input description",value:m,onChange:function(e){s(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("input",{type:"submit"}))))}a.d(t,"a",function(){return b});var f=["HTML is for information...","CSS is for design...","JS is for programming..."];function b(){var e=Object(r.useState)(["HTML","CSS","JS"]),t=Object(n.a)(e,2),a=t[0],c=t[1],b=Object(r.useState)("Select..."),d=Object(n.a)(b,2),p=d[0],h=d[1],O=Object(r.useState)("Please, Contents~~"),v=Object(n.a)(O,2),g=v[0],j=v[1],C=Object(r.useState)("read"),N=Object(n.a)(C,2),w=N[0],I=N[1],S=Object(r.useState)(""),M=Object(n.a)(S,2),y=M[0],k=M[1];console.log(typeof y);return l.a.createElement("div",{className:"Home"},l.a.createElement(o,{title:"Welcome to Dictionary",sub:"All words related to Internet...",onChange:function(){h("Welcome~"),j("React~~~"),I("read"),k("")}}),l.a.createElement(u,{lists:a,onChange:function(e){var t=String(e.id);h(a[t]),j(f[t]),k(t),I("read")}}),l.a.createElement(m,{index:y,onModeChange:function(e){I(e)}}),"read"===w?l.a.createElement(i,{title:p,desc:g}):"","create"===w?l.a.createElement(s,{onCreateContent:function(e,t){console.log(e,t);var n=a.concat(e);c(n),f.push(t);var r=n.length-1;h(n[r]),j(f[r]),k(r),I("read")}}):"","update"===w?l.a.createElement(E,{title:p,desc:g,onUpdateContent:function(e,t){console.log(e,t);var n=Number(y),r=Array.from(a);r[n]=e,c(r),f[n]=t,h(r[n]),j(f[n]),I("read")}}):"","delete"===w?(c(function(e,t){var a=Array.from(t);return a.splice(e,1),a}(y,a)),console.log("del2"),h("Welcome~"),j("React~~~"),k(""),void I("read")):"")}},25:function(e,t,a){e.exports=a(1356)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){}},[[25,3,2]]]);
//# sourceMappingURL=main.deb0a91a.chunk.js.map