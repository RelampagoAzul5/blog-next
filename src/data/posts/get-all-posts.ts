import { POSTS_URL } from '@/configs/app-configs';
import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = fetchJson<PostData[]>(url);
  return posts;
};
