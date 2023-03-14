import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { PagesPageBlocksDescription } from '../../../.tina/__generated__/types';

function DescriptionBlock({
  theDescription,
}: PagesPageBlocksDescription): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="w-full bg-white" ref={ref}>
      <div
        className={`container mx-auto ${
          inView ? 'fade-in-bottom' : ''
        }`}
      >
         
          <div className="flex w-full ">
            <div className=" flex-col md:text-xl text-lg text-black  ">
              {theDescription && (
                <TinaMarkdown content={theDescription} />
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default DescriptionBlock;
