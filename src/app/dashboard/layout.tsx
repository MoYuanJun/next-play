export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>dashboard - layout</div>
      <div>{children}</div>
    </div>
  );
}
