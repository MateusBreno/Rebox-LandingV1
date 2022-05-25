const AboutUs = lazy(() => import('../../containers'));
const Differentials = lazy(() => import('../../containers'));
const Faq = lazy(() => import('../../containers'));
const Header = lazy(() => import('../../containers'));
const HowItWorks = lazy(() => import('../../containers'));
const Plans = lazy(() => import('../../containers'));
const FloatingWhatsApp = lazy(() => import('react-floating-whatsapp'));
const Testimonials = lazy(() => import('../../containers'));
const ScrollToTop = lazy(() => import('react-scroll-to-top'));
import { memo, lazy } from 'react';
import favicon from '../../assets/favicon.ico';
import { Container } from './Styles';
const Footer = lazy(() => import('../../components'));

// const AvatarComponent = lazy(() => import('./AvatarComponent'));  

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollToTop smooth style={{ position: 'fixed', top: '16px' }} />
      <Header />
      <Testimonials />
      <AboutUs />
      <HowItWorks />
      <Plans />
      <Differentials />
      <Faq />
      <Footer />
      <FloatingWhatsApp
        avatar={favicon}
        phoneNumber="551140033132"
        accountName="Rebox"
        statusMessage="Normalmente respondemos em 1h"
        chatMessage="Olá, como podemos ajudá-lo? :)"
        allowClickAway
        notification
        notificationSound
        notificationDelay={120000} // 2 minutos
      />
    </Container>
  );
};

export default memo(Home);
