const app = require('./app.js');

app.listen(app.get('port'), () => {
    console.log('Express server listening on port '+ app.get('port'));
});