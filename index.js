const http   = require("http")

// const fs = require("fs")

// const readFile = (path)=>fs.readFileSync(path,"utf-8");

http.createServer((req,res)=>{
    res.write(
        `<header>
        <nav>
            <h1>My Website</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    </header>
        `
    )
    if(req.url === '/'){
        res.write(`
        <h1>Home Page</h1>
        `)
    }else if(req.url === '/about'){
        res.write(`
        <h1>About Page</h1>
        `)
    }else if(req.url === '/contact'){
        res.write(`
        <h1>Contact Page</h1>
        `)
    }else{
        res.write(`
        <h1>404 Page</h1>
        `)
    }
    res.end()
})
.listen(process.env.PORT || 3000,()=>{
    console.log('server is working');
})