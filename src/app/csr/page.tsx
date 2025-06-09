'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [listData, setListData] = useState<string[]>();

  useEffect(() => {
    fetch('/api/mock')
      .then((res) => res.json())
      .then((data) => setListData(data));
  }, []);

  return (
    <div>
      {listData?.map((item) => (
        <div
          className="my-2 bg-red-100 rounded-md"
          key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
