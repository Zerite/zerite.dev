type Cache = {
  [key: string]: {
    data: unknown;
  };
};

let cache: { [key: string]: unknown };

declare global {
  interface Global extends NodeJS.Global {
    __cache: Cache;
  }
}

declare let global: Global;

if (process.env.NODE_ENV === "production") {
  cache = {};
} else {
  if (!global.__cache) {
    global.__cache = {};
  }
  cache = global.__cache;
}

export class CachedHttpClient {
  public async get<T>(url: string): Promise<T> {
    if (cache[url]) {
      return cache[url] as T;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    cache[url] = data;
    return data;
  }
}

export const httpClient = new CachedHttpClient();
