import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Box, Table, Thead, Tr, Td } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import "../clubpaginate.css";
const ClubPage = () => {
  const clubNamesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [sortedClubNames, setSortedClubNames] = useState([]);
  const [originalClubNames] = useState([
    "LEO CLUB OF POKHARA MOUNTAIN CITY",
    "LEO CLUB OF POKHARA DESTINATION ",
    "LEO CLUB OF POKHARA FISHTAIL CITY ",
    "LEO CLUB OF POKHARA MACHHAPUCHHRE",
    "LEO CLUB OF POKHARA GREEN TOWN",
    "LEO CLUB OF DULEGAUNDA KHAIRENI CITY",
    "LEO CLUB OF WALLING CITY",
    "LEO CLUB OF POKHARA LAKESIDE",
    "LEO CLUB OF POKHARA CENTRAL TOWN",
    "LEO CLUB OF POKHARA CENTRAL CENTURY",
    "LEO CLUB OF KATHMANDU DEURALI BUDDHA LAND",
    "LEO CLUB OF KATHMANDU ATAL PINGLASTHAN",
    "LEO CLUB OF KATHMANDU AARAMBHA DEURALI",
    "LEO CLUB OF BUDDHANILKANTA SCHOOL",
    "LEO CLUB OF KATHMANDU AAGAMAN",
    "LEO CLUB OF PEACE THAHANAGAR",
    "LEO CLUB OF KATHMANDU RESUNGA",
    "LEO CLUB OF GULMI SALIME",
    "LEO CLUB OF KATHMANDU DEURALI",
    "LEO CLUB OF KATHMANDU PEACE TOWN",
    "LEO CLUB OF KATHMANDU BRIGHT STAR",
    "LEO CLUB OF KATHMANDU DEURALI KAVRE",
    "LEO CLUB OF KATHMANDU DHIKURA",
    "LEO CLUB OF KATHMANDU AAYAM",
    "LEO CLUB OF KATHMANDU CENTRAL TOWN",
    "LEO CLUB OF KATHMANDU TOGETHER FOREVER",
    "LEO CLUB OF KATHMANDU TKAPAN",
  ]);

  useEffect(() => {
    const sortedArray = [...originalClubNames].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );

    setSortedClubNames(sortedArray);
  }, [originalClubNames]);

  const offset = currentPage * clubNamesPerPage;
  const currentClubNames = sortedClubNames.slice(
    offset,
    offset + clubNamesPerPage
  );
  const pageCount = Math.ceil(sortedClubNames.length / clubNamesPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Box bg="primary.4">
        <Box maxW="1200px" m="0 auto" p="20px" w="100%">
          <Table color="primary.2">
            <Thead fontSize="20px" fontWeight="600">
              Club Names
            </Thead>
            {currentClubNames.map((name, index) => (
              <Tr key={index} letterSpacing="1.5px">
                <Td>
                  {index + 1 + offset}. {name}
                </Td>
              </Tr>
            ))}
          </Table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ClubPage;
