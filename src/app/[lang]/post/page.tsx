import { getDictionary } from '@/dictionaries';

interface PostProps {
  params: {
    lang: string;
  };
}

const Post = async ({ params: { lang } }: PostProps) => {
  const dict = await getDictionary(lang); // en
  return <main>{dict.cart}</main>;
};

export default Post;
