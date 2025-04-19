import { PostData } from '@/domain/posts/posts';
import { MainContainer } from '../MainContainer';
import { Header } from '../header';
import { Footer } from '../Footer';
export type PostProps = {
  post: PostData;
};
export function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </MainContainer>
      <Footer />
    </>
  );
}
