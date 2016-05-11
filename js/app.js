var initialCats = [
  {
    name: 'Snjeza',
    click: 0,
    nickNames: ['Rona', 'Kala', 'LaLa'],
    id: 1,
    img: 'img/1.jpg'
      },
  {
    name: 'Ivana',
    click: 0,
    nickNames: ['Iv', 'Vana'],
    id: 2,
    img: 'img/2.jpg'
      },
  {
    name: 'Jovana',
    click: 0,
    nickNames: ['Jo', 'Ana', 'Lana'],
    id: 3,
    img: 'img/3.jpg'
      },
  {
    name: 'Silva',
    click: 0,
    nickNames: ['Siki', 'Va', 'Iva'],
    id: 4,
    img: 'img/4.jpg'
      }, {
    name: 'Sofija',
    nickNames: ['Sova', 'Sofi'],
    click: 0,
    id: 5,
    img: 'img/5.jpg'
      }
    ];
//this is model actually, and view? There is no view :)

var Cat = function (data) {
  this.active = ko.observable();
  this.clickCount = ko.observable(data.click);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.img);
  this.imgAttribution = ko.observable('some guy');
  this.level = ko.observable('Newborn');
  this.levels = ko.observableArray(['Infant', 'Baby', 'Teen', 'Grown Cat', 'Middle Age Cat', 'Old Fart']);
  this.nickNames = ko.observableArray(data.nickNames);

  //level logic
  ko.computed(function () {
    switch (this.clickCount()) {
      case 12:
        return this.level(this.levels()[0]);
      case 30:
        return this.level(this.levels()[1]);
      case 50:
        return this.level(this.levels()[2]);
      case 90:
        return this.level(this.levels()[3]);
      case 150:
        return this.level(this.levels()[4]);
    }
  }, this);
};

var viewModel = function () {
  var self = this;
  this.active = ko.observable(0);
  this.catList = ko.observableArray();
  //takes cat obj info from 'db' and init the Cat obj and add it to ob array
  initialCats.forEach(function (catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.curentCat = ko.observable(this.catList()[0]);
  self.incrementCounter = function () {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function (maca, r) {
    console.log(maca, r);
    self.curentCat(maca);
  };
  self.doSomething = function (obj, el) {
    console.log(el.target.parentElement);
    this.nickNames.push(this.active());
    console.log(el, this.nickNames());
  };

};


ko.applyBindings(new viewModel());
