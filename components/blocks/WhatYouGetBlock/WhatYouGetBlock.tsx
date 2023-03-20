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
    <div className='whatYouGetBG w-full h-full'>
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
            className={`grid grid-cols-1 items-center  justify-center md:gap-x-10 lg:grid-cols-3 container mx-auto  ${
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
                    className="flex flex-col bg-white rounded-md items-center px-2 my-8 text-center md:mx-auto"
                  >
                    <div>
                      <div className=" w-full   h-full my-10 ">
                        <Image
                          src={item?.gainsImage || avatar.src}
                          alt=''
                          objectPosition="bottom"
                          layout="intrinsic"
                          width="247px"
                          height="323px"
                        />
                      </div>
                      <div className="flex flex-col mt-0 md:mt-10 mb-5 md:mb-20">
                        <h3 className=" text-xl mt-10 md:text-2xl">{item?.gainsName}</h3>
                        <p className=" text-base mt-5">{item?.gainsDescription}</p>
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
