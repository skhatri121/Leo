import { Box, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";

const AboutLeo = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");
  const [isSmallerThan520] = useMediaQuery("(max-width: 520px)");

  const sections = [
    {
      imageSrc: "./AboutLeo/Four.png",
      heading: "Leo Clubs: Dedicated to Serving Those in Need",
      text: "Leo clubs - to provide assistance and support to individuals and communities who need it most. It emphasizes the compassionate and proactive nature of Leo members in making a positive difference through service.  Leo clubs aim to serve - individuals and communities who are facing challenges or hardships. This could include people experiencing poverty, illness, natural disasters, or other difficult circumstances.",
      color: "primary.6",
      subSections: [
        { heading: "Leadership", subtext: "100%", color: "primary.7" },
        { heading: "Experience", subtext: "100%", color: "primary.8" },
        { heading: "Opportunity", subtext: "100%", color: "primary.9" },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <Box key={index} bg={section.color}>
          <Box
            p="15px 10px 10px 15px"
            maxW="1200px"
            m="0 auto"
            display="flex"
            flexDirection={isSmallerThan950 ? "column" : "row"}
            justifyContent={isSmallerThan950 ? "center" : "flex-start"}
          >
            <Box w="-webkit-fill-available">
              <Image
                src={section.imageSrc}
                borderRadius="5px"
                w={isSmallerThan1024 ? "300px" : "100%"}
                h="400px"
              />
            </Box>
            <Box p="30px 20px 20px 30px">
              <Heading pb="10px">{section.heading}</Heading>
              <Text pb="10px">{section.text}</Text>
              {section.subSections.map((subSection, subIndex) => (
                <Box key={subIndex} px={isSmallerThan520 ? "20px" : "150px"}>
                  <Box display="flex" justifyContent="space-between">
                    <Heading size="sm">{subSection.heading}</Heading>
                    <Text color="primary.1">{subSection.subtext}</Text>
                  </Box>
                  <Box h="5px" bg={subSection.color} mb="10px"></Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default AboutLeo;
