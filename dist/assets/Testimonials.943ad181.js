import{j as t,s as i,r,a as f,b as c}from"./index.24a0137a.js";import{S as u,D as y}from"./GeneralCondition.2cdfd749.js";import"./index.es.274992bc.js";import{c as m}from"./Footer.3a617e21.js";import{u as v}from"./useScroll.519a357d.js";import"./_commonjsHelpers.2cf1d77b.js";var g=m(t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"}),"PauseCircleFilled"),x=m(t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}),"PlayCircleFilled");const b=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 100vw;
    padding: 0 0.5rem;
  }
`,S=i.h1`
  color: ${({theme:e})=>e.colors.primary};
  text-align: center;
  margin-bottom: 5rem;
`,V=i.div`
  height: 80vh;
  position: relative;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.large}) {
    height: 70vh;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    height: 60vh;
  }
`,w=i.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,$=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.secondary};
  cursor: pointer;
`,z=i.h2`
  color: ${({theme:e})=>e.colors.primary};
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2rem;
  }
`,d=i.p`
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-size: 2rem;
  color: ${({theme:e})=>e.colors.primary};
  text-align: center;
  padding: 0 2rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;var C="/assets/videoMenor.068fdf94.mp4";const j=()=>{const e=f(),[s,p]=r.exports.useState(!1),o=r.exports.useRef();v(e);const a=()=>{var n,l;p(h=>!h),s?(n=o.current)==null||n.pause():(l=o.current)==null||l.play()};return c(b,{id:"depoimentos",children:[t(S,{children:"Vai esperar que isso aconte\xE7a contigo?"}),c(V,{children:[t("video",{src:C,controls:!0,playsInline:!0,ref:o}),t(w,{children:t($,{onClick:a,onKeyPress:a,tabIndex:0,children:s?t(g,{color:"inherit",style:{color:"#fff",fontSize:30}}):t(x,{color:"inherit",style:{color:"#fff",fontSize:30}})})})]}),t(z,{children:"Veja o que nossos clientes falam"}),t(u,{}),t(d,{style:{marginTop:"5rem"},children:"Sabe quanto esses clientes rebox pagaram pelo guincho?"}),t(d,{style:{fontStyle:"normal",fontWeight:"600"},children:"Apenas R$19,90"}),t(y,{isBottom:!0})]})};var M=r.exports.memo(j);export{M as default};
