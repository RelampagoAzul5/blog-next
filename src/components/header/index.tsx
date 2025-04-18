import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/configs/app-configs';

export function Header() {
  return (
    <Container>
      <Link href="/">{SITE_NAME}</Link>
    </Container>
  );
}
