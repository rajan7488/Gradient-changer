let btn1=document.getElementById("myButton");
let btn2=document.getElementById("myButton2");
let copyDiv=document.querySelector(".copyCode");
let rgb1="#051937";
let rgb2="#008793";

const hexaValues=()=>{
    let myHexValues="0123456789abcdef";
    let colors="#";
    for(let i=0;i<6;i++){
        colors=colors+myHexValues[Math.floor(Math.random()*16)];
    }
    return colors;
}


const handleButton1=()=>{
     rgb1=hexaValues();
    console.log(rgb1);

    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerText=rgb1;
}

const handleButton2=()=>{
     rgb2=hexaValues();
    console.log(rgb2);
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn2.innerText=rgb2;
}

copyDiv.addEventListener("click",()=>{
    copyDiv.innerText=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    navigator.clipboard.writeText(copyDiv.innerText);
    copyDiv.innerText="Copied";
    setTimeout(function(){
        copyDiv.innerHTML=`linear-gradient(to right, ${rgb1}, ${rgb2})`;
    },2000);
    // copyDiv.innerText="Copied";
})
btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);