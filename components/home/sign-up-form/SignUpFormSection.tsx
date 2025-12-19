import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react"

export function SignUpFormSection() {
  return (
    <Box bg="white" borderRadius="xl" p={{ base: 6, md: 10 }}>
      <Stack spacing={6}>
        <Heading size="lg">Sign up for early access</Heading>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Text fontWeight="semibold">Email</Text>
            <Input placeholder="you@example.com" type="email" />
          </Stack>

          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Label>Spotify Premium member</Checkbox.Label>
          </Checkbox.Root>

          <Stack spacing={2}>
            <Text fontWeight="semibold">Mobile OS</Text>
            <RadioGroup.Root defaultValue="ios">
              <HStack spacing={6} flexWrap="wrap">
                <RadioGroup.Item value="ios">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemControl>
                    <RadioGroup.ItemIndicator />
                  </RadioGroup.ItemControl>
                  <RadioGroup.ItemText lineHeight="1">iOS</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="android">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemControl>
                    <RadioGroup.ItemIndicator />
                  </RadioGroup.ItemControl>
                  <RadioGroup.ItemText lineHeight="1">
                    Android
                  </RadioGroup.ItemText>
                </RadioGroup.Item>
              </HStack>
            </RadioGroup.Root>
          </Stack>
        </Stack>
        <Button colorScheme="teal" size="lg" alignSelf="start">
          Request access
        </Button>
      </Stack>
    </Box>
  )
}
