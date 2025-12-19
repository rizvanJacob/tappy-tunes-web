import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export function HeroSection() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      padding={{ base: 8, md: 12 }}
      align="center"
    >
      <Box flex="1" w="full">
        <Image
          alt="Tappy Tunes hero preview"
          src="/static/hero-2.png"
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "24px",
          }}
          priority
        />
      </Box>
      <Stack flex="1" padding={4}>
        <Heading size={{ base: "xl", md: "2xl" }}>
          Remember when music didn't need a screen?
        </Heading>
        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
          Everything you love about music streaming, without giving the little
          ones a screen
        </Text>
      </Stack>
    </Stack>
  );
}
