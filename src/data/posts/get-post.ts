import { POSTS_URL } from '@/configs/app-configs';
import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';
import { markdownToHtml } from '@/utils/markdown-to-html';
// import { renderContentToHtml } from '@/utils/render-content-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  const contentHtml = await markdownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], contentHtml };
  return [finalContent];
};
