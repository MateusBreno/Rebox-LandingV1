import{s as t,r as l,u as p,a as d,j as e,b as n}from"./index.24a0137a.js";import{u as m}from"./useScroll.519a357d.js";const g=t.div`
  margin-top: 5rem;
  padding-top: 10rem;
  background-color: ${({theme:o})=>o.colors.primary};

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    padding-top: 5rem;
  }
`,u=t.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,h=t.h1`
  color: ${({theme:o})=>o.colors.secondary};
  margin-bottom: 1rem;
  text-align: center;
`,s=t.p`
  color: ${({theme:o})=>o.colors.secondary};
  font-size: ${({theme:o})=>o.fontSizes.small};
  font-weight: 500;
  text-align: center;
`,b=t.div`
  height: 60%;
  display: flex;
  justify-content: space-around;
`,r=t.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme:o})=>o.breakpoints.tablet}) {
    flex-direction: column;
  }
`,c=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,a=t.img`
  width: 100%;
  height: auto;
  max-width: 260px;
`,x=t.button`
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 12px 24px;
  font-size: 1.125rem;
  font-weight: 500;
  background-color: ${({theme:o})=>o.colors.btnGreen};
  color: ${({theme:o})=>o.colors.secondary};
`,y=()=>{const o=p(),i=d();return m(i),e(g,{id:"quemSomos",children:n(u,{children:[n("div",{children:[e(h,{children:"O que fazemos?"}),e(s,{style:{marginBottom:"1rem"},children:"Na Rebox, voc\xEA paga poucos centavos por dia e tem tudo que seu carro precisa no momento da emerg\xEAncia."}),e(s,{style:{marginBottom:"1.5rem"},children:"CONTRATE AGORA e CANCELE quando quiser. Na Rebox n\xE3o tem FIDELIDADE."}),n(b,{children:[e(r,{children:n(c,{children:[n(r,{children:[e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3chaveiro.png",loading:"lazy"}),e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3reboque.png",loading:"lazy"})]}),n(r,{children:[e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3hospedagem.png",loading:"lazy"}),e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3troca-de-pneu.png",loading:"lazy"})]})]})}),e(r,{children:n(c,{children:[n(r,{children:[e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3pane-eletrica.png",loading:"lazy"}),e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3comb.png",loading:"lazy"})]}),n(r,{children:[e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/3Carga-de-Bateria.png",loading:"lazy"}),e(a,{src:"https://rebox.com.br/planos/wp-content/uploads/2022/03/4descontos.png",loading:"lazy"})]})]})})]})]}),e(x,{onClick:()=>o("/#planos"),children:"Saiba mais"})]})})};var v=l.exports.memo(y);export{v as default};
