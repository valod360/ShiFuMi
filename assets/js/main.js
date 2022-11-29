$(document).ready(function () {
  let cloneCount = 1;

$(document).ready(function() {
  $('#rock').click(function(){
    random = 1; //Math.floor(1 + Math.random() * 3);
    let clone = $('#drawCard').clone().prependTo('#containWinLose')
    if(random == 1){
      console.log('egaliter');
      
    // on click make clone of card
    let cloneDraw = $('#drawCard').clone().prependTo('#containWinLose');
    let cloneWin = $('#winCard').clone().prependTo('#containWinLose');
    let cloneLoose = $('#looseCard').clone().prependTo('#containWinLose');
    random = Math.floor(1 + Math.random() * 3);
    cloneDraw.removeAttr('id'); // remove the id of each card and a class for all of them
    cloneDraw.addClass('drawCard');
    cloneWin.removeAttr('id');
    cloneWin.addClass('winCard');
    cloneLoose.removeAttr('id');
    cloneLoose.addClass('looseCard');
    console.log(cloneCount);
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
      cloneCount += 1;
    } else {
      $(cloneLoose).fadeIn('slow');
      cloneCount += 1;
    }

  });
  $('#paper').click(function () {
    let cloneDraw = $('#drawCard').clone().prependTo('#containWinLose');
    let cloneWin = $('#winCard').clone().prependTo('#containWinLose');
    let cloneLoose = $('#looseCard').clone().prependTo('#containWinLose');
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
      cloneCount += 1;
    } else {
      cloneLoose.fadeIn('slow');
      cloneCount += 1;
    }
  });

  $('#scissor').click(function () {
    let cloneDraw = $('#drawCard').clone().prependTo('#containWinLose');
    let cloneWin = $('#winCard').clone().prependTo('#containWinLose');
    let cloneLoose = $('#looseCard').clone().prependTo('#containWinLose');
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
      cloneCount += 1;
    } else {
      cloneLoose.fadeIn('slow');
      cloneCount += 1;
    }
  });

});