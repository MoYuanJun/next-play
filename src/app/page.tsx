import Link from 'next/link';
import photos from './data';

export default function Home() {
  return (
    <main className="container">
      {photos.map(({ id, src }) => (
        <Link
          key={id}
          href={`/photo/${id}`}>
          <img
            alt="xx"
            src={src}
            height="100"
          />
        </Link>
      ))}
    </main>
  );
}
