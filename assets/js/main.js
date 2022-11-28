let random = Math.floor(1 + Math.random() * 3);

$(document).ready(function() {
  $('#rock').click(function(){
    random = 1; //Math.floor(1 + Math.random() * 3);
    let clone = $('#drawCard').clone().prependTo('#containWinLose')
    if(random == 1){
      console.log('egaliter');
      
      $(clone).fadeIn('slow');
    }else if (random == 3){
      console.log('gagner');
      $('#winCard').fadeIn('slow');
    }else{
      console.log('perdu');
      $('#looseCard').fadeIn('slow');
    }
    
  });
  $('#paper').click(function(){
    random = Math.floor(1 + Math.random() * 3);
    if(random == 2){
      console.log('egaliter');
    }else if (random == 1){
      console.log('gagner');
    }else{
      console.log('perdu');
    }
  });

  $('#scissor').click(function(){
    random = Math.floor(1 + Math.random() * 3);
    if(random == 3){
      console.log('egaliter');
    }else if (random == 2){
      console.log('gagner');
    }else{
      console.log('perdu');
    }
  });


});