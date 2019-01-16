var scores, roundScore, activePlayer, dice, gamePlaying;

init();

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  $('.dice').css('display', 'none');
  $('#current-0').text('0');
  $('#current-1').text('0');
  $('#score-0').text('0');
  $('#score-1').text('0');
  $('#name-0').text('Player 1');
  $('#name-1').text('Player 2');
  $('.player-0-panel').removeClass('winner');
  $('.player-1-panel').removeClass('winner');
  $('.player-0-panel').removeClass('active');
  $('.player-1-panel').removeClass('active');
  $('.player-0-panel').addClass('active');
}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  $('#current-0').text('0');
  $('#current-1').text('0');
  $('.player-0-panel').toggleClass('active');
  $('.player-1-panel').toggleClass('active');
  $('.dice').css('display', 'none');
}

$('.btn-roll').click(function () {
  //Вычислить случайное значение от 0 до 1
  if (gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;

    //Отобразить новую картинку с костями
    $('.dice').css('display', 'block');
    $('.dice').attr('src', 'img/dice-' + dice + '.png');

    //Обновить счет раунда, если выпавшая кость не равна 1
    if (dice !== 1) {
      roundScore += dice;
      $('#current-' + activePlayer).text(roundScore);
    } else {
      nextPlayer();
    }
  }

})

$('.btn-hold').click(function () {
  //добавляем очки раунда к сохраненному счету
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    //отобразить новый счет в контейнере с id score-0
    $('#score-' + activePlayer).text(scores[activePlayer]);

    //Проверяем, выиграл ли игрок	
    if (scores[activePlayer] >= 20) {
      $('#name-' + activePlayer).text('Winner!');
      $('.dice').css('display', 'none');
      $('.player-' + activePlayer + '-panel').addClass('winner');
      $('.player-' + activePlayer + '-panel').addClass('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }

})

$('.btn-new').click(init);