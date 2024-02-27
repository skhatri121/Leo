import {
  Box,
  Image,
  Heading,
  Link,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
    title: "More",
    to: "/more",
  },
];

const Navbar = () => {
  const [isSmallerThan958] = useMediaQuery("(max-width: 958px)");
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

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
            <Image src="Leo.png" />
            <Heading size="md">Leo District Council 325M, Nepal</Heading>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="50px">
          {isSmallerThan768 ? (
            <HamburgerIcon boxSize={6} />
          ) : (
            <Box letterSpacing="0.75px" display="flex" gap="20px">
              {links.map((link) => (
                <Link key={link.to} href={link.to}>
                  {link.title}
                </Link>
              ))}
            </Box>
          )}
          <Button bg="primary.3" color="primary.2">
            Donate Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;