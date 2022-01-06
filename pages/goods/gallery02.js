import Header from '../../components/Navbar';
import ButtonAndText from '../../components/ButtonAndText';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-azul-1.jpg?alt=media&token=81dc1661-d6d1-46d0-87c7-6438d4300e4e",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-azul-1.jpg?alt=media&token=81dc1661-d6d1-46d0-87c7-6438d4300e4e"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-azul-2.PNG?alt=media&token=6feb8611-d9d2-46f7-8f55-07e7ad8b5879",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-azul-2.PNG?alt=media&token=6feb8611-d9d2-46f7-8f55-07e7ad8b5879"
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <ImageGallery
          items={images}
          showBullets={false}
          showIndex={false}
          showThumbnails={true}
          lazyLoad={false}
          showPlayButton={false}
          showNav={true}
          showFullscreenButton={false}
          thumbnailPosition={"left"}
        />
      </Container>
      <ButtonAndText />
    </div>
  );
}

const Container = styled.div`
  padding-top: 120px;
`

export default Carousel;