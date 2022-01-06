import Header from '../../components/Navbar';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';

function Carousel() {
  const images = [
    {
      original: "https://imagizer.imageshack.com/img924/3168/dBmZr8.jpg",
      thumbnail: "https://imagizer.imageshack.com/img924/3168/dBmZr8.jpg"
    },
    {
      original: "https://imagizer.imageshack.com/img923/2639/9Ildr1.jpg",
      thumbnail: "https://imagizer.imageshack.com/img923/2639/9Ildr1.jpg"
    },
    {
      original: "https://imagizer.imageshack.com/img922/1858/RvRflR.jpg",
      thumbnail: "https://imagizer.imageshack.com/img922/1858/RvRflR.jpg"
    },
    {
      original: "https://imagizer.imageshack.com/img922/6738/ZahNjl.jpg",
      thumbnail: "https://imagizer.imageshack.com/img922/6738/ZahNjl.jpg"
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-amarillo-5.jpg?alt=media&token=3d87a1b7-b1a1-493e-b732-a86df79ca945",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-amarillo-5.jpg?alt=media&token=3d87a1b7-b1a1-493e-b732-a86df79ca945"
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
