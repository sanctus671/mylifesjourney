(self.webpackChunkmy_lifes_journey=self.webpackChunkmy_lifes_journey||[]).push([[1802],{1802:function(e,n,t){"use strict";t.r(n),t.d(n,{TimelinePageModule:function(){return q}});var i=t(1116),o=t(1462),_=t(8809),r=t(8080),m=t(4762),l=t(9609),c=t(5803),a=t(8885),g=t(303);function s(e,n){if(1&e&&(c.TgZ(0,"ion-select-option",17),c._uU(1),c.qZA()),2&e){var t=n.$implicit;c.Q6J("value",t),c.xp6(1),c.Oqu(t)}}function p(e,n){1&e&&(c.TgZ(0,"div",18),c._UZ(1,"ion-spinner",2),c.qZA())}function d(e,n){if(1&e&&(c.TgZ(0,"div",32),c._UZ(1,"img",33),c.qZA()),2&e){var t=c.oxw().$implicit;c.xp6(1),c.Q6J("src",t.image,c.LSH)}}function M(e,n){if(1&e&&(c.TgZ(0,"span",34),c._uU(1),c.qZA()),2&e){var t=c.oxw().$implicit,i=c.oxw(4);c.xp6(1),c.Oqu(i.formatMemoryDate(t,t.memory_date))}}var O=function(e){return{"background-color":e}};function f(e,n){if(1&e&&(c.TgZ(0,"span",37),c._uU(1),c.qZA()),2&e){var t=c.oxw().$implicit;c.Q6J("ngStyle",c.VKq(2,O,t.category&&t.category.colour?t.category.colour:"")),c.xp6(1),c.hij(" ",t.category.title," ")}}function C(e,n){if(1&e&&(c.TgZ(0,"div",35),c.YNc(1,f,2,4,"span",36),c.qZA()),2&e){var t=n.$implicit;c.xp6(1),c.Q6J("ngIf",t.category)}}var P=function(e){return[e]},y=function(e){return{"memory--has-image":e}};function u(e,n){if(1&e&&(c.TgZ(0,"div",26),c.YNc(1,d,2,1,"div",27),c.TgZ(2,"div",28),c.TgZ(3,"h2"),c.TgZ(4,"span"),c._uU(5),c.qZA(),c.YNc(6,M,2,1,"span",29),c.qZA(),c.TgZ(7,"p"),c._uU(8),c.qZA(),c.TgZ(9,"div",30),c.YNc(10,C,2,1,"div",31),c.qZA(),c.qZA(),c.qZA()),2&e){var t=n.$implicit,i=c.oxw(4);c.Q6J("routerLink",t.readonly?"/none":c.VKq(7,P,"/memory/"+t.id))("ngClass",c.VKq(9,y,t.image)),c.xp6(1),c.Q6J("ngIf",t.image),c.xp6(4),c.Oqu(t.title),c.xp6(1),c.Q6J("ngIf",t.memory_date),c.xp6(2),c.Oqu(i.getExcerpt(t.description)),c.xp6(2),c.Q6J("ngForOf",t.categories)}}function x(e,n){if(1&e&&(c.TgZ(0,"div",22),c.TgZ(1,"div",23),c._uU(2),c.qZA(),c.TgZ(3,"div",24),c.YNc(4,u,11,11,"div",25),c.qZA(),c.qZA()),2&e){var t=c.oxw().$implicit,i=c.oxw(2);c.xp6(2),c.hij(" ",t," "),c.xp6(2),c.Q6J("ngForOf",i.memories[t])}}function h(e,n){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,x,5,2,"div",21),c.qZA()),2&e){var t=n.$implicit,i=c.oxw(2);c.xp6(1),c.Q6J("ngIf",!i.selectedYear||"all"===i.selectedYear||i.selectedYear===t)}}function v(e,n){if(1&e&&(c.TgZ(0,"div",19),c.YNc(1,h,2,1,"div",20),c.qZA()),2&e){var t=c.oxw();c.xp6(1),c.Q6J("ngForOf",t.years)}}var Z=function(){return["/add-memory"]},b=[{path:"",component:function(){function e(e,n){var t=this;this.profileService=e,this.authService=n,this.years=[],this.memories={},this.loading=!0,this.authService.getUserData().subscribe(function(e){t.user=e,t.user.profile&&t.getProfile()})}return e.prototype.ngOnInit=function(){},e.prototype.getProfile=function(){var e=this;this.memories=[],this.years=[],this.profileService.getProfile(this.user.profile.id).then(function(n){var t,i;e.profile=n,e.profile.dob&&(r=(r=l(e.profile.dob).format("YYYY")).slice(0,-1),e.years.push(r+="0"),e.memories[r]=[{title:"Birthday "+l(e.profile.dob).format("DD/MM/YYYY"),description:"This is the year you were born.",readonly:!0}]);try{for(var o=(0,m.XA)(e.profile.memories),_=o.next();!_.done;_=o.next()){var r,c=_.value;c.show_timeline&&c.memory_date&&(r=(r=l(c.memory_date).format("YYYY")).slice(0,-1),e.memories[r+="0"]?e.memories[r].push(c):(e.years.push(r),e.memories[r]=[c]))}}catch(a){t={error:a}}finally{try{_&&!_.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}e.years.sort(),e.years.reverse(),e.loading=!1}).catch(function(){e.loading=!1})},e.prototype.getExcerpt=function(e){return e&&e.length>72?e.substr(0,72).trim()+"...":e},e.prototype.formatMemoryDate=function(e,n){return"YYYY"===e.memory_date_format?l(n).format("YYYY"):"MMMM YYYY"===e.memory_date_format?l(n).format("MMMM YYYY"):l(n).format("DD MMMM YYYY")},e.\u0275fac=function(n){return new(n||e)(c.Y36(a.H),c.Y36(g.$))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-timeline"]],decls:26,vars:6,consts:[[1,"timeline"],[1,"app-navigation","ion-no-border"],["color","primary"],["slot","end"],["color","secondary","fill","solid","shape","round","routerDirection","forward",3,"routerLink"],["name","add","slot","start"],[1,"ion-text-left"],["src","assets/img/logo-dark.svg",1,"app-navigation__logo"],[1,"header-spacer"],[1,"timeline__memories"],["name","calendar-clear-outline"],[1,"timeline__memories__filter"],["placeholder","Filter by decade",3,"ngModel","ngModelChange"],["value","all"],[3,"value",4,"ngFor","ngForOf"],["class","timeline__memories__loading",4,"ngIf"],["class","timeline__memories__list",4,"ngIf"],[3,"value"],[1,"timeline__memories__loading"],[1,"timeline__memories__list"],[4,"ngFor","ngForOf"],["class","timeline__memories__list__year",4,"ngIf"],[1,"timeline__memories__list__year"],[1,"timeline__memories__list__year__header"],[1,"timeline__memories__list__year__memories"],["class","profile__memories__category__ion-list__memory memory","routerDirection","forward",3,"routerLink","ngClass",4,"ngFor","ngForOf"],["routerDirection","forward",1,"profile__memories__category__ion-list__memory","memory",3,"routerLink","ngClass"],["class","memory__image",4,"ngIf"],[1,"memory__details"],["class","memory-details__date",4,"ngIf"],[1,"memory__details__categories"],["class","memory__details__categories__category",4,"ngFor","ngForOf"],[1,"memory__image"],[3,"src"],[1,"memory-details__date"],[1,"memory__details__categories__category"],[3,"ngStyle",4,"ngIf"],[3,"ngStyle"]],template:function(e,n){1&e&&(c.TgZ(0,"ion-content",0),c.TgZ(1,"ion-header",1),c.TgZ(2,"ion-toolbar",2),c.TgZ(3,"ion-buttons",3),c.TgZ(4,"ion-button",4),c._UZ(5,"ion-icon",5),c._uU(6," Add memory "),c.qZA(),c.qZA(),c.TgZ(7,"ion-title",6),c._UZ(8,"img",7),c.qZA(),c.qZA(),c.qZA(),c._UZ(9,"div",8),c.TgZ(10,"div",9),c.TgZ(11,"h5"),c._UZ(12,"ion-icon",10),c._uU(13," Timeline "),c.qZA(),c.TgZ(14,"p"),c._uU(15,"View your memories in chronological order."),c.qZA(),c.TgZ(16,"div",11),c.TgZ(17,"ion-item"),c.TgZ(18,"ion-label"),c._uU(19,"Filter by decade"),c.qZA(),c.TgZ(20,"ion-select",12),c.NdJ("ngModelChange",function(e){return n.selectedYear=e}),c.TgZ(21,"ion-select-option",13),c._uU(22,"All"),c.qZA(),c.YNc(23,s,2,2,"ion-select-option",14),c.qZA(),c.qZA(),c.qZA(),c.YNc(24,p,2,0,"div",15),c.YNc(25,v,2,1,"div",16),c.qZA(),c.qZA()),2&e&&(c.xp6(4),c.Q6J("routerLink",c.DdM(5,Z)),c.xp6(16),c.Q6J("ngModel",n.selectedYear),c.xp6(3),c.Q6J("ngForOf",n.years),c.xp6(1),c.Q6J("ngIf",n.loading),c.xp6(1),c.Q6J("ngIf",!n.loading))},directives:[_.W2,_.Gu,_.sr,_.Sm,_.YG,_.YI,r.rH,_.gu,_.wd,_.Ie,_.Q$,_.t9,_.QI,o.JJ,o.On,_.n0,i.sg,i.O5,_.PQ,i.mk,i.PC],styles:['.app-navigation[_ngcontent-%COMP%]{padding-left:15px;padding-right:20px;padding-top:10px;background-color:#fde8fa}.app-navigation[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding-inline-start:0;padding-inline-end:0}.app-navigation[_ngcontent-%COMP%]   .app-navigation__logo[_ngcontent-%COMP%]{width:200px;margin-top:5px}.app-navigation[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start:13px;--padding-end:15px;font-size:14px;font-weight:500}.app-navigation[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:14px;margin-inline-end:.2em}.header-spacer[_ngcontent-%COMP%]{position:absolute;left:0;top:0;background-color:#fde8fa;width:100%;height:100px;z-index:-1;padding-top:var(--ion-safe-area-top,0)}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]{position:relative;padding:25px;margin:15px 15px 30px;background-color:#fff;border-radius:30px;box-shadow:0 0 4px 1px #00000017;z-index:2}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{font-size:26px;line-height:28px;margin:0}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#f3c3f7;font-size:20px;margin-right:5px}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#210f38}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]   .timeline__memories__loading[_ngcontent-%COMP%]{text-align:center;margin-top:30px;margin-bottom:30px}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]   .timeline__memories__filter[_ngcontent-%COMP%]{margin-bottom:20px}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]   .timeline__memories__filter[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#fde8fa;--border:none;--border-color:#0000;border-radius:35px}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]   .timeline__memories__filter[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{--padding-top:0px;--padding-bottom:0px;max-width:100%;width:100%}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]   .timeline__memories__filter[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:none}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]{margin-top:40px}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]{border-left:2px solid #fde8fa;padding-left:20px;position:relative;padding-bottom:60px}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]:after{content:"";position:absolute;left:-4px;top:0;background-color:#f3c3f7;width:6px;height:6px;border-radius:3px}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__header[_ngcontent-%COMP%]{font-size:22px;transform:translateY(-8px)}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:middle;margin-top:15px;cursor:pointer}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory.memory--has-image[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]:before{content:"";background-color:#fffdf5;width:40px;height:100%;position:absolute;left:-40px;top:0;z-index:-1}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__image[_ngcontent-%COMP%]{width:33%}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]{flex:1;position:relative;background-color:#fffdf5;padding:35px 0 35px 20px}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]:after{content:"";background-color:#fffdf5;width:25px;height:100%;position:absolute;right:-25px;top:0;z-index:-1}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin:0}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:10px;display:inline-block;vertical-align:middle}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .memory-details__date[_ngcontent-%COMP%]{font-size:9px;background-color:#f3c3f7;padding:3px 5px;border-radius:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:middle;color:#210f38}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;margin:10px 0 0}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details__categories[_ngcontent-%COMP%]   .memory__details__categories__category[_ngcontent-%COMP%]{display:inline-block;margin-right:3px;margin-top:10px}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details__categories[_ngcontent-%COMP%]   .memory__details__categories__category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#210f38;background-color:#f3c3f7;font-size:9px;padding:3px 10px;border-radius:10px}@media only screen and (max-width: 360px){.app-navigation[_ngcontent-%COMP%]   .app-navigation__logo[_ngcontent-%COMP%]{width:170px;margin-top:10px}}@media (prefers-color-scheme: dark){.app-navigation[_ngcontent-%COMP%]{background-color:#000}.app-navigation[_ngcontent-%COMP%]   .app-navigation__logo[_ngcontent-%COMP%]{filter:brightness(0) invert(1)}.app-navigation[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#000}.header-spacer[_ngcontent-%COMP%]{background-color:#000}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]{background-color:#000;box-shadow:0 0 8px 2px #fff3}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#fff}.timeline[_ngcontent-%COMP%]   .timeline__memories[_ngcontent-%COMP%]   .timeline__memories__filter[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#2c2c2c}.timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory.memory--has-image[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory.memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%]   .timeline__memories__list[_ngcontent-%COMP%]   .timeline__memories__list__year[_ngcontent-%COMP%]   .timeline__memories__list__year__memories[_ngcontent-%COMP%]   .memory[_ngcontent-%COMP%]   .memory__details[_ngcontent-%COMP%]{background-color:#2c2c2c}}']}),e}()}],Y=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),e}(),w=t(5667),q=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,o.u5,_.Pc,Y,w.$]]}),e}()}}]);