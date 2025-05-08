'use client';
import { useEffect } from 'react';

const ENDPOINT = 'https://api.coze.cn/v3/chat';
const API_KEY = process.env.API_KEY;

const send = async () => {
  // 组装请求头
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`, // 需要通过请求头(Authorization)设置 API Keys
  };

  // 组装请求体
  const payload = {
    bot_id: '7498664791838556172',
    user_id: '123',
    additional_messages: [
      {
        role: 'user',
        content: '早上好',
        content_type: 'text',
      },
    ],
    custom_variables: {
      prompt: '你是一个AI助手',
    },
    stream: false,
  };

  // 发送请求(其实就是正常发个 POST 请求)
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  // 等待结果的返回
  const res = await response.json();

  console.log(res); // 打印返回内容
};

const Page = () => {
  useEffect(() => {
    send();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="size-1/2 rounded-lg bg-[#050713]/90">{/* <Input /> */}</div>
    </div>
  );
};

export default Page;
