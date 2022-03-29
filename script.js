const hiddenText = document.getElementById('main');
console.log(hiddenText,typeof hiddenText);

function show(){
    hiddenText.innerText='HELLO ! NOW U SEE ME';
}


function changeDir(){
    const flexBox = document.getElementById('container');
    flexBox.style.flexDirection = "column";

}

function colorChange(){
    const pArr =document.getElementsByTagName('p');
    pArr[0].style.color = 'red';
    pArr[0].innerText = 'You did not believed me ';
}

function getOption() {
    var result=document.getElementById("text")
    var result2=result.value
    document.getElementById("output").innerText=result2
}
