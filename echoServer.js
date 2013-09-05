var http = require('http');
var qs = require('querystring');

var msgs = [];

http.createServer(function (req, res) {

    console.log('Request: ' + req.method + ' ' + req.url);

    var data = {
        status: 'ok'
    };

    var sendJSON = function() {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    }

    if (req.url !== '/api/echo') {
        data.status = 'error';
        data.msg = 'invalid request';
        sendJSON();
    } else {
        if (req.method === 'POST') {
            var body = '';
            req.on('data', function(data) {
                body += data;
            });
            req.on('end',function(){
                var params = qs.parse(body);
                if (params.msg) {
                    msgs.push(params.msg);
                    data.msg = params.msg;
                }

                sendJSON();
            });
        }

        if (req.method === 'GET') {
            data.msgs = msgs;
            sendJSON();
        }
    }

}).listen(3333);