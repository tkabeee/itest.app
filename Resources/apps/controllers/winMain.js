/**
 * @author tkabee
 */

function winMain(){

    var win = Titanium.UI.createWindow({  
        title:'Main',
        backgroundColor:'#fff'
    });

    // クリップボードテキストのリスト表示
    var data = [];
    var tableView = Ti.UI.createTableView({
        data: data
    });
    
    win.addEventListener('focus', function(){
        Ti.API.log('focus!');
        /*
         * TODO: ウィンドウ間のデータ受け渡しがうまくいかない
         * 
        if(win.currentRowData){
            Ti.API.log(win.currentRowData);
            data.push(win.currentRowData);
        }
        */
    });
    
    win.add(tableView);
        
    return win;
}

module.exports = winMain;