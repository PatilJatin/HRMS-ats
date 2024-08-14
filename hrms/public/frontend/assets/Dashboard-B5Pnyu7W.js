import{a as h,aa as b,c as B,w as M,e as V,ab as $,y as w,n as v,i,f as C,j as l,x as n,k as c,K as j,q as r,a5 as N,l as u,a6 as D,ac as L,F,H as R}from"./frappe-ui-BRfrkV0W.js";import T from"./BaseLayout-BbboyRsP.js";import{_ as U}from"./index-Ds2wFB9p.js";import q from"./SalarySlipItem-DfwP_sPO.js";import{f as A}from"./formatters-BXUkm3h3.js";import"./notifications-B-9eqABw.js";const E={class:"flex flex-col items-center my-7 p-4"},H={class:"flex flex-col w-full bg-white rounded py-5 px-3.5 gap-5"},K={key:0,class:"flex flex-col w-full gap-1.5"},z=n("span",{class:"text-gray-600 text-sm font-medium leading-5"}," Year To Date ",-1),G={class:"text-gray-800 text-xl font-bold leading-6"},I={class:"flex flex-col items-center mt-5 mb-7 w-full"},J={key:0,class:"flex flex-col bg-white rounded mt-5 overflow-auto w-full"},te={__name:"Dashboard",setup(O){var p,x;let t=h({}),_=h({});const d=i("$employee"),f=i("$dayjs"),y=i("$socket"),k=b({doctype:"Payroll Period",fields:["name","start_date","end_date"],filters:{company:(p=d.data)==null?void 0:p.company},orderBy:"start_date desc",auto:!0,transform(e){return e.map(a=>(_.value[a.name]=a,{label:S(a),value:a.name}))},onSuccess:e=>{t.value=e[0]}}),s=b({doctype:"Salary Slip",fields:["name","start_date","end_date","currency","gross_pay","net_pay","year_to_date"],filters:{employee:(x=d.data)==null?void 0:x.name,docstatus:1},orderBy:"end_date desc"}),m=B(()=>{var e;return(e=s.data)==null?void 0:e[0]});function S(e){return`${f(e==null?void 0:e.start_date).format("MMM YYYY")} - ${f(e==null?void 0:e.end_date).format("MMM YYYY")}`}return M(()=>t.value,e=>{let a=_.value[e==null?void 0:e.value];s.filters.start_date=["between",[a==null?void 0:a.start_date,a==null?void 0:a.end_date]],s.reload()}),V(()=>{y.on("hrms:update_salary_slips",e=>{e.employee===d.data.name&&s.reload()})}),$(()=>{y.off("hrms:update_salary_slips")}),(e,a)=>{const P=C("router-link");return l(),w(T,{pageTitle:"Salary Slips"},{body:v(()=>{var g;return[n("div",E,[n("div",H,[m.value?(l(),c("div",K,[z,n("span",G,j(r(A)(m.value.year_to_date,m.value.currency)),1)])):N("",!0),u(r(L),{label:"Payroll Period",class:"w-full",placeholder:"Select Payroll Period",modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>D(t)?t.value=o:t=o),options:r(k).data},null,8,["modelValue","options"])]),n("div",I,[(g=r(s).data)!=null&&g.length?(l(),c("div",J,[(l(!0),c(F,null,R(r(s).data,o=>(l(),c("div",{class:"p-3.5 items-center justify-between border-b cursor-pointer",key:o.name},[u(P,{to:{name:"SalarySlipDetailView",params:{id:o.name}}},{default:v(({navigate:Y})=>[u(q,{doc:o,onClick:Y},null,8,["doc","onClick"])]),_:2},1032,["to"])]))),128))])):(l(),w(U,{key:1,message:"No salary slips found"}))])])]}),_:1})}}};export{te as default};
//# sourceMappingURL=Dashboard-B5Pnyu7W.js.map
