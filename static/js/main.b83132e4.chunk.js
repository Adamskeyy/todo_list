(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),l=n(7),i=n.n(l),r=n(8),o=n(5),u=n(2),b=n(25),j=(n(14),n(15),function(){return Object(c.jsxs)("h1",{className:"header__glitch",children:[Object(c.jsx)("span",{"aria-hidden":"true",children:"TO DO LIST"}),"TO DO LIST",Object(c.jsx)("span",{"aria-hidden":"true",children:"TO DO LIST"})]})}),d=(n(16),function(e){var t=e.btnContent,n=e.labelContent,a=e.typeOfBtn;return Object(c.jsxs)("button",{type:"submit",className:a,children:[Object(c.jsx)("span",{className:"btn__content",children:t}),Object(c.jsx)("span",{className:"btn__glitch"}),Object(c.jsx)("span",{className:"btn__label",children:n})]})}),m=(n(17),function(e){var t=e.addTask,n=Object(a.useState)(""),s=Object(u.a)(n,2),l=s[0],i=s[1];return Object(c.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),l&&(t(l),i(""))},className:"form__control",children:[Object(c.jsxs)("label",{htmlFor:"input",className:"form__input",children:[Object(c.jsx)("input",{required:!0,type:"text",id:"input",placeholder:"\xa0",value:l,onChange:function(e){i(e.target.value)}}),Object(c.jsx)("span",{className:"label",children:"Add the task samurai..."}),Object(c.jsx)("span",{className:"focus-bg"})]}),Object(c.jsx)(d,{btnContent:"create new task_",labelContent:"r25",typeOfBtn:"btn"})]})}),f=(n(18),n(19),function(e){var t,n,a=e.task,s=e.removeTask,l=e.idx,i=e.toggleCompletion;return a.completed?(t="DONE",n="task__item completed"):(t="ACTIVE",n="task__item"),Object(c.jsxs)("li",{className:n,children:[Object(c.jsx)("span",{className:"task__item__content",children:a.name}),Object(c.jsx)("span",{className:"task__item__label",children:l+1}),Object(c.jsxs)("span",{className:"task__item__controls",children:[Object(c.jsx)("span",{className:"task__item__controls__toggleCompletion",onClick:function(){return i(a.id)},children:t}),Object(c.jsx)("span",{className:"task__item__controls__remove",onClick:function(){return s(a.id)},children:"X"})]})]})}),O=function(e){var t=e.tasks,n=e.removeTask,a=e.toggleCompletion;return Object(c.jsx)("ul",{className:"task__list",children:t.map((function(e,t){return Object(c.jsx)(f,{task:e,removeTask:n,toggleCompletion:a,idx:t},e.id)}))})},p=(n(20),n(21),function(e){var t=e.btnContent,n=e.labelContent,a=e.clicked,s="";return e.defaultActiveFilter===t&&(s="active"),Object(c.jsxs)("button",{type:"submit",className:"btn--secondary ".concat(s),onClick:a,children:[Object(c.jsx)("span",{className:"btn__content ".concat(s),children:t}),Object(c.jsx)("span",{className:"btn__label",children:n})]})}),_=s.a.memo((function(e){var t=e.enteredFilter,n=e.displayFilteredTasks,a=e.defaultActiveFilter,s=e.changeActiveFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("form",{autoComplete:"off",className:"form__control",onSubmit:function(e){e.preventDefault()},children:Object(c.jsxs)("label",{htmlFor:"input search",className:"form__input",children:[Object(c.jsx)("input",{required:!0,type:"text",id:"input search",placeholder:"\xa0",value:t,onChange:function(e){n(e.target.value.toLocaleLowerCase())}}),Object(c.jsx)("span",{className:"label",children:"Find task..."}),Object(c.jsx)("span",{className:"focus-bg"})]})}),Object(c.jsxs)("div",{className:"filter__buttons",children:[Object(c.jsx)(p,{btnContent:"all",labelContent:"r26",defaultActiveFilter:a,clicked:function(){return s("all")}}),Object(c.jsx)(p,{btnContent:"active",labelContent:"r27",defaultActiveFilter:a,clicked:function(){return s("active")}}),Object(c.jsx)(p,{btnContent:"done",labelContent:"r28",defaultActiveFilter:a,clicked:function(){return s("done")}})]})]})})),h=(n(22),function(e){var t=e.btnContent,n=e.labelContent,a=e.clicked;return Object(c.jsxs)("button",{type:"submit",className:"btn--delete",onClick:a,children:[Object(c.jsx)("span",{className:"btn__content",children:t}),Object(c.jsx)("span",{className:"btn__glitch"}),Object(c.jsx)("span",{className:"btn__label",children:n})]})}),x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],l=Object(a.useState)("all"),i=Object(u.a)(l,2),d=i[0],f=i[1],p=Object(a.useState)(""),x=Object(u.a)(p,2),v=x[0],k=x[1];Object(a.useEffect)((function(){var e=localStorage.getItem("tasks");e&&s(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(n)),n.length||(k(""),f("all"))}),[n]);var N,g,C,F,T=n.filter((function(e){return e.name.toLocaleLowerCase().includes(v)}));return N="all"===d?T:"done"===d?T.filter((function(e){return e.completed})):T.filter((function(e){return!e.completed})),n.length>0&&(g=Object(c.jsx)(_,{defaultActiveFilter:d,changeActiveFilter:function(e){return f(e)},enteredFilter:v,displayFilteredTasks:function(e){return k(e)}})),!N.length&&n.length&&(C=Object(c.jsx)("p",{children:"No matches found"})),F=N.length?Object(c.jsx)(h,{btnContent:"delete selected tasks_",labelContent:"r29",clicked:function(){return function(e){var t=Object(o.a)(n).filter((function(t){return!e.some((function(e){return t.id===e.id}))}));s(t)}(N)}}):null,Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsx)(m,{addTask:function(e){var t={id:Object(b.a)(),name:e,completed:!1};s([].concat(Object(o.a)(n),[t]))}}),g,C,Object(c.jsx)(O,{tasks:N,removeTask:function(e){var t=n.filter((function(t){return t.id!==e}));s(t)},toggleCompletion:function(e){var t=n.findIndex((function(t){return t.id===e})),c=Object(o.a)(n),a=Object(r.a)({},n[t]);a.completed=!a.completed,c[t]=a,s(c)}}),F]})};i.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.b83132e4.chunk.js.map