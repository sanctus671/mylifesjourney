(self.webpackChunkmy_lifes_journey=self.webpackChunkmy_lifes_journey||[]).push([[5820],{5820:function(t,n,o){"use strict";o.r(n),o.d(n,{SettingsPageModule:function(){return p}});var e=o(1116),i=o(1462),s=o(8809),c=o(5860),r=o(5803),a=o(303),l=o(9899),u=[{path:"",component:function(){function t(t,n,o,e){var i=this;this.plt=t,this.authenticationService=n,this.alertCtrl=o,this.iab=e,this.user={},this.authenticationService.getUserData().subscribe(function(t){i.user=t})}return t.prototype.ngOnInit=function(){},t.prototype.openRate=function(){this.plt.is("ios")?this.iab.create("https://apps.apple.com/us/app/","_system"):this.iab.create("https://play.google.com/store/apps/details","_system")},t.prototype.openFollow=function(){this.iab.create("https://www.facebook.com/mylifesjourney","_system")},t.prototype.openEmail=function(){this.iab.create("mailto:info@mylifesjourney.nz","_system")},t.prototype.openChangePassword=function(){var t=this;this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Change",handler:function(n){n.password&&n.confirmPassword&&n.password===n.confirmPassword?t.authenticationService.changePassword(t.user.email,n.password,n.confirmPassword).then(function(){t.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(t){}}]}).then(function(t){t.present()})}).catch(function(){t.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Try Again",handler:function(n){setTimeout(function(){t.openChangePassword()},200)}}]}).then(function(t){t.present()})}):t.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:function(t){}},{text:"Try Again",handler:function(n){setTimeout(function(){t.openChangePassword()},200)}}]}).then(function(t){t.present()})}}]}).then(function(t){t.present()})},t.prototype.logout=function(){this.authenticationService.logout()},t.\u0275fac=function(n){return new(n||t)(r.Y36(s.t4),r.Y36(a.$),r.Y36(s.Br),r.Y36(l.i))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-settings"]],decls:29,vars:0,consts:[["color","primary"],["slot","start"],["defaultHref","/"],[1,"settings-list"],["detail","",3,"click"],["name","heart","slot","start"],["name","logo-facebook","slot","start"],["name","mail","slot","start"],["name","lock-open","slot","start"],["name","lock-closed","slot","start"]],template:function(t,n){1&t&&(r.TgZ(0,"ion-header"),r.TgZ(1,"ion-toolbar",0),r.TgZ(2,"ion-buttons",1),r.TgZ(3,"ion-button"),r._UZ(4,"ion-back-button",2),r.qZA(),r.qZA(),r.TgZ(5,"ion-title"),r._uU(6,"Settings"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(7,"ion-content"),r.TgZ(8,"ion-list",3),r.TgZ(9,"ion-list-header"),r._uU(10,"Support"),r.qZA(),r.TgZ(11,"ion-item",4),r.NdJ("click",function(){return n.openRate()}),r._UZ(12,"ion-icon",5),r._uU(13," Rate The App "),r.qZA(),r.TgZ(14,"ion-item",4),r.NdJ("click",function(){return n.openFollow()}),r._UZ(15,"ion-icon",6),r._uU(16," Follow Us On Facebook "),r.qZA(),r.TgZ(17,"ion-item",4),r.NdJ("click",function(){return n.openEmail()}),r._UZ(18,"ion-icon",7),r._uU(19," Contact Support "),r.qZA(),r.TgZ(20,"ion-list-header"),r._uU(21,"Account Settings"),r.qZA(),r.TgZ(22,"ion-item",4),r.NdJ("click",function(){return n.openChangePassword()}),r._UZ(23,"ion-icon",8),r.TgZ(24,"ion-label"),r._uU(25,"Change Password"),r.qZA(),r.qZA(),r.TgZ(26,"ion-item",4),r.NdJ("click",function(){return n.logout()}),r._UZ(27,"ion-icon",9),r._uU(28," Logout "),r.qZA(),r.qZA(),r.qZA())},directives:[s.Gu,s.sr,s.Sm,s.YG,s.oU,s.cs,s.wd,s.W2,s.q_,s.yh,s.Ie,s.gu,s.Q$],styles:[".settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:20px;padding-top:10px}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]:first-child{margin-top:0;padding-top:0}.settings-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}.settings-list[_ngcontent-%COMP%]   ion-icon[name=trophy][_ngcontent-%COMP%]{color:#ffbf00}.settings-list[_ngcontent-%COMP%]   ion-icon[name=heart][_ngcontent-%COMP%]{color:#e31b23}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-facebook][_ngcontent-%COMP%]{color:#1877f2}.settings-list[_ngcontent-%COMP%]   ion-icon[name=logo-twitter][_ngcontent-%COMP%]{color:#1da1f2}.settings-list[_ngcontent-%COMP%]   ion-icon[name=mail][_ngcontent-%COMP%]{color:grey}.settings-list[_ngcontent-%COMP%]   ion-icon[name=lock-open][_ngcontent-%COMP%]{color:#d6a000}.settings-list[_ngcontent-%COMP%]   ion-icon[name=lock-closed][_ngcontent-%COMP%]{color:#d47835}.settings-list[_ngcontent-%COMP%]   ion-icon[name=cloud-upload][_ngcontent-%COMP%]{color:#8cd0ef}.settings-list[_ngcontent-%COMP%]   ion-icon[name=locate][_ngcontent-%COMP%]{color:#90e483}"]}),t}()}],g=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),t}(),p=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[e.ez,i.u5,s.Pc,g]]}),t}()}}]);