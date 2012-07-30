/**
 * @author tkabee
 */

var service = Ti.App.currentService;

Ti.API.info(service.name);
var s = setInterval(function(){
  var number = (new Date).getSeconds();
  Ti.UI.iPhone.appBadge = number;
  Ti.API.info(number);
  
  if (number == 59) {
    clearInterval(s);
    service.stop();
  }
}, 1000);
