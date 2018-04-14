const app = "I don't do much.";

var pbj = {
  bread: 'Pumpernickle',
  ingredients: ['peanut butter', 'jelly'],
  cut: 'triangle'
};

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function(name) {
    console.log(`Here's your ${this.bread} sandwich`);
  };
}

var blt = new Sandwich(
  'white',
  ['bacon', 'lettuce', 'tomato', 'mayo'],
  'rectangle'
);
var reuben = new Sandwich(
  'rye',
  ['corned beef', 'sauerkraut', 'swiss', 'russian dressing'],
  'diagonal'
);

function init() {
  // console.log(blt);
  //
  // console.log(reuben);
  //
  // console.log(pbj);

  // console.log(blt.serve.call(pbj));

  // var bltt = blt.serve.bind(pbj);

  // console.log(bltt());

  pbj.serve = blt.serve.bind(pbj);

  // console.log(pbj.serve());

  var ser = blt.serve.bind(pbj);

  setTimeout(pbj.serve, 2000);
}

init();
