import { Badge, Box, Center, HStack, Stack, Text } from "@chakra-ui/react";
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
  <Box borderRadius={4} borderWidth={1}>
    <a href={props.link} target="_blank" rel="noreferrer">
      <Stack p="5">
        <Text textColor="blue.400">{props.name}</Text>
        <Text>{props.description}</Text>
        <HStack>
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
        </HStack>
      </Stack>
    </a>
  </Box>
);

export default Project;
