import Header from '../../components/Navbar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-1.JPEG?alt=media&token=abbf0ecf-8c09-4b57-aec7-43c03eb10329",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-1.JPEG?alt=media&token=abbf0ecf-8c09-4b57-aec7-43c03eb10329"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-2.JPEG?alt=media&token=b7d9c465-591a-4cea-9dd1-bf8cff28b37c",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-2.JPEG?alt=media&token=b7d9c465-591a-4cea-9dd1-bf8cff28b37c"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-3.JPEG?alt=media&token=022c308f-1dbc-4ad6-a493-ca3aac7453f5",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-rojo-3.JPEG?alt=media&token=022c308f-1dbc-4ad6-a493-ca3aac7453f5"
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