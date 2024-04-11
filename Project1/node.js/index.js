const http = require('http');
const fs = require('fs')
const port=9000;
// const server = http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
// // res.write("hello");
// const URL= req.url;
// if(URL ==='/index'){
//     // res.write('Welcome to the home page of this application')
//     // res.end();
//     fs.readFile('./project/index.html','utf-8',function(err,data){
//         if(err){
//             res.writeHead(404).write("file not found")
//         }
//         else{
//             res.write(data);
//         }
//         res.end()
//     })
// }
// else if(URL==='/about'){
//     res.write("You are currently at about page of this application")
//     res.end()
// }else{
//     res.write("please enter the correct url");
//     res.end();
// }
    

// })

const server= http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    const URL= req.url;
    if(URL ==='/index'){
        // res.write('Welcome to the home page of this application')
        // res.end();
        fs.readFile('../project/index.html','utf-8',function(err,data){
            if(err){
                res.writeHead(404).write("file not found")
            }
            else{
                res.write(data);
            }
            res.end()
        })
    }else if(URL==='/about'){
        fs.readFile('../project/about.html','utf-8',function(err,data){
            if(err){
                res.writeHead(404).write("file not found")
            }
            else{
                res.write(data);
            }
            res.end()
        })
    }else{
        fs.readFile('../project/contact-me.html','utf-8',function(err,data){
            if(err){
                res.writeHead(404).write("file not found")
            }
            else{
                res.write(data);
            }
            res.end()
            
        })
        
    }

})
server.listen(port,function(ERR){
    if(!ERR){
        console.log( `Your server is listining at port ${port}`)
    }
    else{
        console.log(JSON.stringify(ERR))
    }
})