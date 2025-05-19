const ENDPOINT = 'https://api.deepseek.com/chat/completions';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const sendMessage = async (message: { role: string; content: string }) => {
  // 组装请求头
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`, // 需要通过请求头(Authorization)设置 API Keys
  };

  // 组装请求体
  const payload = {
    model: 'deepseek-chat', // 选择模型
    messages: [message], // 消息体
    stream: false, // 是否开启流式输出
  };

  // 发送请求(其实就是正常发个 POST 请求)
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  // 等待结果的返回
  const res = await response.json();

  return res.choices[0].message;
};

export default sendMessage;
