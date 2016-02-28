/**
 * Save your parking in the yellow lot so you're not lost and confused in the dark at 10PM!!!
 * By Kaitlin Coventry-Cox and Aedan Dispenza
 */

var UI = require('ui');
var key = 5;

var menu1 = new UI.Menu({
  backgroundColor: 'white',
  textColor: 'black',
  highlightBackgroundColor: 'black',
  highlightTextColor: 'white',
  sections: [{
    title: 'Main Menu',
    items: [{
      title: 'Set Parking'
    }, {
      title: 'Get Parking'
    }]  
  }]
});

var menu2 = new UI.Menu({
  backgroundColor: 'white',
  textColor: 'black',
  highlightBackgroundColor: 'black',
  highlightTextColor: 'white',
  sections: [{
    title: 'Section',
    items: [{
      title: 'A'
    }, {
      title: 'B'
    }, {
      title: 'C'
    }, {
      title: 'D'
    }, {
      title: 'E'
    }, {
      title: 'F'
    }]
  }]
});

var menu3 = new UI.Menu({
  backgroundColor: 'white',
  textColor: 'black',
  highlightBackgroundColor: 'black',
  highlightTextColor: 'white',
  sections: [{
    title: 'Row',
    items: [{
      title: '1'
    }, {
      title: '2'
    }, {
      title: '3'
    }, {
      title: '4'
    }]
  }]
});

menu1.show();

menu1.on('select', function(e){
  var selection = e.item.title;
  if (selection == 'Set Parking'){
    menu2.show();
  }
  else{
    var value = localStorage.getItem(key);
    var card2 = new UI.Card({
      title: value,
      subtitle: "Your Parking Location"
    });
    card2.show();
  }
});

var sec;
menu2.on('select', function(e){
  sec = e.item.title;
  menu3.show();     
});

menu3.on('select', function(e){
  var row = e.item.title;
  var card1 = new UI.Card({
    title: sec+row,
    subtitle: "Your Parking Location"
  });
  card1.show();
  
  var value = sec+row;
  localStorage.setItem(key, value);
});