var viewModel = {
    this.catName = ko.observable("Shy Cat");
    this.imgSrc = ko.observable("https://www.our-happy-cat.com/images/xshy-hiding-cat.jpg.pagespeed.ic.aGWMLHO7sn.jpg");
    this.clickCount = ko.observable(0);
    this.clickCount = function(){
        this.clickCount(this.clickCount() + 1);    
    };

ko.applyBindings(new viewModel());
