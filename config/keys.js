if(process.env.NODE_ENV === 'production'){
   //in production
   module.exports = require('./pro');

}else{
   //in development return dev.js
   module.exports = require('./dev');
}
