(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),l=n(7),i=n.n(l),o=n(8),r=n(6),u=n(2),j=n(22),b=(n(14),n(15),function(){return Object(s.jsxs)("button",{type:"submit",className:"btn",children:[Object(s.jsx)("span",{className:"btn__content",children:"Create new task_"}),Object(s.jsx)("span",{className:"btn__glitch"}),Object(s.jsx)("span",{className:"btn__label",children:"r25"})]})}),m=(n(16),function(e){var t=e.addTask,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],i=c[1];return Object(s.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),l&&(t(l),i(""))},className:"form__control",children:[Object(s.jsxs)("label",{htmlFor:"input",className:"form__input",children:[Object(s.jsx)("input",{required:!0,type:"text",id:"input",placeholder:"\xa0",value:l,onChange:function(e){i(e.target.value)}}),Object(s.jsx)("span",{className:"label",children:"Add the task samurai..."}),Object(s.jsx)("span",{className:"focus-bg"})]}),Object(s.jsx)(b,{})]})}),d=(n(17),n(18),function(e){var t=e.task,n=e.removeTask,a=e.idx,c=e.toggleCompletion;return Object(s.jsxs)("li",{className:"task__item",children:[Object(s.jsx)("span",{className:"task__item__content",children:t.name}),Object(s.jsx)("span",{className:"task__item__label",children:a+1}),Object(s.jsxs)("span",{className:"task__item__controls",children:[Object(s.jsx)("span",{className:"task__item__controls__toggleCompletion",onClick:function(){return c(t.id)},children:t.completed?"DONE":"PENDING..."}),Object(s.jsx)("span",{className:"task__item__controls__remove",onClick:function(){return n(t.id)},children:"X"})]})]})}),O=function(e){var t=e.tasks,n=e.removeTask,a=e.toggleCompletion;return Object(s.jsx)("ul",{className:"task__list",children:t.map((function(e,t){return Object(s.jsx)(d,{task:e,removeTask:n,toggleCompletion:a,idx:t},e.id)}))})},f=(n(19),c.a.memo((function(e){var t=e.tasks,n=e.displayFilteredTasks,c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],o=l[1],r=t.filter((function(e){return e.name.toLocaleLowerCase().includes(i)})),j=i&&r;return Object(a.useEffect)((function(){n(i?j:t)}),[i,n,j,t]),Object(s.jsx)("form",{autoComplete:"off",className:"form__control",onSubmit:function(e){e.preventDefault()},children:Object(s.jsxs)("label",{htmlFor:"input search",className:"form__input",children:[Object(s.jsx)("input",{required:!0,type:"text",id:"input search",placeholder:"\xa0",value:i,onChange:function(e){o(e.target.value.toLocaleLowerCase())}}),Object(s.jsx)("span",{className:"label",children:"Find task..."}),Object(s.jsx)("span",{className:"focus-bg"})]})})})));var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),i=Object(u.a)(l,2),b=i[0],d=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("tasks");e&&c(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(n))}),[n]);var p=Object(a.useCallback)((function(e){d(e)}),[d]),_=n.length>1?Object(s.jsx)(f,{tasks:n,displayFilteredTasks:p}):null;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("h1",{className:"header__glitch",children:[Object(s.jsx)("span",{"aria-hidden":"true",children:"TO DO LIST"}),"TO DO LIST",Object(s.jsx)("span",{"aria-hidden":"true",children:"TO DO LIST"})]}),Object(s.jsx)(m,{addTask:function(e){var t={id:Object(j.a)(),name:e,completed:!1};c([].concat(Object(r.a)(n),[t]))}}),_,Object(s.jsx)(O,{tasks:b,removeTask:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},toggleCompletion:function(e){var t=n.findIndex((function(t){return t.id===e})),s=Object(r.a)(n),a=Object(o.a)({},n[t]);a.completed=!a.completed,s[t]=a,c(s)}})]})};i.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.db296eaf.chunk.js.map