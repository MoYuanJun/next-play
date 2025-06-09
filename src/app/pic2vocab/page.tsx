'use client';
import { Image, Skeleton } from '@heroui/react';
import { ChangeEvent, useCallback, useState } from 'react';
import Icon from '@/components/Icon/index';

function createBlobURL(base64AudioData: string): string {
  const byteArrays = [];
  const byteCharacters = atob(base64AudioData);

  for (let offset = 0; offset < byteCharacters.length; offset++) {
    const byteArray = byteCharacters.charCodeAt(offset);
    byteArrays.push(byteArray);
  }

  const blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' });

  return URL.createObjectURL(blob); // 创建一个临时 URL 供音频播放
}

const Page = () => {
  const [imgData, setImgData] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = useCallback(async (imgData: string) => {
    setIsLoading(true);

    const res = await fetch('/api/pic2vocab', {
      method: 'POST',
      body: JSON.stringify({ image: imgData }),
    });
    const { data } = await res.json();
    console.log('%c [ data ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', data);
    setAudioUrl(createBlobURL(data.audio));

    setIsLoading(false);
  }, []);

  const handleUpload = useCallback(
    async (e: ChangeEvent) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }

      // 读取图片文件
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgData(reader.result as string);
        handleSend(reader.result as string);
      };
    },
    [handleSend],
  );

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-y-auto bg-[#131313]">
      {isLoading || audioUrl ? (
        <div className="flex w-[176px] justify-center pb-5">
          {isLoading ? (
            <Skeleton className="h-[54px] w-3/5 rounded-full" />
          ) : (
            <audio
              controls
              src={audioUrl!}
              className="w-3/5"
            />
          )}
        </div>
      ) : null}
      <div className="relative flex w-[176px]">
        <input
          type="file"
          id="img2audio-upload"
          onChange={handleUpload}
          className="size-0 opacity-0"
        />
        <label
          htmlFor="img2audio-upload"
          className="mr-3 flex size-[176px] flex-none cursor-pointer items-center justify-center rounded-xl border-2 border-dotted border-white/10 bg-[#1d1d1d]">
          {imgData ? (
            <Image
              width={160}
              height={160}
              src={imgData}
              alt="upload img"
            />
          ) : (
            <Icon
              name="icon-upload"
              className="text-6xl text-white/10 transition-all hover:text-white/50"
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default Page;
