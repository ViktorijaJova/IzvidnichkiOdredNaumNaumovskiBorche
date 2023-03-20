import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import getBlogPostsByKey from '../../../utils/getBlogPostsByKey';
import getBlogPostsByLanguage from '../../../utils/getBlogPostsByLanguage';
import parseTinaFileName from '../../../utils/parseTinaFileName';
import img1 from './assets/article1.webp';

const ArticlesBlogBlock = ({
  blockData,
  blogPosts,
  articleNo,
}: any): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const router = useRouter();
  const { t } = useTranslation();

  const filteredBlogsByLanguage = getBlogPostsByLanguage(
    blogPosts,
    router.locale as string,
    articleNo
  );

  const filteredBlogsByKey = getBlogPostsByKey(
    blockData.filterQuery,
    blockData.articleNo,
    filteredBlogsByLanguage as any[]
  );

  const finalFilteredBlogs =
    filteredBlogsByKey.length != 0
      ? filteredBlogsByKey
      : filteredBlogsByLanguage?.slice(0, blockData.articleNo);

  return (
    <div className="min-h-fit text-darkGray bg-white " ref={ref}>
      <div className="container mx-auto " ref={ref}>
        <div className={`pt-8 ${inView ? 'fade-in-bottom' : ''}`}>
          <ul className="grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-4">
            {finalFilteredBlogs?.map((card: any, index: number) => (
              <li key={index}>
                {card && card.node && card.node.sys && (
                  <Link
                    href={
                      card.node.sys?.filename
                        ? `/blog/${
                            parseTinaFileName(card.node?.sys.filename).slug
                          }`
                        : ''
                    }
                    passHref
                  >
                    <a>
                      <div className="flex overflow-hidden flex-col items-center pt-10 max-w-sm cursor-pointer  sm:items-start">
                        <div id="top" className="group relative">
                          <div className="w-[333px] h-[176px]">
                            <Image
                              className=""
                              src={
                                card.node.data?.thumbnail
                                  ? card.node.data.thumbnail
                                  : img1
                              }
                              alt="image"
                              layout="responsive"
                              objectFit="cover"
                              width={333}
                              height={176}
                            />
                          </div>

                          <div
                            id="image"
                            className="flex items-start py-5 max-w-[337px]  text-[#22789D]"
                          >
                            <div className=" flex mt-[20px] h-[45px] text-[17px] font-normal md:h-[20px]">
                              {card.node.data?.blogHeroTitle ? (
                                <TinaMarkdown
                                  content={card.node.data?.blogHeroTitle}
                                />
                              ) : (
                                'title'
                              )}
                            </div>
                          </div>
                          <div>
                            <div className=" text-black hover:text-[#22789D] hover:underline">
Прочитај повеќе
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticlesBlogBlock;
