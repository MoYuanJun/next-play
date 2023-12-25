'use client';
import { useParams, usePathname } from 'next/navigation';

const Context = () => {
  const res = usePathname();

  const params = useParams();

  console.log(
    '%c [ res ]-11',
    'font-size:13px; background:pink; color:#bf2c9f;',
    res,
  );
  console.log(
    '%c [ params ]-15',
    'font-size:13px; background:pink; color:#bf2c9f;',
    params,
  );

  return <div>detail</div>;
};

export default Context;
