const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 63342; // 修改为你想要使用的端口号

app.use(bodyParser.json());

// 提供静态文件（前端页面）的路由
app.use('/hands', express.static(path.join(__dirname, 'public')));

// 处理图标点击数据的路由
app.post('/record-click', (req, res) => {
    const eventData = req.body;

    console.log('Received data from frontend:', eventData);

    // 在这里可以根据你的业务逻辑处理 eventData
    // 你可以将数据保存到数据库、记录日志等

    const response = {
        message: 'Icon click recorded successfully.',
        eventData: eventData,
    };

    // 发送响应数据到客户端
    res.json(response);

    // 在后端的控制台打印发送的响应数据
    console.log('Sent response to frontend:', response);
});

// 启动服务器监听指定端口
app.listen(port, () => {
    const frontendURL = `http://localhost:${port}/hands/tree2.html`;
    console.log(`Server is running on port ${port}`);
    console.log(`You can access the frontend at: ${frontendURL}`);
});
