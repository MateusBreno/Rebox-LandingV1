import FloatingWhatsApp from 'react-floating-whatsapp';
import ScrollToTop from 'react-scroll-to-top';
import {
  AboutUs,
  Differentials,
  Faq,
  Header,
  HowItWorks,
  Plans,
  Testimonials,
} from '../../containers';
import favicon from '../../assets/favicon.ico';
import { Container } from './Styles';
import { Footer } from '../../components';

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

export default Home;
