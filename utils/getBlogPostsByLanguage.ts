import {
  BlogPostConnectionEdges,
  PagesConnectionEdges,
} from '../.tina/__generated__/types';

const getBlogPostsByLanguage = (
  blogPosts: any[],
  locale: string,
  numberOfBlogs: number
) => {
  const enBlogs = blogPosts.filter(
    (post: {
      node: { sys: { filename: string }; data: { hideBlog: boolean } };
    }) => !post.node?.data.hideBlog && post.node.sys?.filename.endsWith('.en')
  );


  if (locale === 'en') {
    return enBlogs.slice(0, numberOfBlogs);
  }
 
};

export const getPagesByLanguage = (
  pages: PagesConnectionEdges[],
  locale: string
) => {
  const enPages = pages.filter((page: PagesConnectionEdges) =>
    page?.node?.sys?.filename.endsWith('.en')
  );

  

  if (locale === 'en') {
    return enPages;
  }
 
};

export const getBlogPostsByLanguageNoNumber = (
  blogPosts: BlogPostConnectionEdges[],
  locale: string
) => {
  const enBlogs = blogPosts.filter(
    (post: BlogPostConnectionEdges) =>
      !post.node?.data.hideBlog && post?.node?.sys?.filename.endsWith('.en')
  );

 

  if (locale === 'en') {
    return enBlogs;
  }

};

export default getBlogPostsByLanguage;
