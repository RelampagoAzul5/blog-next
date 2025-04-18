import { PostData } from '@/domain/posts/posts';
import { Container } from './styles';
import { Header } from '@/components/header';
import { MainContainer } from '@/components/MainContainer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <h2 key={post.slug}> {post.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
