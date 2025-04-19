import { POSTS_URL } from '@/configs/app-configs';
import { fetchJson } from '@/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count&${query}`;
  const numberOfPosts = fetchJson<string>(url);
  return numberOfPosts;
};
