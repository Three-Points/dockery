import express from 'express'

const server = express();

server.set('port', process.env.PORT || 8080)
server.set('url', process.env.SERVER_URL || 'http://localhost:8080')

server.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hi, ${name}! 👋`);
});

server.listen(server.get('port'), () => {
    console.log(`⬢ helloworld - ${server.get('url')}`);
});
