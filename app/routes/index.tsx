import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdHome, MdMenu } from "react-icons/md";
import type { LinksFunction, LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";
import stylesUrl from "../styles/index.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Project from "~/component/project";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesUrl,
  },
];

export const loader: LoaderFunction = async () => ({
  repos: await fetch("https://api.github.com/orgs/Zerite/repos").then((value) =>
    value.json(),
  ),
});

interface LoaderData {
  repos: {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
  }[];
}

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <>
      <Flex p="6" bg="gray.900">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          height="10"
          animation="spin 2s linear infinite"
        />
        <Spacer />
        <Menu>
          <MenuButton as={IconButton} icon={<MdMenu />} />
          <MenuList>
            <MenuItem icon={<MdHome />}>
              <Link to="/">Home</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box p="12" pt="4" bg="gray.900">
        <Center justifyContent={{ lg: "center", md: "start" }}>
          <Heading fontSize="5xl" fontFamily="mono">
            Hey, we&apos;re Zerite.
          </Heading>
        </Center>
        <Center justifyContent={{ lg: "center", md: "start" }}>
          <Text fontSize="m" fontFamily="mono" textColor="gray.600">
            A team of passionate developers, innovating in the gaming space.
          </Text>
        </Center>
        <Center justifyContent={{ lg: "center", md: "start" }}>
          <HStack pt="2">
            <a
              href="https://github.com/Zerite"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="GitHub" icon={<FaGithub />} />
            </a>
            <a
              href="https://twitter.com/ZeriteDev"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            </a>
          </HStack>
        </Center>
      </Box>
      <Box px={{ base: 12, lg: 24 }} py="12">
        <Heading fontSize="3xl" fontFamily="mono">
          Projects
        </Heading>
        <Text>Check out some of our open source solutions!</Text>

        <SimpleGrid
          pt={4}
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing={4}
        >
          {data.repos.map((value) => (
            <Project
              key={value.name}
              name={value.name}
              description={value.description}
              link={value.html_url}
              stars={value.stargazers_count}
              forks={value.forks_count}
              language={value.language}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
