//外部ファイルをrequire

var SYSTEM = require('apps/config/SYSTEM');
var winMainTable = [];

(function(){

    // this sets the background color of the master UIView (when there are no windows/tab groups on it)
    Titanium.UI.setBackgroundColor('#000');
    
    // create tab group
    var tabGroup = Titanium.UI.createTabGroup();
    
    // create base UI tab and root window
    var WinMain = require(SYSTEM.controllerPath + '/winMain');
    var winMain = new WinMain();

    var tab1 = Titanium.UI.createTab({  
        icon:'KS_nav_views.png',
        title:'Tab 1',
        window:winMain
    });
    
    // create controls tab and root window
    var Win2 = require(SYSTEM.controllerPath + '/win2');
    var win2 = new Win2();

    var tab2 = Titanium.UI.createTab({  
        icon:'KS_nav_ui.png',
        title:'Tab 2',
        window:win2
    });
        
    //  add tabs
    tabGroup.addTab(tab1);  
    //tabGroup.addTab(tab2);    
    
    // open tab group
    tabGroup.open();
    
    //new winMain.open();

    // バックグラウンド処理の定義
    /*
    var bgService = Ti.App.iOS.registerBackgroundService({
      url: SYSTEM.modelPath + '/badge.js',
      name: 'badge'
    });
    */

    var bgService = Ti.App.iOS.registerBackgroundService({
      url: SYSTEM.modelPath + '/bgClip.js',
      name: 'bgClip'
    });

})();