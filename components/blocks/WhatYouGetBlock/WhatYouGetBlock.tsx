import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import {
  PagesPageBlocksWhatYouGet
} from '../../../.tina/__generated__/types';
import avatar from './assets/avatar.png';

function WhatYouGetBlock({
 whatYouGetDescription,
 whatYouGetTitle,
 gains
}: PagesPageBlocksWhatYouGet): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className='whatYouGetBG'>
      <div className="" ref={ref}>
        <div
          className="flex flex-col justify-center items-center w-full"
        >
          <div
            className={`text-3xl text-center md:text-5xl pt-48 text-white ${
              inView ? 'fade-in-left' : ''
            }`}
          >
            {whatYouGetTitle && <TinaMarkdown content={whatYouGetTitle} />}{' '}
          </div>
          <div
            className={`text-xl md:text-3xl pt-10  text-white ${
              inView ? 'fade-in-left' : ''
            }`}
          >
            {whatYouGetDescription && <TinaMarkdown content={whatYouGetDescription} />}{' '}
          </div>
        </div>
        <div id="gains">
          <ul
            className={`grid grid-cols-1 lg:grid-cols-3 container mx-auto  ${
              inView ? 'fade-in-bottom' : ''
            }`}
          >
            {gains &&
              gains?.map(
                (
                  item: any,
                  index: number
                ) => (
                  <li
                    key={
                      (item?.gainsName && item.gainsName + index) ||
                      'Gains' + index
                    }
                    className="flex flex-col bg-white gap-x-10 items-center px-2 my-8 text-center md:mx-auto"
                  >
                    <div>
                      <div className="mb-4   w-full  h-full rounded-full md:my-10 md:w-[244px] md:max-w-full  md:h-[244px] md:max-h-full">
                        <Image
                          src={item?.gainsImage || avatar.src}
                          alt=''
                          objectPosition="bottom"
                          layout="intrinsic"
                          width="247px"
                          height="323px"
                        />
                      </div>
                      <div className="flex flex-col -mt-5 md:mt-20">
                        <h3 className="text-2xl">{item?.gainsName}</h3>
                        <p className=" text-base">{item?.gainsDescription}</p>
                      </div>
                    </div>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhatYouGetBlock;
