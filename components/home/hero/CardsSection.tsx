import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export function CardsSection() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
      <InfoCard
        number="01"
        title="All the power of music streaming"
        points={[
          "Bring your own Spotify account",
          "Millions of songs & podcasts",
          "New songs instantly available",
        ]}
      />
      <InfoCard
        number="02"
        title="Screen-free independence"
        points={[
          "Music controlled by TappyTiles",
          "Explore music independently",
          "Re-pair TappyTiles within seconds",
        ]}
      />
      <InfoCard
        number="03"
        title="On the device you already have"
        points={[
          "Runs on your phone",
          "Works with any audio accessory",
          "No new devices",
        ]}
      />
    </SimpleGrid>
  );
}

function InfoCard({
  number,
  title,
  points,
}: {
  number: string;
  title: string;
  points: string[];
}) {
  return (
    <Box bg="white" borderRadius="xl" p={6} boxShadow="sm">
      <VStack align="start" gap={3}>
        <Text fontSize="3xl" fontWeight="bold" color="teal.600">
          {number}
        </Text>
        <Heading size="md">{title}</Heading>
        <Stack gap={1} color="gray.600">
          {points.map((point) => (
            <Text key={point}>- {point}</Text>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
}
