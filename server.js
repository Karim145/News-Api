var http = require('http');
var fs = require('fs');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('287038a01c2144d2a47d6cb1d5aa346d');

function onRequest(request, response){

    response.writeHead(200, {'content-Type':'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write("File Not Found");
        }else {
            response.write(data);
            newsapi.v2.topHeadlines({
                sources: 'Aftonbladet',
                q: 'Fotball',
                category: 'Sport',
                language: 'sv',
                country: 'se'
            }).then(response => ({
                response.write(response);

        response.end();

        });
      http.createServer(onRequest).listen(3000);
