window.onload = function(){
  for (var i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';

  }
  var hod = 0;

  document.getElementById('game').onclick = function(event){
    console.log(event);
    if(event.target.className == 'block'){
      if(hod%2==0){
        event.target.innerHTML = 'X';
      }
      else{
        event.target.innerHTML = '0';
      }
      hod++;
      checkWinner();
    }
  }
  function checkWinner(){
    var allblock = document.getElementsByClassName('block');
    //console.log(allblock);
    //Победа Х по горизонтали 
    if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X')
    alert('Победили крестики');

    else if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X')
    alert('Победили крестики');

    else if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X')
    alert('Победили крестики');

    //Победа Х по вертикали
    else if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X')
    alert('Победили крестики');

    else if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X')
    alert('Победили крестики');

    else if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X')
    alert('Победили крестики');

    //Победа Х по диагонали
    else if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X')
    alert('Победили крестики');
    
    else if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X')
    alert('Победили крестики');
  


    //Победа 0 по горизонтали 
    if (allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0')
      alert('Победили нолики');

    else if (allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0')
      alert('Победили нолики');

    else if (allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0')
      alert('Победили нолики');

    //Победа 0 по вертикали
    else if (allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0')
      alert('Победили нолики');

    else if (allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0')
      alert('Победили нолики');

    else if (allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0')
      alert('Победили нолики');

    //Победа 0 по диагонали
    else if (allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0')
      alert('Победили нолики');

    else if (allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0')
      alert('Победили нолики');
  }
}
