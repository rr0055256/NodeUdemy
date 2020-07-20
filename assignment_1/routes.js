const routes = require('./routes');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (req.url === '/') {
        res.setHeader(`Content-Type`, `text/html`)
        res.write(`<html>`)
        res.write(`<head><title>Enter username</title></head>`)
        res.write(`<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>`)
        res.write(`<html>`)
        return res.end()
    }

    if(req.url === '/users'){
        res.setHeader(`Content-Type`, `text/html`)
        res.write(`<html>`)
        res.write(`<head><title>Title</title></head>`)
        res.write(`<body><ul><li>User 1</li></ul></body>`)
        res.write(`<body><ul><li>User 2</li></ul></body>`)
        res.write(`<html>`)
        return res.end();
    }

    if (url === '/create-user' && method === `POST`) {
        const body = []
        const users = []

        req.on("data", (chunk) => {
            console.log(chunk)
            body.push(chunk);
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            users.push(parsedBody.split("=")[1])
            console.log(users);
            
        })

    }
}

exports.handler = requestHandler;