const http = require('http');
const mongodb = require('mongodb');

const hostname = '127.0.0.1';
const port = 3000;
const uri = 'mongodb://localhost:27017/test';

const server = http.createServer(async (req, res) => {
    try {
        const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true });
        const db = client.db('test');
        const result = await db.collection('items').findOne({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
        client.close();
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Serveri Errori');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
