import { PostData } from '@/domain/posts/posts';
import { MainContainer } from '../../components/MainContainer';
import { Header } from '../../components/header';
import { Footer } from '../../components/Footer';
import { Heading } from '@/components/Heading';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostContainer } from '@/components/PostContainer';
export type PostProps = {
  post: PostData;
};
export function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <PostContainer content={post.contentHtml} />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.createdAt}
        />
      </MainContainer>
      <Footer />
    </>
  );
}
