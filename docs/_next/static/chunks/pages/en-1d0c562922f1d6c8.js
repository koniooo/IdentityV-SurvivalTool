(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{534:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en",function(){return s(1500)}])},1500:function(e,t,s){"use strict";let i;s.r(t),s.d(t,{default:function(){return er}});var r=s(5893),a=s(9008),n=s.n(a),c=s(7294),l=s(2099),m=s(5623),o=s(9397),d=s.n(o),x=s(671),h=s.n(x),T=s(7958),p=s.n(T);let u=e=>{let{isPatrollerTimerActive:t,isTeleportTimerActive:s,isBlinkTimerActive:i,isUltraLongTimerActive:a,elapsedTime:n,setElapsedTime:l,isStartTimerActive:o,setIsStartTimerActive:x,patrollerTimerId:T,teleportTimerId:u,blinkTimerId:v,ultraLongTimerId:j,primaryTimerId:N,setPatrollerTime:f,setTeleportTime:y,setBlinkTime:I,setUltraLongTime:g,setIsPatrollerTimerActive:A,setIsTeleportTimerActive:C,setIsBlinkTimerActive:S,setIsUltraLongTimerActive:w,setHasConfinedSpace:k,setHasWantedOrder:b,setHasInsolence:L,setHasDetention:P,setHasTrumpCard:E,setHunterId:_,setPrimaryTime:H,isPrimaryTimerActive:B,setIsPrimaryTimerActive:M,setIsSecondaryTimerActive:O,setIsTertiaryTimerActive:R,hunterId:F,setIsTrumpCardAlertOn:D,setIsTrumpCardUsed:z}=e,Q=(0,c.useRef)(0),U=(e,t,s,i,r)=>{if(e){clearInterval(t.current),i(s);let e=setInterval(()=>{i(e=>e-1)},1e3);t.current=Number(e)}else i(s),r(!0)};(0,c.useEffect)(()=>{(0===n||202===n||332===n||n===-m.gc)&&(0===n?(F===m.$i&&U(B,N,8,H,M),U(t,T,30,f,A),U(s,u,40,y,C),U(i,v,60,I,S),U(a,j,30,g,w)):332===n?(clearInterval(Q.current),x(!1),l(-m.gc)):(clearInterval(Q.current),x(!1)))},[n]);let V=n===-m.gc&&!o,W=-m.gc<=n&&n<202&&o,Z=202===n&&!o,G=202<=n&&n<332&&o;return(0,r.jsx)("button",{type:"button",className:"".concat(o?d().yellow:d().green,"  ").concat(h().startButton),onClick:()=>{if(V){A(!1),C(!1),S(!1),w(!1),M(!1),O(!1),R(!1),k(!1),b(!1),L(!1),E(!1),P(!1),_(m.$i),z(!1),D(!1);let e=setInterval(()=>{l(e=>e+1)},1e3);Q.current=Number(e),x(!0)}else if(W){if(n<0){clearInterval(Q.current),l(0);let e=setInterval(()=>{l(e=>e+1)},1e3);Q.current=Number(e)}else l(202)}else if(Z){let e=setInterval(()=>{l(e=>e+1)},1e3);Q.current=Number(e),x(!0)}else G&&l(-m.gc)},children:(()=>{if(V)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().start),children:(0,r.jsx)("p",{children:"START"})}),(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().description),children:(0,r.jsx)("p",{children:"*tap when the camera begins to revolve after the screen cracks"})})]});if(W){if(n<0)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().ready),children:[(0,r.jsx)("p",{className:h().text,children:"to game start"}),(0,r.jsx)("p",{className:h().time,children:-n})]}),(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().description),children:(0,r.jsx)("p",{children:"*tap to start the game immediately"})})]});if(n<40)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().firstLine),children:[(0,r.jsx)("p",{className:h().text,children:'"Constrain" active'}),(0,r.jsx)("p",{className:h().time,children:40-n})]}),(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().secondLine),children:[(0,r.jsx)("p",{className:h().text,children:'to "Quenching Effect / Flywheel Effect"'}),(0,r.jsx)("p",{className:h().time,children:50-n})]})]});if(n<50)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().firstLine),children:(0,r.jsx)("p",{className:h().text,children:'"Constrain" deactivated'})}),(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().secondLine),children:[(0,r.jsx)("p",{className:h().text,children:'to "Quenching Effect / Flywheel Effect"'}),(0,r.jsx)("p",{className:h().time,children:50-n})]})]});if(n<55)return(0,r.jsxs)("div",{className:h().flexContainer,children:[(0,r.jsx)("p",{className:h().text,children:'"Quenching Effect" active'}),(0,r.jsx)("p",{className:h().time,children:55-n})]});else if(n<65)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().firstLine),children:(0,r.jsx)("p",{className:h().text,children:'"Quenching Effect" deactivated'})}),(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().secondLine),children:[(0,r.jsx)("p",{className:h().text,children:'to "Accelerate Decoding"'}),(0,r.jsx)("p",{className:h().time,children:202-n})]})]});else return(0,r.jsxs)("div",{className:h().flexContainer,children:[(0,r.jsx)("p",{className:h().text,children:'to "Accelerate Decoding"'}),(0,r.jsx)("p",{className:h().time,children:202-n})]})}return Z?(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().gateOpen," ").concat(p().gateOpen),children:(0,r.jsx)("p",{children:"Exit Gate activation"})}):G?n<222?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().firstLine),children:[(0,r.jsx)("p",{className:h().text,children:'"Claustrophobia" active'}),(0,r.jsx)("p",{className:h().time,children:222-n})]}),(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().secondLine),children:[(0,r.jsx)("p",{className:h().text,children:'"Detention" active'}),(0,r.jsx)("p",{className:h().time,children:322-n})]})]}):n<232?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"".concat(h().flexContainer," ").concat(h().firstLine),children:(0,r.jsx)("p",{className:h().text,children:'"Claustrophobia" deactivated'})}),(0,r.jsxs)("div",{className:"".concat(h().flexContainer," ").concat(h().secondLine),children:[(0,r.jsx)("p",{className:h().text,children:'"Detention" active'}),(0,r.jsx)("p",{className:h().time,children:322-n})]})]}):n<322?(0,r.jsxs)("div",{className:h().flexContainer,children:[(0,r.jsx)("p",{className:h().text,children:'"Detention" active'}),(0,r.jsx)("p",{className:h().time,children:322-n})]}):(0,r.jsx)("div",{className:h().flexContainer,children:(0,r.jsx)("p",{className:h().text,children:'"Detention" deactivated'})}):void 0})()})};var v=s(5607),j=s.n(v),N=s(8587),f=s(3406),y=s(4988),I=s(9214),g=s(3226),A=s.n(g);let C=e=>{let{skill:t,isTimerActive:s,time:i,setIsTimerActive:a,hunterId:n,setTime:c,timerId:l}=e,m=f.Q[n],o=m.primaryCoolTime,d=m.secondaryCoolTime||[0,0],x=m.tertiaryCoolTime||[0,0];return("primary"===t?1===o.length:"secondary"===t?1===d.length:1===x.length)?(0,r.jsxs)(y.u,{time:i,isTimerActive:s,setIsTimerActive:a,children:[(0,r.jsx)("p",{className:A().timeText,children:i}),"primary"===t&&(0,r.jsx)("p",{className:A().skillText,children:(0,r.jsx)("span",{children:m.primaryNameEn})}),"secondary"===t&&(0,r.jsx)("p",{className:A().skillText,children:(0,r.jsx)("span",{children:m.secondaryNameEn})}),"tertiary"===t&&(0,r.jsx)("p",{className:A().skillText,children:(0,r.jsx)("span",{children:m.tertiaryNameEn})})]}):(0,r.jsxs)(I.w,{secondCoolTime:"primary"===t?o[1]:"secondary"===t?d[1]:x[1],time:i,setTime:c,isTimerActive:s,setIsTimerActive:a,timerId:l,children:["primary"===t&&(i>o[1]?(0,r.jsx)("p",{className:A().timeText,children:i-o[1]}):(0,r.jsx)("p",{className:A().timeText,children:i})),"primary"===t&&(0,r.jsx)("p",{className:A().skillText,children:(0,r.jsx)("span",{children:m.primaryNameEn})}),"secondary"===t&&(i>d[1]?(0,r.jsx)("p",{className:A().timeText,children:i-d[1]}):(0,r.jsx)("p",{className:A().timeText,children:i})),"secondary"===t&&(0,r.jsx)("p",{className:A().skillText,children:(0,r.jsx)("span",{children:m.secondaryNameEn})}),"tertiary"===t&&(i>x[1]?(0,r.jsx)("p",{className:A().timeText,children:i-x[1]}):(0,r.jsx)("p",{className:A().timeText,children:i})),"tertiary"===t&&(0,r.jsx)("p",{className:A().skillText,children:(0,r.jsx)("span",{children:m.tertiaryNameEn})})]})};var S=s(827),w=s.n(S),k=s(1559);let b=e=>{let{time:t,setTime:s,isTimerActive:i,setIsTimerActive:a,skill:n}=e,c=f.Q[k.q];return(0,r.jsxs)("button",{type:"button",className:i?t>3?"".concat(d().yellow," ").concat(d().yellowText):"".concat(d().red," ").concat(d().redText):"".concat(d().green," ").concat(d().greenText),onClick:()=>{i?s(Math.floor(.6*t)):a(!0)},children:[(0,r.jsx)("p",{className:A().timeText,children:t}),"primary"===n&&(0,r.jsx)("p",{className:"".concat(A().skillText," ").concat(w().skillText),children:(0,r.jsx)("span",{children:c.primaryNameEn})}),"secondary"===n&&(0,r.jsx)("p",{className:"".concat(A().skillText," ").concat(w().skillText),children:(0,r.jsx)("span",{children:c.secondaryNameEn})}),"primary"===n&&(0,r.jsx)("div",{className:w().description,children:"*tap each time Spawn"}),"secondary"===n&&(0,r.jsx)("div",{className:w().description,children:"Follower attack hits"})]})};var L=s(1764),P=s.n(L),E=s(9731),_=s.n(E);let H=e=>{let{hunterId:t,primaryTime:s,secondaryTime:i,tertiaryTime:a,setPrimaryTime:n,setSecondaryTime:c,setTertiaryTime:l,isPrimaryTimerActive:m,isSecondaryTimerActive:o,isTertiaryTimerActive:d,setIsPrimaryTimerActive:x,setIsSecondaryTimerActive:h,setIsTertiaryTimerActive:T,primaryTimerId:p,secondaryTimerId:u,tertiaryTimerId:v}=e,j=f.Q[t];return 10===t?(0,r.jsxs)("div",{className:P().double,children:[(0,r.jsx)(N.n,{children:(0,r.jsx)(b,{skill:"primary",time:s,setTime:n,isTimerActive:m,setIsTimerActive:x})}),(0,r.jsx)(N.n,{children:(0,r.jsx)(b,{skill:"secondary",time:i,setTime:c,isTimerActive:o,setIsTimerActive:h})})]}):j.tertiaryCoolTime?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{className:"".concat(P().triple," ").concat(_().triple),children:(0,r.jsx)(C,{skill:"primary",hunterId:t,time:s,setTime:n,isTimerActive:m,setIsTimerActive:x,timerId:p})}),(0,r.jsx)("section",{className:"".concat(P().triple," ").concat(_().triple),children:(0,r.jsx)(C,{skill:"secondary",hunterId:t,time:i,setTime:c,isTimerActive:o,setIsTimerActive:h,timerId:u})}),(0,r.jsx)("section",{className:"".concat(P().triple," ").concat(_().triple),children:(0,r.jsx)(C,{skill:"tertiary",hunterId:t,time:a,setTime:l,isTimerActive:d,setIsTimerActive:T,timerId:v})})]}):j.secondaryCoolTime?(0,r.jsxs)("div",{className:P().double,children:[(0,r.jsx)(N.n,{children:(0,r.jsx)(C,{skill:"primary",hunterId:t,time:s,setTime:n,isTimerActive:m,setIsTimerActive:x,timerId:p})}),(0,r.jsx)(N.n,{children:(0,r.jsx)(C,{skill:"secondary",hunterId:t,time:i,setTime:c,isTimerActive:o,setIsTimerActive:h,timerId:u})})]}):(0,r.jsx)("div",{className:P().single,children:(0,r.jsx)(C,{skill:"primary",hunterId:t,time:s,setTime:n,isTimerActive:m,setIsTimerActive:x,timerId:p})})};var B=s(9410),M=s(8883),O=s.n(M);let R=e=>{let{hunterId:t,setHunterId:s}=e;return(0,r.jsx)("select",{className:O().hunterSelect,name:"hunter",id:"hunter-select",value:t,onChange:e=>{s(Number(e.target.value))},children:f.Q.map((e,t)=>(0,r.jsx)("option",{value:t,children:e.nameEn},t))})};var F=s(1664),D=s.n(F),z=s(2410),Q=s.n(z);let U=()=>(0,r.jsx)(D(),{className:Q().a,href:"/",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"#292b2f",children:[(0,r.jsx)("path",{d:"M180.2 500C81 500 0 419 0 319.8c0-9.6 8-17.5 17.4-17.5s17.5 8 17.5 17.5c0 68.8 47.9 126.5 112.3 141.6L141 451a17.5 17.5 0 1 1 30-18l24.5 40.8c3.2 5.4 3.2 12.1.2 17.5-3.3 5.3-9 8.8-15.4 8.8zM482.6 197.7c-9.6 0-17.5-8-17.5-17.5 0-68.8-47.9-126.5-112.3-141.6L359 49a17.5 17.5 0 1 1-30 18l-24.5-40.8c-3.2-5.4-3.2-12.1-.2-17.5 3.3-5.3 9-8.8 15.4-8.8C419 0 500 81 500 180.2c0 9.6-8 17.5-17.4 17.5zM105.3 153.3a2.4 2.4 0 0 0-3.7-1.7c-8 5.3-13 12.1-13 19.5 0 2.2 0 7.2 7.9 7 3.1-.2 6.5-1.2 10-2.7 1-.5 1.5-1.6 1.3-2.6-1-6.1-1.8-12.7-2.5-19.5zM135.3 140.7l-6.5.8c-1.2.2-2 1.3-2 2.5l.5 8.2c.2 2.2 3 3 4.3 1.2 2.2-2.8 4.2-6 6-9.2 1-1.7-.4-3.7-2.3-3.5z"}),(0,r.jsx)("path",{d:"M249 178.3v-91c1-47-22.2-70.3-70.4-70.3h-91c-47 0-70.3 23.3-70.3 70.3v91.3c0 48 23.3 71.2 70.3 70h91.3c48 1.2 71.2-22 70-70.3zm-101.8 29.5c-.9.1-1.7-.2-2.3-1l-9.4-13c-1-1.5-.2-3.6 1.6-3.8 23.8-3.5 38.5-13.2 38.5-29.3 0-7.2-3.5-13.7-11-18a2.4 2.4 0 0 0-3.3.9 166.6 166.6 0 0 1-28 36.3c-6 5.3-24.3 17-42.8 17.4-15.4 0-24.8-9.6-24.8-24.4 0-21.3 15.1-38.2 36.6-47.6.8-.4 1.4-1.3 1.4-2.3l-.3-21.2c0-1.4-1-2.4-2.4-2.4-8.8.3-18.1.6-24 .6h-.4c-1.3 0-2.3-1-2.4-2.3l-.9-17.3c0-1.4 1-2.6 2.5-2.6h25.7c1.3 0 2.3-1 2.3-2.3.3-5 .4-10.4.6-15.4 0-1.3 1.2-2.3 2.6-2.2l19.7 1.5c1.3 0 2.3 1.2 2.2 2.5l-.7 12.4c-.1 1.4 1 2.7 2.5 2.6 15.4-1 31.1-2.7 47.3-5.8 1.4-.3 2.7.7 2.9 2.1l1.6 18c0 1.3-.8 2.5-2 2.7a518.2 518.2 0 0 1-51.6 4.6c-1.2 0-2.2 1-2.3 2.3l-.2 14.6c0 1.4 1.3 2.5 2.7 2.3 3.8-.5 10-1.1 16-1 1 0 2-.7 2.3-1.7l.3-1.1c.3-1.2 1.5-2 2.8-1.8l18.3 3.2c1.4.3 2.2 1.7 1.8 3-.3 1.3.3 2.5 1.5 3 16.2 6 28.5 18.6 28.5 39 0 24.9-13.6 42-53.4 47.5zM364.4 246.5a118.2 118.2 0 1 0 0 236.4 118.2 118.2 0 0 0 0-236.4zM428 427.7h-22c-1.4 0-2.8-1-3.2-2.3l-9.8-28.7a3.5 3.5 0 0 0-3.2-2.3h-51c-1.6 0-2.9.9-3.4 2.3l-10 28.7a3.5 3.5 0 0 1-3.3 2.3h-21.2c-2.4 0-4-2.4-3.2-4.7l50.5-133a3.5 3.5 0 0 1 3.2-2.3h26.8c1.4 0 2.7.9 3.2 2.2L431.2 423c.8 2.3-.8 4.7-3.2 4.7z"}),(0,r.jsx)("path",{d:"M364.7 321h-.4l-17.2 48.7c-.8 2.3.8 4.7 3.2 4.7h28c2.3 0 4-2.4 3.2-4.6L364.7 321z"})]})}),V=e=>{let{isTrumpCardTimerActive:t,elapsedTime:s,isStartTimerActive:i,hasConfinedSpace:a,setHasConfinedSpace:n,hasWantedOrder:c,setHasWantedOrder:m,hasInsolence:o,setHasInsolence:d,hasTrumpCard:x,setHasTrumpCard:h,hasDetention:T,setHasDetention:p,hunterId:u,setHunterId:v,primaryTime:y,secondaryTime:I,tertiaryTime:g,setPrimaryTime:A,setSecondaryTime:C,setTertiaryTime:S,isPrimaryTimerActive:w,isSecondaryTimerActive:k,isTertiaryTimerActive:b,setIsPrimaryTimerActive:L,setIsSecondaryTimerActive:P,setIsTertiaryTimerActive:E,primaryTimerId:_,secondaryTimerId:M,tertiaryTimerId:O}=e;return(0,r.jsxs)(l.R,{isEdgeRow:!1,children:[(0,r.jsx)(N.n,{children:(0,r.jsx)(B.I,{isTrumpCardTimerActive:t,elapsedTime:s,isStartTimerActive:i,hasConfinedSpace:a,setHasConfinedSpace:n,hasWantedOrder:c,setHasWantedOrder:m,hasInsolence:o,setHasInsolence:d,hasTrumpCard:x,setHasTrumpCard:h,hasDetention:T,setHasDetention:p})}),(0,r.jsxs)("div",{className:j().secondRowRightDiv,children:[(0,r.jsxs)("div",{className:j().hunterSelectAndLanguage,children:[(0,r.jsx)("section",{className:"".concat(j().minusHunterId," ").concat(0===u&&j().disabled),children:(0,r.jsx)("button",{onClick:()=>{0!==u&&v(e=>e-1)},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 210 234.4",fill:"#292b2f",children:(0,r.jsx)("path",{d:"M180 228.8c-4.3 0-8.6-1-12.5-3.4l-150-86.6a25 25 0 0 1 0-43.3L167.5 9a25 25 0 0 1 25 43.3L80 117.2l112.5 65a25 25 0 0 1-12.5 46.6z"})})})}),(0,r.jsx)("section",{className:j().hunterSelectSec,children:(0,r.jsx)(R,{hunterId:u,setHunterId:v})}),(0,r.jsx)("section",{className:"".concat(j().plusHunterId," ").concat(u===f.Q.length-1&&j().disabled),children:(0,r.jsx)("button",{onClick:()=>{u!==f.Q.length-1&&v(e=>e+1)},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 210 234.4",fill:"#292b2f",children:(0,r.jsx)("path",{d:"M30 5.6c4.3 0 8.6 1 12.5 3.3l150 86.6a25 25 0 0 1 0 43.3l-150 86.6a25 25 0 0 1-25-43.3l112.5-65L17.5 52.3A25 25 0 0 1 30 5.6z"})})})}),(0,r.jsx)("section",{className:j().languageSwitch,children:(0,r.jsx)(U,{})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("section",{className:j().hunterSkillTimerSec,children:(0,r.jsx)(H,{hunterId:u,primaryTime:y,secondaryTime:I,tertiaryTime:g,setPrimaryTime:A,setSecondaryTime:C,setTertiaryTime:S,isPrimaryTimerActive:w,isSecondaryTimerActive:k,isTertiaryTimerActive:b,setIsSecondaryTimerActive:P,setIsPrimaryTimerActive:L,setIsTertiaryTimerActive:E,primaryTimerId:_,secondaryTimerId:M,tertiaryTimerId:O})})})]})]})};var W=s(9825),Z=s(6750),G=s.n(Z);let X=e=>{let{isTrumpCardTimerActive:t,patrollerTime:s,setPatrollerTime:a,isPatrollerTimerActive:n,setIsPatrollerTimerActive:c,teleportTime:l,setTeleportTime:o,isTeleportTimerActive:x,setIsTeleportTimerActive:h,blinkTime:T,setBlinkTime:p,isBlinkTimerActive:u,setIsBlinkTimerActive:v,setHasTrumpCard:j,elapsedTime:N,isTrumpCardUsed:f,setIsTrumpCardUsed:y,isTrumpCardAlertOn:I,setIsTrumpCardAlertOn:g}=e,A=(e,t,s,i,r)=>{i(Math.floor(e/t*s)),r(!0)};return(0,r.jsxs)("button",{type:"button",className:"".concat(G().trumpCardButton,"  \n      ").concat(f&&G().used,"\n      ").concat(t?d().yellow:d().green),onClick:()=>{f||(1===[n,x,u].filter(e=>e).length?(j(!0),y(!0),g(!1),n?(A(s,m.NV,m.PP,o,h),A(s,m.NV,m.rT,p,v)):x?(A(l,m.PP,m.NV,a,c),A(l,m.PP,m.rT,p,v)):(v(!1),A(T,m.rT,m.NV,a,c),A(T,m.rT,m.PP,o,h))):(clearTimeout(i),g(!0),i=setTimeout(()=>{g(!1)},3e3)))},children:[I&&(0,r.jsxs)("p",{className:"".concat(G().text," ").concat(G().alertText),children:["*tap when there is only",(0,r.jsx)("br",{}),"one trait in the count"]}),!I&&t&&(0,r.jsx)("p",{className:"".concat(G().text," ").concat(G().timeText),children:m.NZ-N}),!f&&(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 82.84445 68.33504",fill:"#292b2f",className:G().trumpCardIcon,children:[(0,r.jsx)("path",{d:"M34.11587.06063c3.89676.08284,4.54862.42648,5.514,4.177,1.578,6.13032,9.0601,40.44132,9.62647,42.86169.98856,4.22467.32631,6.12392-3.302,8.63813-4.497,3.1161-15.58022,10.69628-16.57732,11.44-2.5999,1.93922-4.51442,1.45083-5.94071-1.53142C22.40313,63.48573,11.13706,11.26055,10.08271,6.0224,9.38733,2.56764,11.08346.5212,14.67745.42822,18.04187.34116,31.004-.00552,34.11587.06063Z"}),(0,r.jsx)("path",{d:"M67.90147,4.90388c-.00635.297-5.34145,25.646-5.4294,25.98476-1.07578,4.14425-2.67724,4.66054-5.86647,1.79489-2.127-1.91117-4.63056-3.35536-6.585-5.48034C48.869,25.951,48.058,24.7136,48.55133,22.87615c1.60476-5.9768,4.553-19.52289,4.68354-20.25323C53.62614.43305,55.06764-.129,57.05339.02338c2.35418.18071,4.714.28828,7.06784.47293C67.22191.73955,67.97508,1.46233,67.90147,4.90388Z"}),(0,r.jsx)("path",{d:"M53.99623,50.87992c-1.7282-.0576-2.18382-1.0311-1.429-2.51768,1.80542-3.55568,3.54037-7.15544,5.53411-10.60417,1.28224-2.218,2.21864-2.306,3.88985-.313,1.16017,1.38355,2.1138,1.07505,3.16559.31922,4.9672-3.56944,9.75533-7.24156,12.70941-12.9069A17.16727,17.16727,0,0,0,79.53162,14.3648c-.41166-3.26-1.28256-4.00378-4.70306-4.80133a4.0989,4.0989,0,0,1-1.07085-.32427c-.95384-.53324-3.0954-.18672-2.86948-.959.46639-1.59432,2.34585-.82034,3.55036-.6344,4.239.65439,6.8834,3.10039,7.9,7.37133a21.14809,21.14809,0,0,1-.79607,11.77324,38.53849,38.53849,0,0,1-11.23271,16.9168c-1.65843,1.47537-4.07909,2.72181-2.09908,5.73793.54617.832-.49256,1.57072-1.49268,1.59106C64.59844,51.07932,56.11418,50.95052,53.99623,50.87992Z"}),(0,r.jsx)("path",{d:"M0,50.51831a12.44238,12.44238,0,0,1,.62681-4.79043c.43677-1.0585,1.66-1.57039.14855-3.28039-1.52039-1.72009.43317-2.719,1.96193-3.13645,3.23321-.88284,6.52892-1.55111,9.72871-2.53591,1.60314-.49341,1.75947.11518,1.60955,1.35666-.269,2.22725-.53056,4.45619-.85456,6.67575-.2602,1.78248-1.3882,5.15224-3.09641,3.272-.83776-.92209-1.43876.78893-1.52855,1.74109a7.39482,7.39482,0,0,0,2.144,6.49965,11.91424,11.91424,0,0,0,7.9795,3.593c.47976.0133,1.0898.09719,1.121.70033.03367.65192-.6103.6944-1.07513.749A22.86125,22.86125,0,0,1,3.10329,57.68408C.53285,55.98873.04211,54.42142,0,50.51831Z"})]}),f&&(0,r.jsx)("a",{href:"https://twitter.com/konio_tracy",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250 203.09887",fill:"#292b2f",className:G().twitterIcon,children:(0,r.jsx)("path",{d:"M78.6,203.1c94.3,0,145.9-78.2,145.9-145.9,0-2.2,0-4.4-.1-6.6A107.41429,107.41429,0,0,0,250,24.1a104.26084,104.26084,0,0,1-29.5,8.1A51.248,51.248,0,0,0,243,3.8a100.89757,100.89757,0,0,1-32.6,12.4A51.33635,51.33635,0,0,0,123,63,145.84067,145.84067,0,0,1,17.4,9.4,51.20116,51.20116,0,0,0,33.3,77.8,50.268,50.268,0,0,1,10,71.4V72a51.36843,51.36843,0,0,0,41.2,50.3,50.571,50.571,0,0,1-23.2.9,51.307,51.307,0,0,0,47.9,35.6,102.985,102.985,0,0,1-63.7,22c-4.1,0-8.2-.3-12.2-.7a145.094,145.094,0,0,0,78.6,23",transform:"translate(0 -0.00114)"})})})]})};var $=s(9752),q=s(3365),J=s.n(q);let K=e=>{let{isTrumpCardTimerActive:t,patrollerTime:s,setPatrollerTime:i,isPatrollerTimerActive:a,setIsPatrollerTimerActive:n,teleportTime:c,setTeleportTime:m,isTeleportTimerActive:o,setIsTeleportTimerActive:d,blinkTime:x,setBlinkTime:h,isBlinkTimerActive:T,setIsBlinkTimerActive:p,ultraLongTime:u,isUltraLongTimerActive:v,setIsUltraLongTimerActive:j,setHasTrumpCard:N,elapsedTime:f,isTrumpCardUsed:y,setIsTrumpCardUsed:I,isTrumpCardAlertOn:g,setIsTrumpCardAlertOn:A}=e;return(0,r.jsxs)(l.R,{isEdgeRow:!0,children:[(0,r.jsx)("section",{className:J().trump,children:(0,r.jsx)(X,{isTrumpCardTimerActive:t,patrollerTime:s,setPatrollerTime:i,isPatrollerTimerActive:a,setIsPatrollerTimerActive:n,teleportTime:c,setTeleportTime:m,isTeleportTimerActive:o,setIsTeleportTimerActive:d,blinkTime:x,setBlinkTime:h,isBlinkTimerActive:T,setIsBlinkTimerActive:p,setHasTrumpCard:N,elapsedTime:f,isTrumpCardUsed:y,setIsTrumpCardUsed:I,isTrumpCardAlertOn:g,setIsTrumpCardAlertOn:A})}),(0,r.jsx)("section",{className:J().ultraLong,children:(0,r.jsx)($.I,{isUltraLongTimerActive:v,setIsUltraLongTimerActive:j,ultraLongTime:u})})]})};var Y=s(3486),ee=s.n(Y),et=s(1810),es=s.n(et);let ei=()=>{let[e,t]=(0,c.useState)(-5),[s,i]=(0,c.useState)(90),[a,n]=(0,c.useState)(100),[m,o]=(0,c.useState)(150),[d,x]=(0,c.useState)(150),[h,T]=(0,c.useState)(!1),[p,v]=(0,c.useState)(!1),[j,N]=(0,c.useState)(!1),[y,I]=(0,c.useState)(!1),[g,A]=(0,c.useState)(!1),[C,S]=(0,c.useState)(!1),[w,k]=(0,c.useState)(!1),[b,L]=(0,c.useState)(!1),[P,E]=(0,c.useState)(!1),[_,H]=(0,c.useState)(!1),[B,M]=(0,c.useState)(13),[O,R]=(0,c.useState)(0),[F,D]=(0,c.useState)(0),[z,Q]=(0,c.useState)(0),[U,Z]=(0,c.useState)(!1),[G,X]=(0,c.useState)(!1),[$,q]=(0,c.useState)(!1),[J,Y]=(0,c.useState)(!1),[et,ei]=(0,c.useState)(!1),er=(0,c.useRef)(0),ea=(0,c.useRef)(0),en=(0,c.useRef)(0),ec=(0,c.useRef)(0),el=(0,c.useRef)(0),em=(0,c.useRef)(0),eo=(0,c.useRef)(0),ed=(e,t,s,i,r,a)=>{(0,c.useEffect)(()=>{if(i){let e=setInterval(()=>{s(e=>e-1)},1e3);a.current=Number(e)}else clearInterval(a.current),s(e)},[i]),(0,c.useEffect)(()=>{0===t&&(clearInterval(a.current),r(!1),s(e))},[t])};ed(90,s,i,p,v,er),ed(100,a,n,j,N,ea),ed(150,m,o,y,I,en),ed(150,d,x,g,A,ec);let ex=f.Q[B],eh=ex.primaryCoolTime,eT=ex.secondaryCoolTime,ep=ex.tertiaryCoolTime,eu=e=>1===e.length?e[0]:e[0]+e[1],ev=eu(eh),ej=eT?eu(eT):0,eN=ep?eu(ep):0;ed(ev,O,R,U,Z,el),ed(ej,F,D,G,X,em),ed(eN,z,Q,$,q,eo),(0,c.useEffect)(()=>{Z(!1),X(!1),q(!1),R(ev),D(ej),Q(eN)},[B]);let ef=h&&0<=e&&e<120;return(0,r.jsxs)("main",{className:"".concat(ee().main," ").concat(es().main),children:[(0,r.jsx)(l.R,{isEdgeRow:!0,children:(0,r.jsx)(u,{isPatrollerTimerActive:p,isTeleportTimerActive:j,isBlinkTimerActive:y,isUltraLongTimerActive:g,elapsedTime:e,setElapsedTime:t,isStartTimerActive:h,setIsStartTimerActive:T,patrollerTimerId:er,teleportTimerId:ea,blinkTimerId:en,ultraLongTimerId:ec,primaryTimerId:el,setPatrollerTime:i,setTeleportTime:n,setBlinkTime:o,setUltraLongTime:x,setIsPatrollerTimerActive:v,setIsTeleportTimerActive:N,setIsBlinkTimerActive:I,setIsUltraLongTimerActive:A,setHasConfinedSpace:S,setHasWantedOrder:k,setHasInsolence:E,setHasTrumpCard:L,setHasDetention:H,setHunterId:M,setPrimaryTime:R,setIsPrimaryTimerActive:Z,isPrimaryTimerActive:U,setIsSecondaryTimerActive:X,setIsTertiaryTimerActive:q,hunterId:B,setIsTrumpCardAlertOn:ei,setIsTrumpCardUsed:Y})}),(0,r.jsx)(V,{isTrumpCardTimerActive:ef,elapsedTime:e,isStartTimerActive:h,hasConfinedSpace:C,setHasConfinedSpace:S,hasWantedOrder:w,setHasWantedOrder:k,hasInsolence:P,setHasInsolence:E,hasTrumpCard:b,setHasTrumpCard:L,hasDetention:_,setHasDetention:H,hunterId:B,setHunterId:M,primaryTime:O,secondaryTime:F,tertiaryTime:z,setPrimaryTime:R,setSecondaryTime:D,setTertiaryTime:Q,isPrimaryTimerActive:U,isSecondaryTimerActive:G,isTertiaryTimerActive:$,setIsSecondaryTimerActive:X,setIsPrimaryTimerActive:Z,setIsTertiaryTimerActive:q,primaryTimerId:el,secondaryTimerId:em,tertiaryTimerId:eo}),(0,r.jsx)(W.D,{patrollerTime:s,isPatrollerTimerActive:p,setIsPatrollerTimerActive:v,teleportTime:a,isTeleportTimerActive:j,setIsTeleportTimerActive:N,blinkTime:m,isBlinkTimerActive:y,setIsBlinkTimerActive:I,elapsedTime:e,isStartTimerActive:h}),(0,r.jsx)(K,{isTrumpCardTimerActive:ef,patrollerTime:s,setPatrollerTime:i,isPatrollerTimerActive:p,setIsPatrollerTimerActive:v,teleportTime:a,setTeleportTime:n,isTeleportTimerActive:j,setIsTeleportTimerActive:N,blinkTime:m,setBlinkTime:o,isBlinkTimerActive:y,setIsBlinkTimerActive:I,ultraLongTime:d,isUltraLongTimerActive:g,setIsUltraLongTimerActive:A,setHasTrumpCard:L,elapsedTime:e,isTrumpCardUsed:J,setIsTrumpCardUsed:Y,isTrumpCardAlertOn:et,setIsTrumpCardAlertOn:ei})]})};function er(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0,maximum-scale=1.0"}),(0,r.jsx)("title",{children:"IdentityV Survival Tool"}),(0,r.jsx)("meta",{name:"description",content:"A useful tool for survivors, managing Trait/Skill cool-time and Persona of hunters. Compatible with ALL hunters!"}),(0,r.jsx)("meta",{name:"theme-color",content:"#292b2f"}),(0,r.jsx)("meta",{property:"og:url",content:"https://koniooo.github.io/IdentityV-SurvivalTool/en"}),(0,r.jsx)("meta",{property:"og:title",content:"IdentityV Survival Tool"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:description",content:"A useful tool for survivors, managing Trait/Skill cool-time and Persona of hunters. Compatible with ALL hunters!"}),(0,r.jsx)("meta",{property:"og:image",content:"https://koniooo.github.io/IdentityV-SurvivalTool/ogp_en.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@konio_tracy"}),(0,r.jsx)("link",{rel:"icon",href:"https://koniooo.github.io/IdentityV-SurvivalTool/favicon.svg",type:"image/svg+xml",sizes:"any"})]}),(0,r.jsx)(ei,{})]})}},9731:function(e){e.exports={triple:"HunterSkillTimer_triple__aGOE3"}},7958:function(e){e.exports={gateOpen:"StartButton_gateOpen___FQvF"}},1810:function(e){e.exports={main:"VariablesEn_main__CArCj"}}},function(e){e.O(0,[996,700,888,774,179],function(){return e(e.s=534)}),_N_E=e.O()}]);