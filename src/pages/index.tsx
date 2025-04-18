import { PostData } from '@/domain/posts/posts';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(`${process.env.API_URL}/posts`);
  const jsonPosts = await posts.json();
  return jsonPosts.data;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.slug}> {post.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};
