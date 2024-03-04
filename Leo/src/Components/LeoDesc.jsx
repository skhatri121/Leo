import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
const LeoDesc = () => {
  const leoDetails = [
    {
      word: "L",
      heading: "Leadership",
      desc: "Leo clubs also provide a supportive and inclusive environment for members to explore and enhance their leadership potential. Through mentorship and guidance from experienced Lions, Leos can receive valuable feedback and insights that help them grow as leaders. They can also connect with other Leos from different backgrounds and cultures, which can broaden their perspectives and help them become more well-rounded leaders.",
    },
    {
      word: "E",
      heading: "Experience",
      desc: "Membership in a Leo club offers invaluable opportunities for personal and professional growth through practical experiences in leadership, community service, and mentorship. By taking on leadership roles, participating in community service projects, and engaging with mentors, Leos can develop essential skills, gain knowledge, and broaden their perspectives. These experiences empower Leos to become well-rounded individuals and effective leaders, equipped to make a positive impact on their communities and beyond.",
    },
    {
      word: "O",
      heading: "Opportunity",
      desc: "Leo clubs offer members a multitude of opportunities to develop leadership skills, engage in community service, and connect with a global network of peers and mentors. Through these experiences, Leos can gain valuable insights, build their leadership abilities, and expand their horizons. By connecting with a diverse group of individuals, they can broaden their perspectives and enhance their understanding of different cultures and communities. These opportunities not only benefit Leos personally and professionally but also enable them to make a meaningful impact on the world.",
    },
  ];
  const colors = ["primary.13", "primary.14", "primary.15"];
  const [isSmallerThan650] = useMediaQuery("(max-width: 650px)");
  return (
    <>
      <Box>
        <Box maxW="1200px" m="0 auto" p="10px 20px 20px 20px">
          {leoDetails.map((details, index) => (
            <Card align="center" mt="10px">
              <Box
                display="flex"
                flexDirection={isSmallerThan650 ? "column" : "row"}
                p="10px"
              >
                <Box>
                  <CardHeader textAlign="center">
                    <Heading
                      size="md"
                      lineHeight="10"
                      fontSize="140px"
                      color={colors[index]}
                    >
                      {details.word}
                    </Heading>
                    <Text
                      fontFamily="Habibi"
                      pt="45px"
                      fontSize="25px"
                      color={colors[index]}
                    >
                      {details.heading}
                    </Text>
                  </CardHeader>
                </Box>
                <Box>
                  <CardBody>
                    <Text fontFamily="Work Sans">{details.desc}</Text>
                  </CardBody>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default LeoDesc;
