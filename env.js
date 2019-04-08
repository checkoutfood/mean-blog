const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  
  process.env.databaseUri = 'mongodb+srv://checkoutfood:checkoutfood123@cluster0-5ffrd.mongodb.net/test?retryWrites=true'; // Databse URI and database name
  process.env.databaseName = 'production database: test'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/mean-angular-2'; // Databse URI and database name
  process.env.databaseName = 'development database: mean-angular-2'; // Database name
}
