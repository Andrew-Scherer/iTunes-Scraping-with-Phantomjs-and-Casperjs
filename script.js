var casper = require('casper').create()

var x = require('casper').selectXPath;

casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');

casper.start('https://linkmaker.itunes.apple.com/us/');

casper.then(function () {
    this.sendKeys('#search_term', 'Stubborn love');
    console.log('entering data');
});

casper.thenClick(x('//*[@id="searchForm"]/a/span'), function () {
    console.log('searching itunes');
    });
    
casper.wait(5000, function(){
    casper.capture('ourImage.png');    
});
    
casper.run();
