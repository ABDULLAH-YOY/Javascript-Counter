const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
let main = document.getElementById('main');
let count =0;
    increase.onclick= function(){
    count ++;
    main.textContent=count;
    }
    decrease.onclick= function(){
    count --;
    main.textContent=count;
    }
    reset.onclick= function(){
    count = 0;
    main.textContent=count;
    }