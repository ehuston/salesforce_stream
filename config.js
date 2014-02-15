exports.PORT = process.env.PORT || 3000; // use heroku's dynamic port or 3000 if localhost
exports.DEBUG = true; 
exports.ENVIRONMENT = 'sandbox'; 
//exports.CALLBACK_URL = 'http://localhost:3000';
exports.CALLBACK_URL = 'http://salesforce-streaming.herokuapp.com';
exports.PUSH_TOPIC1 = '/topic/Accounts';
exports.PUSH_TOPIC2 = '/topic/Contacts';

exports.CLIENT_ID = '';
exports.CLIENT_SECRET = '';
exports.USERNAME = '';
exports.PASSWORD = ''; 
