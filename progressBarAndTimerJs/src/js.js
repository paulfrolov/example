function userProgress(time){
    var start = 0;
    var time = Math.round(time*1000/100);
    var progressElement = document.getElementById('userProgress'); //Элемент прогресс бара
    var intevalId = setInterval(function(){
      if (start > 100){
        clearInterval(intevalId);
        userProgressCallBack();
      }
      else{
        progressElement.value = start;
      }
      start++;
    }, time);
}

userProgress(2);

function userProgressCallBack(){
  document.querySelector('.hidden-block').style.display = 'block';
};