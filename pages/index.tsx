import { Box, Container, Stack } from "@chakra-ui/react";
import { CardsSection } from "../components/home/hero/CardsSection";
import { HeroSection } from "../components/home/hero/HeroSection";
import { HowItWorksSection } from "../components/home/how-it-works/HowItWorksSection";
import { SignUpFormSection } from "../components/home/sign-up-form/SignUpFormSection";

export default function HomePage() {
  return (
    <Box bg="gray.50" minH="100vh" py={{ base: 10, md: 16 }}>
      <Container maxW="6xl">
        <Stack spacing={{ base: 12, md: 16 }}>
          <HeroSection />
          <CardsSection />
          <HowItWorksSection />
          <SignUpFormSection />
        </Stack>
      </Container>
    </Box>
  );
}
