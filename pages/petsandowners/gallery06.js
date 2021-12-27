import Header from '../../components/Navbar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-negro-rojo-verde-1.JPEG?alt=media&token=36910f6e-80a9-4ce7-bcea-b0e3d882e91f",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-negro-rojo-verde-1.JPEG?alt=media&token=36910f6e-80a9-4ce7-bcea-b0e3d882e91f"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-negro-rojo-verde-2.JPEG?alt=media&token=3f297468-808a-431f-a1c4-5f6871b937c3",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-negro-rojo-verde-2.JPEG?alt=media&token=3f297468-808a-431f-a1c4-5f6871b937c3"
    },
    {
        original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-negro-rojo-verde-3.JPG?alt=media&token=bb32c863-ab57-4584-814e-172f888e515a",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-negro-rojo-verde-3.JPG?alt=media&token=bb32c863-ab57-4584-814e-172f888e515a"
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