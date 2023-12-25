'use client';

const context = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(
    '%c [ reset ]-4',
    'font-size:13px; background:pink; color:#bf2c9f;',
    error,
  );
  console.log(
    '%c [ error ]-4',
    'font-size:13px; background:pink; color:#bf2c9f;',
    reset,
  );
  return 'error';
};

export default context;
