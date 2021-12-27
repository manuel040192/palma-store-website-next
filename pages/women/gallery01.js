import Header from '../../components/Navbar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-1.JPEG?alt=media&token=a6c62ec5-e7aa-4bb0-99a9-eb2d0d0729e7",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-1.JPEG?alt=media&token=a6c62ec5-e7aa-4bb0-99a9-eb2d0d0729e7"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-2.JPEG?alt=media&token=0ed3cf48-5abe-4816-aafc-611c05c4a459",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-2.JPEG?alt=media&token=0ed3cf48-5abe-4816-aafc-611c05c4a459"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-3.JPEG?alt=media&token=5ab619a0-4058-466d-baa1-837925329ea4",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-3.JPEG?alt=media&token=5ab619a0-4058-466d-baa1-837925329ea4"
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