const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 63342; // 选择一个可用的端口号

app.use(bodyParser.json());

// 处理路由和请求
app.post('/record-click', (req, res) => {
    const eventData = req.body;
    console.log('Received event data:', eventData);

    // 在这里处理请求并准备响应
    const response = { message: 'Event data received successfully.' };
    res.json(response);
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
