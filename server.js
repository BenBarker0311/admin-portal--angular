const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/dist/frontend'));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'dist/frontend', 'index.html'))
});
// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`app is listening to ${port}`);
});