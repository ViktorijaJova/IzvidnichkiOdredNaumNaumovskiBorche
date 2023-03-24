import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import {
  PagesPageBlocksPdf
} from '../../../.tina/__generated__/types';
import logo from './assets/logo.png';

function PdfBlock({
  pdfTitle,
pdfIcon,
pdfButton  
}: PagesPageBlocksPdf): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className='whatYouGetBG md:h-[390px] w-full h-full lg:w-[1100px]'>
      <div className="flex flex-col md:flex-row md:justify-around" ref={ref}>
        <div
          className="flex flex-col pt-24 md:justify-start justify-center items-center md:items-start px-20 w-full"
        >
          <div
            className={`text-2xl text-center md:text-5xl pt-20 text-white ${
              inView ? 'fade-in-left' : ''
            }`}
          >
            {pdfTitle && <TinaMarkdown content={pdfTitle} />}{' '}
          </div>
          <a href='' target='_blank'
            className={` text-lg md:text-2xl bg-[#22789D] text-center mt-10 rounded-full px-10 py-4  text-white ${
              inView ? 'fade-in-left' : ''
            }`}
          >
            {pdfButton && <TinaMarkdown content={pdfButton} />}{' '}
          </a>
        </div>
                      <div className=" md:items-center md:flex hidden pr-40 pt-28 ">
                        <Image
                          src={pdfIcon || logo.src}
                          alt=''
                          width="240px"
                          height="240px"
                        />
        </div>
        <div className="flex items-center justify-center self-center md:hidden pt-28 pb-20 ">
                        <Image
                          src={pdfIcon || logo.src}
                          alt=''
                          width="140px"
                          height="140px"
                        />
        </div>
      </div>
    </div>
  );
}

export default PdfBlock;
