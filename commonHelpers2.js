import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",a=>{const t={email:e.email.value,message:e.message.value};localStorage.setItem(s,JSON.stringify(t))});const l=localStorage.getItem(s);if(l){const a=JSON.parse(l);e.email.value=a.email,e.message.value=a.message}e.addEventListener("submit",a=>{if(a.preventDefault(),e.email.value===""||e.message.value===""){alert("Будь ласка, заповніть обидва поля форми.");return}const t={email:e.email.value,message:e.message.value};localStorage.removeItem(s),e.email.value="",e.message.value="",console.log(t)});
//# sourceMappingURL=commonHelpers2.js.map
