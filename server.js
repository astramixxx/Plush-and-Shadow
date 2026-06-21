const http = require('http');
const fs = require('fs'); // Библиотека для чтения файлов

const server = http.createServer((req, res) => {
  // Читаем наш файл index.html
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(data); // Отправляем содержимое файла в браузер
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Сервер запущен. Открой в браузере: http://localhost:3000');
});
