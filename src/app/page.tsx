import { AppLogo } from '@/lib/components/AppLogo';
import { LinkForm } from '@/lib/components/LinkForm';

import styles from './styles.module.css';

const LNKR: React.FC = () => {
  const { container } = styles;

  return (
    <main className={container}>
      <AppLogo />
      <LinkForm />
    </main>
  );
};

export default LNKR;
