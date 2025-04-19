import { Block } from '@/domain/posts/posts';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export const markdownToHtml = async (content: Block[]): Promise<string> => {
  const htmlBlocks = await Promise.all(
    content.map(async (block) => {
      if (block.type === 'paragraph') {
        const text = block.children.map((child) => child.text).join('');

        const result = await remark().use(remarkHtml).process(text);
        const htmlText = String(result).trim();

        return `<p>${htmlText}</p>`;
      }
      return '';
    }),
  );

  return htmlBlocks.join('\n');
};
