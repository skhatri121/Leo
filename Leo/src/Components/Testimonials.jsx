import { Box, Avatar, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const Testimonials = () => {
  const [isSmallerThan610] = useMediaQuery("(max-width: 610px)");
  const testimonialTitle = "What leaders have to say?";
  const speakerDetails = [
    {
      avatar: "./Testimonials/FIrst.png",
      name: "Leo Ashwin Khatiwada",
      position: "District President",
      saying:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam accusamus laborum atque voluptatibus temporibus provident doloribus est quia consectetur, sunt sequi ducimus ex eligendi, minus perferendis dolore ad sed.",
    },
    // {
    //   avatar: "./Testimonials/Second.png",
    //   name: "Leo Prem Raj Tiwari",
    //   position: "District President",
    //   saying:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam accusamus laborum atque voluptatibus temporibus provident doloribus est quia consectetur, sunt sequi ducimus ex eligendi, minus perferendis dolore ad sed.",
    // },
  ];

  return (
    <Box bg="primary.10">
      <Box p="20px 20px 50px 15px" maxW="1200px" margin="0 auto">
        <Box textAlign="center" fontSize="30px">
          {testimonialTitle}
        </Box>
        {speakerDetails.map((details, index) => (
          <Box
            key={index}
            pb="25px"
            display="flex"
            flexDirection={isSmallerThan610 ? "column" : "row"}
            mt="25px"
            gap="25px"
            bg="primary.11"
            borderRadius="10px"
            textAlign="-webkit-center"
          >
            <Box px="20px" py="15px">
              <Avatar size="2xl" name={details.name} src={details.avatar} />
              <Heading size="md" w="max-content" textAlign="center">
                {details.name}
              </Heading>
              <Heading size="sm">{details.position}</Heading>
            </Box>
            <Box py={isSmallerThan610 ? "10px" : "20px"} px="5px">
              <Text>
                <b>"</b> {details.saying} <b>"</b>
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
