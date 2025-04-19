import { POSTS_URL } from '@/configs/app-configs';
import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  return jsonPosts;
};
