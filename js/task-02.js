const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const item =document.querySelector('#ingredients');

const list=ingredients.map(value=>{
  const listItem=document.createElement('li');
  listItem.className='item';
  listItem.textContent=value;
  return listItem;
});
item.append(...list);

