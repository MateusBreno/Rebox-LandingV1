import { PauseCircleFilled, PlayCircleFilled } from '@mui/icons-material';
import { LegacyRef, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, SlideShow } from '../../components';
import { useScroll } from '../../hooks/useScroll';
import {
  Container,
  Subtitle,
  Title,
  Video,
  VideoOverlay,
  VideoOverlayCircle,
  VideoTitle,
} from './Styles';
import myVideo from '../../assets/video.mp4';

const Testimonials: React.FC = () => {
  const location = useLocation();
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const vidRef = useRef<HTMLVideoElement>();
  useScroll(location);

  const handleVideo = (): void => {
    setPlayVideo(prev => !prev);
    playVideo ? vidRef.current?.pause() : vidRef.current?.play();
  };

  return (
    <Container id="depoimentos">
      <VideoTitle>Vai esperar que isso aconteça contigo?</VideoTitle>
      <Video>
        <video
          src={myVideo}
          controls
          playsInline
          ref={vidRef as unknown as LegacyRef<HTMLVideoElement>}
        />
        <VideoOverlay>
          <VideoOverlayCircle onClick={handleVideo} onKeyPress={handleVideo} tabIndex={0}>
            {playVideo ? (
              <PauseCircleFilled
                color="inherit"
                style={{ color: '#fff', fontSize: 30 }}
              />
            ) : (
              <PlayCircleFilled color="inherit" style={{ color: '#fff', fontSize: 30 }} />
            )}
          </VideoOverlayCircle>
        </VideoOverlay>
      </Video>
      <Title>Veja o que nossos clientes falam</Title>
      <SlideShow />
      <Subtitle style={{ marginTop: '5rem' }}>
        Sabe quanto esses clientes rebox pagaram pelo guincho?
      </Subtitle>
      <Subtitle style={{ fontStyle: 'normal', fontWeight: '600' }}>
        Apenas R$19,90
      </Subtitle>
      <Divider isBottom />
    </Container>
  );
};

export default Testimonials;
