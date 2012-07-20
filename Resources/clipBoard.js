/**
 * @author tkabee
 */

exports = {
    clearText: function(){
        // クリップボードテキストの初期化
        Ti.UI.Clipboard.clearText();
    },
    hasText: function(){
        return Ti.UI.Clipboard.hasText();
    },
    getText: function(){
        return Ti.UI.Clipboard.getText();
    }    
}