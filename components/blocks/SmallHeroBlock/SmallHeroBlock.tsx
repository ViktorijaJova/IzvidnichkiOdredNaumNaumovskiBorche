import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { PagesPageBlocksSmallHero } from '../../../.tina/__generated__/types';
import bg from './assets/bg.jpg';

function BlogPageHeroBlock({
  smallHeroTitle,
  smallBackgroundImage,
}: PagesPageBlocksSmallHero): JSX.Element {
  return (
    <div
      className="w-full  h-[250px] bg-darkGreen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${smallBackgroundImage || bg.src}`,
      }}
    >
      <div className="container mx-auto h-full">
        <div className="flex justify-center items-center h-full text-2xl md:text-5xl font-bold text-center text-white prose-strong:text-lightGreen md:text-[60px]">
          {smallHeroTitle && <TinaMarkdown content={smallHeroTitle} />}
        </div>
      </div>
    </div>
  );
}

export default BlogPageHeroBlock;
