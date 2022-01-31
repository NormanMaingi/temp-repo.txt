const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the offical ICED homepage')
  }
  if (req.url === '/about') {
    res.end('Here is a short History about ICED')
  }
  res.end(`
 <h1>Ooops!</h1>
 <p>We can't find the page</p>
 <a href="/">back to homepage</a>
 `)
})

server.listen(5000)
