(self.webpackChunkmy_lifes_journey=self.webpackChunkmy_lifes_journey||[]).push([[5820],{5820:function(t,n,e){"use strict";e.r(n),e.d(n,{SettingsPageModule:function(){return d}});var o=e(1116),i=e(1462),r=e(8809),a=e(8080),c=e(5803),s=e(303),l=e(9899),u=[{path:"",component:function(){function t(t,n,e,o){var i=this;this.plt=t,this.authenticationService=n,this.alertCtrl=e,this.iab=o,this.user={},this.authenticationService.getUserData().subscribe(function(t){i.user=t})}return t.prototype.ngOnInit=function(){},t.prototype.openRate=function(){this.plt.is("ios")?this.iab.create("https://apps.apple.com/app/my-lifes-journey/id1639443665","_system"):this.iab.create("https://play.google.com/store/apps/details?id=co.nz.mylifesjourney.app","_system")},t.prototype.openFollow=function(){this.iab.create("https://www.facebook.com","_system")},t.prototype.openEmail=function(){this.iab.create("mailto:contact@mylifesjourney.nz","_system")},t.prototype.openChangePassword=function(){var t=this;this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Change",handler:function(n){n.password&&n.confirmPassword&&n.password===n.confirmPassword?t.authenticationService.changePassword(t.user.email,n.password,n.confirmPassword).then(function(){t.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(t){}}]}).then(function(t){t.present()})}).catch(function(){t.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Try Again",handler:function(n){setTimeout(function(){t.openChangePassword()},200)}}]}).then(function(t){t.present()})}):t.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Try Again",handler:function(n){setTimeout(function(){t.openChangePassword()},200)}}]}).then(function(t){t.present()})}}]}).then(function(t){t.present()})},t.prototype.logout=function(){this.authenticationService.logout()},t.prototype.deleteAccount=function(){var t=this;this.alertCtrl.create({header:"WARNING: You are about to delete your account",message:"All your data associated with this account will be erased. This cannot be undone.",buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Delete",handler:function(n){t.authenticationService.deleteUser().then(function(){t.alertCtrl.create({header:"Account deleted",message:"Your account has been removed",buttons:[{text:"Dismiss",role:"cancel",handler:function(t){}}]}).then(function(t){t.present()}),t.logout()}).catch(function(){t.alertCtrl.create({header:"Error",message:"There was an error while deleting your account.",buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Try Again",handler:function(n){setTimeout(function(){t.deleteAccount()},200)}}]}).then(function(t){t.present()})})}}]}).then(function(t){t.present()})},t.\u0275fac=function(n){return new(n||t)(c.Y36(r.t4),c.Y36(s.$),c.Y36(r.Br),c.Y36(l.i))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-settings"]],decls:29,vars:0,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["text","Back","icon","caret-back",1,"app-navigation__back-button"],[1,"settings-list"],["detail","",3,"click"],["name","heart","slot","start"],["name","mail","slot","start"],["name","lock-open","slot","start"],["name","lock-closed","slot","start"],["name","trash","slot","start","color","danger"],["color","danger"]],template:function(t,n){1&t&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar",1),c.TgZ(2,"ion-buttons",2),c._UZ(3,"ion-back-button",3),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Settings"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content"),c.TgZ(7,"ion-list",4),c.TgZ(8,"ion-list-header"),c._uU(9,"Support"),c.qZA(),c.TgZ(10,"ion-item",5),c.NdJ("click",function(){return n.openRate()}),c._UZ(11,"ion-icon",6),c._uU(12," Rate The App "),c.qZA(),c.TgZ(13,"ion-item",5),c.NdJ("click",function(){return n.openEmail()}),c._UZ(14,"ion-icon",7),c._uU(15," Contact Support "),c.qZA(),c.TgZ(16,"ion-list-header"),c._uU(17,"Account"),c.qZA(),c.TgZ(18,"ion-item",5),c.NdJ("click",function(){return n.openChangePassword()}),c._UZ(19,"ion-icon",8),c.TgZ(20,"ion-label"),c._uU(21,"Change Password"),c.qZA(),c.qZA(),c.TgZ(22,"ion-item",5),c.NdJ("click",function(){return n.logout()}),c._UZ(23,"ion-icon",9),c._uU(24," Logout "),c.qZA(),c.TgZ(25,"ion-item",5),c.NdJ("click",function(){return n.deleteAccount()}),c._UZ(26,"ion-icon",10),c.TgZ(27,"ion-label",11),c._uU(28,"Delete Account"),c.qZA(),c.qZA(),c.qZA(),c.qZA())},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.q_,r.yh,r.Ie,r.gu,r.Q$],styles:[".app-navigation__back-button[_ngcontent-%COMP%]{font-size:13px;text-transform:none;background-color:#fff;border-radius:20px;overflow:hidden;--min-width:72px;color:#210f38;--icon-font-size:15px}.app-navigation__back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#e7d2e6}.app-navigation__back-button.ios[_ngcontent-%COMP%]{--icon-margin-end:0px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:20px;padding-top:10px}.settings-list[_ngcontent-%COMP%]   ion-list-header.ios[_ngcontent-%COMP%]{line-height:30px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]:first-child{margin-top:0;padding-top:0}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}.settings-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#f3c3f7}.settings-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{cursor:pointer}"]}),t}()}],p=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),t}(),d=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,i.u5,r.Pc,p]]}),t}()}}]);