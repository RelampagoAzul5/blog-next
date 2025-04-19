import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <Container>{children}</Container>;
}
