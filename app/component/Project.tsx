import {
  Badge,
  Box,
  Center,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
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
  color: string;
}

const Project = (props: Props) => (
  <Box
    borderRadius={4}
    borderWidth={1}
    as="a"
    href={props.link}
    target="_blank"
    rel="noreferrer"
  >
    <VStack p="5" h="100%">
      <Stack spacing="1" alignSelf="start">
        <Text textColor="blue.400">{props.name}</Text>
        <Text>{props.description}</Text>
      </Stack>
      <Spacer />
      <HStack alignSelf="start">
        {props.language && (
          <Badge colorScheme={props.color} variant="solid">
            <Center>{props.language}</Center>
          </Badge>
        )}
        <HStack>
          <GoStar color="#e3b341" />
          <Text>{props.stars}</Text>
        </HStack>
        <HStack>
          <GoRepoForked color="#8b949e" />
          <Text>{props.forks}</Text>
        </HStack>
      </HStack>
    </VStack>
  </Box>
);

export default Project;
