const express = require('express');
const app = express();
app.use(express.static('./public'));

app.get('/data', () => {
  
})




app.listen(7000, () => console.log('server started at port 7000'));


