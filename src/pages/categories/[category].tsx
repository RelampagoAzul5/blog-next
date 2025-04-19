import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/posts';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryForQuery = context.query.category as string;
  const urlQuery = `filters[category][name][$eq]=${encodeURIComponent(categoryForQuery)}&sort=id:desc&_start=0&_limit=30`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts, category: context.query.category },
  };
};
