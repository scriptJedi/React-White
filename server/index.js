import express from 'express';
import fs from 'fs';
import http from 'http';
import { WebSocketServer } from 'ws';
import archiver from 'archiver';

const app = express();
const PORT = 3000;
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const buildProject = () => {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const output = fs.createWriteStream('landing.zip');

    archive.pipe(output);
    archive.directory('src/', false);
    archive.finalize();

    console.log('Project built successfully');
};

app.post('/adminData', (req, res) => {
    const { companyName, backgroundColor } = req.body;

    const data = {
        companyName,
        backgroundColor
    };

    const jsonData = JSON.stringify(data);

    fs.writeFile('admin.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing to admin.json:', err);
            res.status(500).send('Error writing data to admin.json');
        } else {
            console.log('Data written to admin.json successfully');
            res.status(200).send('Data written to admin.json');
        }
    });
});

app.get('/adminData', (req, res) => {
    fs.readFile('admin.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading admin.json:', err);
            res.status(500).send('Error reading admin.json');
            return;
        }
        const adminData = JSON.parse(data);
        res.json(adminData);
    });
});

app.post('/download', (req, res) => {
    // Вызываем функцию для сборки проекта
    buildProject();

    // Отправляем клиенту путь для скачивания архива
    res.json({ downloadPath: '/downloads/landing.zip' });
});

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('Server connected');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
