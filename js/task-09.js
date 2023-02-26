function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor=document.querySelector('.change-color');
const body=document.querySelector('body');
const spann=document.querySelector('.color');
changeColor.addEventListener('click',event=>{
  let color=getRandomHexColor();
  body.style.backgroundColor=color;
  spann.textContent=color;
})