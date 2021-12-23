export interface RepoResponse {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

let cachedRepos: RepoResponse[] = [];

export const fetchRepos = async () => {
  if (cachedRepos.length) return cachedRepos;

  const response = await fetch("https://api.github.com/orgs/Zerite/repos");
  if (response.status !== 200) {
    throw new Error(`Failed to fetch repos: ${response.statusText}`);
  }

  const repos: RepoResponse[] = (await response.json()).filter(
    (value: RepoResponse) => !value.name.startsWith("."),
  );

  cachedRepos = repos;
  return repos;
};
