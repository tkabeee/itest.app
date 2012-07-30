/**
 * @author tkabee
 */

function winMain(){

    var win = Titanium.UI.createWindow({  
        title:'Main',
        backgroundColor:'#fff'
    });

    // クリップボードテキストのリスト表示するテーブルデータを初期化
    winMainTable.data = [];
    
    var tableView = Ti.UI.createTableView({
        data: winMainTable.data
    });
    
    win.addEventListener('focus', function(){
        Ti.API.log('focus!');
        tableView.data = winMainTable.data;
    });
    
    win.add(tableView);

    return win;
}

module.exports = winMain;