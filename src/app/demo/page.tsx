'use client';
import { useEffect } from 'react';
import { Textarea } from '@heroui/input';

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
    <div className="relative h-screen w-screen bg-[#080c22]">
      <div className="absolute bottom-7 left-1/2 w-1/2 -translate-x-1/2 rounded-lg bg-[#2a2a2a]">
        <Textarea
          color="default"
          classNames={{
            input: 'group-data-[has-value=true]:text-white/80',
            inputWrapper: 'bg-transparent group-data-[focus]:bg-[#29272e] data-[hover]:bg-[#29272e]',
          }}
        />
      </div>
    </div>
  );
};

export default Page;
