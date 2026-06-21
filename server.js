// Подключаем библиотеку для создания сервера
const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
  // Что сервер отвечает, когда к нему заходят
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Привет! Это мой сервер для игры Plush and Shadow. Он работает!');
});

// Указываем порт (3000 — стандарт для тестов)
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
