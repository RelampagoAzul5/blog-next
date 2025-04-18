import * as Styled from './styled';

export type MainContainerPorps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerPorps) {
  return <Styled.Container>{children}</Styled.Container>;
}
