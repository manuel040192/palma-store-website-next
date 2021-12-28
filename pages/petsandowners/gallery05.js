import Header from '../../components/Navbar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-blanco-negro-1.JPEG?alt=media&token=8562127e-6d61-492b-ad9a-f46e5371def7",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-blanco-negro-1.JPEG?alt=media&token=8562127e-6d61-492b-ad9a-f46e5371def7"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-blanco-negro-2.JPEG?alt=media&token=a5a79ad5-6783-4081-be0f-2f8e191d0a61",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-blanco-negro-2.JPEG?alt=media&token=a5a79ad5-6783-4081-be0f-2f8e191d0a61"
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