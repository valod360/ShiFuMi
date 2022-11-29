//to do: 
//make the wins and the loses
//make the number of games
//make the percentage of wins and loses

$(document).ready(function () {
  let cloneCount = 1;
  let winCount = 0;
  let loseCount = 0;
  let gamePlay = 0;
  let victoryPercentage = 0;
  

  //each click function have the same purpose than the others
  $('#rock').click(function () {
    //on each click it show number of games
    $('#gamePlayed').text(++gamePlay)
    //on each click show percentage of wins

    victoryPercentage = (winCount / gamePlay) * 100;
    $('#percentageWin').text(victoryPercentage.toFixed(1) + '%');

    // on click make clone of card
    let cloneDraw = $('#drawCard').clone().prependTo('#containWinLose');
    let cloneWin = $('#winCard').clone().prependTo('#containWinLose');
    let cloneLoose = $('#looseCard').clone().prependTo('#containWinLose');
    random = Math.floor(1 + Math.random() * 3); // le chiffre random qui donnera un gagnant
    cloneDraw.removeAttr('id'); // remove the id of each card and a class for all of them
    cloneDraw.addClass('drawCard');
    cloneWin.removeAttr('id');
    cloneWin.addClass('winCard');
    cloneLoose.removeAttr('id');
    cloneLoose.addClass('looseCard');
    if (cloneCount >= 4) {
      $('#containWinLose').find('.drawCard, .winCard, .looseCard').fadeOut(); // if clone count is upper than 4 make disapear the card
      cloneCount = 1;
    }
    // this condition make apear the cards
    if (random == 1) {
      $(cloneDraw).fadeIn('slow');
      cloneCount += 1;
    } else if (random == 3) {
      $(cloneWin).fadeIn('slow');
      $('#win').text(++winCount);
      cloneCount += 1;
    } else {
      $(cloneLoose).fadeIn('slow');
      $('#lose').text(++loseCount);
      cloneCount += 1;
    }

  });
  $('#paper').click(function () {
    $('#gamePlayed').text(++gamePlay)
    let cloneDraw = $('#drawCard').clone().prependTo('#containWinLose');
    let cloneWin = $('#winCard').clone().prependTo('#containWinLose');
    let cloneLoose = $('#looseCard').clone().prependTo('#containWinLose');
    victoryPercentage = (winCount / gamePlay) * 100;
    $('#percentageWin').text(victoryPercentage.toFixed(1) + '%');
    random = Math.floor(1 + Math.random() * 3);
    cloneDraw.removeAttr('id');
    cloneDraw.addClass('drawCard');
    cloneWin.removeAttr('id');
    cloneWin.addClass('winCard');
    cloneLoose.removeAttr('id');
    cloneLoose.addClass('looseCard');
    random = Math.floor(1 + Math.random() * 3);

    if (cloneCount >= 4) {
      $('#containWinLose').find('.drawCard, .winCard, .looseCard').fadeOut();
      cloneCount = 1;
    }
    if (random == 2) {
      cloneDraw.fadeIn('slow');
      cloneCount += 1;
    } else if (random == 1) {
      cloneWin.fadeIn('slow');
      $('#win').text(++winCount);
      cloneCount += 1;
    } else {
      cloneLoose.fadeIn('slow');
      $('#lose').text(++loseCount);
      cloneCount += 1;
    }
  });

  $('#scissor').click(function () {
    $('#gamePlayed').text(++gamePlay)
    let cloneDraw = $('#drawCard').clone().prependTo('#containWinLose');
    let cloneWin = $('#winCard').clone().prependTo('#containWinLose');
    let cloneLoose = $('#looseCard').clone().prependTo('#containWinLose');
    victoryPercentage = (winCount / gamePlay) * 100;
    $('#percentageWin').text(victoryPercentage.toFixed(1) + '%');
    random = Math.floor(1 + Math.random() * 3);
    cloneDraw.removeAttr('id');
    cloneDraw.addClass('drawCard');
    cloneWin.removeAttr('id');
    cloneWin.addClass('winCard');
    cloneLoose.removeAttr('id');
    cloneLoose.addClass('looseCard');
    random = Math.floor(1 + Math.random() * 3);

    if (cloneCount >= 4) {
      $('#containWinLose').find('.drawCard, .winCard, .looseCard').fadeOut();
      cloneCount = 1;
    }
    if (random == 3) {
      cloneDraw.fadeIn('slow');
      cloneCount += 1;
    } else if (random == 2) {
      cloneWin.fadeIn('slow');
      $('#win').text(++winCount);
      cloneCount += 1;
    } else {
      cloneLoose.fadeIn('slow');
      $('#lose').text(++loseCount);
      cloneCount += 1;
    }
  });

});