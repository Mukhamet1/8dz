
let count = document.getElementById('count')
let time = document.getElementById('time')
let btn = document.getElementById('btn')
let countPerSecond = document.getElementById('count-per-second')
let restart = document.getElementById('restart')
let bestCount = document.getElementById('best-count')



let i = 0;

let timeValue = 10;

let interval;
let timeout;
let bestcount = 0

time.onchange = (e)=>{
    timeValue = e.target.value
}


btn.onclick=()=>{
    if (i == 0){
        time.disabled = true
        timeout = setTimeout(()=>{
            clearInterval(interval)
            btn.disabled = true
            countPerSecond.textContent = i /timeValue;
            if(i > bestcount){
                bestcount = i;
                bestCount.textContent = bestcount
            }
           
        }, timeValue * 1000)
        i++;
        count.textContent = i;
        interval = setInterval(()=>{
            time.value--;
            time.textContent = timeValue
        }, 1000)
    } else {
        i++
        count.textContent = i;
    }
}
restart.onclick = ()=>{
    clearInterval(interval)
    clearTimeout(timeout)
    i = 0
    timeValue = 10
    btn.disabled = false
    count.textContent = 0
    time.value = 10
    countPerSecond.textContent = 0
    time.disabled = false
}



