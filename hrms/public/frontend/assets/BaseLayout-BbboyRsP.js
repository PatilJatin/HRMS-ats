import{a as f,b as _,c as m}from"./index-Ds2wFB9p.js";import{i as u,f as p,j as n,y as x,n as a,l as t,x as e,K as h,q as s,t as b,k as g,a5 as w,ad as k,ae as v}from"./frappe-ui-BRfrkV0W.js";import{u as y}from"./notifications-B-9eqABw.js";const C={class:"w-full sm:w-96"},B={class:"flex flex-col bg-white shadow-sm p-4"},N={class:"flex flex-row justify-between items-center"},$={class:"flex flex-row items-center gap-2"},j={class:"text-xl font-bold text-gray-900"},I={class:"flex flex-row items-center gap-3 ml-auto"},S=["onClick"],V={key:0,class:"absolute top-0 right-0.5 inline-block w-2 h-2 bg-red-600 rounded-full border border-white"},q={class:"flex flex-col h-screen w-screen sm:w-96"},D={__name:"BaseLayout",props:{pageTitle:{type:String,required:!1,default:"Frappe HR"}},setup(i){const o=u("$user"),c=i;return(r,H)=>{const l=p("router-link");return n(),x(s(m),null,{default:a(()=>[t(s(f),{class:"ion-no-border"},{default:a(()=>[e("div",C,[e("div",B,[e("div",N,[e("div",$,[e("h2",j,h(c.pageTitle),1)]),e("div",I,[t(l,{to:{name:"Notifications"},class:"flex flex-col items-center"},{default:a(({navigate:d})=>[e("span",{class:"relative inline-block",onClick:d},[t(s(b),{name:"bell",class:"h-6 w-6"}),s(y).data?(n(),g("span",V)):w("",!0)],8,S)]),_:1}),t(l,{to:{name:"Profile"},class:"flex flex-col items-center"},{default:a(()=>[t(s(k),{image:s(o).data.user_image,label:s(o).data.first_name,size:"xl"},null,8,["image","label"])]),_:1})])])])])]),_:1}),t(s(_),{class:"ion-no-padding"},{default:a(()=>[e("div",q,[v(r.$slots,"body")])]),_:3})]),_:3})}}};export{D as default};
//# sourceMappingURL=BaseLayout-BbboyRsP.js.map
