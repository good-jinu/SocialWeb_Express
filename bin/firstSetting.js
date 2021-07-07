/**
 * Create mysqlUserObject.js file
 */

var fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var mysqlLogin = {
  host: '',
  user: '',
  password: '',
  database: 'SocialWeb'
};
var dbproperties = ['host', 'user', 'password'];

rl.setPrompt('database information...\nhost: ');
rl.prompt();
var inputIndex =0;

rl.on('line', (line)=>{
  mysqlLogin[dbproperties[inputIndex]]=line;
  console.log(mysqlLogin[dbproperties[inputIndex]]);
  inputIndex+=1;
  if (inputIndex>2) {
    rl.close();
  } else {
    rl.setPrompt(`${dbproperties[inputIndex]}: `);
    rl.prompt();
  }
});


/**
 * write sql user object file
 */
 rl.on('close', ()=> {
   fs.writeFile('mysqlUserObject.js',
     `const userInfo = {
   host: '${mysqlLogin.host}',
   user: '${mysqlLogin.user}',
   password: '${mysqlLogin.password}',
   database: '${mysqlLogin.database}'
 };

 module.exports = userInfo;
     `,
     'utf8', function(err) {
       if(err) throw err;
     });
   console.log('cool!');
 });
