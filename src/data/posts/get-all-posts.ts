import { POSTS_URL } from '@/configs/app-configs';
import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = fetchJson<PostData[]>(POSTS_URL);
  return posts;
};
