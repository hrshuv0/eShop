"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{3025:(Z,g,a)=>{a.d(g,{b:()=>x});var t=a(4769),p=a(6814),u=a(5476);function c(e,r){if(1&e&&(t.TgZ(0,"th",4)(1,"div",5),t._uU(2,"Remove"),t.qZA()()),2&e){const n=t.oxw(2);t.ekj("bg-light",n.isBasket)}}function m(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"i",21),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.decrementItemQuantity(i))}),t.qZA()}}function d(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"i",22),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.incrementItemQuantity(i))}),t.qZA()}}function l(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"i",23),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.removeBasketItem(i))}),t.qZA()}}const _=function(e){return["shop",e]};function f(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"th",8)(2,"div",9),t._UZ(3,"img",10),t.TgZ(4,"div",11)(5,"h5",12)(6,"a",13),t._uU(7),t.qZA()(),t.TgZ(8,"span",14),t._uU(9),t.qZA()()()(),t.TgZ(10,"td",15)(11,"strong"),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"td",15)(15,"div",16),t.YNc(16,m,1,0,"i",17),t.TgZ(17,"span",18),t._uU(18),t.qZA(),t.YNc(19,d,1,0,"i",19),t.qZA()(),t.TgZ(20,"td",15)(21,"strong"),t._uU(22),t.ALo(23,"currency"),t.qZA()(),t.TgZ(24,"td",15),t.YNc(25,l,1,0,"i",20),t.qZA()()),2&e){const n=r.$implicit,o=t.oxw(2);t.xp6(3),t.s9C("src",n.pictureUrl,t.LSH),t.s9C("alt",n.productName),t.xp6(3),t.Q6J("routerLink",t.VKq(17,_,n.id||n.productId)),t.xp6(1),t.Oqu(n.productName),t.xp6(2),t.hij("Type: ",n.type,""),t.xp6(3),t.Oqu(t.lcZ(13,13,n.price)),t.xp6(3),t.ekj("justify-content-center",!o.isBasket),t.xp6(1),t.Q6J("ngIf",o.isBasket),t.xp6(2),t.Oqu(n.quantity),t.xp6(1),t.Q6J("ngIf",o.isBasket),t.xp6(3),t.Oqu(t.lcZ(23,15,n.price*n.quantity)),t.xp6(3),t.Q6J("ngIf",o.isBasket)}}function T(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4)(6,"div",5),t._uU(7,"Product"),t.qZA()(),t.TgZ(8,"th",4)(9,"div",5),t._uU(10,"Price"),t.qZA()(),t.TgZ(11,"th",4)(12,"div",5),t._uU(13,"Quantity"),t.qZA()(),t.TgZ(14,"th",4)(15,"div",5),t._uU(16,"Total"),t.qZA()(),t.YNc(17,c,3,2,"th",6),t.qZA()(),t.TgZ(18,"tbody"),t.YNc(19,f,26,19,"tr",7),t.qZA()()(),t.BQk()),2&e){const n=t.oxw();t.xp6(3),t.ekj("thead-light",n.isBasket||n.isOrder),t.xp6(2),t.ekj("bg-light",n.isBasket),t.xp6(3),t.ekj("bg-light",n.isBasket),t.xp6(3),t.ekj("bg-light",n.isBasket),t.xp6(3),t.ekj("bg-light",n.isBasket),t.xp6(3),t.Q6J("ngIf",n.isBasket),t.xp6(2),t.Q6J("ngForOf",n.items)}}let x=(()=>{var e;class r{constructor(){this.decrement=new t.vpe,this.increment=new t.vpe,this.remove=new t.vpe,this.isBasket=!0,this.items=[],this.isOrder=!1}ngOnInit(){}decrementItemQuantity(o){this.decrement.emit(o)}incrementItemQuantity(o){this.increment.emit(o)}removeBasketItem(o){this.remove.emit(o)}}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-basket-summary"]],inputs:{isBasket:"isBasket",items:"items",isOrder:"isOrder"},outputs:{decrement:"decrement",increment:"increment",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"table-responsive"],[1,"table"],[1,"border-0","py-2"],["scope","col",1,"border-0"],[1,"p-2","px-3","text-uppercase"],["scope","col","class","border-0",3,"bg-light",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ms-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"text-dark",3,"routerLink"],[1,"text-muted","fw-normal","font-italic","d-block"],[1,"align-middle"],[1,"d-flex","align-items-center"],["class","fa fa-minus-circle text-warning","style","cursor: pointer; font-size: 2em",3,"click",4,"ngIf"],[1,"fw-bold","mx-2",2,"font-size","1.5rem"],["class","fa fa-plus-circle text-warning","style","cursor: pointer; font-size: 2em",3,"click",4,"ngIf"],["class","fa fa-trash text-danger","style","cursor: pointer; font-size: 2em",3,"click",4,"ngIf"],[1,"fa","fa-minus-circle","text-warning",2,"cursor","pointer","font-size","2em",3,"click"],[1,"fa","fa-plus-circle","text-warning",2,"cursor","pointer","font-size","2em",3,"click"],[1,"fa","fa-trash","text-danger",2,"cursor","pointer","font-size","2em",3,"click"]],template:function(o,i){1&o&&t.YNc(0,T,20,12,"ng-container",0),2&o&&t.Q6J("ngIf",i.items.length>0)},dependencies:[p.sg,p.O5,u.rH,p.H9]}),r})()},9129:(Z,g,a)=>{a.d(g,{S:()=>u});var t=a(4769),p=a(6814);let u=(()=>{var c;class m{constructor(){}ngOnInit(){}}return(c=m).\u0275fac=function(l){return new(l||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-order-totals"]],inputs:{shippingPrice:"shippingPrice",subtotal:"subtotal",total:"total"},decls:24,vars:9,consts:[[1,"bg-light","px-4","text-uppercase","fw-bold",2,"padding","1.20em"],[1,"p-4"],[1,"font-italic","mb-4"],[1,"list-unstyled","mb-4"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"]],template:function(l,_){1&l&&(t.TgZ(0,"div",0),t._uU(1," Order Summary\n"),t.qZA(),t.TgZ(2,"div",1)(3,"p",2),t._uU(4,"Shipping costs will be added depending on choices made during checkout"),t.qZA(),t.TgZ(5,"ul",3)(6,"li",4)(7,"strong",5),t._uU(8,"Order Subtotal"),t.qZA(),t.TgZ(9,"strong"),t._uU(10),t.ALo(11,"currency"),t.qZA()(),t.TgZ(12,"li",4)(13,"strong",5),t._uU(14,"Shipping and handling"),t.qZA(),t.TgZ(15,"strong"),t._uU(16),t.ALo(17,"currency"),t.qZA()(),t.TgZ(18,"li",4)(19,"strong",5),t._uU(20,"Total"),t.qZA(),t.TgZ(21,"strong"),t._uU(22),t.ALo(23,"currency"),t.qZA()()()()),2&l&&(t.xp6(10),t.Oqu(t.lcZ(11,3,_.subtotal)),t.xp6(6),t.Oqu(t.lcZ(17,5,_.shippingPrice)),t.xp6(6),t.Oqu(t.lcZ(23,7,_.total)))},dependencies:[p.H9]}),m})()},9947:(Z,g,a)=>{a.d(g,{t:()=>x});var t=a(4769),p=a(95),u=a(6814);const c=["input"];function m(e,r){1&e&&t._UZ(0,"div",7)}function d(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij("",n.label," is required")}}function l(e,r){1&e&&(t.TgZ(0,"span"),t._uU(1,"Invalid email address"),t.qZA())}function _(e,r){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,d,2,1,"span",9),t.YNc(2,l,2,0,"span",9),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.controlDir.control.errors?null:n.controlDir.control.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.controlDir.control.errors?null:n.controlDir.control.errors.pattern)}}function f(e,r){1&e&&(t.TgZ(0,"span"),t._uU(1,"Email address is in use"),t.qZA())}function T(e,r){if(1&e&&(t.TgZ(0,"div",10),t.YNc(1,f,2,0,"span",9),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.controlDir.control.errors?null:n.controlDir.control.errors.emailExists)}}let x=(()=>{var e;class r{constructor(o){this.controlDir=o,this.type="text",this.controlDir.valueAccessor=this}ngOnInit(){const o=this.controlDir.control,s=o.asyncValidator?[o.asyncValidator]:[];o.setValidators(o.validator?[o.validator]:[]),o.setAsyncValidators(s),o.updateValueAndValidity()}onChange(o){}onTouched(){}writeValue(o){this.input.nativeElement.value=o||""}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}}return(e=r).\u0275fac=function(o){return new(o||e)(t.Y36(p.a5,2))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-text-input"]],viewQuery:function(o,i){if(1&o&&t.Gf(c,7),2&o){let s;t.iGM(s=t.CRH())&&(i.input=s.first)}},inputs:{type:"type",label:"label"},decls:8,vars:9,consts:[[1,"form-floating","mb-3"],[1,"form-control",3,"ngClass","type","id","placeholder","input","blur"],["input",""],["class","fa fa-spinner fa-spin loader",4,"ngIf"],[3,"for"],["class","invalid-feedback",4,"ngIf"],["class","invalid-feedback d-block",4,"ngIf"],[1,"fa","fa-spinner","fa-spin","loader"],[1,"invalid-feedback"],[4,"ngIf"],[1,"invalid-feedback","d-block"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"input",1,2),t.NdJ("input",function(h){return i.onChange(h.target.value)})("blur",function(){return i.onTouched()}),t.qZA(),t.YNc(3,m,1,0,"div",3),t.TgZ(4,"label",4),t._uU(5),t.qZA(),t.YNc(6,_,3,2,"div",5),t.YNc(7,T,2,1,"div",6),t.qZA()),2&o&&(t.xp6(1),t.s9C("id",i.label),t.s9C("placeholder",i.label),t.Q6J("ngClass",i.controlDir&&i.controlDir.control&&!i.controlDir.control.valid&&i.controlDir.control.touched?"is-invalid":"is-valid")("type",i.type),t.xp6(2),t.Q6J("ngIf",i.controlDir&&i.controlDir.control&&"PENDING"===i.controlDir.control.status),t.xp6(1),t.s9C("for",i.label),t.xp6(1),t.Oqu(i.label),t.xp6(1),t.Q6J("ngIf",i.controlDir&&i.controlDir.control&&!i.controlDir.control.valid&&i.controlDir.control.touched),t.xp6(1),t.Q6J("ngIf",i.controlDir&&i.controlDir.control&&!i.controlDir.control.valid&&i.controlDir.control.dirty))},dependencies:[u.mk,u.O5],styles:[".loader[_ngcontent-%COMP%]{position:absolute;width:auto;top:15px;right:10px;margin-top:0}"]}),r})()}}]);