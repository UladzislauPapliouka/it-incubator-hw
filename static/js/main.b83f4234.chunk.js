(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),c=t.n(l),o=(t(74),t(56)),u=t.n(o),s=t(21),i=t(4),m=t(17),d=t.n(m);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{className:d.a.userAvatar,src:e.avatar,alt:"User Avatar"}),r.a.createElement("div",{className:d.a.textBlock},r.a.createElement("div",{className:d.a.messagePointer}),r.a.createElement("span",{className:d.a.userName},e.name),r.a.createElement("div",{className:d.a.messageText},e.message,r.a.createElement("span",{className:d.a.messageTime},e.time),r.a.createElement("div",{className:d.a.messageTimeMask}))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",f="some text",g="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:p,name:h,message:f,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(3),_=t(20),k=t.n(_);var C=function(e){return r.a.createElement("div",{className:"".concat(k.a.affair," ").concat(k.a[e.affair.priority])},r.a.createElement("span",null,"".concat(e.affair.name)),r.a.createElement("button",{className:k.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},O=t(14),j=t(40),y=t.n(j),N=["red","className"],x=function(e){var a=e.red,t=e.className,n=Object(O.a)(e,N),l="".concat(a?y.a.red:""," ").concat(y.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var S=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(x,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{className:k.a.high,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{className:k.a.middle,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{className:k.a.low,onClick:function(){e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(w),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(S,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(9),M=t(41),H=t.n(M),F=t(35),I=t.n(F),D=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(O.a)(e,D),i="".concat(I.a.error," ").concat(u||""),m="".concat(c?I.a.errorInput:""," ").concat(o," ").concat(I.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},R=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o="".concat(H.a.input," ").concat(l?H.a.error:"");return r.a.createElement("div",null,r.a.createElement(P,{value:a,error:l,onChange:function(e){return t(e)},className:o}),r.a.createElement(x,{onClick:n},"add"),r.a.createElement("span",null,c))},W=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),m=i[0],d=i[1],E=a.length;return r.a.createElement(R,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){d(""),clearTimeout(),""!==o.trim()?(alert("Hello, ".concat(o,"!")),t(o),u("")):(d("Name can't be empty"),setTimeout((function(){return d("")}),5e3))},error:m,totalUsers:E})},B=t(125);var G=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:t,addUserCallback:function(e){l([].concat(Object(A.a)(t),[{_id:Object(B.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(42),J=t.n(U),L=t(28),V=t.n(L),K=["type","onChange","onChangeChecked","className","spanClassName","children"],q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(O.a)(e,K),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:"".concat(V.a.superCheckbox," ").concat(c.checked?V.a.checked:"")},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(b.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(P,{className:J.a.blue}),r.a.createElement(x,null,"default"),r.a.createElement(x,{red:!0,onClick:o},"delete "),r.a.createElement(x,{disabled:!0},"disabled"),r.a.createElement(q,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(q,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=t(60),Z=t.n(Y),z=["autoFocus","onBlur","onEnter","spanProps"],Q=["children","onDoubleClick","className"],$=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(O.a)(e,z),o=Object(n.useState)(!1),u=Object(b.a)(o,2),s=u[0],i=u[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,h=Object(O.a)(m,Q),f="".concat(Z.a.editableSpan," ").concat(p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),E&&E(e)},className:f},h),d||c.value))};function ee(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}ee("test",{x:"A",y:1});var ae=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement($,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(x,{onClick:function(){ee("editable-span-value",t)}},"save"),r.a.createElement(x,{onClick:function(){l(function(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(T,null),r.a.createElement(G,null),r.a.createElement(X,null),r.a.createElement(ae,null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},re=["options","onChange","onChangeOption"],le=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(O.a)(e,re),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){null===t||void 0===t||t(e.currentTarget.value)}},n),l)},ce=["type","name","options","value","onChange","onChangeOption"],oe=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(O.a)(e,ce),function(e){null===l||void 0===l||l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:a,onChange:c,checked:n===e,value:e}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ue=["x","y","z"];var se=function(){var e=Object(n.useState)(ue[1]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(le,{options:ue,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(oe,{name:"radio",options:ue,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ie=function(e,a){switch(a.type){case"sort":return Object(A.a)(e.sort((function(e,t){return e.name>t.name?"up"===a.payload?1:-1:e.name<t.name?"up"===a.payload?-1:1:0})));case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(n.useState)(me),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,"".concat(e.name,"  ").concat(e.age)))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return l(ie(me,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return l(ie(me,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return l(ie(me,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ee=function(){var e=Object(n.useState)(0),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(b.a)(c,2),u=o[0],s=o[1],i=Object(n.useState)(!1),m=Object(b.a)(i,2),d=m[0],E=m[1],p=function(){clearInterval(t)},h="".concat(u.getHours()<10?"0"+u.getHours():u.getHours(),"\n                        :\n                        ").concat(u.getMinutes()<10?"0"+u.getMinutes():u.getMinutes(),"\n                        :\n                        ").concat(u.getSeconds()<10?"0"+u.getSeconds():u.getSeconds(),"\n    "),f="".concat(u.getFullYear()," ").concat({0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}[u.getMonth()]," ").concat(u.getDate()," ").concat({0:"sunday",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday"}[u.getDay()]);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},h),d&&r.a.createElement("div",null,f),r.a.createElement(x,{onClick:function(){p();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(x,{onClick:p},"stop"))};var pe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(Ee,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},he=t(19),fe=t(18),ge={loading:!1},ve=function(e){return{type:"SET_LOADING",payload:{loading:e}}};var be=function(){var e=Object(he.b)(),a=Object(he.c)((function(e){return e.loading.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement("div",null,"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."):r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){e(ve(!a)),setTimeout((function(){return e(ve(a))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},_e=t(63),ke=t.n(_e),Ce=["type","onChange","onChangeRange","className","setValue1","value1"],Oe=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=e.setValue1,c=e.value1,o=Object(O.a)(e,Ce),u="".concat(ke.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value),l(+e.currentTarget.value)},className:u,value:c},o)))},je=t(127),ye=t(124),Ne=function(e){var a=e.onChangeRange,t=e.value,n=r.a.useState(t||[0,100]),l=Object(b.a)(n,2),c=l[0],o=l[1],u=function(e){a&&a(e)};return r.a.createElement(je.a,{sx:{width:300}},r.a.createElement(ye.a,{getAriaLabel:function(){return"SuperDoubleRange"},value:t||c,onChange:function(e,a){o(a),u(a)},valueLabelDisplay:"auto"}))};var xe=function(){var e=Object(n.useState)(0),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(b.a)(c,2),u=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Oe,{value1:t,setValue1:l})),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Ne,{value:[t,u],onChangeRange:function(e){l(e[0]),s(e[1])}}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Se=t(43),we=t.n(Se),Te={theme:"some"},Ae=["dark","red","some"];var Me=function(){var e=Object(he.c)((function(e){return e.theme})),a=Object(he.b)();return r.a.createElement("div",{className:we.a[e.theme]},r.a.createElement("hr",null),r.a.createElement("span",{className:we.a[e.theme+"-text"]},"homeworks 12",r.a.createElement(oe,{name:"radio",value:e.theme,options:Ae,onChangeOption:function(e){a(function(e){return{type:"CHANGE_THEME",payload:{theme:e}}}(e))}})),r.a.createElement("hr",null))};var He=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(de,null),r.a.createElement(pe,null),r.a.createElement(be,null),r.a.createElement(xe,null),r.a.createElement(Me,null))},Fe=t(64),Ie=t.n(Fe),De=function(e){return Ie.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})},Pe=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(q,{checked:t,onChangeChecked:function(e){l(e)}}),r.a.createElement(x,{onClick:function(){De(t).then((function(e){console.log(e)})).catch((function(e){console.log(Object(fe.a)({},e)),console.log(e.response?e.response.data.errorText:e.message)}))}},"POST"))};var Re=function(){return r.a.createElement("div",null,r.a.createElement(Pe,null))},We="/pre-junior",Be="/junior",Ge="/junior-plus";var Ue=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:We})}),r.a.createElement(i.b,{path:We,element:r.a.createElement(te,null)}),r.a.createElement(i.b,{path:Be,element:r.a.createElement(He,null)}),r.a.createElement(i.b,{path:Ge,element:r.a.createElement(Re,null)}),"// add routes",r.a.createElement(i.b,{path:"/*",element:r.a.createElement(ne,null)})))};var Je=function(){return r.a.createElement("div",null,"// add NavLinks",r.a.createElement(s.b,{to:We},"Pre-junior"),r.a.createElement(s.b,{to:Be},"Junior"),r.a.createElement(s.b,{to:Ge},"Junior+"))};var Le=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Je,null),r.a.createElement(Ue,null)))},Ve=t(44),Ke=Object(Ve.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(fe.a)(Object(fe.a)({},e),{},{loading:a.payload.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_THEME":return Object(fe.a)(Object(fe.a)({},e),{},{theme:a.payload.theme});default:return e}}}),qe=Object(Ve.b)(Ke),Xe=qe;window.store=qe;var Ye=function(){return r.a.createElement(he.a,{store:Xe},r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Le,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,a,t){e.exports={message:"Message_message__3mkCm",userAvatar:"Message_userAvatar__MKgET",textBlock:"Message_textBlock__2mp0F",messagePointer:"Message_messagePointer__2Gcnx",userName:"Message_userName__3iXi2",messageText:"Message_messageText__2tYqO",messageTime:"Message_messageTime__2NfR_",messageTimeMask:"Message_messageTimeMask__16i7F"}},20:function(e,a,t){e.exports={affair:"Affairs_affair__3DpB1",high:"Affairs_high__lIaHn",middle:"Affairs_middle__2kte3",low:"Affairs_low__UDAwz",button:"Affairs_button__1ExVj"}},28:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3D3xk",superCheckbox:"SuperCheckbox_superCheckbox__2PHuG",checked:"SuperCheckbox_checked__3hIfR",spanClassName:"SuperCheckbox_spanClassName__jGUGy"}},35:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__36m6f",errorInput:"SuperInputText_errorInput__1nvsR",error:"SuperInputText_error__3RFwp"}},40:function(e,a,t){e.exports={default:"SuperButton_default__2Rvhf",red:"SuperButton_red__39Zb6"}},41:function(e,a,t){e.exports={input:"Greeting_input__33xjb",error:"Greeting_error__1NZTU"}},42:function(e,a,t){e.exports={blue:"HW4_blue__CaVwV",column:"HW4_column__3b3MI",testSpanError:"HW4_testSpanError__2yQ8G"}},43:function(e,a,t){e.exports={dark:"HW12_dark__2NOft","dark-text":"HW12_dark-text__1Uy5R",red:"HW12_red__329sq","red-text":"HW12_red-text__31F5f",some:"HW12_some__3A8fi","some-text":"HW12_some-text__1LtR5"}},56:function(e,a,t){e.exports={App:"App_App__2fulA"}},60:function(e,a,t){e.exports={editableSpan:"SuperEditalbeSpan_editableSpan__2M2hW"}},63:function(e,a,t){e.exports={range:"SuperRange_range__1QCBD"}},69:function(e,a,t){e.exports=t(106)},74:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.b83f4234.chunk.js.map