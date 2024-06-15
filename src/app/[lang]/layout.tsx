import { Metadata } from 'next';

/** 动态设置元数据 */
export const generateMetadata = async (props) => {
  console.log('%c [ props ]-5', 'background:pink; color:#bf2c9f;', props);

  return {} as Metadata;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
