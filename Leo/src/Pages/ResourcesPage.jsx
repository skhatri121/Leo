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
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

const ResourcesPage = () => {
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

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

  const docs = [
    { uri: "../Resources/Treasurer report format.docx", fileType: "docx" },
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
        <Box maxW="1200px" m="0 auto" p="20px 20px" pb="50px">
          <SimpleGrid
            columns={[1, 2, 4]}
            spacing="20px"
            justifyItems={isSmallerThan480 ? "center" : "normal"}
          >
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
          <Box mt="15px">
            <Text>
              For more resources:
              <Box>
                <a
                  href="https://drive.google.com/drive/folders/1XujGUh267yUz4JHgcK83ciAjxX4Fc3PO"
                  target="_blank"
                >
                  <b>Click here</b>
                </a>
              </Box>
            </Text>
          </Box>
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
