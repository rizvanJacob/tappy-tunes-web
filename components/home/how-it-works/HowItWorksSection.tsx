import { Box, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";

export function HowItWorksSection() {
  return (
    <Box bg="white" borderRadius="xl" p={{ base: 6, md: 10 }}>
      <Stack padding={4}>
        <Heading size="xl">How it works</Heading>
        <Text color="gray.600">
          TappyTunes turns music into something children can control physically:
          TappyTiles.
        </Text>
        <Text color="gray.600">Uses your Spotify Premium</Text>
        <Text color="gray.600">TappyTiles can be re-paired</Text>
        <Text color="gray.600">Ships with a starter pack of TappyTiles</Text>
        <Heading size="md">Tap a tile, music plays.</Heading>
        <Heading size="md">It's that simple</Heading>
      </Stack>
    </Box>
  );
}
