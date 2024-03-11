import {
  Box,
  Image,
  Heading,
  Link,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import DonateDetails from "./DonateDetails";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "/about",
  },
  {
    title: "Clubs",
    to: "/club",
  },
  {
    title: "Resources",
    to: "/resources",
  },
  {
    title: "Gallery",
    to: "/gallery/photo",
  },
];

const Navbar = () => {
  const [isSmallerThan958] = useMediaQuery("(max-width: 958px)");
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={isSmallerThan958 ? "column" : "row"}
        px="30px"
        py="10px"
        maxW="1200px"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Box display="flex" alignItems="center">
            <Image
              src="../Logo/Leo.png"
              onClick={() => navigate("/")}
              cursor="pointer"
            />
            <Heading size="md" onClick={() => navigate("/")} cursor="pointer">
              Leo District Council 325M, Nepal
            </Heading>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="50px">
          {isSmallerThan768 ? (
            <HamburgerIcon boxSize={6} />
          ) : (
            <Box
              letterSpacing="0.75px"
              display="flex"
              gap="20px"
              position="relative"
            >
              {links
                .filter((link) => link.title !== "Gallery")
                .map((link) => (
                  <Link
                    key={link.to}
                    href={link.to}
                    color={
                      location.pathname === link.to ? "primary.14" : "black"
                    }
                    _hover={{ color: "primary.9" }}
                  >
                    {link.title}
                  </Link>
                ))}
              <Menu isOpen={isOpen} onClose={onClose} placement="bottom-start">
                <MenuButton
                  as={Link}
                  href="/gallery/photo"
                  color={
                    location.pathname === "/gallery" ? "primary.14" : "black"
                  }
                  _hover={{ color: "primary.9" }}
                  px={0}
                  onMouseEnter={onOpen}
                >
                  {links.find((link) => link.title === "Gallery").title}
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList onMouseLeave={onClose}>
                  <MenuItem onClick={() => navigate("/gallery/photo")}>
                    Photo Gallery
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/gallery/video")}>
                    Video Gallery
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
          <DonateDetails />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
