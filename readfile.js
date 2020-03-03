var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    fs.readFile('file1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

//CREATING FILES

fs.appendFile('newfile1.txt', 'I created this file with Node.js!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('newfile2.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved file!');
});

fs.writeFile('newfile3.txt', 'Content!', function(err){
    if (err) throw err;
    console.log('Saved!!');
});

//UPDATE FILES
fs.appendFile('newfile1.txt', 'Added text', function(err){
    if(err) throw err;
    console.log('Updated');
});

fs.writeFile('newfile3.txt', 'I replaced previous file with write method', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

//DELETE FILES
fs.unlink('newfile2.txt', function(err){
    if (err) throw err;
    console.log('File 2 deleted');
});

//RENAME FILES
fs.rename('newfile1.txt', 'renamedfile.txt', function(err){
    if (err) throw err;
    console.log('Renamed file1');
});
