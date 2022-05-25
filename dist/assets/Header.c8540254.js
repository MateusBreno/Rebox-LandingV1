import{U as r,s as t,r as s,u as m,b as e,j as n}from"./index.24a0137a.js";import{F as c,m as l}from"./index.es.274992bc.js";import{i as d,N as p,D as u}from"./GeneralCondition.2cdfd749.js";import"./Footer.3a617e21.js";import"./_commonjsHelpers.2cf1d77b.js";const a=r`
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`,o=r`
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;t.div`
  padding-bottom: 5rem;
`;const f=t.div`
  height: 110vh;
  position: relative;
  padding: 1.75rem 8rem;
  background: url(${d.stenio}), rgba(160, 154, 149, 1);
  background-position-y: 15vh;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  background-attachment: fixed;

  @media (max-width: ${({theme:i})=>i.breakpoints.extraLarge}) {
    padding: 1.75rem 3rem;
    background-position-y: 10vh;
  }

  @media (max-width: ${({theme:i})=>i.breakpoints.large}) {
    padding-top: 1rem;
    background-position-y: 0vh;
  }

  @media (max-width: ${({theme:i})=>i.breakpoints.tablet}) {
    padding-left: 20px;
    padding-right: 1.5rem;
    height: 80vh;
    background-attachment: scroll;
  }
`,b=t.div`
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,g=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({theme:i})=>i.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }
`,h=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  > * {
    transition: all 0.7s ease-in-out;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    cursor: pointer;
    &:hover {
      -webkit-animation-name: ${o};
      animation-name: ${o};
      -webkit-animation-duration: 0.7s;
      animation-duration: 0.7s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-direction: alternate;
      animation-direction: alternate;
    }
  }
`,k=t.h1`
  font-family: 'Poppins', sans-serif;
  color: ${({theme:i})=>i.colors.secondary};
  margin-bottom: 1rem;
`,x=t.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: ${({theme:i})=>i.fontSizes.mediumSmall};
  color: ${({theme:i})=>i.colors.secondary};
  margin-bottom: 1.5rem;
`,w=t.button`
  font-weight: 700;
  font-size: ${({theme:i})=>i.fontSizes.small};
  color: ${({theme:i})=>i.colors.secondary};
  background-color: ${({theme:i})=>i.colors.btnBlue};
  padding: 1rem 2.5rem;
  transition: all 0.3s ease-in-out;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);

  &:hover {
    color: ${({theme:i})=>i.colors.primary};
    background-color: ${({theme:i})=>i.colors.secondary};
    -webkit-animation-name: ${a};
    animation-name: ${a};
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
`,v=()=>{const i=m();return e(f,{children:[n(p,{}),e(b,{children:[n("div",{}),e("div",{style:{marginBottom:"4rem"},children:[e(g,{children:[n(k,{children:"Fa\xE7a como St\xEAnio Garcia"}),n(x,{children:"Contrate um plano da Rebox e fique tranquilo!"}),n(w,{onClick:()=>i("/#planos"),children:"Conhe\xE7a agora"})]}),n(h,{children:n(c,{onClick:()=>i("/#quemSomos"),icon:l,color:"white",fontSize:"32px"})})]})]}),n(u,{})]})};var j=s.exports.memo(v);export{j as default};
