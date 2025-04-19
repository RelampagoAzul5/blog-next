import { Post } from '@/components/Post';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  return <Post post={post} />;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.slug) {
    return { notFound: true };
  }
  const postArray = await getPost(context.params.slug);
  const post = postArray[0];
  return {
    props: { post },
  };
};
