"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[606],{7364:function(t,o,a){a.d(o,{Z:function(){return p}});var e=a(3099);const i=["src"];function n(t,o,a,n,l,s){const u=(0,e.up)("LoadingPage");return(0,e.wg)(),(0,e.j4)(u,{active:a.loadStatus,opacity:.9,"background-color":"#fff"},{default:(0,e.w5)((()=>[(0,e._)("img",{src:l.img,alt:"",style:{width:"250px",height:"250px"}},null,8,i)])),_:1},8,["active","opacity"])}var l={props:["loadStatus"],data(){return{img:"./assets/images/pokemon/pika.gif"}}},s=a(5727);const u=(0,s.Z)(l,[["render",n]]);var p=u},5606:function(t,o,a){a.r(o),a.d(o,{default:function(){return x}});var e=a(3099),i=a(8317),n=a(5860);const l={class:"mainCartList"},s={class:"list-group"},u=["onUpdate:modelValue","onChange"],p={key:0},c={key:1},r=["onClick"],d=(0,e._)("p",null,"刪除",-1),h=[d],g=(0,e._)("p",null,"全部清空",-1),_=[g],C={class:"inputCode"},m=(0,e._)("p",null,"套用",-1),y=[m];function f(t,o,a,d,g,m){const f=(0,e.up)("LoadingImg");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(f,{loadStatus:g.isLoading},null,8,["loadStatus"]),(0,e._)("section",l,[(0,e._)("ul",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(g.cartList,(t=>((0,e.wg)(),(0,e.iD)("li",{class:"list-group-item",key:t.id},[(0,e._)("p",null,(0,i.zw)(t.product.title),1),(0,e.wy)((0,e._)("input",{type:"number",name:"itemQty",id:"itemQty","onUpdate:modelValue":o=>t.qty=o,min:"1",onChange:(0,n.iM)((o=>m.updateCart(t)),["prevent"])},null,40,u),[[n.nr,t.qty]]),t.coupon?((0,e.wg)(),(0,e.iD)("p",p," 優惠價 "+(0,i.zw)(t.final_total)+"(折扣"+(0,i.zw)(t.coupon.percent)+"%) ",1)):((0,e.wg)(),(0,e.iD)("p",c,"特價 "+(0,i.zw)(t.final_total),1)),(0,e._)("button",{type:"button",onClick:(0,n.iM)((o=>m.removeItem(t.id)),["prevent"])},h,8,r)])))),128))]),(0,e._)("button",{type:"button",onClick:o[0]||(o[0]=(0,n.iM)(((...t)=>m.cleanAll&&m.cleanAll(...t)),["prevent"]))},_),(0,e._)("div",C,[(0,e.wy)((0,e._)("input",{type:"text",placeholder:"輸入優惠碼","onUpdate:modelValue":o[1]||(o[1]=t=>g.Code=t)},null,512),[[n.nr,g.Code]]),(0,e._)("button",{type:"button",onClick:o[2]||(o[2]=(0,n.iM)(((...t)=>m.enterCode&&m.enterCode(...t)),["prevent"]))},y)]),(0,e._)("p",null,"原價 "+(0,i.zw)(g.total),1),(0,e._)("p",null,"折價 "+(0,i.zw)(g.total-g.final_total),1),(0,e._)("p",null,"總金額 "+(0,i.zw)(g.final_total),1)])],64)}var v=a(7364),w={components:{LoadingImg:v.Z},data(){return{cartList:null,total:null,final_total:null,Code:null,isLoading:!1}},methods:{getCartList(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/cart";this.isLoading=!0,this.axios.get(t).then((t=>{this.cartList=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total,this.isLoading=!1}))},updateCart(t){const{id:o,qty:a,product_id:e}=t,i={product_id:e,qty:a},n=`https://vue3-course-api.hexschool.io/api/jysing-aip/cart/${o}`;this.axios.put(n,{data:i}).then((t=>{console.log(t),this.getCartList()}))},removeItem(t){const o=`https://vue3-course-api.hexschool.io/api/jysing-aip/cart/${t}`;this.axios.delete(o).then((t=>{console.log(t),this.getCartList()}))},cleanAll(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/carts";this.axios.delete(t).then((t=>{console.log(t),this.getCartList()}))},enterCode(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/coupon",o={code:this.Code};this.axios.post(t,{data:o}).then((t=>{console.log(t),this.getCartList()}))}},created(){this.getCartList()}},L=a(5727);const k=(0,L.Z)(w,[["render",f]]);var x=k}}]);
//# sourceMappingURL=606.d8a9701a.js.map