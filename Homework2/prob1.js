const fs = require('fs');

const server = require('http').createServer();

server.on(
			'request', /*(req, res) =>
						{
							const src = fs.createReadStream('./Snake_River_5mb.jpg');
							src.pipe(res);
						}
						*/
						(req, res) =>
						{
							fs.readFile('Snake_River_5mb.jpg', (err, data) =>
																{
																	if(err) throw err;

																	res.end(data);
																}
										);
						}
	);

server.listen(8000);