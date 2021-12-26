import { httpClient } from "~/external/CachedHttpClient";

export interface RepoResponse {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const fetchRepos = async (user: string) =>
  await httpClient.get<RepoResponse[]>(
    `https://api.github.com/orgs/${user}/repos`,
  );
