import{i as r}from"./vendor-77e16229.js";import{i as c}from"./icon-error-fa759b8a.js";const u="/goit-js-hw-10/assets/bi_check2-circle-449d10c7.svg",m="/goit-js-hw-10/assets/bi_exclamation-triangle-abfc0c5e.svg",s=document.querySelector("form"),d=document.querySelector("fieldset"),f=document.querySelector("input[name='delay']"),i=document.querySelectorAll("input[name='state'][value='fulfilled']")[0],a=document.querySelectorAll("input[name='state'][value='rejected']")[0];document.querySelectorAll("input[name='state']");let e={delay:"",state:""};s.addEventListener("input",t=>{e.delay=f.value,t.target===i&&(e.state=i.value),t.target===a&&(e.state=a.value)});s.addEventListener("submit",t=>{t.preventDefault(),console.log(e),e.delay===""||e.state===""?(r.warning({title:"Caution",message:"You forgot important data",position:"topRight",backgroundColor:"#FFA000",theme:"dark",iconUrl:m,theme:"dark"}),s.focus()):(g(e.state,e.delay).then(o=>{r.success({title:"OK",message:`Fulfilled promise in ${o}ms`,position:"topRight",backgroundColor:"#59a10d",iconUrl:u,theme:"dark"})}).catch(()=>{r.error({title:"Error",message:`Promise rejected after ${e.delay}ms`,backgroundColor:"#EF4040",iconUrl:c,position:"topRight",theme:"dark"})}),s.reset(),d.classList.remove("focus"))});const g=(t,o)=>new Promise((l,n)=>{setTimeout(t==="fulfilled"?()=>{l(o)}:()=>{n(o)},o)});
//# sourceMappingURL=2-snackbar-b8d18f05.js.map