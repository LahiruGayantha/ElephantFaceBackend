(this.webpackJsonpelephantface=this.webpackJsonpelephantface||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(19),l=c.n(a),i=(c(41),c.p,c(42),c(2)),n=c(3),r=c(7),d=c.p+"static/media/logo_nobackground.75c4fd51.png",o=c.p+"static/media/cart.42be328b.png",j=c(6),b=c.n(j),m=c(5),h=c(23),u={authSuccess:!1,firstName:"",lastName:"",email:"",id:"",type:""},x=Object(h.b)({name:"user",initialState:u,reducers:{changeUser:function(e,t){e.firstName=t.payload.firstName,e.lastName=t.payload.lastName,e.email=t.payload.email,e.id=t.payload.id,e.authSuccess=t.payload.authSuccess,e.type=t.payload.type,localStorage.setItem("firstName",t.payload.firstName),localStorage.setItem("lastName",t.payload.lastName),localStorage.setItem("email",t.payload.email),localStorage.setItem("id",t.payload.id),localStorage.setItem("authSuccess",t.payload.authSuccess),localStorage.setItem("type",t.payload.type)}}}),O=x.actions.changeUser,p=x.reducer,f=c(0),g=function(e){var t=Object(m.b)(),c=Object(i.f)(),a=(Object(s.useRef)(null),Object(s.useState)({email:"",password:""})),l=Object(r.a)(a,2),j=l[0],h=l[1],u=Object(s.useState)({email:"",password:""}),x=Object(r.a)(u,2),p=x[0],g=x[1];return Object(f.jsxs)("div",{className:"container-fluid bg-secondary",children:[Object(f.jsxs)("div",{className:"row text-left pt-5 w-100",children:[Object(f.jsx)("div",{className:"col-6 text-end",children:Object(f.jsx)("img",{src:d,width:400,className:"img-fluid",alt:"..."})}),Object(f.jsx)("div",{className:"col-6",children:Object(f.jsx)("div",{className:"p-2 rounded-3",children:Object(f.jsxs)("div",{className:"container-fluid py-5",style:{color:"white"},children:[Object(f.jsx)("h4",{className:"display-6",children:"Shop the way you like !"}),Object(f.jsx)("h1",{className:"display-4 fw-bold",children:"Elephant Face"}),Object(f.jsx)("p",{className:"col fs-4",children:"Sign in to shoping"}),Object(f.jsxs)("div",{className:"col-4",children:[Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("label",{className:"form-label",children:"Email address"}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:j.email,onChange:function(e){return h((function(t){return Object(n.a)(Object(n.a)({},t),{},{email:e.target.value})}))}}),""!=p.email&&Object(f.jsxs)("div",{id:"emailHelp",style:{color:"pink"},className:"form-text",children:["**",p.email]})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:j.password,onChange:function(e){return h((function(t){return Object(n.a)(Object(n.a)({},t),{},{password:e.target.value})}))}}),""!=p.password&&Object(f.jsx)("div",{id:"emailHelp",style:{color:"pink"},className:"form-text",children:p.password})]}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col text-start",children:Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){b.a.post("/auth/authentication",j).then((function(e){e.data.authSuccess?(t(O(Object(n.a)({},e.data))),c.push("/shop")):g({password:"Please enter correct password.",email:""})})).catch((function(){return g({email:"User does not exist.",password:""})}))},children:"Sign In"})})})]})]})})})]}),Object(f.jsxs)("div",{className:"row pt-4 bg-white",children:[Object(f.jsx)("div",{className:"col-6 mt-5 text-end",children:Object(f.jsxs)("div",{className:"p-5",children:[Object(f.jsx)("h4",{className:"display-6",children:"Are you a smart seller?"}),Object(f.jsx)("p",{className:"col fs-4",children:"Join with us to make your own digital shop"}),Object(f.jsx)("div",{className:"col text-end",children:Object(f.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){return c.push("/seller")},children:"Join Now !"})})]})}),Object(f.jsx)("div",{className:"col-6 text-start",children:Object(f.jsx)("img",{src:o,width:300,className:"img-fluid",alt:"..."})})]}),Object(f.jsx)("footer",{className:"container-fluid",style:{position:"fixed",bottom:-0},children:Object(f.jsx)("div",{className:"bg-light py-4",children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})}),Object(f.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",children:Object(f.jsx)("div",{className:"modal-dialog",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Sign In"}),Object(f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(f.jsx)("div",{className:"modal-body"})]})})})]})},v=function(e){var t;return Object(f.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4 mb-4",children:null===(t=e.data)||void 0===t?void 0:t.map((function(t,c){return Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card shadow-sm",children:[Object(f.jsx)("img",{width:"100%",height:225,src:t.image}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("p",{className:"card-text",children:t.name}),Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(f.jsxs)("small",{className:"text-muted",children:["Rs.",t.unitPrice]}),Object(f.jsx)("div",{className:"btn-group",children:Object(f.jsx)("button",{type:"button",id:t.id,className:"btn btn-sm btn-outline-secondary",onClick:e.onClick,children:"Add to cart"})})]})]})]})},c)}))})},N=function(e){return Object(f.jsx)("div",{class:"modal fade",id:e.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(f.jsx)("div",{class:"modal-dialog",children:Object(f.jsxs)("div",{class:"modal-content",children:[Object(f.jsxs)("div",{class:"modal-header",children:[Object(f.jsx)("h5",{class:"modal-title",children:e.type}),Object(f.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(f.jsx)("div",{class:"modal-body",children:Object(f.jsx)("p",{children:e.message})}),Object(f.jsxs)("div",{class:"modal-footer",children:[Object(f.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(f.jsx)("button",{onClick:e.onClickBtn2,type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",children:e.mainBtnText})]})]})})})},y=c(11),w=function(e){var t=Object(i.f)(),c=Object(m.b)(),s=Object(m.c)((function(e){return e.user.lastName}));return Object(f.jsxs)("div",{style:{backgroundColor:"wheat"},className:"row bg-secondary text-center align-items-center",children:[Object(f.jsx)("div",{className:"col-3 text-end",children:Object(f.jsx)("img",{src:d,width:80,className:"img-fluid",alt:"..."})}),Object(f.jsxs)("div",{className:"col-3 mt-2 text-start pt-2",children:[Object(f.jsx)("h3",{style:{color:"white"},className:"mt-1",children:"Elephant Face"}),Object(f.jsx)("p",{style:{color:"lightgrey"},children:"Shoping on your own way"})]}),Object(f.jsx)("div",{className:"col-3 mt-4",children:Object(f.jsxs)("nav",{className:"nav nav-masthead",style:{color:"white",fontSize:18},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"white",fontSize:24,fontWeight:"bold"},className:"fab fa-product-hunt"}),Object(f.jsx)(y.b,{to:"/shop",style:{color:"white"},className:"nav-link",children:"Products"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"white",fontSize:24,fontWeight:"bold"},className:"fas fa-shopping-cart"}),Object(f.jsx)(y.b,{to:"/basket",style:{color:"white"},className:"nav-link",children:"Cart"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"white",fontSize:24,fontWeight:"bold"},className:"fas fa-sign-out-alt"}),Object(f.jsx)("a",{style:{color:"white"},className:"nav-link active","aria-current":"page",href:"","data-bs-toggle":"modal","data-bs-target":"#signOut_modal_cmp",onClick:e.onClick,children:"Sign out"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"white",fontSize:24,fontWeight:"bold"},className:"fas fa-user"}),Object(f.jsx)("p",{style:{color:"white"},className:"nav-link",children:s})]})]})}),Object(f.jsx)(N,{id:"signOut_modal_cmp",mainBtnText:"Sign Out",message:"Are you sure?",type:"Warning !",onClickBtn2:function(){c(O(Object(n.a)({},u))),t.push("/")}})]})},k=function(e){var t=Object(i.f)(),c=Object(s.useState)([{}]),a=Object(r.a)(c,2),l=a[0],n=a[1];return Object(s.useEffect)((function(){b.a.get("/item/all").then((function(e){console.log(e.data),n(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)(w,{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(v,{onClick:function(e){return t.push("/item/"+e.target.id)},data:l})})}),Object(f.jsx)("footer",{children:Object(f.jsx)("div",{className:"bg-light py-4",children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})})]})},S=function(e){var t=Object(i.f)(),c=Object(m.c)((function(e){return e.user.id})),a=Object(i.g)().id,l=Object(s.useState)({}),d=Object(r.a)(l,2),o=d[0],j=d[1];Object(s.useEffect)((function(){b.a.get("/item/find/"+a).then((function(e){j(Object(n.a)(Object(n.a)({},e.data),{},{qty:1,amount:e.data.unitPrice}))}))}),[]);return Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)(w,{}),Object(f.jsx)("div",{className:"container pt-5",children:Object(f.jsxs)("div",{className:"row mt-5",children:[Object(f.jsx)("div",{className:"offset-2 col-4",children:Object(f.jsx)("img",{src:o.image,width:400,className:"img-fluid shadow-sm border border-1",alt:"..."})}),Object(f.jsxs)("div",{className:"col-4",children:[Object(f.jsx)("h2",{children:o.name}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{class:"card-text",children:o.description}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-4",children:[Object(f.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Unit Price"}),Object(f.jsxs)("h5",{class:"card-title",children:["Rs. ",o.unitPrice]}),Object(f.jsx)("br",{}),Object(f.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Qty"}),Object(f.jsx)("div",{className:"col-5 text-center",children:Object(f.jsxs)("select",{value:o.qty,onChange:function(e){return j((function(t){return Object(n.a)(Object(n.a)({},t),{},{qty:e.target.value,amount:parseFloat(t.unitPrice)*parseFloat(e.target.value)})}))},class:"form-control form-control-sm","aria-label":"Default select example",children:[Object(f.jsx)("option",{selected:!0,children:"1"}),[2,3,4,5,6,7,8,9].map((function(e){return Object(f.jsx)("option",{value:e,children:e})}))]})})]}),Object(f.jsxs)("div",{className:"col-8",style:{borderLeftStyle:"groove",borderLeftColor:"GrayText",borderLeftWidth:1,paddingLeft:50},children:[Object(f.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Total Amount"}),Object(f.jsxs)("h3",{class:"card-title",children:["Rs. ",o.amount]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#confirmation_modal_cmp",children:"Add to cart"})]})]})]})]})}),Object(f.jsx)("footer",{className:"container-fluid",style:{position:"fixed",bottom:-0},children:Object(f.jsx)("div",{className:"bg-light py-4",children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})}),Object(f.jsx)(N,{mainBtnText:"Continue",id:"confirmation_modal_cmp",type:"Confirmation",message:"Are you sure?",onClickBtn2:function(){b.a.post("/cart/addItem",{itemId:parseInt(a),itemQty:o.qty,userId:c}).then((function(e){console.log(e.data),t.push("/basket")})).catch((function(e){return console.log(e)}))}})]})},C=function(e){var t=Object(s.useState)(!1),c=Object(r.a)(t,2),a=c[0],l=c[1],i=Object(s.useState)(e.qty),n=Object(r.a)(i,2),d=n[0],o=n[1];return Object(f.jsxs)("div",{className:"row align-items-center",children:[Object(f.jsx)("div",{className:"col-1",children:Object(f.jsx)("img",{src:e.image,width:80,className:"img-fluid shadow-sm ",alt:"Shop"})}),Object(f.jsxs)("div",{className:"col-4",children:[Object(f.jsx)("p",{className:"card-subtitle mb-2 ",children:"Name"}),Object(f.jsx)("h6",{className:"card-title",children:e.name})]}),Object(f.jsxs)("div",{className:"col-1 text-center",children:[Object(f.jsx)("p",{className:"card-subtitle mb-2 text-muted",children:"Qty"}),Object(f.jsxs)("select",{value:d,style:{textAlign:"center"},readOnly:!a,class:"form-control form-control-sm mb-2","aria-label":"Default select example",onChange:function(e){return o(e.target.value)},children:[Object(f.jsx)("option",{selected:!0,children:"1"}),a?[2,3,4,5,6,7,8,9].map((function(e){return Object(f.jsx)("option",{value:e,children:e})})):Object(f.jsx)("option",{selected:!0,value:d,children:d})]})]}),Object(f.jsxs)("div",{className:"col-2",children:[Object(f.jsx)("p",{className:"card-subtitle mb-2 text-muted",children:"Unit Price"}),Object(f.jsxs)("h6",{className:"card-title",children:["Rs. ",e.uPrice]})]}),Object(f.jsxs)("div",{className:"col-2",children:[Object(f.jsx)("p",{className:"card-subtitle mb-2 text-muted",children:"Amount"}),Object(f.jsxs)("h6",{className:"card-title",children:["Rs. ",parseFloat(e.uPrice)*parseFloat(e.qty)]})]}),Object(f.jsx)("div",{className:"col-1",children:Object(f.jsx)("i",{onClick:function(){a?(l(!1),e.saveEditBtn(d)):l(!0)},style:{color:"green",fontSize:24},className:a?"far fa-check-circle btn":"fas fa-edit btn"})}),Object(f.jsx)("div",{className:"col-1",children:Object(f.jsx)("i",{onClick:e.deleteBtnOnClick,style:{color:"red",fontSize:24},className:"fas fa-trash-alt btn"})}),Object(f.jsx)("hr",{})]})},I=function(e){var t=Object(m.c)((function(e){return e.user.id})),c=Object(s.useState)([]),a=Object(r.a)(c,2),l=a[0],i=a[1],n=Object(s.useState)({qty:0,dAmount:0,amount:0}),d=Object(r.a)(n,2),o=d[0],j=d[1],h=function(){b.a.get("/cart/all/"+t).then((function(e){i(e.data);var t=0,c=0;e.data.forEach((function(e){t+=e.itemQty,c+=parseInt(e.itemQty)*parseInt(e.item.unitPrice)})),j({qty:t,dAmount:0,amount:c})})).catch((function(e){return console.log(e)}))};return Object(s.useEffect)((function(){h()}),[]),Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)(w,{}),Object(f.jsx)("div",{className:"container pt-4",children:Object(f.jsxs)("div",{className:"row mt-5",children:[Object(f.jsxs)("div",{className:"col-8",children:[Object(f.jsx)("h2",{children:"Your Basket"}),Object(f.jsx)("hr",{}),l.map((function(e){return Object(f.jsx)(C,{deleteBtnOnClick:function(){return t=e.id,void b.a.delete("/cart/delete/"+t).then((function(e){return h()}));var t},image:e.item.image,name:e.item.name,qty:e.itemQty,uPrice:e.item.unitPrice,saveEditBtn:function(c){return s=e.id,a=e.item.id,l=t,i=c,void b.a.put("/cart/update/"+s,{itemId:a,itemQty:i,userId:l}).then((function(){return h()}));var s,a,l,i}})}))]}),Object(f.jsxs)("div",{className:"offset-1 col-3",children:[Object(f.jsx)("h2",{children:"Order Summary"}),Object(f.jsx)("hr",{}),Object(f.jsx)("br",{}),Object(f.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Qty"}),Object(f.jsx)("h5",{class:"card-title",children:o.qty}),Object(f.jsx)("br",{}),Object(f.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Discount Amount"}),Object(f.jsxs)("h5",{class:"card-title",children:["Rs. ",o.dAmount]}),Object(f.jsx)("br",{}),Object(f.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Amount"}),Object(f.jsxs)("h3",{class:"card-title",children:["Rs. ",o.amount]})]})]})}),Object(f.jsx)("footer",{className:"container-fluid",style:{position:"fixed",bottom:-0},children:Object(f.jsx)("div",{className:"bg-light py-4",children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})})]})},P=c(36),_=function(e){var t;return Object(f.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4 mb-4",children:null===(t=e.data)||void 0===t?void 0:t.map((function(t,c){return Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)("div",{className:"card shadow-sm",children:[Object(f.jsx)("img",{width:"100%",height:225,src:t.image}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("p",{className:"card-text",children:t.name}),Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(f.jsx)("small",{className:"text-muted",children:""!==t.id?"Rs ."+t.unitPrice:""+t.unitPrice}),Object(f.jsxs)("div",{className:"btn-group",children:[Object(f.jsx)("button",{type:"button",id:t.id,className:"btn btn-sm btn-outline-secondary",onClick:e.onClick,children:""===t.id?"Create":"Edit"}),!(""===t.id)&&Object(f.jsx)("button",{type:"button",id:t.id,className:"btn btn-sm btn-outline-danger",onClick:e.onClickDelete,children:"Delete"})]})]})]})]}),Object(f.jsx)(N,{mainBtnText:"Yes",id:"seller_item_delete_confirmation_modal_cmp",type:"Confirmation",message:"Are you sure?"})]},c)}))})},E=function(e){var t=Object(i.f)(),c=Object(m.b)(),s=Object(m.c)((function(e){return e.user.lastName}));return Object(f.jsxs)("div",{className:"mb-0 row text-center align-items-center shadow-sm",style:{backgroundColor:"#f79c4d"},children:[Object(f.jsx)("div",{className:"col-3 text-end",children:Object(f.jsx)("img",{src:d,width:80,className:"img-fluid",alt:"..."})}),Object(f.jsxs)("div",{className:"col-3 mt-4 text-start",children:[Object(f.jsx)("h3",{style:{color:"black"},className:"mt-1",children:"Elephant Face"}),Object(f.jsx)("p",{style:{color:"white"},children:"Shoping on your own way"})]}),Object(f.jsx)("div",{className:"col-3 mt-4",children:Object(f.jsxs)("nav",{className:"nav nav-masthead justify-content-left pb-0",style:{fontSize:18,fontWeight:"bold"},children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"black",fontSize:24,fontWeight:"bold"},className:"fab fa-product-hunt"}),Object(f.jsx)(y.b,{to:"/seller/shop",style:{color:"black"},className:"nav-link",children:"Products"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"black",fontSize:24,fontWeight:"bold"},className:"fas fa-sign-out-alt"}),Object(f.jsx)("a",{style:{color:"black"},className:"nav-link active","aria-current":"page",href:"","data-bs-toggle":"modal","data-bs-target":"#signOut_modal_cmp",onClick:e.onClick,children:"Sign out"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{style:{color:"black",fontSize:24,fontWeight:"bold"},className:"fas fa-user"}),Object(f.jsx)("p",{style:{color:"black"},className:"nav-link",children:s})]})]})}),Object(f.jsx)(N,{id:"signOut_modal_cmp",mainBtnText:"Sign Out",message:"Are you sure?",type:"Warning !",onClickBtn2:function(){c(O(Object(n.a)({},u))),t.push("/seller"),localStorage.removeItem("authSuccess")}})]})},A=function(e){var t=Object(i.f)(),c=Object(i.h)(),a=(c.path,c.url,Object(m.c)((function(e){return e.user.id}))),l=(Object(m.c)((function(e){return e.user.type})),Object(s.useState)([{}])),n=Object(r.a)(l,2),d=n[0],o=n[1],j=function(){b.a.get("/item/findByUser/"+a).then((function(e){console.log(e.data),o([{image:"https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png",name:"Create new item",unitPrice:"Post items to expan your shop.",id:""}].concat(Object(P.a)(e.data)))})).catch((function(e){return console.log(e)}))};Object(s.useEffect)((function(){j()}),[]);return Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)(E,{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(_,{onClick:function(e){return t.push(""===e.target.id?"/seller/item/new":"/seller/item/"+e.target.id)},onClickDelete:function(e){return t=e.target.id,void b.a.delete("/item/delete/"+t).then((function(){return j()}));var t},data:d})})}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"bg-light py-4",style:{position:"inherit"},children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})})]})},B=function(e){var t=Object(m.b)(),c=Object(i.h)(),a=(c.path,c.url,Object(i.f)()),l=(Object(s.useRef)(null),Object(s.useState)({email:"",password:""})),o=Object(r.a)(l,2),j=o[0],h=o[1],u=Object(s.useState)({email:"",password:""}),x=Object(r.a)(u,2),p=x[0],g=x[1];return Object(s.useEffect)((function(){!function(){var e=localStorage.getItem("firstName"),c=localStorage.getItem("lastName"),s=localStorage.getItem("email"),l=localStorage.getItem("id"),i=localStorage.getItem("authSuccess"),n=localStorage.getItem("type");console.log(i),null!=i&&""!=i&&"false"!=i&&(t(O({firstName:e,lastName:c,email:s,id:l,authSuccess:i,type:n})),a.push("/seller/shop"))}()}),[]),Object(f.jsxs)("div",{className:"container-fluid",style:{backgroundColor:"#f79c4d"},children:[Object(f.jsxs)("div",{className:"row text-left pt-5 w-100",children:[Object(f.jsx)("div",{className:"col-6 text-end",children:Object(f.jsx)("img",{src:d,width:400,className:"img-fluid",alt:"..."})}),Object(f.jsx)("div",{className:"col-6",children:Object(f.jsx)("div",{className:" rounded-3",children:Object(f.jsxs)("div",{className:"container-fluid py-5",style:{color:"black"},children:[Object(f.jsx)("h4",{className:"display-6",children:"Be a part of Us !"}),Object(f.jsx)("h1",{className:"display-4 fw-bold",children:"Elephant Face"}),Object(f.jsx)("p",{className:"col fs-4",children:"Sign in to make your shop"}),Object(f.jsxs)("div",{className:"col-4",children:[Object(f.jsxs)("div",{className:"mb-2",children:[Object(f.jsx)("label",{className:"form-label",children:"Email address"}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:j.email,onChange:function(e){return h((function(t){return Object(n.a)(Object(n.a)({},t),{},{email:e.target.value})}))}}),""!=p.email&&Object(f.jsxs)("div",{id:"emailHelp",style:{color:"white"},className:"form-text",children:["**",p.email]})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{className:"form-label",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:j.password,onChange:function(e){return h((function(t){return Object(n.a)(Object(n.a)({},t),{},{password:e.target.value})}))}}),""!=p.password&&Object(f.jsxs)("div",{id:"emailHelp",style:{color:"white"},className:"form-text",children:["**",p.password]})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-5 text-start",children:Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){b.a.post("/auth/authentication",j).then((function(e){e.data.authSuccess?"seller"===e.data.type?(t(O(Object(n.a)({},e.data))),a.push("/seller/shop")):g({email:"Above user is not a seller.",password:""}):g({password:"Please enter correct password.",email:""})})).catch((function(){return g({email:"User does not exist.",password:""})}))},children:"Sign In"})}),Object(f.jsx)("div",{className:"col-7 text-end",children:Object(f.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){return a.push("/")},children:"Sign In as buyer"})})]})]})]})})})]}),Object(f.jsx)("div",{className:"col-2 bg-white text-center offset-5",style:{borderTopRightRadius:100,borderTopLeftRadius:100,padding:5,fontSize:25,fontWeight:"bold"},children:Object(f.jsx)("h4",{style:{color:"#f79c4d",paddingTop:10},children:"Our Partners"})}),Object(f.jsx)("div",{className:"row pt-4 bg-white justify-content-center",children:Object(f.jsxs)("div",{className:"row mt-4 mb-4 text-center w-100",children:[Object(f.jsx)("div",{className:"offset-3 col-2",children:Object(f.jsxs)("div",{className:"card shadow-sm",children:[Object(f.jsx)("img",{width:"100%",height:150,src:"https://www.hsbc.lk/content/dam/hsbc/lk/images/credit-cards/offers/16-9/keels-logo-pwsimg-1400.jpg"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(f.jsx)("div",{className:"btn-group",children:Object(f.jsx)("a",{href:"https://www.keellssuper.com/",target:"_blank",type:"button",className:"btn btn-sm btn-outline-secondary",children:"Details"})})})})]})}),Object(f.jsx)("div",{className:"col-2",children:Object(f.jsxs)("div",{className:"card shadow-sm",children:[Object(f.jsx)("img",{width:"100%",height:150,src:"https://www.cargillsceylon.com/images/cargillslogo.png"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(f.jsx)("div",{className:"btn-group",children:Object(f.jsx)("a",{href:"https://cargillsonline.com/",target:"_blank",type:"button",className:"btn btn-sm btn-outline-secondary",children:"Details"})})})})]})}),Object(f.jsx)("div",{className:"col-2",children:Object(f.jsxs)("div",{className:"card shadow-sm",children:[Object(f.jsx)("img",{width:"100%",height:150,src:"https://www.isic.lk/uploads/glomark/Glowmark.jpg"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(f.jsx)("div",{className:"btn-group",children:Object(f.jsx)("a",{href:"https://glomark.lk/",target:"_blank",type:"button",className:"btn btn-sm btn-outline-secondary",children:"Details"})})})})]})})]})}),Object(f.jsx)("footer",{className:"container-fluid",style:{position:"fixed",bottom:-0},children:Object(f.jsx)("div",{className:"bg-light py-4",children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})}),Object(f.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",children:Object(f.jsx)("div",{className:"modal-dialog",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsxs)("div",{className:"modal-header",children:[Object(f.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Sign In"}),Object(f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(f.jsx)("div",{className:"modal-body"})]})})})]})},D=c(21),U=function(e){var t=Object(i.f)(),c=Object(m.c)((function(e){return e.user.id})),a=Object(i.g)().id,l=Object(s.useState)({id:"",name:"",description:"",unitPrice:"",image:""}),d=Object(r.a)(l,2),o=d[0],j=d[1];Object(s.useEffect)((function(){"new"!==a?b.a.get("/item/find/"+a).then((function(e){j(Object(n.a)(Object(n.a)({},e.data),{},{qty:1,amount:e.data.unitPrice}))})):j((function(e){return Object(n.a)(Object(n.a)({},e),{},{image:"https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png"})}))}),[]);var h=function(e,t){j((function(c){return Object(n.a)(Object(n.a)({},c),{},Object(D.a)({},e,t))}))};return Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)(E,{}),Object(f.jsxs)("div",{className:"container pt-5 text-center",children:[Object(f.jsx)("h5",{children:"Fill all the details"}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"row mt-5",children:[Object(f.jsxs)("div",{className:"offset-2 col-4",children:[Object(f.jsx)("img",{src:o.image,width:"100%",className:"img-fluid shadow-sm border border-1",alt:"..."}),Object(f.jsxs)("div",{class:"input-group mt-3 pr-4",children:[Object(f.jsx)("div",{class:"input-group-prepend",children:Object(f.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:"Image Url"})}),Object(f.jsx)("input",{type:"text",class:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:o.image,onChange:function(e){return h("image",e.target.value)}})]})]}),Object(f.jsxs)("div",{className:"col-4 text-start",children:[Object(f.jsxs)("div",{class:"input-group mb-3",children:[Object(f.jsx)("div",{class:"input-group-prepend",children:Object(f.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:"Name"})}),Object(f.jsx)("input",{type:"text",class:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:o.name,onChange:function(e){return h("name",e.target.value)}})]}),Object(f.jsx)("div",{class:"input-group mb-3",children:Object(f.jsx)("textarea",{class:"form-control","aria-label":"With textarea",placeholder:"Description",value:o.description,onChange:function(e){return h("description",e.target.value)},rows:"12"})}),Object(f.jsxs)("div",{class:"input-group mb-3",children:[Object(f.jsx)("div",{class:"input-group-prepend",children:Object(f.jsx)("span",{class:"input-group-text",id:"basic-addon1",children:"Unit Price"})}),Object(f.jsx)("input",{type:"text",class:"form-control",placeholder:"Rs.","aria-label":"Username","aria-describedby":"basic-addon1",value:o.unitPrice,onChange:function(e){return h("unitPrice",e.target.value)}})]}),Object(f.jsx)("button",{disabled:""==o.description||""==o.image||""==o.name||""==o.unitPrice,class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#seller_item_confirmation_modal_cmp",children:"Save"})]})]})]}),Object(f.jsx)("footer",{className:"container-fluid",style:{position:"fixed",bottom:-0},children:Object(f.jsx)("div",{className:"bg-light py-4",children:Object(f.jsx)("div",{className:"container text-center",children:Object(f.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 ElephantDev All rights reserved."})})})}),Object(f.jsx)(N,{mainBtnText:"Yes",id:"seller_item_confirmation_modal_cmp",type:"Confirmation",message:"Are you sure?",onClickBtn2:function(){"new"===a?b.a.post("/item/add",{name:o.name,description:o.description,unitPrice:parseFloat(o.unitPrice),image:o.image,ownerId:parseInt(c)}).then((function(e){t.push("/seller/shop")})).catch((function(e){return console.log(e)})):b.a.put("/item/update/"+a,{name:o.name,description:o.description,unitPrice:parseFloat(o.unitPrice),image:o.image,ownerId:parseInt(c)}).then((function(e){t.push("/seller/shop")})).catch((function(e){return console.log(e)}))}})]})},F=function(e){var t=Object(i.h)(),c=t.path,s=(t.url,Object(m.c)((function(e){return e.user.authSuccess})));return Object(f.jsxs)(i.c,{children:[s&&Object(f.jsx)(i.a,{exact:!0,path:"".concat(c,"/shop"),children:Object(f.jsx)(A,{})}),s&&Object(f.jsx)(i.a,{exact:!0,path:"".concat(c,"/item/:id"),children:Object(f.jsx)(U,{})}),Object(f.jsx)(i.a,{path:c,children:Object(f.jsx)(B,{})})]})};var R=function(){var e=Object(m.c)((function(e){return e.user.authSuccess}));return Object(f.jsx)("div",{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{})}),e&&Object(f.jsx)(i.a,{exact:!0,path:"/shop",children:Object(f.jsx)(k,{})}),e&&Object(f.jsx)(i.a,{exact:!0,path:"/item/:id",children:Object(f.jsx)(S,{})}),e&&Object(f.jsx)(i.a,{exact:!0,path:"/basket",children:Object(f.jsx)(I,{})}),Object(f.jsx)(i.a,{path:"/seller",children:Object(f.jsx)(F,{})})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),l(e),i(e)}))},W=Object(h.a)({reducer:{user:p}});b.a.defaults.baseURL="http://localhost:8080",l.a.render(Object(f.jsx)(m.a,{store:W,children:Object(f.jsx)(y.a,{children:Object(f.jsx)(R,{})})}),document.getElementById("root")),T()}},[[67,1,2]]]);
//# sourceMappingURL=main.787cc699.chunk.js.map