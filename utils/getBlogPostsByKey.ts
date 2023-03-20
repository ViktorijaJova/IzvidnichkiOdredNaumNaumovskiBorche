import { BlogPostConnectionEdges } from '../.tina/__generated__/types';

const getBlogPostsByKey = (
  filterQuery: string,
  articleNo: number,
  blogPosts: any[]
) => {
  const keywords: Array<string> = [];
  if (filterQuery) {
    filterQuery
      .split(', ', articleNo)
      .forEach((keyword: string) => keywords.push(keyword));
  }

  const filteredBlogPosts: Array<BlogPostConnectionEdges> = [];

  for (const keyword of keywords) {
    filteredBlogPosts.push(
      blogPosts.find(
        (blogPost: BlogPostConnectionEdges) =>
          blogPost?.node?.data?.seo?.key === keyword
      )
    );
  }
  return filteredBlogPosts;
};

export default getBlogPostsByKey;
