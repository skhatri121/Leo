import { Box, Avatar, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const Testimonials = () => {
  const [isSmallerThan610] = useMediaQuery("(max-width: 610px)");
  const testimonialTitle = "What leaders have to say?";
  const speakerDetails = [
    {
      avatar: "./Testimonials/FIrst.png",
      name: "Leo Ashwin Khatiwada",
      position: "District President",
      title: ` Leo Club: A Life-Changing Journey of Personal Growth and Community Service `,
      saying:
        "For me, Leo Club is not just a club; it's a transformative experience that has reshaped my perspective on myself, my community, and my country. It's a place where I've come to appreciate the power of small changes to make a significant impact, and where I've had the opportunity to develop my leadership skills and vision. Through Leo Club, I've gained valuable experience and insights that have equipped me to make a positive difference in the world. It's a community that has empowered me to grow and contribute in ways I never thought possible.",
    },
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
                <b>"</b> <b> {details.title}</b> <b>"</b>
              </Text>
              <Text>{details.saying}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
