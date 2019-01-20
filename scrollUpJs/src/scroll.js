window.onload = function() {
  var scrolled;
  var timer;

  document.getElementById('top').onclick = function(){
    scrolled = window.pageYOffset;// Перехватываем положение Y
    //window.scrollTo(0,0);// Выполнение прокрутки до заданных координат
    scrollToTop();
  }
  function scrollToTop() {
    if (scrolled > 0){
      window.scrollTo(0,scrolled);
      scrolled = scrolled - 100;// 100 - сколько px будет прокручено
      timer = setTimeout(scrollToTop, 20);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }
}