/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Slider from 'react-slick';
import {
  Container,
  ContentOverlay,
  ContentOverlayCircle,
  ContentWrapper,
  Image,
} from './Styles';
import { Modal } from '..';
import images from '../../constants/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ContentProps {
  imageUrl: string;
}

const Content: React.FC<ContentProps> = ({ imageUrl }) => {
  return (
    <ContentWrapper>
      <Image src={imageUrl} loading="lazy" />
      <ContentOverlay>
        <ContentOverlayCircle>
          <FontAwesomeIcon icon={faPlay} color="#fff" fontSize={30} />
        </ContentOverlayCircle>
      </ContentOverlay>
    </ContentWrapper>
  );
};

const slides = [
  {
    key: 'T-1',
    videoUrl: 'https://youtube.com/embed/RB2WxkS411Y',
    content: (
      <Content imageUrl={images.prova8} />
    ),
  },
  {
    key: 'T-2',
    videoUrl: 'https://youtube.com/embed/BCl6rHl9JNQ',
    content: (
      <Content imageUrl={images.prova1} />
    ),
  },
  {
    key: 'T-3',
    videoUrl: 'https://youtube.com/embed/8zdjca3GUag',
    content: (
      <Content imageUrl={images.prova4} />
    ),
  },
  {
    key: 'T-4',
    videoUrl: 'https://youtube.com/embed/cB-yTyJiUnY',
    content: (
      <Content imageUrl={images.prova3} />
    ),
  },
  {
    key: 'T-5',
    videoUrl: 'https://youtube.com/embed/N5O9SXtdEio',
    content: (
      <Content imageUrl={images.prova2} />
    ),
  },
  {
    key: 'T-6',
    videoUrl: 'https://youtube.com/embed/AELMlsNz8qg',
    content: <Content imageUrl={images.prova5} />,
  },
  {
    key: 'T-7',
    videoUrl: 'https://youtube.com/embed/XDsKBgIUHrw',
    content: <Content imageUrl={images.prova7} />,
  },
  {
    key: 'T-8',
    videoUrl: 'https://youtube.com/embed/D3nCfTAuYuM',
    content: <Content imageUrl={images.prova6} />,
  },
];

const SlideShow: React.FC = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [videoIndex, setVideoIndex] = useState<number>(-1);

  const settings = {
    infinite: true,
    dots: true,
    speed: 1500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (_: unknown, next: number): void => setImgIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div
            key={slide.key}
            className={imgIndex === idx ? 'slide active' : 'slide'}
            onClick={(): void => setVideoIndex(idx)}
          >
            {slide.content}
          </div>
        ))}
      </Slider>
      {slides.map((slide, idx) => (
        <Modal
          key={slide.key}
          show={videoIndex === idx}
          onClose={(): void => setVideoIndex(-1)}
        >
          <iframe
            width="929"
            height="523"
            loading="lazy"
            src={slide.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal>
      ))}
    </Container>
  );
};

export default SlideShow;
