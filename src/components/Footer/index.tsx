import { OWNER_NAME } from '@/configs/app-configs';
import { Container } from './styled';

export const Footer = () => {
  return <Container>{`Feito com carinho por ${OWNER_NAME}`}</Container>;
};
