(self.webpackChunkmy_lifes_journey=self.webpackChunkmy_lifes_journey||[]).push([[4596],{4596:function(e,n,t){"use strict";t.r(n),t.d(n,{FamilyTreePageModule:function(){return S}});var i=t(1116),r=t(1462),o=t(8809),a=t(8080),l=t(4762),c=t(3069),_=t(9169),m=t(5803),g=t(303),f=t(529),p=t(2693),d=t(6578),s=function(){function e(e,n){this.http=e,this.storage=n}return e.prototype.getFamilyMembers=function(e){var n=this;return new Promise(function(t,i){n.storage.get("mlj_token").then(function(r){r?n.http.get(f.N.apiUrl+"/familytrees?profile_id="+e+"&token="+r).subscribe(function(e){t(e)},function(e){i(e)}):i()})})},e.prototype.updateFamilyMembers=function(e,n){var t=this;return new Promise(function(i,r){t.storage.get("mlj_token").then(function(o){o?t.http.put(f.N.apiUrl+"/familytrees/"+e+"?token="+o,{tree:n}).subscribe(function(e){i(e)},function(e){r(e)}):r(!1)})})},e.\u0275fac=function(n){return new(n||e)(m.LFG(p.eN),m.LFG(d.K))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}();function u(e,n){1&e&&(m.TgZ(0,"div",10),m._UZ(1,"ion-spinner",11),m.qZA())}var M=function(e){return{"background-image":e}};function y(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.NdJ("click",function(){var e=m.CHM(t).index,n=m.oxw().$implicit;return m.oxw(2).editFamilyMember({children:[{people:n.people}]},0,e,1)}),m.qZA(),m.TgZ(2,"h6"),m._uU(3),m.qZA(),m.qZA()}if(2&e){var i=n.$implicit;m.xp6(1),m.Q6J("ngStyle",m.VKq(2,M,i.avatar?"url("+i.avatar+")":"")),m.xp6(2),m.Oqu(i.name?i.name:i)}}function C(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.NdJ("click",function(){var e=m.CHM(t).index,n=m.oxw().index,i=m.oxw().$implicit;return m.oxw(2).editFamilyMember(i,n,e,2)}),m.qZA(),m.TgZ(2,"h6"),m._uU(3),m.qZA(),m.qZA()}if(2&e){var i=n.$implicit;m.xp6(1),m.Q6J("ngStyle",m.VKq(2,M,i.avatar?"url("+i.avatar+")":"")),m.xp6(2),m.Oqu(i.name?i.name:i)}}function O(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"a",21),m.NdJ("click",function(){m.CHM(t);var e=m.oxw(2).$implicit;return m.oxw(4).addFamilyMemberChild(e.children)}),m._UZ(1,"ion-icon",19),m.qZA()}}function h(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.NdJ("click",function(){var e=m.CHM(t).index,n=m.oxw().index,i=m.oxw().$implicit;return m.oxw(3).editFamilyMember(i,n,e,3)}),m.qZA(),m.TgZ(2,"h6"),m._uU(3),m.qZA(),m.TgZ(4,"a",18),m.NdJ("click",function(){m.CHM(t);var e=m.oxw().index,n=m.oxw().$implicit;return m.oxw(3).addFamilyMember(n.children,e)}),m._UZ(5,"ion-icon",19),m.qZA(),m.YNc(6,O,2,0,"a",20),m.qZA()}if(2&e){var i=n.$implicit,r=m.oxw().$implicit;m.xp6(1),m.Q6J("ngStyle",m.VKq(3,M,i.avatar?"url("+i.avatar+")":"")),m.xp6(2),m.Oqu(i.name?i.name:i),m.xp6(3),m.Q6J("ngIf",r.children.length<1)}}function P(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"a",21),m.NdJ("click",function(){m.CHM(t);var e=m.oxw(2).$implicit;return m.oxw(6).addFamilyMemberChild(e.children)}),m._UZ(1,"ion-icon",19),m.qZA()}}function x(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.NdJ("click",function(){var e=m.CHM(t).index,n=m.oxw().index,i=m.oxw(2).$implicit;return m.oxw(4).editFamilyMember(i,n,e,4)}),m.qZA(),m.TgZ(2,"h6"),m._uU(3),m.qZA(),m.TgZ(4,"a",18),m.NdJ("click",function(){m.CHM(t);var e=m.oxw().index,n=m.oxw(2).$implicit;return m.oxw(4).addFamilyMember(n.children,e)}),m._UZ(5,"ion-icon",19),m.qZA(),m.YNc(6,P,2,0,"a",20),m.qZA()}if(2&e){var i=n.$implicit,r=m.oxw().$implicit;m.xp6(1),m.Q6J("ngStyle",m.VKq(3,M,i.avatar?"url("+i.avatar+")":"")),m.xp6(2),m.Oqu(i.name?i.name:i),m.xp6(3),m.Q6J("ngIf",r.children.length<1)}}function v(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.NdJ("click",function(){var e=m.CHM(t).index,n=m.oxw().index,i=m.oxw(2).$implicit;return m.oxw(6).editFamilyMember(i,n,e,5)}),m.qZA(),m.TgZ(2,"h6"),m._uU(3),m.qZA(),m.TgZ(4,"a",18),m.NdJ("click",function(){m.CHM(t);var e=m.oxw().index,n=m.oxw(2).$implicit;return m.oxw(6).addFamilyMember(n.children,e)}),m._UZ(5,"ion-icon",19),m.qZA(),m.TgZ(6,"a",21),m.NdJ("click",function(){m.CHM(t);var e=m.oxw().$implicit;return m.oxw(8).addFamilyMemberChild(e.children)}),m._UZ(7,"ion-icon",19),m.qZA(),m.qZA()}if(2&e){var i=n.$implicit;m.xp6(1),m.Q6J("ngStyle",m.VKq(2,M,i.avatar?"url("+i.avatar+")":"")),m.xp6(2),m.Oqu(i.name?i.name:i)}}function b(e,n){if(1&e){var t=m.EpF();m.TgZ(0,"div",15),m.TgZ(1,"div",16),m.NdJ("click",function(){var e=m.CHM(t).index,n=m.oxw().index,i=m.oxw(2).$implicit;return m.oxw(8).editFamilyMember(i,n,e,6)}),m.qZA(),m.TgZ(2,"h6"),m._uU(3),m.qZA(),m.TgZ(4,"a",18),m.NdJ("click",function(){m.CHM(t);var e=m.oxw().index,n=m.oxw(2).$implicit;return m.oxw(8).addFamilyMember(n.children,e)}),m._UZ(5,"ion-icon",19),m.qZA(),m.qZA()}if(2&e){var i=n.$implicit;m.xp6(1),m.Q6J("ngStyle",m.VKq(2,M,i.avatar?"url("+i.avatar+")":"")),m.xp6(2),m.Oqu(i.name?i.name:i)}}function Z(e,n){if(1&e&&(m.TgZ(0,"li"),m.YNc(1,b,6,4,"div",14),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngForOf",t.people)}}function w(e,n){if(1&e&&(m.TgZ(0,"ul"),m.YNc(1,Z,2,1,"li",13),m.qZA()),2&e){var t=m.oxw().$implicit;m.xp6(1),m.Q6J("ngForOf",t.children)}}function q(e,n){if(1&e&&(m.TgZ(0,"li"),m.YNc(1,v,8,4,"div",14),m.YNc(2,w,2,1,"ul",17),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngForOf",t.people),m.xp6(1),m.Q6J("ngIf",t.children.length>0)}}function F(e,n){if(1&e&&(m.TgZ(0,"ul"),m.YNc(1,q,3,2,"li",13),m.qZA()),2&e){var t=m.oxw().$implicit;m.xp6(1),m.Q6J("ngForOf",t.children)}}function A(e,n){if(1&e&&(m.TgZ(0,"li"),m.YNc(1,x,7,5,"div",14),m.YNc(2,F,2,1,"ul",17),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngForOf",t.people),m.xp6(1),m.Q6J("ngIf",t.children.length>0)}}function T(e,n){if(1&e&&(m.TgZ(0,"ul"),m.YNc(1,A,3,2,"li",13),m.qZA()),2&e){var t=m.oxw().$implicit;m.xp6(1),m.Q6J("ngForOf",t.children)}}function J(e,n){if(1&e&&(m.TgZ(0,"li"),m.YNc(1,h,7,5,"div",14),m.YNc(2,T,2,1,"ul",17),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngForOf",t.people),m.xp6(1),m.Q6J("ngIf",t.children.length>0)}}function k(e,n){if(1&e&&(m.TgZ(0,"li"),m.YNc(1,C,4,4,"div",14),m.TgZ(2,"ul"),m.YNc(3,J,3,2,"li",13),m.qZA(),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngForOf",t.people),m.xp6(2),m.Q6J("ngForOf",t.children)}}function N(e,n){if(1&e&&(m.TgZ(0,"li"),m.YNc(1,y,4,4,"div",14),m.TgZ(2,"ul"),m.YNc(3,k,4,2,"li",13),m.qZA(),m.qZA()),2&e){var t=n.$implicit;m.xp6(1),m.Q6J("ngForOf",t.people),m.xp6(2),m.Q6J("ngForOf",t.children)}}function $(e,n){if(1&e&&(m.TgZ(0,"ul",12),m.YNc(1,N,4,2,"li",13),m.qZA()),2&e){var t=m.oxw();m.xp6(1),m.Q6J("ngForOf",t.familyMembers)}}var Q=function(){return["/settings"]},Y=[{path:"",component:function(){function e(e,n,t,i){var r=this;this.alertCtrl=e,this.authService=n,this.familyMemberService=t,this.modalController=i,this.authService.getUserData().subscribe(function(e){r.user=e,r.getFamilyMembers()}),this.familyMembers=[{people:[{name:"Grandma"},{name:"Granddad"},{name:"Grandma"},{name:"Granddad"}],children:[{people:[{name:"Mother"},{name:"Father"}],children:[{people:[{name:"Me"}],children:[]}]}]}]}return e.prototype.ngOnInit=function(){},e.prototype.addFamilyMember=function(e,n){return(0,l.mG)(this,void 0,void 0,function(){var t,i=this;return(0,l.Jh)(this,function(r){switch(r.label){case 0:return[4,this.modalController.create({component:c.M,componentProps:{showRelation:!0}})];case 1:return(t=r.sent()).onDidDismiss().then(function(t){if(t&&t.data&&t.data.familyMember){var r=t.data.familyMember;if("partner"===r.relation)e[n].people.push(r);else{var o=parseInt(n)+1;e.splice(o,0,{people:[r],children:[]})}i.saveFamilyMembers()}}),[4,t.present()];case 2:return r.sent(),[2]}})})},e.prototype.addFamilyMemberChild=function(e){return(0,l.mG)(this,void 0,void 0,function(){var n,t=this;return(0,l.Jh)(this,function(i){switch(i.label){case 0:return[4,this.modalController.create({component:c.M,componentProps:{}})];case 1:return(n=i.sent()).onDidDismiss().then(function(n){n&&n.data&&n.data.familyMember&&(e.push({people:[n.data.familyMember],children:[]}),t.saveFamilyMembers())}),[4,n.present()];case 2:return i.sent(),[2]}})})},e.prototype.editFamilyMember=function(e,n,t,i){return(0,l.mG)(this,void 0,void 0,function(){var r,o,a,c,m=this;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return(o=(r=e.children[n].people)[t]).name||(o={name:o}),a=Object.assign({},o),[4,this.modalController.create({component:_.P,componentProps:{familyMember:a,familyMemberLevel:i}})];case 1:return(c=l.sent()).onDidDismiss().then(function(o){if(o&&o.data&&o.data.familyMember)r[t]=o.data.familyMember,m.saveFamilyMembers();else if(o&&o.data&&o.data.delete){if(i>2)return r.splice(t,1),r.length<1&&e.children.splice(n,1),3===i&&e.children.length<1&&e.children.push({people:[{name:"Me"}],children:[]}),void m.saveFamilyMembers();if(i<3)return}}),[4,c.present()];case 2:return l.sent(),[2]}})})},e.prototype.getFamilyMembers=function(){var e=this;this.familyMemberService.getFamilyMembers(this.user.profile.id).then(function(n){n&&n.tree&&(e.familyMembers=JSON.parse(n.tree)),e.loading=!1}).catch(function(){e.loading=!1})},e.prototype.saveFamilyMembers=function(){var e=JSON.stringify(this.familyMembers);this.familyMemberService.updateFamilyMembers(this.user.profile.id,e).then(function(){})},e.\u0275fac=function(n){return new(n||e)(m.Y36(o.Br),m.Y36(g.$),m.Y36(s),m.Y36(o.IN))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-family-tree"]],decls:16,vars:4,consts:[[1,"app-navigation","ion-no-border"],["slot","end"],["color","secondary","routerDirection","forward",3,"routerLink"],["name","settings-outline","slot","start"],[1,"ion-text-left"],["src","assets/img/logo-dark.svg",1,"app-navigation__logo"],[1,"family-tree"],[1,"family-tree__header"],["class","family-tree__loading",4,"ngIf"],["class","family-tree__tree",4,"ngIf"],[1,"family-tree__loading"],["color","primary"],[1,"family-tree__tree"],[4,"ngFor","ngForOf"],["class","family-tree__tree__person",4,"ngFor","ngForOf"],[1,"family-tree__tree__person"],[1,"family-tree__tree__person__image",3,"ngStyle","click"],[4,"ngIf"],[1,"family-tree__tree__person__add",3,"click"],["name","add"],["class","family-tree__tree__person__add family-tree__tree__person__add--bottom",3,"click",4,"ngIf"],[1,"family-tree__tree__person__add","family-tree__tree__person__add--bottom",3,"click"]],template:function(e,n){1&e&&(m.TgZ(0,"ion-header",0),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-buttons",1),m.TgZ(3,"ion-button",2),m._UZ(4,"ion-icon",3),m._uU(5," Settings "),m.qZA(),m.qZA(),m.TgZ(6,"ion-title",4),m._UZ(7,"img",5),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"ion-content",6),m.TgZ(9,"div",7),m.TgZ(10,"h2"),m._uU(11,"Family Tree"),m.qZA(),m.TgZ(12,"p"),m._uU(13,"Your timeline orders your memories during your life"),m.qZA(),m.qZA(),m.YNc(14,u,2,0,"div",8),m.YNc(15,$,2,1,"ul",9),m.qZA()),2&e&&(m.xp6(3),m.Q6J("routerLink",m.DdM(3,Q)),m.xp6(11),m.Q6J("ngIf",n.loading),m.xp6(1),m.Q6J("ngIf",!n.loading))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.YI,a.rH,o.gu,o.wd,o.W2,i.O5,o.PQ,i.sg,i.PC],styles:['.app-navigation[_ngcontent-%COMP%]{padding-left:15px;padding-right:20px;background-color:#fff}.app-navigation[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:auto;font-size:13px;text-transform:uppercase;font-weight:400;color:#210f36}.app-navigation[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:3px}.app-navigation[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding-inline-start:0;padding-inline-end:0}.app-navigation[_ngcontent-%COMP%]   .app-navigation__logo[_ngcontent-%COMP%]{width:140px;margin-top:10px}.family-tree[_ngcontent-%COMP%]   .family-tree__header[_ngcontent-%COMP%]{padding:20px 30px;margin-bottom:20px}.family-tree[_ngcontent-%COMP%]   .family-tree__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin:0}.family-tree[_ngcontent-%COMP%]   .family-tree__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 0;opacity:.7}.family-tree[_ngcontent-%COMP%]   .family-tree__loading[_ngcontent-%COMP%]{text-align:center;margin-top:30px;margin-bottom:30px}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .family-tree[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;position:relative}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]{margin:0 0 1em;text-align:center;padding:0 30px;overflow-x:scroll}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .family-tree[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]{display:table}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:table-cell;padding:.5em 0;vertical-align:top}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{outline:1px solid #e7d2e6;content:"";left:0;position:absolute;right:0;top:0}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before{left:50%}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before{right:50%}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%], .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:.1em solid #0000;border-radius:.2em;display:inline-block;margin:0 .2em .5em;padding:.2em .5em;position:relative}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before{outline:1px solid #e7d2e6;content:"";height:.5em;left:50%;position:absolute}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before{top:-.5em}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{top:-.55em}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-top:0}.family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:after, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .family-tree__tree__person[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]:before, .family-tree[_ngcontent-%COMP%]   .family-tree__tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{outline:none}.family-tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]{text-align:Center;display:inline-block;position:relative}.family-tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]   .family-tree__tree__person__image[_ngcontent-%COMP%]{display:block;width:45px;height:45px;border-radius:22.5px;background-size:contain;background-position:50%;background-color:#000;background-image:url(person-icon.911b045c494c29744d4b.png);margin:0 auto}.family-tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:0;display:inline-block;white-space:nowrap;font-size:12px;max-width:65px;overflow:hidden;text-overflow:ellipsis}.family-tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]   .family-tree__tree__person__add[_ngcontent-%COMP%]{position:absolute;top:15px;right:-16px;background-color:#e7d2e6;color:#210f38;font-weight:100;font-size:14px;line-height:20px;padding:2px;border-radius:10px;width:20px;height:20px;text-align:center;display:inline-block;z-index:999}.family-tree[_ngcontent-%COMP%]   .family-tree__tree__person[_ngcontent-%COMP%]   .family-tree__tree__person__add.family-tree__tree__person__add--bottom[_ngcontent-%COMP%]{top:auto;bottom:-20px;right:auto;left:calc(50% - 10px)}@media (prefers-color-scheme: dark){.app-navigation[_ngcontent-%COMP%]{background-color:#1f1f1f}.app-navigation[_ngcontent-%COMP%]   .app-navigation__logo[_ngcontent-%COMP%]{filter:brightness(0) invert(1)}.profile[_ngcontent-%COMP%]   .profile__memories[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{color:#fff}}']}),e}()}],U=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[a.Bz.forChild(Y)],a.Bz]}),e}(),S=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[i.ez,r.u5,o.Pc,U]]}),e}()}}]);