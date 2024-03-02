import { useState } from "react";
import {
  Heading,
  Box,
  Text,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import "../style.css";
const GallerySection = ({ pageCount }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;
  const gallerySrc = [
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
    "./Gallery/Second.jpg",
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
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
                <Image src={img} alt={`Image ${index}`} />
              </Box>
            ))}
          </SimpleGrid>
          <ReactPaginate
            previousLabel={<Text>← Previous</Text>}
            nextLabel={<Text>Next →</Text>}
            pageCount={Math.ceil(gallerySrc.length / imagesPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            previousClassName={"pagination-previous"}
            nextClassName={"pagination-next"}
            pageClassName={"pagination-item"}
            breakClassName={"pagination-break"}
            pageLinkClassName={"pagination-link"}
            previousLinkClassName={"pagination-link-previous"}
            nextLinkClassName={"pagination-link-next"}
            disabledClassName={"pagination-disabled"}
          />
        </Box>
      </Box>

      <Modal isOpen={!!selectedImage} onClose={handleCloseModal} size="full">
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
