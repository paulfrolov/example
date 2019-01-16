var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(number);

document.getElementById('check').onclick = function(){
  var usernum = getElementById('mynum').value;
  usernum = parseInt(usernum);
  var out = document.getElementById('out');
  if (usernum == number){
    out.innerHTML = 'Ура, вы победили!';
  }
}




/*document.onmousemove = function (){
  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<img src="cat512.png" id="cat">');
  var cat = document.getElementsById('cat');
  cat.style.position = 'fixed';

  document.onmousemove = function(event){
    cat.style.left = event.clientX +20+'px';
    cat.style.top = event.clientY +20+'px';
  }

}*/



/*
var a = 15;
var b = 30;
if (a > b) {
  document.write(a + " больше " + b);
}
else if (a == b) {
  document.write(a + " равно " + b);
}
else {
    document.write(a + " не равно " + b);
}
*/


/*for (i=0; i<=10; i++) {
  if (i == 4) {
    continue;
  }
  else if (i == 7) {
    break;
  }
  document.write(i + "</br>");
}*/
/*function myFunc(name) {
  alert("Привет, " + name);
}
myFunc("Paul");*/

/*
var i = 11;
do {
  document.write(i + "</br>");
  i++;
}
while (i < 10);
*/



