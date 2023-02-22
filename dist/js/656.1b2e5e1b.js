"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[656],{7364:function(e,t,a){a.d(t,{Z:function(){return d}});var i=a(3099);const s=["src"];function n(e,t,a,n,r,l){const o=(0,i.up)("LoadingPage");return(0,i.wg)(),(0,i.j4)(o,{active:a.loadStatus,opacity:.9,"background-color":"#fff"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:r.img,alt:"",style:{width:"250px",height:"250px"}},null,8,s)])),_:1},8,["active","opacity"])}var r={props:["loadStatus"],data(){return{img:"./assets/images/pokemon/pika.gif"}}},l=a(5727);const o=(0,l.Z)(r,[["render",n]]);var d=o},9409:function(e,t,a){a.d(t,{Z:function(){return b}});var i=a(3099),s=a(5860),n=a(8317);const r={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},o={class:"page-item"},d=(0,i._)("span",{"aria-hidden":"true"},"«",-1),g=[d],p=["onClick"],c={class:"page-item"},u=(0,i._)("span",{"aria-hidden":"true"},"»",-1),h=[u];function _(e,t,a,d,u,_){return(0,i.wg)(),(0,i.iD)("nav",r,[(0,i._)("ul",l,[(0,i._)("li",o,[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.iM)((e=>_.prevPage()),["prevent"]))},g)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.pages.total_pages,(e=>((0,i.wg)(),(0,i.iD)("li",{class:(0,n.C_)(["page-item",{active:e===a.pages.current_page}]),key:e},[(0,i._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((t=>_.updatePage(e)),["prevent"])},(0,n.zw)(e),9,p)],2)))),128)),(0,i._)("li",c,[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((e=>_.nextPage()),["prevent"]))},h)])])])}var v={props:["pages"],methods:{updatePage(e){this.$emit("nextpage",e)},nextPage(){if(this.pages.has_next){const e=this.pages.current_page+1;this.$emit("nextpage",e)}},prevPage(){if(this.pages.has_pre){const e=this.pages.current_page-1;this.$emit("nextpage",e)}}}},m=a(5727);const w=(0,m.Z)(v,[["render",_]]);var b=w},7656:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var i=a(3099),s=a(8317),n=a(5860);const r={class:"table mt-4"},l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{width:"120"},"序號"),(0,i._)("th",null,"訂單編號"),(0,i._)("th",{width:"120"},"訂購人"),(0,i._)("th",{width:"120"},"金額"),(0,i._)("th",{width:"100"},"是否付款"),(0,i._)("th",{width:"200"},"編輯")])],-1),o={class:"text-right"},d={class:"text-right"},g={class:"btn-group"},p=(0,i._)("button",{class:"btn btn-outline-primary btn-sm"},"編輯",-1),c=["onClick"],u={key:0,class:"btnBox"},h={key:1};function _(e,t,a,_,v,m){const w=(0,i.up)("LoadingImg"),b=(0,i.up)("PageList");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(w,{active:v.isLoading},null,8,["active"]),(0,i._)("table",r,[l,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(v.orderList,((e,t)=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",null,(0,s.zw)(t+1),1),(0,i._)("td",null,(0,s.zw)(e.id),1),(0,i._)("td",o,(0,s.zw)(e.user.name),1),(0,i._)("td",d,"NT$ "+(0,s.zw)(e.total),1),(0,i._)("td",null,[(0,i._)("span",{class:(0,s.C_)({"text-success":e.is_paid})},(0,s.zw)(e.is_paid),3)]),(0,i._)("td",null,[(0,i._)("div",g,[p,(0,i._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,n.iM)((t=>m.deleteOrder(e.id)),["prevent"])},"刪除",8,c)])])])))),128))])]),v.orderList.length>2?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>m.deleteAllOrder&&m.deleteAllOrder(...e)),["prevent"]))},"全部刪除")])):(0,i.kq)("",!0),v.orderList.length>0?((0,i.wg)(),(0,i.iD)("div",h,[(0,i.Wm)(b,{pages:v.pages,onNextpage:m.getOrder},null,8,["pages","onNextpage"])])):(0,i.kq)("",!0)],64)}var v=a(7364),m=a(9409),w={components:{PageList:m.Z,LoadingImg:v.Z},data(){return{orderList:[],pages:{},isLoading:!1}},methods:{getOrder(e=1){const t=`https://vue3-course-api.hexschool.io/api/jysing-aip/admin/orders/?page=${e}`;this.isLoading=!0,this.axios.get(t).then((e=>{this.isLoading=!1,this.orderList=e.data.orders,this.pages=e.data.pagination}))},deleteOrder(e){const t=`https://vue3-course-api.hexschool.io/api/jysing-aip/admin/order/${e}`;this.isLoading=!0,this.axios.delete(t).then((e=>{this.getOrder()}))},deleteAllOrder(){const e="https://vue3-course-api.hexschool.io/api/jysing-aip/admin/orders/all";this.isLoading=!0,this.axios.delete(e).then((e=>{this.getOrder()}))}},created(){this.getOrder()}},b=a(5727);const f=(0,b.Z)(w,[["render",_]]);var k=f}}]);
//# sourceMappingURL=656.1b2e5e1b.js.map