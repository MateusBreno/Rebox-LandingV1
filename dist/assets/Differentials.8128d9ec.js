import{s as r,r as l,a as x,b as a,j as o,Z as s}from"./index.24a0137a.js";import{f as p,a as m,b as f,c as y,d as h,F as c,e as g}from"./index.es.274992bc.js";import{u}from"./useScroll.519a357d.js";const b=r.div`
  padding: 0 8rem;
  margin-bottom: 6rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.extraLarge}) {
    padding: 0 0;
  }
`,w=r.div`
  background-color: ${({theme:e})=>e.colors.primary};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=r.h2`
  color: ${({theme:e})=>e.colors.secondary};
`,C=r.span`
  display: block;
  border-bottom: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-top: 3px solid ${({theme:e})=>e.colors.secondary};
  content: '';
`,k=r.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`,A=r.div`
  width: 208px;
  padding: 1.5rem 0.675rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);

  @media (max-width: 800px) {
    width: 100%;
  }
`,E=r.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14.8px;
  text-align: center;
`,D=()=>{const e=s();return a("div",{style:{textAlign:"center",width:"228px",display:"flex",alignItems:"center"},children:[o(c,{color:e.colors.secondary,icon:g,style:{marginRight:"10px"},fontSize:"20px"}),o(C,{})]})},i=({text:e,isColorSecondary:n,icon:d})=>{const t=s();return a(A,{style:{backgroundColor:n?t.colors.secondary:t.colors.primary},children:[o(c,{icon:d,style:{fontSize:"50px",marginBottom:"1rem",color:n?t.colors.primary:t.colors.secondary}}),o(E,{style:{color:n?t.colors.primary:t.colors.secondary},children:e})]})},S=()=>{const e=x();return u(e),a(b,{id:"diferenciais",children:[a(w,{children:[o(v,{children:"Diferenciais"}),o(D,{})]}),a(k,{children:[o(i,{isColorSecondary:!0,icon:p,text:a("div",{children:["Sem fidelidade ",o("br",{}),"(Contrate e cancele quando quiser)"]})}),o(i,{icon:m,text:"Atendimento em todo o Brasil"}),o(i,{isColorSecondary:!0,icon:f,text:"Maior n\xFAmero de utiliza\xE7\xF5es no ano"}),o(i,{icon:y,text:"Desconto de at\xE9 80% em farm\xE1cias de todo o pa\xEDs"}),o(i,{isColorSecondary:!0,icon:h,text:"Assinatura mensal no boleto ou cart\xE3o de cr\xE9dito"})]})]})};var F=l.exports.memo(S);export{F as default};
