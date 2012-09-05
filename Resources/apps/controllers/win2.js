/**
 * @author tkabee
 */

function win2(){
    var win = Titanium.UI.createWindow({  
        title:'Tab 2',
        backgroundColor:'#fff'
    });

    var view = Ti.UI.createView();
    var label = Titanium.UI.createLabel({
        color:'#999',
        text:'Test Clipboard',
        font:{fontSize:20,fontFamily:'Helvetica Neue'},
        textAlign:'center',
        width:'auto',
        top: 100
    });
    
    var button = Ti.UI.createButton({
        title: 'Logging Clipboard',
        height: 32,
        width: 180,
        top: 140
    });
    
    view.add(label);
    view.add(button);
    win.add(view);

    Ti.API.log('Test Clipboard');
    
    //buttonクリック時のイベント
    button.addEventListener('click', function(){    
        if(winMainTable.bgs.clips){
          Ti.API.log('Array: ' + winMainTable.bgs.clips.toString());
          for(var i in winMainTable.bgs.clips){
            updateTableRowData(winMainTable.bgs.clips[i]);
          }
          Ti.API.log('update!');
        }
    });
    
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
    
    return win;
}

module.exports = win2;
