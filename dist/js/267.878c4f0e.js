"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[267],{7364:function(t,i,s){s.d(i,{Z:function(){return n}});var o=s(3099);const e=["src"];function a(t,i,s,a,l,c){const r=(0,o.up)("LoadingPage");return(0,o.wg)(),(0,o.j4)(r,{active:s.loadStatus,opacity:.9,"background-color":"#fff"},{default:(0,o.w5)((()=>[(0,o._)("img",{src:l.img,alt:"",style:{width:"250px",height:"250px"}},null,8,e)])),_:1},8,["active","opacity"])}var l={props:["loadStatus"],data(){return{img:"./assets/images/pokemon/pika.gif"}}},c=s(5727);const r=(0,c.Z)(l,[["render",a]]);var n=r},7267:function(t,i,s){s.r(i),s.d(i,{default:function(){return N}});var o=s(3099),e=s(8317),a=s(5860);const l={class:"mainProduct"},c={class:"container-lg"},r={class:"mainBox"},n={key:0,class:"row"},d={class:"col-md-7"},u={class:"imgBox"},p=["src"],g={class:"col-md-5"},_={class:"detailBox"},h={class:"orginPrice"},m={class:"addBox"},v={class:"unitBox"},w=(0,o._)("p",null,"-",-1),y=[w],k={class:"unitText"},f=(0,o._)("p",null,"+",-1),b=[f],x=(0,o._)("h5",null,"加入購物車",-1),P=[x],C={key:0,class:"detailText"},q=(0,o._)("h4",null,"商品特色",-1),B={key:1,class:"moreProduct"},S=(0,o._)("h4",null,"推薦商品",-1),j=["onClick"],L={class:"moreImg"},z=["src","alt"],D=(0,o._)("span",null,"查看更多",-1);function M(t,i,s,w,f,x){const M=(0,o.up)("LoadingImg"),T=(0,o.up)("swiper-slide"),Z=(0,o.up)("swiper");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(M,{loadStatus:f.isLoading},null,8,["loadStatus"]),(0,o._)("section",l,[(0,o._)("div",c,[(0,o._)("div",r,[null!==f.product?((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",d,[(0,o._)("div",u,[(0,o._)("img",{src:f.product.imageUrl,alt:"product.title"},null,8,p)])]),(0,o._)("div",g,[(0,o._)("div",_,[(0,o._)("h3",null,(0,e.zw)(f.product.title),1),(0,o._)("div",h,[(0,o._)("p",null,"原價: NT$"+(0,e.zw)(f.product.origin_price),1)]),(0,o._)("h4",null,"特價: NT$"+(0,e.zw)(f.product.price),1)]),(0,o._)("div",m,[(0,o._)("div",v,[(0,o._)("button",(0,o.dG)({type:"button",class:"btn remove"},{disabled:f.product_qty<=1},{onClick:i[0]||(i[0]=(0,a.iM)((t=>x.updateCart(!1)),["prevent"]))}),y,16),(0,o._)("div",k,[(0,o._)("p",null,(0,e.zw)(f.product_qty),1)]),(0,o._)("button",{type:"button",class:"btn add",onClick:i[1]||(i[1]=(0,a.iM)((t=>x.updateCart(!0)),["prevent"]))},b)]),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:i[2]||(i[2]=(0,a.iM)((t=>x.addCart()),["prevent"]))},P)])])])):(0,o.kq)("",!0)]),null!==f.product?((0,o.wg)(),(0,o.iD)("div",C,[q,(0,o._)("p",null,(0,e.zw)(f.product.content),1)])):(0,o.kq)("",!0),0!==f.moreProducts.length?((0,o.wg)(),(0,o.iD)("div",B,[S,(0,o.Wm)(Z,{navigation:!0,modules:f.modules,"space-between":10,"slides-per-view":1,loop:!0,breakpoints:{414:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30}},class:"mySwiper"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.moreProducts,(t=>((0,o.wg)(),(0,o.j4)(T,{key:t.id},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"imgBox",onClick:(0,a.iM)((i=>x.getProduct(t.id)),["prevent"])},[(0,o._)("div",L,[(0,o._)("img",{src:t.imageUrl,alt:t.title},null,8,z),D]),(0,o._)("p",null,(0,e.zw)(t.title),1)],8,j)])),_:2},1024)))),128))])),_:1},8,["modules"])])):(0,o.kq)("",!0)])])],64)}s(7658);var T=s(7364),Z=s(195),$=s(8150),I={props:["id"],components:{LoadingImg:T.Z,Swiper:Z.tq,SwiperSlide:Z.o5},data(){return{product:null,moreProducts:[],product_qty:1,isLoading:!1,modules:[$.W_]}},methods:{getProduct(t){this.isLoading=!0;const i=this.axios,s=`https://vue3-course-api.hexschool.io/api/jysing-aip/product/${t}`,o="https://vue3-course-api.hexschool.io/api/jysing-aip/products/all";function e(t){return i.get(t)}this.axios.all([e(s),e(o)]).then((t=>{const i=t[0];this.product=i.data.product;const s=t[1].data.products,{category:o,id:e}=i.data.product,a=[];s.forEach((t=>{t.category===o&&t.id!==e&&a.push(t)})),this.moreProducts=a,this.isLoading=!1}))},updateCart(t){!0===t?this.product_qty+=1:this.product_qty-=1},addCart(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/cart",i={data:{product_id:this.product.id,qty:this.product_qty}};this.axios.post(t,i).then((t=>{console.log(t)}))}},created(){const{id:t}=this.$route.params;this.getProduct(t)}},W=s(5727);const H=(0,W.Z)(I,[["render",M]]);var N=H}}]);
//# sourceMappingURL=267.878c4f0e.js.map