import { Button, Collapse, Flex, HStack, Image } from "@chakra-ui/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const defaultValues = {
  images: null,
  captions: null,
  index: 0,
  prevIndex: -1,
};
const ImageSlideContext = createContext(defaultValues);

const ImageSlideController = () => {
  const [slide, setSlide] = useContext(ImageSlideContext);
  const changeSlide = (index) => {
    if (index >= slide?.images.length) {
      index = 0;
    }
    setSlide((prev) => {
      return {
        ...prev,
        index: index,
      };
    });
  };

  var interval = null;
  const autoSlide = useRef();
  autoSlide.current = () => {
    if (slide?.auto > 0) {
      interval = setInterval(() => {
        setSlide((prev) => {
          return {
            ...prev,
            index: prev.index + 1 >= prev.images.length ? 0 : prev.index + 1,
          };
        });
      }, slide.auto);
    }
  };
  useEffect(() => {
    autoSlide.current();
    return () => clearInterval(interval);
  }, [interval, slide.auto]);

  return (
    <HStack mt={4} justify="center" position="absolute" bottom="16px" w="full">
      {slide?.images &&
        slide?.images.map((img, index) => (
          <Button
            onClick={() => changeSlide(index)}
            colorScheme={slide?.index === index ? "green" : "red"}
            borderRadius="full"
            size="xs"
            key={`button_${img}`}
            mx="2"
          >
            {index + 1}
          </Button>
        ))}
    </HStack>
  );
};

const ImageDisplay = ({ minH }) => {
  const [slide] = useContext(ImageSlideContext);

  return (
    slide?.images && (
      <Flex position="relative" w="full" h="600px" minH={minH}>
        {slide?.images &&
          slide?.images.map((img, index) => (
            <Image
              key={`image_${img}`}
              src={img}
              w="100%"
              h="100%"
              objectFit="cover"
              style={{
                filter: "brightness(60%)",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: index === slide?.index ? 1 : 0,
                transition: "opacity 0.9s ease-in-out",
              }}
            />
          ))}
        <ImageSlideController />
      </Flex>
    )
  );
};

const ImageSlide = ({ images, auto = 2000, minH = "500px" }) => {
  const [slide, setSlide] = useState({
    ...defaultValues,
    images: images,
    auto: auto,
  });

  return (
    <ImageSlideContext.Provider value={[slide, setSlide]}>
      <Flex w="full" direction="column">
        <ImageDisplay minH={minH} />
      </Flex>
    </ImageSlideContext.Provider>
  );
};

export default ImageSlide;
