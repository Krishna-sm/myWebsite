const http   = require("http")

const fs = require("fs")

const readFile = (path)=>fs.readFileSync(path,"utf-8");

http.createServer((req,res)=>{
    res.write(readFile("Navbar.html"))
    if(req.url === '/'){
        res.write(readFile("index.html"))
    }else if(req.url === '/about'){
        res.write(readFile("About.html"))
    }else if(req.url === '/contact'){
        res.write(readFile("Contact.html"))
    }else{
        res.write(readFile("404.html"))
    }
    res.end()
})
.listen(process.env.PORT || 3000,()=>{
    console.log('server is working');
})