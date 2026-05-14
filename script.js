//alert('hii');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const btnEl = document.getElementById('button');
const outputTimeleft = document.querySelector(".outputimeleft");
const startEl = document.getElementById('button');


let timeleft = 0;
//let sec = 230;
let interval;
function fomatTime(sec) {
    const mins = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
function display() {
    outputTimeleft.textContent = fomatTime(timeleft);
}

startEl.addEventListener('click', countdown);


function countdown() {
    clearInterval(interval);
    const min = parseInt(minEl.value);
    const sec = parseInt(secEl.value);
    timeleft = min * 60 + sec;
    if (timeleft <= 0) return;
    display();
    interval = setInterval(() => {
        timeleft--
        display();
        if (timeleft <= 0)
        {
            clearInterval(interval);
            outputTimeleft.textContent = "Times up ......"
        }
    }, 1000);

}





















// function eventl() {
//     minEl.addEventListener("input", () => {
//         outputElmin.innerText = minEl.value >= 10 ? minEl.value : "0" + minEl.value;
//     })
//     secEl.addEventListener("input", () => {

//         outputElsec.innerText = secEl.value >= 10 ? secEl.value : "0" + secEl.value;
//     });
// }
// eventl();

// btnEl.addEventListener('click', () => {
//     countdown(outputElsec.innerText, outputElmin.innerText);
//     minEl.value = '';
//     secEl.value = '';
//     // outputElmin.innerText = '00';
//     // outputElsec.innerText = '00';

// });

// function countdown(sec, min) {
//     // ===================seconds================================
//     let id;

//     id = setInterval(() => {
//         if (sec <= 0) return;
//         sec--;

//         secondvalue = secondvalue > 10 ? secondvalue : "0" + secondvalue;
//         outputElsec.innerText--;
//         if (sec === 0 && min > 0)
//         {
//             sec = 60

//         } else if (sec === 0 && min === 0)
//         {
//             clearInterval(id);
//         }
//         console.log(sec);

//     }, 1000);
//     id = setInterval(() => {
//         if (sec <= 0) return;
//         sec--;

//         outputElsec.innerText = outputElsec.innerText > 10 ? outputElsec.innerText.innerText : "0" + outputElsec.innerText;
//         outputElsec.innerText--;
//         if (sec == 0 && min > 0)
//         {
//             sec = 60;

//         } else if (sec === 0 && min === 0)
//         {
//             clearInterval(id);
//         }
//         console.log(sec);

//     }, 1000);
//     id = setInterval(() => {
//         if (sec <= 0) return;
//         sec--;

//         secondvalue = secondvalue > 10 ? secondvalue : "0" + secondvalue;
//         outputElsec.innerText--;
//         if (sec === 0 && min > 0)
//         {
//             sec = 60

//         } else if (sec === 0 && min === 0)
//         {
//             clearInterval(id);
//         }
//         console.log(sec);

//     }, 1000);
//     // ====================minutes========================
//     let id2;
//     id2 = setInterval(() => {
//         if (min <= 0) return;
//         min--;
//         outputElmin.innerText--;
//         if (min === 0)
//         {
//             clearInterval(id2);
//         }
//         console.log(min);

//     }, 6000);

// }


