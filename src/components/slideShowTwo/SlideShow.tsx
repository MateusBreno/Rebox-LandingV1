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
        {/* <ContentOverlayCircle> */}
          {/* <FontAwesomeIcon icon={faPlay} color="#fff" fontSize={30} /> */}
        {/* </ContentOverlayCircle> */}
      </ContentOverlay>
    </ContentWrapper>
  );
};

const slides = [
  {
    key: 'T-1',
    // videoUrl: 'https://www.youtube.com/embed/IiQP7ohzdnk',
    content: (
      <Content imageUrl={images.conceito1} />
    ),
  },
  {
    key: 'T-2',
    // videoUrl: 'https://www.youtube.com/embed/R7gLKEax8Cs',
    content: (
      <Content imageUrl={images.conceito2} />
    ),
  },
  {
    key: 'T-3',
    // videoUrl: 'https://www.youtube.com/embed/TuaCLguKqF0',
    content: (
      <Content imageUrl={images.conceito3} />
    ),
  },
  {
    key: 'T-4',
    // videoUrl: 'https://www.youtube.com/embed/wL_Rp0-8j3c',
    content: (
      <Content imageUrl={images.conceito4} />
    ),
  },
  {
    key: 'T-5',
    // videoUrl: 'https://www.youtube.com/embed/jtxvt4a9_gg',
    content: (
      <Content imageUrl={images.conceito5 } />
    ),
  },
  {
    key: 'T-6',
    // videoUrl: 'https://www.youtube.com/embed/5bpiyq4cZ44',
    content: <Content imageUrl={images.conceito6} />,
  },
  {
    key: 'T-7',
    // videoUrl: 'https://www.youtube.com/embed/4XNJiO0u7V0',
    content: <Content imageUrl={images.conceito7} />,
  },
];

const SlideShowTwo: React.FC = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [videoIndex, setVideoIndex] = useState<number>(-1);

  const settings = {
    infinite: true,
    dots: true,
    speed: 5000,
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
      {/* {slides.map((slide, idx) => (
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
      ))} */}
    </Container>
  );
};

export default SlideShowTwo;
