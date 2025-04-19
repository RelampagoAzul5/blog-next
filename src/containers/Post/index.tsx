import { PostData } from '@/domain/posts/posts';
import { MainContainer } from '../../components/MainContainer';
import { Header } from '../../components/header';
import { Footer } from '../../components/Footer';
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
