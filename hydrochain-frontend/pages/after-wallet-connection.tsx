import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import { HydrogenClient, HydrogenQueryClient } from './codegen/hydrogenclient'

export default function All() {
  return (
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'}>
          <Center>
            <Text>Producer</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'}>
          <Center>
            <Text>Buyer</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'}>
          <Center>
            <Text>Consumer</Text>
          </Center>
        </Button>

      </Stack>
    </Center>
  );
}