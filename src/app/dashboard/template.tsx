export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>dashboard - template</div>
      <div>{children}</div>
    </div>
  );
}
