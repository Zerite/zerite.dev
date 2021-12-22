import {
  Badge,
  Box,
  Center,
  HStack,
  Link,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { GoRepoForked, GoStar } from "react-icons/go";

interface Props {
  name: string;
  description: string;
  link?: string;
  stars: number;
  forks: number;
  language: string;
}

const Project = (props: Props) => (
  <Box p="5" borderRadius={4} borderWidth={1}>
    <Stack>
      <Text textColor="blue.400">
        <Link href={props.link ?? "#"} target="_blank">
          {props.name}
        </Link>
      </Text>
      <Text>{props.description}</Text>
      <Wrap>
        {props.language && (
          <Badge colorScheme="blue" variant="solid">
            <Center height={6}>{props.language}</Center>
          </Badge>
        )}
        <HStack>
          <GoStar color="yellow" />
          <Text>{props.stars}</Text>
        </HStack>
        <HStack>
          <GoRepoForked color="gray" />
          <Text>{props.forks}</Text>
        </HStack>
      </Wrap>
    </Stack>
  </Box>
);

export default Project;
