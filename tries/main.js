var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");



btn1.addEventListener('click', (e) => {
    e.preventDefault();

    count++;


    document.querySelector('#btn1').style.background = '#ccc';
    alert("CLICKED!");

    if(count === 0){
        document.querySelector('#btn1').style.background = '#ccc';
    }
    else if(count === 1){
        document.querySelector('#btn1').style.background = '#0';
    }
    else if(count === 2){
        document.querySelector('#btn1').style.background = '#a2c914';
    }
    else{
        count = 0;
    }

    
})