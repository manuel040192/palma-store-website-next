import Header from '../../components/Navbar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-1.JPEG?alt=media&token=c04e94a4-3953-444b-8e95-31dfbf5bed37",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-1.JPEG?alt=media&token=c04e94a4-3953-444b-8e95-31dfbf5bed37"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-2.JPEG?alt=media&token=7b0b8453-b167-4518-b0c1-b23275460af4",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-2.JPEG?alt=media&token=7b0b8453-b167-4518-b0c1-b23275460af4"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-3.JPEG?alt=media&token=bc7603a1-7458-47cc-b7e2-c1b4aa5204fd",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-3.JPEG?alt=media&token=bc7603a1-7458-47cc-b7e2-c1b4aa5204fd"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-4.JPEG?alt=media&token=8d78b8d5-6a3e-4afe-876c-85d3d73bd6ee",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-gris-4.JPEG?alt=media&token=8d78b8d5-6a3e-4afe-876c-85d3d73bd6ee"
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
    </div>
  );
}

const Container = styled.div`
  padding-top: 120px;
`

export default Carousel;