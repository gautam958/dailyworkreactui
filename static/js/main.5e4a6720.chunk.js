(this.webpackJsonpdailyworkreactui=this.webpackJsonpdailyworkreactui||[]).push([[0],{29:function(e,s,t){},73:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(26),r=t.n(a),n=t(3),i=t(22),l=(t(29),t(0));var d=t(11),j=t(12),o=t(15),b=t(14),m=(c.Component,function(e){Object(o.a)(t,e);var s=Object(b.a)(t);function t(){return Object(d.a)(this,t),s.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("footer",{className:"main-footer",children:[Object(l.jsxs)("strong",{children:["Copyright \xa9 2014-2019 ",Object(l.jsx)("a",{href:"http://adminlte.io",children:"AdminLTE.io"}),"."]}),"All rights reserved.",Object(l.jsxs)("div",{className:"float-right d-none d-sm-inline-block",children:[Object(l.jsx)("b",{children:"Version"})," 3.0.0"]})]})})}}]),t}(c.Component)),h=function(e){Object(o.a)(t,e);var s=Object(b.a)(t);function t(){return Object(d.a)(this,t),s.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",children:Object(l.jsx)("i",{className:"fas fa-bars"})})}),Object(l.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:Object(l.jsx)("a",{href:"./",className:"nav-link",children:"Home"})})]})})})}}]),t}(c.Component),u=t(19),x=function(e){Object(o.a)(t,e);var s=Object(b.a)(t);function t(){return Object(d.a)(this,t),s.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[Object(l.jsxs)("a",{href:"index3.html",className:"brand-link",children:[Object(l.jsx)("img",{src:"dist/img/AdminLTELogo.png",alt:"AdminLTE Logo",className:"brand-image img-circle elevation-3",style:{opacity:".8"}}),Object(l.jsx)("span",{className:"brand-text font-weight-light",children:"AdminLTE 3"})]}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)("nav",{className:"mt-2",children:Object(l.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(u.b,{to:"/Users/",className:"nav-link",children:[Object(l.jsx)("i",{className:"nav-icon fas fa-th"}),Object(l.jsx)("p",{children:"Users"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(u.b,{to:"/AddUser/",className:"nav-link",children:[Object(l.jsx)("i",{className:"nav-icon fas fa-th"}),Object(l.jsx)("p",{children:"Add Users"})]})}),Object(l.jsxs)("li",{className:"nav-item has-treeview",children:[Object(l.jsxs)(u.b,{to:"#",className:"nav-link",children:[Object(l.jsx)("i",{className:"nav-icon fas fa-copy"}),Object(l.jsxs)("p",{children:["Layout Options",Object(l.jsx)("i",{className:"fas fa-angle-left right"})]})]}),Object(l.jsxs)("ul",{className:"nav nav-treeview",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"pages/layout/top-nav.html",className:"nav-link",children:[Object(l.jsx)("i",{className:"far fa-circle nav-icon"}),Object(l.jsx)("p",{children:"Top Navigation"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"pages/layout/collapsed-sidebar.html",className:"nav-link",children:[Object(l.jsx)("i",{className:"far fa-circle nav-icon"}),Object(l.jsx)("p",{children:"Collapsed Sidebar"})]})})]})]}),Object(l.jsx)("li",{className:"nav-header",children:"LABELS"}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"#",className:"nav-link",children:[Object(l.jsx)("i",{className:"nav-icon far fa-circle text-danger"}),Object(l.jsx)("p",{className:"text",children:"Important"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"#",className:"nav-link",children:[Object(l.jsx)("i",{className:"nav-icon far fa-circle text-warning"}),Object(l.jsx)("p",{children:"Warning"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"#",className:"nav-link",children:[Object(l.jsx)("i",{className:"nav-icon far fa-circle text-info"}),Object(l.jsx)("p",{children:"Informational"})]})})]})})})]})})}}]),t}(c.Component),O=t(2),f=t.n(O),v=t(6),p=t(10),N=t(39),y=t.n(N),g=t(40),w=t.n(g)()(y.a),U=(w.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),w),C=t(23),k=t.n(C),E="http://10.39.181.74/dailyworkApi/api/v1/user",P={headers:{Accept:"application/json","Content-Type":"application/json"}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return{Save:function(s){return k.a.post(e,JSON.stringify(s),P).then((function(e){return e}),(function(e){return e}))}}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return{checkUserid:function(s){return k.a.get(e+"/Getuser/",{params:{userid:s}}).then((function(e){return e}),(function(e){return e}))}}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return{GetAllUsers:function(){return k.a.get(e,P).then((function(e){return e}),(function(e){return e}))}}},A="This field is required",F="Your input exceed maximum length",T=function(e){return Object(l.jsx)("div",{className:"invalid-feedback",children:e})};function D(){var e=Object(c.useState)(""),s=Object(p.a)(e,2),t=s[0],a=s[1],r=Object(i.a)(),d=r.register,j=r.handleSubmit,o=r.reset,b=r.watch,m=r.setFocus,h=(r.clearErrors,r.setError),u=(r.getValues,r.formState),x=u.errors,O=(u.isValid,u.isDirty,function(){var e=Object(v.a)(f.a.mark((function e(s){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("Form Data : ",s),console.warn("Form Error : ",x),"N"===t){e.next=9;break}return e.next=5,S().Save(s);case 5:200===(c=e.sent).status?(g(),console.log("User Saved Successfully"),U.fire("User Saved!","User Saved Successfully!","success")):(U.fire("Error Occured!",c,"error"),m("Userid")),e.next=10;break;case 9:h("Userid");case 10:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),N=function(){var e=Object(v.a)(f.a.mark((function e(s){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.target.value,e.next=3,q().checkUserid(t);case 3:200===e.sent.status?(h("Userid"),a("N"),console.log("User exists")):(a(""),console.log("New User"));case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),y=Object(c.useRef)({});y.current=b("Password",""),Object(c.useEffect)((function(){m("Userid")}),[m]);var g=function(){m("Userid"),o()};return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"content-wrapper",children:[Object(l.jsx)("div",{className:"content-header",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row mb-2",children:[Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsx)("h1",{className:"m-0 text-dark",children:"Users"})}),Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsx)("a",{href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"breadcrumb-item active",children:"Users"})]})})]})})}),Object(l.jsx)("section",{className:"content",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("div",{className:"card card-info",children:[Object(l.jsx)("div",{className:"card-header",children:Object(l.jsx)("div",{className:"card-title",children:"User Form"})}),Object(l.jsxs)("form",{onSubmit:j(O,(function(e){console.error(e)})),children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"Userid",children:"User Name"}),Object(l.jsx)("input",Object(n.a)(Object(n.a)({type:"text",className:"form-control ".concat(x.Userid?"is-invalid":""),placeholder:"Enter Userid"},d("Userid",{required:!0,maxLength:20})),{},{onChange:N})),x.Userid&&"required"===x.Userid.type&&T(A),x.Userid&&"maxLength"===x.Userid.type&&T(F),t&&T("Userid already exists")]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"Password",children:"Password"}),Object(l.jsx)("input",Object(n.a)({type:"password",className:"form-control ".concat(x.Password?"is-invalid":""),placeholder:"Enter Password"},d("Password",{required:!0,minLength:4,maxLength:12}))),x.Password&&"required"===x.Password.type&&T(A),x.Password&&"minLength"===x.Password.type&&T("Your input must be minimum length"),x.Password&&"maxLength"===x.Password.type&&T(F)]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"FullName",children:"Full Name"}),Object(l.jsx)("input",Object(n.a)({type:"text",className:"form-control ".concat(x.FullName?"is-invalid":""),placeholder:"Enter FullName"},d("FullName",{required:!0}))),x.FullName&&"required"===x.FullName.type&&T(A)]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"ContactNo",children:"Contact Number"}),Object(l.jsx)("input",Object(n.a)({type:"tel",className:"form-control ".concat(x.ContactNo?"is-invalid":""),placeholder:"Enter Contact Number"},d("ContactNo",{required:!0}))),x.ContactNo&&"required"===x.ContactNo.type&&T(A)]})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"ConfirmPassword",children:"Confirm Password"}),Object(l.jsx)("input",Object(n.a)(Object(n.a)({type:"password",className:"form-control ".concat(x.ConfirmPassword?"is-invalid":""),placeholder:"Enter ConfirmPassword"},d("ConfirmPassword",{required:!0,validate:function(e){return e===y.current||"The passwords do not match"}})),{},{skip:!0})),x.ConfirmPassword&&"required"===x.ConfirmPassword.type&&T(A),x.ConfirmPassword&&T(x.ConfirmPassword.message)]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"Email",children:"Email"}),Object(l.jsx)("input",Object(n.a)({type:"email",className:"form-control ".concat(x.Email?"is-invalid":""),placeholder:"Enter Email"},d("Email",{required:!0}))),x.Email&&"required"===x.Email.type&&T(A)]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"txtCountry",children:"Country"}),Object(l.jsx)("input",Object(n.a)({type:"text",className:"form-control ".concat(x.Country?"is-invalid":""),placeholder:"Enter Country"},d("Country",{required:!0}))),x.Country&&"required"===x.Country.type&&T(A)]})]})]})]})}),Object(l.jsxs)("div",{class:"card-footer",children:[Object(l.jsxs)("button",{type:"reset",onClick:g,className:"btn btn-info float-right  ml-2  ",children:["  ",Object(l.jsx)("i",{class:"fas fa-retweet"})," Cancel"]}),Object(l.jsxs)("button",{type:"submit",className:"btn btn-info float-right ",children:[" ",Object(l.jsx)("i",{class:"far fa-save"})," Save"]})]})]})]})})})})]})})}function I(){var e=Object(c.useState)(null),s=Object(p.a)(e,2),t=s[0],a=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L().GetAllUsers().then((function(e){return a(e.data)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"content-wrapper",children:[Object(l.jsx)("div",{className:"content-header",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row mb-2",children:[Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("h1",{className:"m-0 text-dark",children:"Users"}),Object(l.jsx)("a",{href:"/users/UserForm",className:"btn btn-sm btn-success mb-2",children:"Add User"})]}),Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsx)("a",{href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"breadcrumb-item active",children:"Users"})]})})]})})}),Object(l.jsx)("section",{className:"content",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("div",{className:"card card-info",children:Object(l.jsxs)("table",{className:"table table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{style:{width:"18%"},children:"User Id"}),Object(l.jsx)("th",{style:{width:"18%"},children:"Email"}),Object(l.jsx)("th",{style:{width:"18%"},children:"FullName"}),Object(l.jsx)("th",{style:{width:"18%"},children:"Contact#"}),Object(l.jsx)("th",{style:{width:"18%"},children:"Country"}),Object(l.jsx)("th",{style:{width:"10%"}})]})}),Object(l.jsxs)("tbody",{children:[t&&t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[e.userid,"  "]}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.fullName}),Object(l.jsx)("td",{children:e.contactNo}),Object(l.jsx)("td",{children:e.country}),Object(l.jsxs)("td",{style:{whiteSpace:"nowrap"},children:[Object(l.jsx)("a",{href:"/users/edit/".concat(e.userid),className:"btn btn-sm btn-primary mr-1",children:"Edit"}),Object(l.jsx)("button",{onClick:function(){return s=e.userid,void console.log("Delete called"+s);var s},className:"btn btn-sm btn-danger btn-delete-user",disabled:e.isDeleting,children:e.isDeleting?Object(l.jsx)("span",{className:"spinner-border spinner-border-sm"}):Object(l.jsx)("span",{children:"Delete"})})]})]},e.userid)})),!t&&Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:"4",className:"text-center",children:Object(l.jsx)("div",{className:"spinner-border spinner-border-lg align-center"})})}),t&&!t.length&&Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:"4",className:"text-center",children:Object(l.jsx)("div",{className:"p-2",children:"No Users To Display"})})})]})]})})})})})]})})}var B=t(4);var G=function(){return Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(x,{}),Object(l.jsxs)(B.c,{children:[Object(l.jsx)(B.a,{exact:!0,path:"/",children:Object(l.jsx)(I,{})}),Object(l.jsx)(B.a,{exact:!0,path:"/Users",children:Object(l.jsx)(I,{})}),Object(l.jsx)(B.a,{exact:!0,path:"/AddUser",children:Object(l.jsx)(D,{})})]}),Object(l.jsx)(m,{})]})})};r.a.render(Object(l.jsx)(G,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.5e4a6720.chunk.js.map