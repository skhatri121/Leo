import { useState } from "react";
import {
  Heading,
  Box,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Link,
} from "@chakra-ui/react";

const GallerySection = ({ pageCount }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;
  const gallerySrc = [
    "./Gallery/sixth.jpg",
    "./Gallery/elven.jpg",
    "./Gallery/ninth.jpg",
    "./Gallery/Second.jpg",
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const indexOfLastImage = (currentPage + 1) * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = gallerySrc.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <>
      <Box>
        <Box maxW="1200px" m="0 auto" textAlign="center" p="20px">
          <Heading pb="20px">Gallery</Heading>
          <SimpleGrid minChildWidth="250px" spacing="20px">
            {currentImages.map((img, index) => (
              <Box
                key={index}
                onClick={() => handleImageClick(img)}
                cursor="pointer"
              >
                <Image src={img} alt={`Image ${index}`} h="300px" w="100%" />
              </Box>
            ))}
          </SimpleGrid>
          <Box mt="10px" textAlign="end">
            <Button bg="primary.3" color="primary.2">
              <Link href="/gallery/photo"> See More</Link>
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal isOpen={!!selectedImage} onClose={handleCloseModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage} alt="Selected Image" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GallerySection;
