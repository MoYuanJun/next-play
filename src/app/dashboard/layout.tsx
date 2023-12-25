import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>dashboard - layout</div>
      <div>{children}</div>
      <Link href="/dashboard/detail">detail</Link>
    </div>
  );
}
