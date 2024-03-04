import { Box, Image, Heading, Text } from "@chakra-ui/react";

const AboutPagedesc = () => {
  const heading = "Where there's a need, there's a Leo";
  const desc =
    "Leadership, Experience, Opportunity - these are the defining qualities of a Leo. As members of Leo clubs, these exceptional individuals epitomize the core values of our remarkable organization. United by their commitment to service and action, Leos collaborate with Lions to create a dynamic and mutually beneficial partnership. Together, they foster an environment of respect, sharing, and learning, where the wisdom of experience meets the energy of youth. This powerful alliance enables Leos to access tried and true strategies from seasoned servicemen while inspiring Lions with fresh, innovative perspectives. Embracing the spirit of teamwork and unity, Leos and Lions stand together as a force for positive change in the world.";
  return (
    <>
      <Box bg="primary.12" mt="15px">
        <Box maxW="1200px" m="0 auto" p="20px 10px 20px 10px">
          <Box display="flex">
            <Image src="./Logo/Leo.png" />
            <Heading alignSelf="center" fontWeight="800">
              {heading}
            </Heading>
          </Box>
          <Box>
            <Text fontFamily="Work Sans" pt="10px">
              {desc}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutPagedesc;
