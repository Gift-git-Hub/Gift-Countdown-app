//alert('hii');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const btnEl = document.getElementById('button');
const outputElmin = document.querySelector(".outputmin");
const outputElsec = document.querySelector(".outputsec");
function eventl() {
    minEl.addEventListener("input", () => {
        outputElmin.innerText = minEl.value >= 10 ? minEl.value :"0"+minEl.value;
    })
    secEl.addEventListener("input", () => {

        outputElsec.innerText = secEl.value >= 10 ? secEl.value : "0"+secEl.value;
    });
}
eventl();

btnEl.addEventListener('click',()=>{
    countdown(outputElsec.innerText, outputElmin.innerText);
    minEl.value = '';
    secEl.value = '';
    // outputElmin.innerText = '00';
    // outputElsec.innerText = '00';
    
});

function countdown(sec,min){
    // ===================seconds================================
   let id;
id = setInterval(()=>{
    let secondvalue = outputElsec.innerText;
    if(sec <= 0) return;
    sec--;
    outputElsec.innerText --;
    if(sec === 0){
clearInterval(id);
}
console.log(sec);

},1000);
// ====================minutes========================
  let id2;
 id2 = setInterval(()=>{
    if(min <= 0) return;
     min--;
     outputElmin.innerText --;
     if(min === 0){
 clearInterval(id2);
 }
 console.log(min);

 },6000);

}


