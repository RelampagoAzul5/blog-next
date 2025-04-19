import { Container, CoverImage } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <Container>
      <CoverImage src={coverUrl} alt={alt} />
    </Container>
  );
};
