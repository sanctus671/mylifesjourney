(self.webpackChunkmy_lifes_journey=self.webpackChunkmy_lifes_journey||[]).push([[373],{373:function(n,e,o){"use strict";o.r(e),o.d(e,{MemoryPageModule:function(){return J}});var t=o(1116),m=o(1462),i=o(8809),_=o(8080),r=o(9609),c=o(5803),a=o(2592),g=o(303),d=o(9037);function p(n,e){if(1&n&&(c.TgZ(0,"audio",24),c._UZ(1,"source",25),c.qZA()),2&n){var o=c.oxw();c.xp6(1),c.Q6J("src",o.memory.audio,c.LSH)}}function y(n,e){if(1&n&&(c.TgZ(0,"div",26),c.TgZ(1,"h3"),c._uU(2),c.qZA(),c.qZA()),2&n){var o=c.oxw();c.xp6(2),c.Oqu(o.memory.memory_prompt.question)}}var l=function(n){return{"background-color":n}};function s(n,e){if(1&n&&(c.TgZ(0,"div",29),c._uU(1),c.qZA()),2&n){var o=e.$implicit;c.Q6J("ngStyle",c.VKq(2,l,o.category&&o.category.colour?o.category.colour:"")),c.xp6(1),c.hij(" ",o.category.title," ")}}function f(n,e){if(1&n&&(c.TgZ(0,"div",27),c.YNc(1,s,2,4,"div",28),c.qZA()),2&n){var o=c.oxw();c.xp6(1),c.Q6J("ngForOf",o.memory.categories)}}var M=function(n){return{path:n}};function u(n,e){if(1&n&&c._UZ(0,"img",30),2&n){var o=c.oxw();c.Q6J("src",o.memory.image,c.LSH)("fullImage",c.VKq(2,M,o.memory.image))}}function C(n,e){if(1&n&&(c.TgZ(0,"h5"),c._uU(1),c.qZA()),2&n){var o=c.oxw();c.xp6(1),c.Oqu(o.formatMemoryDate(o.memory.memory_date))}}function O(n,e){1&n&&(c.TgZ(0,"div",31),c._uU(1," Added to timeline "),c.qZA())}function x(n,e){if(1&n&&c._UZ(0,"img",37),2&n){var o=c.oxw().$implicit;c.Q6J("src",o.file,c.LSH)("fullImage",c.VKq(2,M,o.file))}}function h(n,e){if(1&n&&(c.TgZ(0,"audio",24),c._UZ(1,"source",25),c.qZA()),2&n){var o=c.oxw().$implicit;c.xp6(1),c.Q6J("src",o.file,c.LSH)}}function P(n,e){if(1&n&&(c.TgZ(0,"p",38),c._uU(1),c.qZA()),2&n){var o=c.oxw().$implicit;c.xp6(1),c.Oqu(o.caption)}}function b(n,e){if(1&n&&(c.TgZ(0,"div",34),c.YNc(1,x,1,4,"img",35),c.YNc(2,h,2,1,"audio",5),c.YNc(3,P,2,1,"p",36),c.qZA()),2&n){var o=e.$implicit;c.xp6(1),c.Q6J("ngIf","camera"===o.media_type||"photo"===o.media_type),c.xp6(1),c.Q6J("ngIf","audio"===o.media_type),c.xp6(1),c.Q6J("ngIf",o.caption)}}function v(n,e){if(1&n&&(c.TgZ(0,"div",32),c.TgZ(1,"h5"),c._uU(2,"Additional Media"),c.qZA(),c.YNc(3,b,4,3,"div",33),c.qZA()),2&n){var o=c.oxw();c.xp6(3),c.Q6J("ngForOf",o.memory.additional_media)}}function Z(n,e){if(1&n){var o=c.EpF();c.TgZ(0,"div",39),c._uU(1),c.TgZ(2,"div",40),c._uU(3),c.qZA(),c.TgZ(4,"ion-icon",41),c.NdJ("click",function(){var n=c.CHM(o),e=n.index,t=n.$implicit;return c.oxw().removeComment(e,t.id)}),c.qZA(),c.qZA()}if(2&n){var t=e.$implicit,m=c.oxw();c.xp6(1),c.hij(" ",t.comment," "),c.xp6(2),c.AsE("Added ",m.formatDate(t.created_at)," by ",t.name,"")}}var q=function(n){return{"background-image":n}},Y=function(n,e){return{"memory__header--has-image":n,"memory__header--has-prompt":e}},k=function(n){return[n]},A=[{path:"",component:function(){function n(n,e,o,t){var m=this;this.route=n,this.memoryService=e,this.authService=o,this.navController=t,this.memory={id:this.route.snapshot.params.id,categories:[],comments:[]},this.comment={memory_id:this.memory.id},this.comments=[],this.authService.getUserData().subscribe(function(n){m.user=n,m.user.profile&&(m.comment.profile_id=m.user.profile.id),m.getMemory()})}return n.prototype.ngOnInit=function(){},n.prototype.expandMainImage=function(){document.getElementById("expand-image").click()},n.prototype.getMemory=function(){var n=this;this.memoryService.getMemory(this.memory.id).then(function(e){n.memory=e,n.memory.additional_media=n.memory.additional_media?JSON.parse(n.memory.additional_media):""}).catch(function(){n.navController.back()})},n.prototype.addComment=function(){var n=this;this.comment.name&&this.comment.comment&&!this.comment.loading&&(this.comment.loading=!0,this.memoryService.createMemoryComment(this.comment).then(function(e){n.comment.loading=!1;var o={};Object.assign(o,n.comment),n.memory.comments.push(o),n.comment.name="",n.comment.comment=""}).catch(function(){n.comment.loading=!1}))},n.prototype.removeComment=function(n,e){this.memory.comments.splice(n,1),this.memoryService.deleteMemoryComment(e).then(function(){})},n.prototype.formatMemoryDate=function(n){return"YYYY"===this.memory.memory_date_format?r(n).format("YYYY"):"MMMM YYYY"===this.memory.memory_date_format?r(n).format("MMMM YYYY"):r(n).format("DD MMMM YYYY")},n.prototype.formatDate=function(n){return r(n).format("DD MMMM YYYY")},n.\u0275fac=function(e){return new(e||n)(c.Y36(_.gz),c.Y36(a.S),c.Y36(g.$),c.Y36(i.SH))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-memory"]],decls:34,vars:24,consts:[[1,"app-navigation","ion-no-border"],["slot","start"],["text","Back","icon","caret-back",1,"app-navigation__back-button"],[1,"memory"],[1,"memory__header",3,"ngStyle","ngClass"],["controls","",4,"ngIf"],["class","memory__header__prompt",4,"ngIf"],["class","memory__header__categories",4,"ngIf"],["class","memory__header__image","id","expand-image","lightbox","",3,"src","fullImage",4,"ngIf"],[1,"memory__header__image-expand",3,"click"],[1,"memory__content"],["routerDirection","forward",1,"memory__content__edit","ion-activatable","ripple-parent",3,"routerLink"],[1,"memory__content__title"],[4,"ngIf"],["class","memory__content__added-to-timeline",4,"ngIf"],[1,"memory__content__description"],["class","memory__additional-media","lightbox-group","",4,"ngIf"],[1,"memory__comments"],[1,"memory__comments__list"],["class","memory__comments__list__comment",4,"ngFor","ngForOf"],[1,"memory__comments__add"],["placeholder","Your name","type","text","name","name",3,"ngModel","disabled","ngModelChange"],["placeholder","Write a comment...","autoGrow","true",3,"ngModel","disabled","ngModelChange"],[1,"memory__comments__add__button","ion-activatable","ripple-parent",3,"click"],["controls",""],["type","audio/mpeg",3,"src"],[1,"memory__header__prompt"],[1,"memory__header__categories"],["class","memory__header__categories__category",3,"ngStyle",4,"ngFor","ngForOf"],[1,"memory__header__categories__category",3,"ngStyle"],["id","expand-image","lightbox","",1,"memory__header__image",3,"src","fullImage"],[1,"memory__content__added-to-timeline"],["lightbox-group","",1,"memory__additional-media"],["class","memory__additional-media__file",4,"ngFor","ngForOf"],[1,"memory__additional-media__file"],["lightbox","",3,"src","fullImage",4,"ngIf"],["class","memory__media-files__file__caption",4,"ngIf"],["lightbox","",3,"src","fullImage"],[1,"memory__media-files__file__caption"],[1,"memory__comments__list__comment"],[1,"memory__comments__list__comment__date"],["name","close-circle",3,"click"]],template:function(n,e){1&n&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",1),c._UZ(3,"ion-back-button",2),c.qZA(),c.qZA(),c.qZA(),c.TgZ(4,"ion-content",3),c.TgZ(5,"div",4),c.YNc(6,p,2,1,"audio",5),c.YNc(7,y,3,1,"div",6),c.YNc(8,f,2,1,"div",7),c.YNc(9,u,1,4,"img",8),c.TgZ(10,"a",9),c.NdJ("click",function(){return e.expandMainImage()}),c.qZA(),c.qZA(),c.TgZ(11,"div",10),c.TgZ(12,"a",11),c._uU(13," Edit "),c._UZ(14,"ion-ripple-effect"),c.qZA(),c.TgZ(15,"div",12),c.TgZ(16,"h2"),c._uU(17),c.qZA(),c.YNc(18,C,2,1,"h5",13),c.qZA(),c.YNc(19,O,2,0,"div",14),c.TgZ(20,"div",15),c._uU(21),c.qZA(),c.qZA(),c.YNc(22,v,4,1,"div",16),c.TgZ(23,"div",17),c.TgZ(24,"h5"),c._uU(25,"Comments"),c.qZA(),c.TgZ(26,"div",18),c.YNc(27,Z,5,3,"div",19),c.qZA(),c.TgZ(28,"div",20),c.TgZ(29,"ion-input",21),c.NdJ("ngModelChange",function(n){return e.comment.name=n}),c.qZA(),c.TgZ(30,"ion-textarea",22),c.NdJ("ngModelChange",function(n){return e.comment.comment=n}),c.qZA(),c.TgZ(31,"a",23),c.NdJ("click",function(){return e.addComment()}),c._uU(32," Add "),c._UZ(33,"ion-ripple-effect"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(5),c.Q6J("ngStyle",c.VKq(17,q,"url("+e.memory.image+")"))("ngClass",c.WLB(19,Y,e.memory.image,e.memory.memory_prompt_id)),c.xp6(1),c.Q6J("ngIf",e.memory.audio),c.xp6(1),c.Q6J("ngIf",e.memory.memory_prompt_id&&e.memory.memory_prompt),c.xp6(1),c.Q6J("ngIf",e.memory.categories&&e.memory.categories.length>0),c.xp6(1),c.Q6J("ngIf",e.memory.image),c.xp6(3),c.Q6J("routerLink",c.VKq(22,k,"/edit-memory/"+e.memory.id)),c.xp6(5),c.Oqu(e.memory.title),c.xp6(1),c.Q6J("ngIf",e.memory.memory_date),c.xp6(1),c.Q6J("ngIf",e.memory.show_timeline),c.xp6(2),c.hij(" ",e.memory.description," "),c.xp6(1),c.Q6J("ngIf",e.memory.additional_media&&e.memory.additional_media.length>0),c.xp6(5),c.Q6J("ngForOf",e.memory.comments),c.xp6(2),c.Q6J("ngModel",e.comment.name)("disabled",e.comment.loading),c.xp6(1),c.Q6J("ngModel",e.comment.comment)("disabled",e.comment.loading))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.W2,t.PC,t.mk,t.O5,_.yS,i.YI,i.H$,t.sg,i.pK,i.j9,m.JJ,m.On,i.g2,d.lI,d.DZ,i.gu],styles:['.app-navigation[_ngcontent-%COMP%]{padding-left:15px;padding-right:20px;background-color:initial}.app-navigation[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#0000}.app-navigation[_ngcontent-%COMP%]   .app-navigation__back-button[_ngcontent-%COMP%]{font-size:13px;text-transform:none;background-color:#fff;border-radius:20px;overflow:hidden;--min-width:72px;color:#210f38;--icon-font-size:15px}.app-navigation[_ngcontent-%COMP%]   .app-navigation__back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#e7d2e6}.app-navigation[_ngcontent-%COMP%]   .app-navigation__back-button.ios[_ngcontent-%COMP%]{--icon-margin-end:0px}.memory[_ngcontent-%COMP%]{position:absolute;top:0}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]{background-size:cover;background-position:50%;background-color:#fde8fa;text-align:center;padding-top:90px;padding-bottom:70px;position:relative;display:flex;align-items:end;justify-content:center}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   .memory__header__image[_ngcontent-%COMP%]{display:none}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   .memory__header__image-expand[_ngcontent-%COMP%]{position:absolute;top:50px;right:0;width:100%;height:calc(100% - 80px);z-index:2}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   .memory__header__prompt[_ngcontent-%COMP%]{position:absolute;left:30px;bottom:20px;z-index:2}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   .memory__header__prompt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;margin:0;font-size:14px;max-width:100px;text-align:left}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   .memory__header__categories[_ngcontent-%COMP%]{position:absolute;right:30px;bottom:20px;z-index:2}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   .memory__header__categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:block;color:#210f38;background-color:#f3c3f7;font-size:11px;padding:2px 20px;border-radius:15px;margin:5px 0 0}.memory[_ngcontent-%COMP%]   .memory__header.memory__header--has-image[_ngcontent-%COMP%]{height:250px}.memory[_ngcontent-%COMP%]   .memory__header.memory__header--has-prompt[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(180deg,#0000 0,#00000080);z-index:1}.memory[_ngcontent-%COMP%]   .memory__header[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{z-index:3;position:relative;display:block;width:100%;margin:0 20px}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]{position:relative;background-color:#fff;padding:30px 30px 0;margin-bottom:45px}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__edit[_ngcontent-%COMP%]{padding:8px 20px;background-color:#f3c3f7;color:#210f38;font-size:13px;line-height:16px;border-radius:20px;position:absolute;right:30px;top:35px;overflow:hidden;text-decoration:none}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__added-to-timeline[_ngcontent-%COMP%]{position:absolute;right:30px;top:80px;padding-right:20px;color:#210f38;font-size:12px}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__added-to-timeline[_ngcontent-%COMP%]:after{content:"";position:absolute;right:0;top:2px;background-color:#f3c3f7;width:15px;height:15px;border-radius:10px}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__title[_ngcontent-%COMP%]{min-height:60px}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap;margin:20px 0 0;color:#210f38}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__description[_ngcontent-%COMP%]{font-size:20px;line-height:26px;margin-top:20px;color:#210f38;white-space:pre-line}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__description[_ngcontent-%COMP%]   .memory__content__description__image[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:10px}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__description[_ngcontent-%COMP%]   .memory__content__description__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0;width:100%}.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__description[_ngcontent-%COMP%]   .memory__content__description__image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;line-height:16px;font-weight:300;margin:0;letter-spacing:1px}.memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]{padding:0 30px;margin-bottom:45px}.memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;border-bottom:1px solid #fde8fa;margin-bottom:5px;padding-bottom:5px;color:#210f38}.memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]   .memory__additional-media__file[_ngcontent-%COMP%]{margin-top:10px;position:relative;display:inline-block;margin-right:15px;width:calc(33% - 15px);vertical-align:top}.memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]   .memory__additional-media__file[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%], .memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]   .memory__additional-media__file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]   .memory__media-files__file__caption[_ngcontent-%COMP%]{color:#210f38;margin:3px 0 0}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]{display:none;padding:0 30px;margin-top:30px;margin-bottom:80px}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;text-transform:uppercase;border-bottom:1px solid #e7d2e6;margin-bottom:5px}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   .memory__comments__list[_ngcontent-%COMP%]{margin-top:20px}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   .memory__comments__list[_ngcontent-%COMP%]   .memory__comments__list__comment[_ngcontent-%COMP%]{margin-top:10px;padding-bottom:10px;border-bottom:1px solid #e7d2e6;position:relative}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   .memory__comments__list[_ngcontent-%COMP%]   .memory__comments__list__comment[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#e7d2e6;font-size:24px;position:absolute;right:0;top:0}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   .memory__comments__list[_ngcontent-%COMP%]   .memory__comments__list__comment[_ngcontent-%COMP%]   .memory__comments__list__comment__date[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase;letter-spacing:1px;opacity:.5;margin-top:5px}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   .memory__comments__add[_ngcontent-%COMP%]{margin-top:15px;position:relative}.memory[_ngcontent-%COMP%]   .memory__comments[_ngcontent-%COMP%]   .memory__comments__add[_ngcontent-%COMP%]   .memory__comments__add__button[_ngcontent-%COMP%]{padding:8px 20px;background-color:#e7d2e6;color:#210f38;font-size:13px;line-height:16px;border-radius:20px;position:relative;overflow:hidden;display:inline-block}@media only screen and (max-width: 480px){.memory[_ngcontent-%COMP%]   .memory__media-files[_ngcontent-%COMP%]   .memory__media-files__file[_ngcontent-%COMP%]{width:calc(50% - 15px)}}@media (prefers-color-scheme: dark){.memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]{background-color:#121212}.memory[_ngcontent-%COMP%]   .memory__additional-media[_ngcontent-%COMP%]   .memory__media-files__file__caption[_ngcontent-%COMP%], .memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__added-to-timeline[_ngcontent-%COMP%], .memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__description[_ngcontent-%COMP%], .memory[_ngcontent-%COMP%]   .memory__content[_ngcontent-%COMP%]   .memory__content__title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff}}']}),n}()}],w=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[_.Bz.forChild(A)],_.Bz]}),n}(),J=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[t.ez,m.u5,i.Pc,w,d.WJ]]}),n}()}}]);