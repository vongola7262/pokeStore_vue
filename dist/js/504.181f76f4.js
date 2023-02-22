"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[504],{5314:function(t,s,a){var e=a(4334),n=a(9554),o=a(7775);const i=(0,o.Z)();s["Z"]=(0,e.Q_)("cartStore",{state:()=>({cartList:[],total:null,final_total:null,totalNum:0}),actions:{getCartList(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/cart";n.ZP.get(t).then((t=>{this.cartList=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total}))},addCart(t,s=1){const a="https://vue3-course-api.hexschool.io/api/jysing-aip/cart",e={data:{product_id:t,qty:s}};n.ZP.post(a,e).then((t=>{this.getCartList(),this.hintMessage(!0,"已加入購物車")})).catch((t=>{this.hintMessage(!1,t.message)}))},removeItem(t){const s=`https://vue3-course-api.hexschool.io/api/jysing-aip/cart/${t}`;n.ZP["delete"](s).then((t=>{this.getCartList(),this.hintMessage(!0,"已刪除")})).catch((t=>{this.hintMessage(!1,t.message)}))},cleanAll(){const t="https://vue3-course-api.hexschool.io/api/jysing-aip/carts";n.ZP["delete"](t).then((t=>{this.getCartList(),this.hintMessage(!0,"清空購物車")})).catch((t=>{this.hintMessage(!1,t.message)}))},updateCart(t,s){i.btnStatus=!0;let{id:a,qty:e,product_id:o}=t;!0===s?e+=1:e-=1;const r={product_id:o,qty:e},l=`https://vue3-course-api.hexschool.io/api/jysing-aip/cart/${a}`;n.ZP.put(l,{data:r}).then((t=>{i.btnStatus=!1,this.getCartList()})).catch((t=>{this.hintMessage(!1,t.message)}))},hintMessage(t,s){i.hintStatus.active=!0,i.hintStatus.status=t,i.hintStatus.text=s,setTimeout((()=>{i.hintStatus.active=!1,i.hintStatus.status=!1,i.hintStatus.text=""}),"1000")}},getters:{getQty(t){return t.cartList.length}}})},7775:function(t,s,a){var e=a(4334);s["Z"]=(0,e.Q_)("statusStore",{state:()=>({isLoading:!1,btnStatus:!1,hintStatus:{active:!1,status:!1,text:""}})})},5504:function(t,s,a){a.r(s),a.d(s,{default:function(){return N}});var e=a(3099);function n(t,s,a,n,o,i){const r=(0,e.up)("UserBar"),l=(0,e.up)("router-view"),c=(0,e.up)("UserFooter");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(r),(0,e._)("main",null,[(0,e.Wm)(l)]),(0,e._)("footer",null,[(0,e.Wm)(c)])],64)}var o=a(8317),i=a(5860);const r={class:"containBox"},l=["src"],c={class:"navbar-nav mb-lg-0"},p=["onClick"],h={key:0,class:"numText"},u={class:"coptBox"},d={href:"https://tw.portal-pokemon.com/",target:"_blank"},g=["src"],m=(0,e._)("p",null,[(0,e.Uk)(" Copyright © Jing Yu Sing 2023 "),(0,e._)("br"),(0,e.Uk)(" 僅個人作品，無商業用途 ")],-1),_=(0,e._)("span",{class:"line"},null,-1),v=(0,e._)("span",{class:"line"},null,-1),k=(0,e._)("span",{class:"line"},null,-1),w=[_,v,k];function b(t,s,a,n,_,v){return(0,e.wg)(),(0,e.iD)("header",null,[(0,e._)("nav",{class:(0,o.C_)(["navbar navbar-expand-md navbar-light",{top:_.isTop}])},[(0,e._)("div",r,[(0,e._)("a",{href:"#",class:"navbar-brand",onClick:s[0]||(s[0]=(0,i.iM)(((...t)=>v.goIndex&&v.goIndex(...t)),["prevent"]))},[(0,e._)("img",{src:_.img,alt:""},null,8,l)]),(0,e._)("div",{class:(0,o.C_)(["navbar-collapse",{close:!_.phoneStatus&&!_.loadFirst,open:_.phoneStatus&&!_.loadFirst}]),id:"navbarText"},[(0,e._)("ul",c,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(_.pageList,((s,a)=>((0,e.wg)(),(0,e.iD)("li",{key:a,class:(0,o.C_)(s.class)},[(0,e._)("a",{href:"#",class:"nav-link",onClick:(0,i.iM)((t=>v.goNext(s.link)),["prevent"])},[(0,e._)("p",null,(0,o.zw)(s.name),1),"cart"===s.class&&t.getQty>0?((0,e.wg)(),(0,e.iD)("div",h,[(0,e._)("p",null,(0,o.zw)(t.getQty),1)])):(0,e.kq)("",!0)],8,p)],2)))),128))]),(0,e._)("div",u,[(0,e._)("a",d,[(0,e._)("img",{src:_.footerImg,alt:"pokemon"},null,8,g)]),m])],2),(0,e._)("div",{class:(0,o.C_)(["hamburger",{close:!_.phoneStatus&&!_.loadFirst,open:_.phoneStatus&&!_.loadFirst}]),onClick:s[1]||(s[1]=(0,i.iM)(((...t)=>v.phoneBar&&v.phoneBar(...t)),["prevent"]))},w,2)]),(0,e._)("a",{class:(0,o.C_)(["topTip",{top:_.backTop}]),onClick:s[2]||(s[2]=(0,i.iM)(((...t)=>v.backToTop&&v.backToTop(...t)),["prevent"]))},null,2)],2)])}a(7658);var S=a(5314),f=a(4334),x={data(){return{img:"./assets/images/pokemon/pokemonStore.png",footerImg:"./assets/images/pokemon/International_Pokémon_logo.svg.png",isTop:!1,backTop:!1,loadFirst:!0,phoneStatus:!1,pageList:[{name:"商品",class:"product",link:"/typeList/all"},{name:"購物車",class:"cart",link:"/cart"},{name:"訂單查詢",class:"order",link:"/order"},{name:"聯絡我們",class:"contact",link:"/contact"}]}},computed:{...(0,f.rn)(S.Z,["totalNum","getQty"])},methods:{...(0,f.nv)(S.Z,["getCartList"]),userBar(){const t=window.pageYOffset;t>0?(this.isTop=!0,this.backTop=t>600):this.isTop=!1},viewType(){window.outerWidth>767&&(this.phoneStatus=!1,this.loadFirst=!0)},backToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})},goNext(t){this.$router.push(t),this.phoneStatus=!1,this.loadFirst=!0},goIndex(){this.$router.push({name:"index"}),this.phoneStatus=!1,this.loadFirst=!0},phoneBar(){this.loadFirst=!1,!0===this.phoneStatus?this.phoneStatus=!1:this.phoneStatus=!0}},created(){window.addEventListener("scroll",this.userBar),window.addEventListener("resize",this.viewType),this.getCartList()}},C=a(5727);const y=(0,C.Z)(x,[["render",b]]);var T=y;const L={class:"container"},B={class:"row"},Z={class:"col-md-4 copyBox"},M={href:"https://tw.portal-pokemon.com/",target:"_blank"},F=["src"],I=(0,e._)("div",{class:"col-md-4 copyBox"},[(0,e._)("p",null,[(0,e.Uk)(" Copyright © Jing Yu Sing 2023 "),(0,e._)("br"),(0,e.Uk)(" 僅個人作品，無商業用途 ")])],-1),U={class:"col-md-4 copyBox"},j=(0,e._)("p",null,"管理員登入",-1);function P(t,s,a,n,o,i){const r=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",L,[(0,e._)("div",B,[(0,e._)("div",Z,[(0,e._)("a",M,[(0,e._)("img",{src:o.img,alt:"pokemon"},null,8,F)])]),I,(0,e._)("div",U,[(0,e.Wm)(r,{to:{name:"login"},class:"adminBox"},{default:(0,e.w5)((()=>[j])),_:1})])])])}var D={data(){return{img:"./assets/images/pokemon/International_Pokémon_logo.svg.png"}}};const Q=(0,C.Z)(D,[["render",P]]);var W=Q,Y={components:{UserBar:T,UserFooter:W},data(){return{}}};const q=(0,C.Z)(Y,[["render",n]]);var N=q}}]);
//# sourceMappingURL=504.181f76f4.js.map