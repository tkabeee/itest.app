(function(){

    // this sets the background color of the master UIView (when there are no windows/tab groups on it)
    Titanium.UI.setBackgroundColor('#000');
    
    // create tab group
    var tabGroup = Titanium.UI.createTabGroup();
    
    // create base UI tab and root window
    var WinMain = require('winMain');
    var winMain = new WinMain();

    var tab1 = Titanium.UI.createTab({  
        icon:'KS_nav_views.png',
        title:'Tab 1',
        window:winMain
    });
    
    // create controls tab and root window
    var Win2 = require('win2');
    var win2 = new Win2();

    var tab2 = Titanium.UI.createTab({  
        icon:'KS_nav_ui.png',
        title:'Tab 2',
        window:win2
    });
        
    //  add tabs
    tabGroup.addTab(tab1);  
    tabGroup.addTab(tab2);    
    
    // open tab group
    tabGroup.open();
    
    //new winMain.open();

})();