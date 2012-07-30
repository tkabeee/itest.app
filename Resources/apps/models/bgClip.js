/**
 * @author tkabee
 */

/*
 * TODO: setIntervalでテキストコピーイベントを取得してクリップボードから配列を代入する
 */

var SYSTEM = require('apps/config/SYSTEM');
var service = Ti.App.currentService;
var clipboard = require(SYSTEM.modelPath + '/clipBoard');
var clips = [];

// TODO: winMainTableがglobal化できないのでうまく代入できない
winMainTable.data = [];

Ti.API.info(service.name);

var s = setInterval(function(){
  var number = (new Date).getSeconds();
  Ti.UI.iPhone.appBadge = number;
  Ti.API.info(number);
  
  if (number == 60) {
    clearInterval(s);
    service.stop();
  }

  if(clipboard.hasText()){
    Ti.API.log('Clipboard.hasText(), should be true: ' + clipboard.hasText());
    Ti.API.log('Clipboard.getText(): ' + clipboard.getText());
    var clip = clipboard.getText();
    if(clip){
        clips.push(clip);
        clipboard.clearText();
        updateTableRowData(clip);

    }
    Ti.API.log('Array Clip: ' + clips);
  }

}, 1000);

var updateTableRowData = function(clip){
    var row = Ti.UI.createTableViewRow({
        height: 150,
        layout: 'vertical'
    });
    var textLabel = Ti.UI.createLabel({
        width: 257,
        height: 100,
        top: 1,
        left: 58,
        fontSize: 8
    });
    textLabel.text = clip;
    row.add(textLabel);
    winMainTable.data.unshift(row);

    Ti.API.log('row: ' + row);
}