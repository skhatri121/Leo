import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import {
  Box,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useState } from "react";

const PhotoGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "../Gallery/eighth.jpg",
    "../Gallery/elven.jpg",
    "../Gallery/fifteen.jpg",
    "../Gallery/fifth.jpg",
    "../Gallery/fourteen.jpg",
    "../Gallery/fourth.jpg",
    "../Gallery/ninth.jpg",
    "../Gallery/Second.jpg",
    "../Gallery/seventh.jpg",
    "../Gallery/sixteen.jpg",
    "../Gallery/sixth.jpg",
    "../Gallery/tenth.jpg",
    "../Gallery/third.jpg",
    "../Gallery/thirteen.jpg",
    "../Gallery/twelve.jpg",
  ];

  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Box maxW="1200px" m="0 auto" p="10px 20px 20px 10px">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="25px">
            {images.map((img, index) => (
              <Box key={index} onClick={() => handleImageClick(img)}>
                <Image src={img} h="300px" w="100%" />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Modal isOpen={!!selectedImage} onClose={handleCloseModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage} alt="Selected Image" p="20px 20px" />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};

export default PhotoGalleryPage;
