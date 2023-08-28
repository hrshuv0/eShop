"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[226],{5226:(U,p,l)=>{l.r(p),l.d(p,{AccountModule:()=>N});var m=l(6814),u=l(5476),i=l(95),t=l(4769),c=l(6448),g=l(9947);let d=(()=>{var e;class r{constructor(n,o,a){this.accountService=n,this.router=o,this.activatedRoute=a}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.pattern("^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$")]),password:new i.NI("",i.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(c.B),t.Y36(u.F0),t.Y36(u.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:22,vars:12,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","w-100","mt-3",3,"disabled"],[1,"col-4"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"button",7),t._uU(9,"Sign in"),t.qZA()()(),t.TgZ(10,"div",8)(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA(),t.TgZ(19,"pre"),t._uU(20),t.ALo(21,"json"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",o.loginForm),t.xp6(4),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("disabled",o.loginForm.invalid),t.xp6(4),t.hij("Form Status: ",o.loginForm.status,""),t.xp6(2),t.hij("Email Status: ",o.loginForm.get("email").status,""),t.xp6(2),t.hij("Email Touched: ",o.loginForm.get("email").touched,""),t.xp6(2),t.hij("Email Dirty: ",o.loginForm.get("email").dirty,""),t.xp6(2),t.Oqu(t.lcZ(21,10,o.loginForm.value)))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,g.t,m.Ts]}),r})();var f=l(5592),h=l(6321),v=l(671);var Z=l(4664),F=l(2096),x=l(7398);function A(e,r){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const s=r.$implicit;t.xp6(1),t.Oqu(s)}}function C(e,r){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,A,2,1,"li",11),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.errors)}}const T=[{path:"login",component:d},{path:"register",component:(()=>{var e;class r{constructor(n,o,a){this.fb=n,this.accountService=o,this.router=a}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[i.kI.required]],email:[null,[i.kI.required,i.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validationEmailNotTaken()]],password:[null,[i.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validationEmailNotTaken(){return n=>function y(e=0,r,s=h.P){let n=-1;return null!=r&&((0,v.K)(r)?s=r:n=r),new f.y(o=>{let a=function b(e){return e instanceof Date&&!isNaN(e)}(e)?+e-s.now():e;a<0&&(a=0);let S=0;return s.schedule(function(){o.closed||(o.next(S++),0<=n?this.schedule(void 0,n):o.complete())},a)})}(500).pipe((0,Z.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,x.U)(o=>o?{emailExists:!0}:null)):(0,F.of)(null)))}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(c.B),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","w-100","mt-3"],[1,"text-danger"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Register"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),t.YNc(9,C,2,1,"ul",8),t.TgZ(10,"button",9),t._uU(11,"Register"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",o.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",o.errors))},dependencies:[m.sg,m.O5,i._Y,i.JJ,i.JL,i.sg,i.u,g.t]}),r})()}];let J=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(T),u.Bz]}),r})();var w=l(6208);let N=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,J,w.m]}),r})()}}]);