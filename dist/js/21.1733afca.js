"use strict";(self["webpackChunkjs_shop"]=self["webpackChunkjs_shop"]||[]).push([[21],{3021:function(s,e,t){t.r(e),t.d(e,{default:function(){return b}});var o=t(3099),n=t(5860);const r={class:"container mt-5"},a={class:"col-md-6"},i=(0,o._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},u=(0,o._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),c={class:"mb-2"},d=(0,o._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,o._)("div",{class:"text-end mt-4"},[(0,o._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function m(s,e,t,m,h,f){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,n.iM)(((...s)=>f.sigin&&f.sigin(...s)),["prevent"]))},[(0,o._)("div",a,[i,(0,o._)("div",l,[u,(0,o.wy)((0,o._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",autocomplete:"off",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[n.nr,h.user.username]])]),(0,o._)("div",c,[d,(0,o.wy)((0,o._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",autocomplete:"off",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[n.nr,h.user.password]])]),p])],32)])}t(7658);var h={data(){return{user:{username:"",password:""}}},methods:{sigin(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.axios.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(t)}`,this.$router.push({name:"products"})}}))}}},f=t(5727);const w=(0,f.Z)(h,[["render",m]]);var b=w}}]);
//# sourceMappingURL=21.1733afca.js.map