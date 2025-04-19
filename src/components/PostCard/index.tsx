import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';
import Image from 'next/image';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export function PostCard({ slug, title, cover }: PostCardProps) {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <Image src={cover} alt={title} width={300} height={200} />
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
}
