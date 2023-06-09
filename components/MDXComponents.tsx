import {
  Alert,
  Box,
  Code,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

const CustomImage = (props: any) => {
  return (
    <Image
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
      my={6}
    />
  );
};

const CustomLink = (props: any) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "brand.500",
    dark: "brand.500",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: any) => {
  return (
    <Alert
      mt={4}
      w="98%"
      colorScheme="brand"
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const DocsHeading = (props: any) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  //eslint-disable-next-line
  h1: (props: any) => <Heading as="h1" size="lg" my={4} {...props} />,
  //eslint-disable-next-line
  h2: (props: any) => (
    <DocsHeading as="h2" size="md" fontWeight={500} {...props} />
  ),
  //eslint-disable-next-line
  h3: (props: any) => (
    <DocsHeading as="h3" size="sm" fontWeight={500} {...props} />
  ),
  //eslint-disable-next-line
  h4: (props: any) => (
    <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />
  ),
  //eslint-disable-next-line
  h5: (props: any) => (
    <DocsHeading as="h5" size="xs" fontWeight="bold" {...props} />
  ),
  //eslint-disable-next-line
  h6: (props: any) => (
    <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />
  ),
  //eslint-disable-next-line
  inlineCode: (props: any) => (
    <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  ),
  pre: (props: any) => (
    <Code
      fontSize="0.84em"
      w="100%"
      whiteSpace="pre-wrap"
      p={4}
      rounded="md"
      backgroundColor="gray.50"
      {...props}
    />
  ),
  //eslint-disable-next-line
  br: (props: any) => <Box height="24px" {...props} />,
  //eslint-disable-next-line
  p: (props: any) => <Text as="p" my={4} lineHeight="tall" {...props} />,
  //eslint-disable-next-line
  ul: (props: any) => (
    <Box as="ul" pt={2} pl={4} ml={2} {...props} ordered="true" />
  ),
  //eslint-disable-next-line
  ol: (props: any) => (
    <Box as="ol" pt={2} pl={4} ml={2} {...props} ordered="true" />
  ),
  //eslint-disable-next-line
  li: (props: any) => <Box as="li" pb={1} {...props} ordered="true" />,
  blockquote: Quote,
  img: CustomImage,
  hr: Hr,
  a: CustomLink,
};

export { CustomLink };

export default MDXComponents;
