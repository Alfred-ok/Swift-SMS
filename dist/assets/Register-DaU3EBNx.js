import{r as a,L as w,j as e,k as y,M as c,Q as i,$ as b,T as v,U as f,X as N,Y as t,Z as d,p as u,_ as h,a0 as S,w as T}from"./react-vendors-zvsUqyxL.js";import{D as I,E as R}from"./vendor-BDCZ_RMd.js";const E=()=>{const[o,m]=a.useState(""),[n,p]=a.useState(""),[l,x]=a.useState(""),j=w(),C=async s=>{s.preventDefault();try{const r=await fetch("https://wazimobile-sms-backend.onrender.com/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:n,role:l})});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const g=await r.json();console.log(g)}catch(r){console.error("There was a problem with the fetch operation:",r)}j("/login")};return e.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:e.jsx(y,{children:e.jsx(c,{className:"justify-content-center",children:e.jsx(i,{md:8,children:e.jsx(b,{children:e.jsx(v,{className:"p-4",children:e.jsx(f,{children:e.jsxs(N,{onSubmit:C,children:[e.jsx("h1",{children:"Login"}),e.jsx("p",{className:"text-body-secondary",children:"Sign In to your account"}),e.jsxs(t,{className:"mb-3",children:[e.jsx(d,{children:e.jsx(u,{icon:I})}),e.jsx(h,{placeholder:"Username",autoComplete:"username",value:o,onChange:s=>m(s.target.value),required:!0})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(d,{children:e.jsx(u,{icon:R})}),e.jsx(h,{type:"password",placeholder:"Password",autoComplete:"current-password",value:n,onChange:s=>p(s.target.value),required:!0})]}),e.jsx(t,{className:"mb-4",children:e.jsxs(S,{"aria-label":"Small select example",value:l,onChange:s=>x(s.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Choose Your Role"}),e.jsx("option",{value:"USER",children:"User"}),e.jsx("option",{value:"ADMIN",children:"Admin"})]})}),e.jsx(c,{children:e.jsx(i,{xs:6,children:e.jsx(T,{color:"primary",className:"px-4",type:"submit",children:"Login"})})})]})})})})})})})})};export{E as default};
