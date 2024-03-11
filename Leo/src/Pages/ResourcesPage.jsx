import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import {
  Box,
  Image,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const ResourcesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imgSrc = [
    "./Resources/Alpha logo.png",
    "./Resources/dp logo png.png",
    "./Resources/Leo International Logo.png",
    "./Resources/lions dg logo.png",
    "./Resources/Lions international logo.png",
    "./Resources/Omega.png",
    "./Resources/Patti_Hill_Logo-removebg-preview.png",
    "./Resources/DistrictBanner.jpg",
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Box bg="primary.6">
        <Box maxW="1200px" m="0 auto" p="20px 20px">
          <SimpleGrid columns={[1, 2, 4]} spacing="20px">
            {imgSrc.map((img, index) => (
              <Image
                key={index}
                src={img}
                h="200px"
                onClick={() => handleImageClick(img)}
                cursor="pointer"
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />

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

export default ResourcesPage;
