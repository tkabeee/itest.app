/**
 * @author tkabee
 */

var testDB = function(){
  this.dbName = 'testdb';
 
  this.open = function(){
    this.db = Ti.Database.open(this.dbName);
  };
  
  this.close = function(){
    this.db.close();
  };
  
  this.insert = function(params){
    this.open();
    var res = this.db.execute(
      'INSERT INTO user (user_no, user_name, updated_at) VALUES (?,?,?)',
      params.user_no,
      params.user_name,
      params.updated_at
    );
    Ti.API.debug('Insert DB');
    this.close();
    return true;
  };
  
  this.open();
  this.db.execute('CREATE TABLE IF NOT EXISTS user (user_no INTEGER, user_name TEXT, updated_at TEXT)');
  this.close();
}
