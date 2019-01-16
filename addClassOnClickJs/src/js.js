document.onclick = function(event){
  //console.log(event.target.tagName); //В консоль выводится информация по какому тегу был сделан клик
  event = event || window.event; //Кроссбраузерность
  if (event.target.tagName == 'IMG'){
    event.target.classList.add('bordered');
  }
}