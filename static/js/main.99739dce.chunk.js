(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{55:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),r=n(20),o=n.n(r),i=(n(55),n(7)),l=n(46),d=(n(56),l.a.initializeApp({apiKey:"AIzaSyBnZ1WZ7yAG9yi_uG0ssxdOcujDxHKFAog",authDomain:"todo-development-7dfa4.firebaseapp.com",databaseURL:"https://todo-development-7dfa4-default-rtdb.firebaseio.com/",projectId:"todo-development-7dfa4",storageBucket:"todo-development-7dfa4.appspot.com",messagingSenderId:"452414197629",appId:"1:452414197629:web:a2490197b26b0e3113c614"})),u=d.auth(),j=s.a.createContext();function b(){return Object(a.useContext)(j)}var O=function(e){var t=e.children,n=Object(a.useState)(),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(),d=Object(i.a)(l,2),b=d[0],O=d[1],f=Object(a.useState)(),p=Object(i.a)(f,2),h=p[0],m=p[1],x=Object(a.useState)(!0),v=Object(i.a)(x,2),_=v[0],g=v[1];Object(a.useEffect)((function(){return u.onAuthStateChanged((function(e){g(!1),o(e),e&&(e.getIdToken(!0).then((function(e){m(e)})),O(e.uid))}))}),[]);var k={currentUser:r,login:function(e,t){return u.signInWithEmailAndPassword(e,t)},signup:function(e,t){return u.createUserWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},resetPassword:function(e){return u.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)},token:h,userId:b};return Object(c.jsx)(j.Provider,{value:k,children:!_&&t})},f=(n(58),n(9));var p=function(){var e=b().currentUser;return Object(c.jsx)("ul",{className:"navigation",children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.c,{exact:!0,className:"navigation__item",to:"".concat("/todo_list"),children:"Task List"}),Object(c.jsx)(f.c,{className:"navigation__item",to:"".concat("/todo_list","/profile"),children:"Profile"}),Object(c.jsx)(f.c,{className:"navigation__item",to:"".concat("/todo_list","/logout"),children:"Log Out"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.c,{className:"navigation__item",to:"".concat("/todo_list","/signup"),children:"Sign Up"}),Object(c.jsx)(f.c,{className:"navigation__item",to:"".concat("/todo_list","/login"),children:"Log In"})]})})},h=n(18),m=n.n(h),x=n(19),v=n(99),_=n(97),g=n(98),k=n(96),w=n(8);var N=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),s=b().signup,r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],d=o[1],u=Object(a.useState)(!1),j=Object(i.a)(u,2),O=j[0],p=j[1],h=Object(w.g)();function N(){return(N=Object(x.a)(m.a.mark((function c(a){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",d("Passwords do not match"));case 3:return c.prev=3,d(""),p(!0),c.next=8,s(e.current.value,t.current.value);case 8:h.push("".concat("/todo_list")),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),d("Failed to create an account");case 14:p(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{style:{maxWidth:"100%"},children:Object(c.jsxs)(v.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),l&&Object(c.jsx)(_.a,{variant:"danger",children:l}),Object(c.jsxs)(g.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(c.jsxs)(g.a.Group,{id:"email",children:[Object(c.jsx)(g.a.Label,{children:"Email"}),Object(c.jsx)(g.a.Control,{type:"email",required:!0,ref:e})]}),Object(c.jsxs)(g.a.Group,{id:"password",children:[Object(c.jsx)(g.a.Label,{children:"Password"}),Object(c.jsx)(g.a.Control,{type:"password",required:!0,ref:t})]}),Object(c.jsxs)(g.a.Group,{id:"password-confirm",children:[Object(c.jsx)(g.a.Label,{children:"Password Confirmation"}),Object(c.jsx)(g.a.Control,{type:"password",required:!0,ref:n})]}),Object(c.jsx)(k.a,{disabled:O,type:"submit",className:"w-100",children:"Sign Up"})]})]})}),Object(c.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account?"," ",Object(c.jsx)(f.b,{to:"".concat("/todo_list","/login"),children:"Log In"})]})]})};var y=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=b().login,s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(a.useState)(!1),u=Object(i.a)(d,2),j=u[0],O=u[1],p=Object(w.g)();function h(){return(h=Object(x.a)(m.a.mark((function c(a){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,l(""),O(!0),c.next=6,n(e.current.value,t.current.value);case 6:p.push("".concat("/todo_list")),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),l("Failed to log in");case 12:O(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{style:{maxWidth:"100%"},children:Object(c.jsxs)(v.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),o&&Object(c.jsx)(_.a,{variant:"danger",children:o}),Object(c.jsxs)(g.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(c.jsxs)(g.a.Group,{id:"email",children:[Object(c.jsx)(g.a.Label,{children:"Email"}),Object(c.jsx)(g.a.Control,{type:"email",required:!0,ref:e})]}),Object(c.jsxs)(g.a.Group,{id:"password",children:[Object(c.jsx)(g.a.Label,{children:"Password"}),Object(c.jsx)(g.a.Control,{type:"password",required:!0,ref:t})]}),Object(c.jsx)(k.a,{disabled:j,type:"submit",className:"w-100",children:"Log In"})]}),Object(c.jsx)("div",{className:"w-100 text-center mt-3",children:Object(c.jsx)(f.b,{to:"".concat("/todo_list","/forgot-password"),children:"Forgot Password?"})})]})}),Object(c.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(c.jsx)(f.b,{to:"".concat("/todo_list","/signup"),children:"Sign Up"})]})]})};var C=function(){var e=b().logout;return Object(a.useEffect)((function(){e()}),[e]),Object(c.jsx)(w.a,{to:"".concat("/todo_list","/login")})};var S=function(){var e=b().currentUser;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{children:Object(c.jsxs)(v.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),Object(c.jsx)("strong",{children:e.email}),Object(c.jsx)(f.b,{to:"".concat("/todo_list","/update-profile"),className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(c.jsx)("div",{className:"w-100 text-center mt-2"})]})};var T=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),s=b(),r=s.currentUser,o=s.updatePassword,l=s.updateEmail,d=Object(a.useState)(""),u=Object(i.a)(d,2),j=u[0],O=u[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),m=h[0],x=h[1],N=Object(w.g)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{style:{minWidth:"300px"},children:Object(c.jsxs)(v.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),j&&Object(c.jsx)(_.a,{variant:"danger",children:j}),Object(c.jsxs)(g.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==n.current.value)return O("Passwords do not match");var a=[];x(!0),O(""),e.current.value!==r.email&&a.push(l(e.current.value)),t.current.value&&a.push(o(t.current.value)),Promise.all(a).then((function(){N.push("".concat("/todo_list","/profile"))})).catch((function(){O("Failed to update account")})).finally((function(){x(!1)}))},children:[Object(c.jsxs)(g.a.Group,{id:"email",children:[Object(c.jsx)(g.a.Label,{children:"Email"}),Object(c.jsx)(g.a.Control,{type:"email",defaultValue:r.email,ref:e})]}),Object(c.jsxs)(g.a.Group,{id:"password",children:[Object(c.jsx)(g.a.Label,{children:"Password"}),Object(c.jsx)(g.a.Control,{type:"password",placeholder:"Leave blank to keep the same",ref:t})]}),Object(c.jsxs)(g.a.Group,{id:"password-confirm",children:[Object(c.jsx)(g.a.Label,{children:"Password Confirmation"}),Object(c.jsx)(g.a.Control,{type:"password",placeholder:"Leave blank to keep the same",ref:n})]}),Object(c.jsx)(k.a,{disabled:m,type:"submit",className:"w-100",children:"Update"})]})]})}),Object(c.jsx)("div",{className:"w-100 text-center mt-2",children:Object(c.jsx)(f.b,{to:"".concat("/todo_list"),children:"Cancel"})})]})};var F=function(){var e=Object(a.useRef)(),t=b().resetPassword,n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),u=d[0],j=d[1],O=Object(a.useState)(!1),p=Object(i.a)(O,2),h=p[0],w=p[1];function N(){return(N=Object(x.a)(m.a.mark((function n(c){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,j(""),o(""),w(!0),n.next=7,t(e.current.value);case 7:j("Check Your inbox for further instructions"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),o("Failed to reset password");case 13:w(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{style:{maxWidth:"100%"},children:Object(c.jsxs)(v.a.Body,{children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(c.jsx)(_.a,{variant:"danger",children:r}),u&&Object(c.jsx)(_.a,{variant:"success",children:u}),Object(c.jsxs)(g.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(c.jsxs)(g.a.Group,{id:"email",children:[Object(c.jsx)(g.a.Label,{children:"Email"}),Object(c.jsx)(g.a.Control,{type:"email",required:!0,ref:e})]}),Object(c.jsx)(k.a,{disabled:h,type:"submit",className:"w-100",children:"Reset Password"})]}),Object(c.jsx)("div",{className:"w-100 text-center mt-3",children:Object(c.jsx)(f.b,{to:"".concat("/todo_list","/login"),children:"Login"})})]})}),Object(c.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?"," ",Object(c.jsx)(f.b,{to:"".concat("/todo_list","/signup"),children:"Sign Up"})]})]})},I=(n(65),function(){return Object(c.jsxs)("h1",{className:"header",children:[Object(c.jsx)("span",{"aria-hidden":"true",className:"header__span",children:"TO DO LIST"}),"TO DO LIST",Object(c.jsx)("span",{"aria-hidden":"true",className:"header__span",children:"TO DO LIST"})]})}),L=n(28),P=n(24),A=n(23),E=n.n(A),R=(n(84),n(85),Object(a.forwardRef)((function(e,t){var n=e.value,a=e.changeHandler,s=e.labelText;return Object(c.jsxs)("label",{htmlFor:"input",className:"form__label",children:[Object(c.jsx)("input",{ref:t,required:!0,type:"text",className:"form__input",placeholder:"\xa0",value:n,onChange:function(e){a(e.target.value)}}),Object(c.jsx)("span",{className:"form__spanLabel",children:s}),Object(c.jsx)("span",{className:"form__focusBg"})]})}))),U=(n(86),function(e){var t,n=e.btnContent,a=e.labelContent,s=e.btnType,r=e.clicked;return t="delete"===s?"buttonDelete":"buttonBasic",Object(c.jsxs)("button",{type:"submit",className:"button ".concat(t),onClick:"delete"===s?r:void 0,children:[Object(c.jsx)("span",{className:"button__content",children:n}),Object(c.jsx)("span",{className:"button__glitch"}),Object(c.jsx)("span",{className:"button__label",children:a})]})}),D=(n(87),function(e){var t=e.addTask,n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1];return Object(c.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),r&&(t(r),o(""))},className:"form",children:[Object(c.jsx)(R,{value:r,changeHandler:o,labelText:"Add the task samurai..."}),Object(c.jsx)(U,{btnType:"basic",btnContent:"create new task_",labelContent:"r25"})]})}),B=(n(88),n(89),function(e){var t,n,a=e.task,s=e.removeTask,r=e.idx,o=e.toggleCompletion;return a.completed?(t="DONE",n="task__item task__item--completed"):(t="ACTIVE",n="task__item"),Object(c.jsxs)("li",{className:n,children:[Object(c.jsx)("span",{className:"task__item__content",children:a.name}),Object(c.jsx)("span",{className:"task__item__label",children:r+1}),Object(c.jsxs)("span",{className:"task__item__controls",children:[Object(c.jsx)("span",{className:"task__item__controls__toggleCompletion",onClick:function(){return o(a.taskId)},children:t}),Object(c.jsx)("span",{className:"task__item__controls__remove",onClick:function(){return s(a.taskId)},children:"X"})]})]})}),G=function(e){var t=e.tasks,n=e.removeTask,a=e.toggleCompletion;return Object(c.jsx)("ul",{className:"task__list",children:t.map((function(e,t){return Object(c.jsx)(B,{task:e,removeTask:n,toggleCompletion:a,idx:t},e.taskId)}))})},q=(n(90),n(91),function(e){var t=e.btnContent,n=e.labelContent,a=e.clicked,s="filter__button",r="filter__button__content";return e.defaultActiveFilter===t&&(s="filter__button filter__button--active",r="filter__button__content filter__button__content--active"),Object(c.jsxs)("button",{type:"submit",className:s,onClick:a,children:[Object(c.jsx)("span",{className:r,children:t}),Object(c.jsx)("span",{className:"filter__button__label",children:n})]})}),W=Object(a.forwardRef)((function(e,t){var n=e.tasks,a=e.enteredFilter,s=e.displayFilteredTasks,r=e.defaultActiveFilter,o=e.changeActiveFilter,i=n.length?"search--visible":"search--hidden";return Object(c.jsxs)("div",{className:i,children:[Object(c.jsx)("form",{autoComplete:"off",className:"form",onSubmit:function(e){e.preventDefault()},children:Object(c.jsx)(R,{ref:t,value:a,changeHandler:s,labelText:"Find task..."})}),Object(c.jsxs)("div",{className:"filter",children:[Object(c.jsx)(q,{btnContent:"all",labelContent:"r26",defaultActiveFilter:r,clicked:function(){return o("all")}}),Object(c.jsx)(q,{btnContent:"active",labelContent:"r27",defaultActiveFilter:r,clicked:function(){return o("active")}}),Object(c.jsx)(q,{btnContent:"done",labelContent:"r28",defaultActiveFilter:r,clicked:function(){return o("done")}})]})]})})),H=(n(92),function(){return Object(c.jsxs)("div",{className:"lds-facebook",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}),z=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("all"),o=Object(i.a)(r,2),l=o[0],d=o[1],u=Object(a.useState)(""),j=Object(i.a)(u,2),O=j[0],f=j[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),m=h[0],x=h[1],v=b(),_=v.token,g=v.userId,k=Object(a.useRef)(),w="https://todo-development-7dfa4-default-rtdb.firebaseio.com/";Object(a.useEffect)((function(){x(!0);var e=setTimeout((function(){if(O===k.current.value&&_){var e="/todos.json?auth=".concat(_,'&orderBy="userId"&equalTo="').concat(g,'"'),t=0===O.length?e:"".concat(e,'&orderBy="title"&equalTo="').concat(O,'"');E.a.get(w+t).then((function(e){var t=[];for(var n in e.data)t.push(Object(P.a)({taskId:n},e.data[n]));s(t),x(!1)})).catch((function(e){x(!1),console.log(e)}))}}),500);return function(){return clearTimeout(e)}}),[_,g,O,w]);var N,y,C,S=n&&n.filter((function(e){return e.name.toLocaleLowerCase().includes(O)}));return N="all"===l?S:"done"===l?S.filter((function(e){return e.completed})):S.filter((function(e){return!e.completed})),y=Object(c.jsx)(W,{tasks:n,ref:k,defaultActiveFilter:l,changeActiveFilter:function(e){return d(e)},enteredFilter:O,displayFilteredTasks:function(e){return f(e.toLocaleLowerCase())}}),!N.length&&n.length&&(C=Object(c.jsx)("p",{children:"No matches found"})),N.length?Object(c.jsx)(U,{btnType:"delete",btnContent:"delete selected tasks_",labelContent:"r29",clicked:function(){return function(e){var t=Object(L.a)(n).filter((function(t){return!e.some((function(e){return t.id===e.id}))}));s(t)}(N)}}):null,Object(c.jsxs)("div",{className:"TodoApp",children:[Object(c.jsx)(D,{addTask:function(e){var t={name:e,completed:!1,userId:g};E.a.post("".concat(w,"/todos.json?auth=")+_,t).then((function(e){t=Object(P.a)(Object(P.a)({},t),{},{taskId:e.data.name}),s((function(e){return[].concat(Object(L.a)(e),[t])}))})).catch((function(e){return console.log(e)}))}}),y,C,Object(c.jsx)(G,{tasks:N,removeTask:function(e){x(!0),E.a.delete("https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos/".concat(e,".json?auth=").concat(_)).then((function(t){x(!1);var c=n.filter((function(t){return t.taskId!==e}));s(c)})).catch((function(e){console.log(e)}))},toggleCompletion:function(e){var t=n.findIndex((function(t){return t.taskId===e})),c=Object(L.a)(n),a=Object(P.a)({},n[t]);a.completed=!a.completed,c[t]=a;var r={completed:a.completed};x(!0),E.a.patch("https://todo-development-7dfa4-default-rtdb.firebaseio.com/todos/".concat(e,"/.json?auth=").concat(_),r).then((function(e){x(!1),s(c)})).catch((function(e){x(!1),console.log(e)}))}}),m?Object(c.jsx)(H,{}):null]})},J=function(){var e=b().currentUser?Object(c.jsxs)(w.d,{children:[Object(c.jsx)(w.b,{exact:!0,path:"".concat("/todo_list"),component:z}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/profile"),component:S}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/update-profile"),component:T}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/logout"),component:C}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/*"),component:z})]}):Object(c.jsxs)(w.d,{children:[Object(c.jsx)(w.b,{path:"".concat("/todo_list","/signup"),component:N}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/login"),component:y}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/forgot-password"),component:F}),Object(c.jsx)(w.b,{path:"".concat("/todo_list","/*"),component:y})]});return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(I,{}),Object(c.jsxs)(f.a,{basename:"/todo_list",children:[Object(c.jsx)(p,{}),e]})]})};n(93);o.a.render(Object(c.jsx)(O,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.99739dce.chunk.js.map