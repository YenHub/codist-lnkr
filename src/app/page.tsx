import { AppLogo } from '@/components/AppLogo';
import { UrlInput } from '@/components/UrlInput';

import styles from './styles.module.css';

const Home: React.FC = () => {
  const { container } = styles;

  return (
    <main className={container}>
      <AppLogo />
      <form>
        <UrlInput />
        <button type="submit">
          <span>CREATE</span>
        </button>
      </form>
    </main>
  );
};

export default Home;
