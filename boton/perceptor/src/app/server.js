const fs = require('fs');
const https = require('https');

const hostname = 'perceptor.codesa.com.co';
const port = 443;

const httpsOptions = {
  cert: fs.readFileSync('./ssl/cert.crt'),
  ca: fs.readFileSync('./ssl/ca.crt'),
  key: fs.readFileSync('./ssl/cert.key')
};


const httpsSever =  https.createServer(httpsOptions, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Desde https</h1>');
});


httpsSever.listen(port, hostname);