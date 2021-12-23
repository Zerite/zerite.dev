import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdHome, MdMenu } from "react-icons/md";
import type { LinksFunction, LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";
import stylesUrl from "../styles/index.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Project from "~/component/Project";
import { Logo } from "~/component/Logo";
import { fetchRepos, RepoResponse } from "~/external/GitHub";

// noinspection JSUnusedGlobalSymbols
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesUrl,
  },
];

export const loader: LoaderFunction = async () => ({
  repos: await fetchRepos(),
});

interface LoaderData {
  repos: RepoResponse[];
}

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <>
      <main className="content">
        <Box bg="gray.900">
          <Flex p="6" justifyContent="space-between">
            <Logo h={10} spin={true} />
            <Menu>
              <MenuButton as={IconButton} icon={<MdMenu />} aria-label="Menu" />
              <MenuList>
                <MenuItem icon={<MdHome />}>
                  <Link to="/">Home</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Box p="12" pt="4">
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
      </main>
      <Box as="footer" py="12" px={{ base: "4", md: "8" }} bg="gray.900">
        <Stack>
          <Stack direction="row" spacing="4" align="center">
            <Text as="b">Zerite Development</Text>
          </Stack>
          <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }}>
            &copy; {new Date().getFullYear()} Zerite Development. All rights
            reserved.
          </Text>
        </Stack>
      </Box>
    </>
  );
}
