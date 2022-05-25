import{F as u,k as C,e as T,o as v,p as $,q as M}from"./index.es.274992bc.js";import{r as g,b as a,F as w,j as o,s as i,a as U,Z as F}from"./index.24a0137a.js";import{C as z,T as I,a as B,W as P,b as f,K as S,c as Y}from"./GeneralCondition.2cdfd749.js";import"./Footer.3a617e21.js";import{u as L}from"./useScroll.519a357d.js";import"./_commonjsHelpers.2cf1d77b.js";const X=({text:e,numberOfYearUtilizations:t})=>a(f,{style:{display:"flex",justifyContent:"center"},children:[o(u,{icon:C,color:"#00df1e",style:{marginRight:"0.5rem",fontSize:"1.125rem"}}),`${t}  ${e}`]}),r=({title:e,price:t,numberOfYearUtilizations:n,numberOfMonthUtilizations:s,vehicleType:d,year:p,grace:x,items:c,bestSeller:l,marginRight:m,url:O})=>{const[R,E]=g.exports.useState(!1),k=()=>{E(!0)},A=()=>{E(!1)};return a(w,{children:[a(z,{bestSeller:l,style:{marginRight:m},children:[a(I,{children:[e,l&&o("div",{className:"ribbonPrice",children:o("div",{className:"ribbonInner",children:"Mais vendido"})})]}),a(B,{children:[t," por m\xEAs"]}),a(P,{children:[a(f,{children:[n," Utiliza\xE7\xF5es por ano"]}),o(f,{style:{fontWeight:"900"},children:"Cobertura:"}),c.map(y=>o(X,{numberOfYearUtilizations:n,text:y},y||""))]}),o(S,{onClick:k,children:"Clique e saiba mais"})]}),o(Y,{show:R,onClose:A,title:e,numberOfYearUtilizations:n,numberOfMonthUtilizations:s,vehicleType:d,year:p,grace:x,price:t,items:c,url:O})]})},j=i.div`
  background-color: ${({theme:e})=>e.colors.secondary};
  padding-top: 8rem;
  margin-bottom: 10rem;
`,N=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`,q=i.h1`
  color: ${({theme:e})=>e.colors.primary};
  text-align: center;
`,H=i.span`
  display: block;
  border-bottom: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-top: 3px solid ${({theme:e})=>e.colors.primary};
  content: '';
`,W=i.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;

  .btnActive {
    button {
      background-color: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.secondary};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`,D=i.button`
  margin-right: 2rem;
  padding: 1rem 3.125rem;
  border: 3px solid ${({theme:e})=>e.colors.primary};
  border-radius: 100px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary};
  background-color: ${({theme:e})=>e.colors.secondary};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.secondary};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.large}) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 90vw;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: 1rem;
  }
`,K=i.div`
  .planActive {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`,b=i.div`
  display: none;
`,Z=()=>{const e=F();return a("div",{style:{textAlign:"center",width:"280px",display:"flex",alignItems:"center"},children:[o(u,{color:e.colors.primary,icon:T,style:{marginRight:"10px"},fontSize:"20px"}),o(H,{})]})},h=({text:e,icon:t,onClick:n})=>a(D,{onClick:n,children:[o(u,{icon:t,style:{marginRight:"5px",fontSize:"1.5rem"}}),e]}),G=0,J=1,Q=2,V=()=>{const[e,t]=g.exports.useState(1),n=[o(h,{onClick:()=>c(0),text:"MOTO / TRICICLO",icon:v}),o(h,{onClick:()=>c(1),text:"CARRO DE PASSEIO",icon:$}),o(h,{onClick:()=>c(2),text:"UTILIT\xC1RIOS",icon:M})],s=["Reboques (100km)","Panes secas","Cargas na bateria","Hospedagens"],d=["Reboques (100km)","Trocas de pneu","Chaveiros (abertura)","Cargas na bateria","Panes secas","Hospedagens"],p=["Reboques (200km)","Trocas de pneu","Chaveiros (abertura)","Cargas na bateria","Panes secas","Hospedagens"],x=U();L(x);const c=l=>{t(l)};return o(j,{id:"planos",children:a(N,{children:[o(q,{children:"Escolha seu plano"}),o(Z,{}),o(W,{children:n.map((l,m)=>o("div",{className:e===m?"btnActive":"",children:l},`id-${m}`))}),a(K,{children:[a(b,{className:e===G?"planActive":"",children:[o(r,{title:"REBOX MOTO",price:"R$19,90",numberOfYearUtilizations:"4",numberOfMonthUtilizations:"02",vehicleType:"moto",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",marginRight:"2rem",url:"https://rebox.com.br/checkout?p=3da14632-6725-4d7c-ac80-0d2e58c2e42f&e=mk",items:s}),o(r,{title:"REBOX MOTO SMART",price:"R$24,90",numberOfYearUtilizations:"6",numberOfMonthUtilizations:"02",vehicleType:"moto",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",url:"https://rebox.com.br/checkout?p=ce604c2b-c4c0-4ad2-90de-4c9770646837&e=MARKETING",items:s}),o(r,{title:"REBOX MOTO LIBERTY",price:"R$35,90",numberOfYearUtilizations:"12",numberOfMonthUtilizations:"01",vehicleType:"moto",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",url:"https://rebox.com.br/checkout?p=5374e65b-79a8-4543-86de-b9cb308f70da&e=mk",items:s})]}),a(b,{className:e===J?"planActive":"",children:[o(r,{title:"REBOX AUTO",price:"R$19,90",numberOfYearUtilizations:"4",numberOfMonthUtilizations:"02",vehicleType:"Carro de passeio",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",marginRight:"2rem",url:"https://rebox.com.br/checkout?p=767e6f03-e998-49db-a72b-105c9bbf1153&e=mk",items:d}),o(r,{title:"REBOX AUTO SMART",price:"R$24,90",numberOfYearUtilizations:"6",numberOfMonthUtilizations:"02",vehicleType:"Carro de passeio",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",items:d,url:"https://rebox.com.br/checkout?p=92e920ab-e668-4fd3-a95d-fd75e6705372&e=mk",bestSeller:!0}),o(r,{title:"REBOX AUTO+",price:"R$34,90",numberOfYearUtilizations:"6",numberOfMonthUtilizations:"02",vehicleType:"Carro de passeio",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",marginRight:"2rem",url:"https://rebox.com.br/checkout?p=7abdf916-9d73-4155-9a72-5e62bc46527e&e=mk",items:p}),o(r,{title:"REBOX LIBERTY",price:"R$35,90",numberOfYearUtilizations:"12",numberOfMonthUtilizations:"01",vehicleType:"Carro de passeio",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",items:d,url:"https://rebox.com.br/checkout?p=59f4dfd7-5a48-4105-86ff-cc7c1f54e8ea&e=mk"})]}),o(b,{className:e===Q?"planActive":"",children:o(r,{title:"REBOX UTILITY",price:"R$24,90",numberOfYearUtilizations:"4",numberOfMonthUtilizations:"02",vehicleType:"Carro de passeio",year:"At\xE9 30 anos de fabrica\xE7\xE3o",grace:"3 dias \xFAteis ap\xF3s confirma\xE7\xE3o do pagamento",url:"https://rebox.com.br/checkout?p=960c3fc7-99a7-4336-a476-e0d151d0d427&e=mk",items:s})})]})]})})};var ie=g.exports.memo(V);export{h as MyButton,ie as default};
