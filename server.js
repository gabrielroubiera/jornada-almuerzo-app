const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(express.static(__dirname + '/dist/jornada-almuerzo-app'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/jornada-almuerzo-app/index.html'));
});
app.listen(app.get('port'), () => {
  console.log(app.get('port'))
});
