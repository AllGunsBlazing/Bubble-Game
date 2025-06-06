let count = 3;

const getNewHit = () => {
    let rn = Math.floor(Math.random()*10);
    document.querySelector('#NewHit').innerHTML= rn;
}

function updateTimer() {
    if (count > 0) {
        count--;
        document.querySelector('#TimerInterval').textContent = count;
    } else {
        clearInterval(timerID); // to stop timer
    }
}

const timerID = setInterval(updateTimer, 1000);

const makeBubble = () => {
let rbub = ""

for (let i = 0; i <=199; i++ ) {
      let rn = Math.floor(Math.random()*10);
        rbub += `<div class="bubble">${rn}</div>`;
        // += because you are saving the previous bubble and also repeatedly adding more
}

document.querySelector('#p-btm').innerHTML= rbub;
//.innerHTML text + HTML
}

makeBubble(); 
 
getNewHit();

 //.textContent just plain text -> .textContent = count; means →
 //“Replace whatever text is inside #TimerInterval with the value of count  
