(self.webpackChunkmy_lifes_journey=self.webpackChunkmy_lifes_journey||[]).push([[3051],{3051:function(o,r,n){"use strict";n.r(r),n.d(r,{ForgotPasswordPageModule:function(){return c}});var t=n(1116),e=n(1462),s=n(5860),g=n(8809),_=n(5803),a=n(303);function i(o,r){1&o&&_._UZ(0,"ion-spinner",12)}function p(o,r){if(1&o&&(_.TgZ(0,"p",13),_._uU(1),_.qZA()),2&o){var n=_.oxw();_.xp6(1),_.Oqu(n.user.error)}}var d=function(){return["/login"]},f=[{path:"",component:function(){function o(o,r){this.authService=o,this.toastController=r,this.user={email:"",loading:!1}}return o.prototype.ngOnInit=function(){},o.prototype.resetPassword=function(){var o=this;this.user.loading=!0,this.user.error="",this.authService.resetPassword(this.user).then(function(){o.user.loading=!1,o.user.email="",o.toastController.create({message:"Link sent to reset your password!",duration:2e3}).then(function(o){o.present()})}).catch(function(r){if(o.user.loading=!1,r&&r.error)if(r.error.error.errors)for(var n in r.error.error.errors)o.user.error=o.user.error+r.error.error.errors[n]+" ";else o.user.error=r.error.error.message;else o.user.error=r.message})},o.\u0275fac=function(r){return new(r||o)(_.Y36(a.$),_.Y36(g.yF))},o.\u0275cmp=_.Xpm({type:o,selectors:[["app-forgot-password"]],decls:20,vars:6,consts:[[1,"forgot-password"],[1,"forgot-password__header"],["src","assets/img/logo-dark.png",1,"forgot-password__header__logo"],[1,"forgot-password__form",3,"ngSubmit"],[1,"forgot-password__form__input"],["type","email","name","email",3,"ngModel","ngModelChange"],["color","dark","expand","block","shape","round","type","submit",1,"forgot-password__form__login-button",3,"disabled"],["color","light",4,"ngIf"],["class","forgot-password__form__error",4,"ngIf"],[1,"forgot-password__form__secondary-actions"],[1,"forgot-password__form__secondary-actions__login"],["routerDirection","forward",3,"routerLink"],["color","light"],[1,"forgot-password__form__error"]],template:function(o,r){1&o&&(_.TgZ(0,"ion-content",0),_.TgZ(1,"div",1),_._UZ(2,"img",2),_.TgZ(3,"h1"),_._uU(4,"Reset Password"),_.qZA(),_.TgZ(5,"h6"),_._uU(6,"Fill in the fields below to change your password."),_.qZA(),_.qZA(),_.TgZ(7,"form",3),_.NdJ("ngSubmit",function(){return r.resetPassword()}),_.TgZ(8,"div",4),_.TgZ(9,"h6"),_._uU(10,"Email"),_.qZA(),_.TgZ(11,"ion-input",5),_.NdJ("ngModelChange",function(o){return r.user.email=o}),_.qZA(),_.qZA(),_.TgZ(12,"ion-button",6),_._uU(13," Reset Password "),_.YNc(14,i,1,0,"ion-spinner",7),_.qZA(),_.YNc(15,p,2,1,"p",8),_.TgZ(16,"div",9),_.TgZ(17,"p",10),_.TgZ(18,"a",11),_._uU(19,"Login"),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.qZA()),2&o&&(_.xp6(11),_.Q6J("ngModel",r.user.email),_.xp6(1),_.Q6J("disabled",r.user.loading),_.xp6(2),_.Q6J("ngIf",r.user.loading),_.xp6(1),_.Q6J("ngIf",r.user.error),_.xp6(3),_.Q6J("routerLink",_.DdM(5,d)))},directives:[g.W2,e._Y,e.JL,e.F,g.pK,g.j9,e.JJ,e.On,g.YG,t.O5,s.yS,g.YI,g.PQ],styles:[".forgot-password[_ngcontent-%COMP%]{--background:#e7d2e6;--padding-top:40px;--padding-bottom:40px;--padding-start:20px;--padding-end:20px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__header[_ngcontent-%COMP%]{padding-bottom:30px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:180px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:40px 0 0}.forgot-password[_ngcontent-%COMP%]   .forgot-password__header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:10px 0 0}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__input[_ngcontent-%COMP%]{margin-top:20px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__input[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:200;font-size:13px;letter-spacing:1px;margin:0;padding-bottom:10px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background:#fff;background-color:#fff;border-radius:64px;--padding-top:12.5px;--padding-bottom:12.5px;--padding-start:30px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__login-button[_ngcontent-%COMP%]{margin-top:25px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__login-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;margin-left:5px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__error[_ngcontent-%COMP%]{text-align:center;color:red}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__secondary-actions[_ngcontent-%COMP%]{margin-top:25px}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__secondary-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px;font-weight:200;text-align:center}.forgot-password[_ngcontent-%COMP%]   .forgot-password__form[_ngcontent-%COMP%]   .forgot-password__form__secondary-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#210f38}"]}),o}()}],c=function(){function o(){}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=_.oAB({type:o}),o.\u0275inj=_.cJS({imports:[[t.ez,e.u5,g.Pc,s.Bz.forChild(f)]]}),o}()}}]);