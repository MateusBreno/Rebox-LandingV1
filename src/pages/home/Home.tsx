import { memo, lazy } from 'react';
import favicon from '../../assets/favicon.ico';
import { Container } from './Styles';
const AboutUs = lazy(() => import('../../containers/aboutUs/AboutUs'));
const Differentials = lazy(() => import('../../containers/differentials/Differentials'));
const Faq = lazy(() => import('../../containers/faq/Faq'));
const Header = lazy(() => import('../../containers/header/Header'));
const HowItWorks = lazy(() => import('../../containers/howItWorks/HowItWorks'));
const Plans = lazy(() => import('../../containers/plans/Plans'));
const FloatingWhatsApp = lazy(() => import('react-floating-whatsapp'));
const Testimonials = lazy(() => import('../../containers/testimonials/Testimonials'));
const ScrollToTop = lazy(() => import('react-scroll-to-top'));
const Footer = lazy(() => import('../../components/footer/Footer'));

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
