import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as n}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",l);document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.delay.value,i=t.target.elements.state.value,e=+o;if(!o||!i||isNaN(e)||e<=0){n.warning({title:"Caution",message:"You forgot important data or entered an invalid delay",color:"#ffa000",position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",timeout:3e3});return}s(e,i).then(r=>{n.success({title:"",titleColor:"#fff",message:`Fulfilled promise in ${r}ms`,messageColor:"#fff",color:"green",position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",timeout:3e3}),t.target.reset()}).catch(r=>{n.error({title:"",titleColor:"#fff",message:`Rejected promise in ${r}ms`,messageColor:"#fff",color:"#ef4040",position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",timeout:3e3}),t.target.reset()})});function s(t,o){return new Promise((i,e)=>{setTimeout(()=>{o==="fulfilled"?i(t):e(t)},t)})}function l(){n.show({title:"Hello",titleColor:"#fff",message:"Welcome!",messageColor:"#fff",position:"topCenter",color:"#09f",icon:"fas fa-bell",timeout:4e3})}
//# sourceMappingURL=2-snackbar.js.map