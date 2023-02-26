
const itemList=document.querySelectorAll('.item');
console.log(`Кількість категорій:${itemList.length}`);
itemList.forEach(item=>{
  const title=item.querySelector('h2').textContent;
  const elem=item.querySelectorAll('li').length;
  console.log(`Категорія:${title}
Кількість елементів:${elem}`);
})
