import { PostData } from '@/domain/posts/posts';
import { MainContainer } from '../../components/MainContainer';
import { Header } from '../../components/header';
import { Footer } from '../../components/Footer';
import { Heading } from '@/components/Heading';
export type PostProps = {
  post: PostData;
};
export function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </MainContainer>
      <Footer />
    </>
  );
}
