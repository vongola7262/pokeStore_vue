"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[574],{7364:function(t,l,e){e.d(l,{Z:function(){return o}});var n=e(3099);const s=["src"];function a(t,l,e,a,r,u){const i=(0,n.up)("LoadingPage");return(0,n.wg)(),(0,n.j4)(i,{active:e.loadStatus,opacity:.9,"background-color":"#fff"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:r.img,alt:"",style:{width:"250px",height:"250px"}},null,8,s)])),_:1},8,["active","opacity"])}var r={props:["loadStatus"],data(){return{img:"./assets/images/pokemon/pika.gif"}}},u=e(5727);const i=(0,u.Z)(r,[["render",a]]);var o=i},8159:function(t,l,e){e.r(l),e.d(l,{default:function(){return R}});var n=e(3099),s=e(8317),a=e(5860);const r={class:"checkDetail"},u={class:"checkoutBox"},i={key:0,class:"checkoutList"},o={class:"checkoutDetail"},d=(0,n._)("h4",null,"商品資訊",-1),c={class:"table align-middle"},p=(0,n._)("thead",null,[(0,n._)("th",null,[(0,n._)("p",null,"品名")]),(0,n._)("th",null,[(0,n._)("p",null,"數量")]),(0,n._)("th",{class:"text-end"},[(0,n._)("p",null,"單價")])],-1),_={class:"text-end"},h={colspan:"3",class:"text-end totalStatus"},g=(0,n._)("h4",null,"訂購人資訊",-1),k={class:"table"},w=(0,n._)("th",null,[(0,n._)("p",null,"姓名")],-1),y=(0,n._)("th",null,[(0,n._)("p",null,"電話")],-1),b=(0,n._)("th",{width:"100"},[(0,n._)("p",null,"Email")],-1),m=(0,n._)("th",null,[(0,n._)("p",null,"地址")],-1),v=(0,n._)("th",null,[(0,n._)("p",null,"收件時段")],-1),f={key:0},x=(0,n._)("p",null,"8:00 ~ 12:00",-1),L=[x],D={key:1},z=(0,n._)("p",null,"13:00 ~ 17:00",-1),S=[z],$={key:2},I=(0,n._)("p",null,"18:00 ~ 21:00",-1),j=[I],C=(0,n._)("th",null,[(0,n._)("p",null,"備註")],-1),B={class:"text-end payBtn"},O={class:"backBtn"},T=(0,n._)("p",null,"返回列表",-1),Z=[T],q={class:"nextBox"},M={class:"text-end totalStatus"},H={key:0,class:"text-wait"},N={key:1,class:"text-succ"},P={key:0,class:"btngroup"},W=(0,n._)("p",null,"繼續購物",-1),Y=[W],E=(0,n._)("p",null,"付款去",-1),K=[E];function A(t,l,e,x,z,I){const T=(0,n.up)("LoadingImg");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(T,{loadStatus:z.isLoading},null,8,["loadStatus"]),(0,n._)("section",r,[(0,n._)("div",u,[z.orderStatus?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("h3",null,"訂單編號: "+(0,s.zw)(z.orderId),1),(0,n._)("div",o,[d,(0,n._)("table",c,[p,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(z.order.products,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(t.product.title),1)]),(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(t.qty)+" "+(0,s.zw)(t.product.unit),1)]),(0,n._)("td",_,[(0,n._)("p",null,"NT$ "+(0,s.zw)(t.final_total),1)])])))),128))]),(0,n._)("tfoot",null,[(0,n._)("tr",null,[(0,n._)("td",h,[(0,n._)("h4",null,"總計: NT$"+(0,s.zw)(z.order.total),1)])])])]),g,(0,n._)("table",k,[(0,n._)("tbody",null,[(0,n._)("tr",null,[w,(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(z.order.user.name),1)])]),(0,n._)("tr",null,[y,(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(z.order.user.tel),1)])]),(0,n._)("tr",null,[b,(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(z.order.user.email),1)])]),(0,n._)("tr",null,[m,(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(z.order.user.address),1)])]),(0,n._)("tr",null,[v,1==z.order.user.meetTime?((0,n.wg)(),(0,n.iD)("td",f,L)):2==z.order.user.meetTime?((0,n.wg)(),(0,n.iD)("td",D,S)):((0,n.wg)(),(0,n.iD)("td",$,j))]),(0,n._)("tr",null,[C,(0,n._)("td",null,[(0,n._)("p",null,(0,s.zw)(z.order.message),1)])])])]),(0,n._)("div",B,[(0,n._)("div",O,[(0,n._)("div",{class:"backStep",onClick:l[0]||(l[0]=(0,a.iM)(((...t)=>I.backList&&I.backList(...t)),["prevent"]))},Z)]),(0,n._)("div",q,[(0,n._)("div",M,[z.order.is_paid?((0,n.wg)(),(0,n.iD)("h4",N,"付款狀態: 已完成")):((0,n.wg)(),(0,n.iD)("h4",H,"付款狀態: 待付款"))]),z.order.is_paid?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("button",{type:"button",class:"btn btnWait",onClick:l[1]||(l[1]=(0,a.iM)(((...t)=>I.payLater&&I.payLater(...t)),["prevent"]))},Y),(0,n._)("button",{type:"button",class:"btn btnPay",onClick:l[2]||(l[2]=(0,a.iM)((t=>I.payOrder(z.orderId)),["prevent"]))},K)]))])])])])):(0,n.kq)("",!0)])])],64)}e(7658);var F=e(7364),G={props:["id"],components:{LoadingImg:F.Z},data(){return{isLoading:!1,orderStatus:!1,orderId:null,order:null}},methods:{getOrder(t){this.isLoading=!0;const l=`https://vue3-course-api.hexschool.io/api/jysing-aip/order/${t}`;this.axios.get(l).then((t=>{this.order=t.data.order,this.isLoading=!1,this.orderStatus=!0}))},payOrder(t){const l=`https://vue3-course-api.hexschool.io/api/jysing-aip/pay/${t}`;this.axios.post(l).then((t=>{!0===t.data.success&&this.$router.push({name:"cartsuccess"})}))},payLater(){this.$router.push({path:"/typeList/all"})},backList(){this.$router.push({name:"orderlist"})}},created(){const{id:t}=this.$route.params;this.orderId=t,this.getOrder(t)}},J=e(5727);const Q=(0,J.Z)(G,[["render",A]]);var R=Q}}]);
//# sourceMappingURL=574.858cc564.js.map