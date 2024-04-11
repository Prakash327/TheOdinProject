const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 9000;
//function to read file
const serveFile = (filePath, res) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("File not found");
        } else {
            const contentType = path.extname(filePath) === '.html' ? 'text/html' : 'text/plain';
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            res.end();
        }
    });
};
//function to serve any url error
const redirectToContact = (res) => {
    const contactPath = path.join(__dirname, '../project/contact-me.html');
    serveFile(contactPath, res);
};

const server = http.createServer((req, res) => {
    const url = req.url;
    let filePath = '';

    switch (url) {
        case '/index':
            filePath = path.join(__dirname, '../project/index.html');
            break;
        case '/about':
            filePath = path.join(__dirname, '../project/about.html');
            break;
        // case '/contact-me':
        //     filePath = path.join(__dirname, '../project/contact-me.html');
        //     break;
        default:
            // res.writeHead(404);
            // // res.end("Please enter the correct URL");
            // filePath = path.join(__dirname, '../project/contact-me.html');
            redirectToContact(res);
            return;
    }

    serveFile(filePath, res);
});
//listens to the comming requests at port 9000
server.listen(port, (err) => {
    if (!err) {
        console.log(`Your server is listening at port ${port}`);
    } else {
        console.error(err);
    }
});
