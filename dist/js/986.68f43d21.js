"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[986],{5314:function(t,i,s){var a=s(4334),e=s(9554);i["Z"]=(0,a.Q_)("cartStore",{state:()=>({cartList:[],total:null,final_total:null,totalNum:0,isLoading:!1,btnStatus:!1}),actions:{getCartList(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/cart";this.isLoading=!0,e.ZP.get(t).then((t=>{this.cartList=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total,this.isLoading=!1}))},addCart(t,i=1){const s="https://vue3-course-api.hexschool.io/api/jysing-aip/cart",a={data:{product_id:t,qty:i}};e.ZP.post(s,a).then((t=>{this.getCartList()}))},removeItem(t){const i=`https://vue3-course-api.hexschool.io/api/jysing-aip/cart/${t}`;e.ZP["delete"](i).then((t=>{this.getCartList()}))},cleanAll(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/carts";e.ZP["delete"](t).then((t=>{this.getCartList()}))},updateCart(t,i){this.btnStatus=!0;let{id:s,qty:a,product_id:o}=t;!0===i?a+=1:a-=1;const r={product_id:o,qty:a},l=`https://vue3-course-api.hexschool.io/api/jysing-aip/cart/${s}`;e.ZP.put(l,{data:r}).then((t=>{this.btnStatus=!1,this.getCartList()}))}},getters:{getQty(t){return t.cartList.length}}})},7364:function(t,i,s){s.d(i,{Z:function(){return c}});var a=s(3099);const e=["src"];function o(t,i,s,o,r,l){const n=(0,a.up)("LoadingPage");return(0,a.wg)(),(0,a.j4)(n,{active:s.loadStatus,opacity:.9,"background-color":"#fff"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:r.img,alt:"",style:{width:"250px",height:"250px"}},null,8,e)])),_:1},8,["active","opacity"])}var r={props:["loadStatus"],data(){return{img:"./assets/images/pokemon/pika.gif"}}},l=s(5727);const n=(0,l.Z)(r,[["render",o]]);var c=n},3986:function(t,i,s){s.r(i),s.d(i,{default:function(){return U}});var a=s(3099),e=s(8317),o=s(5860);const r={class:"mainProduct"},l={class:"container-lg"},n={class:"mainBox"},c={key:0,class:"row"},d={class:"col-md-7"},u={class:"imgBox"},p=["src"],g={class:"col-md-5"},h={class:"detailBox"},_={class:"orginPrice"},m={class:"addBox"},v={class:"unitBox"},w=(0,a._)("p",null,"-",-1),y=[w],f={class:"unitText"},k=(0,a._)("p",null,"+",-1),b=[k],C=(0,a._)("h5",null,"加入購物車",-1),P=[C],L={key:0,class:"detailText"},x=(0,a._)("h4",null,"商品特色",-1),q={key:1,class:"mayProduct"},Z=(0,a._)("h4",null,"推薦商品",-1),S=["onClick"],j={class:"moreImg"},B=["src","alt"],z=(0,a._)("span",null,"查看更多",-1);function D(t,i,s,w,k,C){const D=(0,a.up)("LoadingImg"),$=(0,a.up)("swiper-slide"),I=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(D,{loadStatus:t.isLoading},null,8,["loadStatus"]),(0,a._)("section",r,[(0,a._)("div",l,[(0,a._)("div",n,[null!==t.product?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[(0,a._)("div",u,[(0,a._)("img",{src:t.product.imageUrl,alt:"product.title"},null,8,p)])]),(0,a._)("div",g,[(0,a._)("div",h,[(0,a._)("h3",null,(0,e.zw)(t.product.title),1),(0,a._)("div",_,[(0,a._)("p",null,"原價: NT$"+(0,e.zw)(t.product.origin_price),1)]),(0,a._)("h4",null,"特價: NT$"+(0,e.zw)(t.product.price),1)]),(0,a._)("div",m,[(0,a._)("div",v,[(0,a._)("button",(0,a.dG)({type:"button",class:"btn remove"},{disabled:k.product_qty<=1},{onClick:i[0]||(i[0]=(0,o.iM)((t=>C.updateCart(!1)),["prevent"]))}),y,16),(0,a._)("div",f,[(0,a._)("p",null,(0,e.zw)(k.product_qty),1)]),(0,a._)("button",{type:"button",class:"btn add",onClick:i[1]||(i[1]=(0,o.iM)((t=>C.updateCart(!0)),["prevent"]))},b)]),(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:i[2]||(i[2]=(0,o.iM)((i=>t.addCart(t.product.id,k.product_qty)),["prevent"]))},P)])])])):(0,a.kq)("",!0)]),null!==t.product?((0,a.wg)(),(0,a.iD)("div",L,[x,(0,a._)("p",null,(0,e.zw)(t.product.content),1)])):(0,a.kq)("",!0),C.moreProducts.length>=3?((0,a.wg)(),(0,a.iD)("div",q,[Z,(0,a.Wm)(I,{navigation:!0,modules:k.modules,"space-between":10,"slides-per-view":3,loop:!0,breakpoints:{414:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30}},class:"mySwiper"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(C.moreProducts,(i=>((0,a.wg)(),(0,a.j4)($,{key:i.id},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"imgBox",onClick:(0,o.iM)((s=>t.getProduct(i.id)),["prevent"])},[(0,a._)("div",j,[(0,a._)("img",{src:i.imageUrl,alt:i.title},null,8,B),z]),(0,a._)("p",null,(0,e.zw)(i.title),1)],8,S)])),_:2},1024)))),128))])),_:1},8,["modules"])])):(0,a.kq)("",!0)])])],64)}s(7658);var $=s(7364),I=s(195),M=s(8150),T=s(6311),A=s(5314),N=s(4334),W={props:["id"],components:{LoadingImg:$.Z,Swiper:I.tq,SwiperSlide:I.o5},data(){return{product_qty:1,modules:[M.W_]}},computed:{...(0,N.rn)(T.Z,["product","isLoading","productsList"]),moreProducts(){const t=this.productsList,{category:i,id:s}=this.product,a=[];return t.forEach((t=>{t.category===i&&t.id!==s&&a.push(t)})),a}},methods:{...(0,N.nv)(A.Z,["addCart"]),...(0,N.nv)(T.Z,["getProduct","getAllProducts"]),updateCart(t){!0===t?this.product_qty+=1:this.product_qty-=1}},created(){const{id:t}=this.$route.params;this.getProduct(t),this.getAllProducts()}},H=s(5727);const Q=(0,H.Z)(W,[["render",D]]);var U=Q}}]);
//# sourceMappingURL=986.68f43d21.js.map