const inputFont=document.querySelector('input#font-size-control');
const inputText=document.querySelector('span#text');
inputText.style.fontSize=inputFont.value+'px';
inputFont.addEventListener('input', event=>{
    inputText.style.fontSize=`${event.target.value}px`;
})