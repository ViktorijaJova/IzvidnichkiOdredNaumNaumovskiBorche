import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { PagesPageBlocksContactPage } from '../../../.tina/__generated__/types';
import address from './assets/address2.svg';
import circle from './assets/circle.png';
import clock from './assets/clock.svg';
import emailIcon from './assets/email.svg';
import facebook from './assets/facebook.svg';
import instagram from './assets/insta.svg';
import linkedin from './assets/linkedin.svg';
import phone from './assets/phone.svg';




function ContactPageBlock({
  contactTitle,
  contactEmail,
  contactEmailIcon,
  contactPhone,
  contactPhoneIcon,
  contactAddress,
  contactAddressIcon,
  openingHours,
  openingHoursIcon,
  contactButton,
  contactSecondButton,
  contactInstagram,
  contactLinkedin,
  contactFacebook,
  contactAddressIconAlt,
  contactEmailIconAlt,
  contactFacebookAlt,
  contactInstagramAlt,
  contactLinkedinAlt,
  contactPhoneIconAlt,
  openingHoursIconAlt,
}: PagesPageBlocksContactPage): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      const { name, email, message } = values;
      const body = `Име: ${name}\nЕмаил: ${email}\nПорака: ${message}`;
      const encodedBody = encodeURIComponent(body);
      window.open(`mailto:viko.jovanovska@gmail.com?subject=Контакт&body=${encodedBody}`);
    },
  });



  return (
    <>
        <div className="relative z-10 ">
          <div className="container flex flex-col items-center md:justify-around pb-32 mx-auto mt-8 w-full lg:flex-row">
            <div id="left-quote" className="flex flex-col md:w-1/2">
              <div className="flex flex-col gap-y-5 pt-32 max-w-[90%]">
                <div className="pb-5 text-[40px] text-[#22789D]">
                  {contactTitle && <TinaMarkdown content={contactTitle} />}
                </div>
                <div className="flex gap-x-5 pb-4">
                  <div>
                    <Image
                      src={contactEmailIcon || emailIcon.src}
                      width={22}
                      height={22}
                      alt={contactEmailIconAlt || ''}
                    />
                  </div>
                  <a href="mailto:viko.jovanovska@gmail.com">
                    <p className="items-center text-xl text-[#22789D] underline cursor-pointer">
                      {contactEmail}
                    </p>
                  </a>
                </div>
                <div className="flex gap-x-5 pb-4">
                  <div>
                    <Image
                      src={contactPhoneIcon || phone.src}
                      width={22}
                      height={22}
                      alt={contactPhoneIconAlt || ''}
                    />
                  </div>
                  <a href="tel:32-9-345-09-97">
                    <p className="items-center text-xl text-[#22789D] cursor-pointer">
                      {contactPhone}
                    </p>
                  </a>
                </div>
                <div className="flex gap-x-5 pb-4">
                  <div>
                    <Image
                      src={contactAddressIcon || address.src}
                      width={30}
                      height={35}
                      alt={contactAddressIconAlt || ''}
                    />
                  </div>
                  <p className="items-center text-xl text-[#22789D] ">
                    {contactAddress}
                  </p>
                </div>
                <div className="flex gap-x-5 pb-4">
                  <div>
                    <Image
                      src={openingHoursIcon || clock.src}
                      width={22}
                      height={22}
                      alt={openingHoursIconAlt || ''}
                    />
                  </div>
                  <div className="text-xl text-[#22789D]">
                    {openingHours && <TinaMarkdown content={openingHours} />}
                  </div>
                </div>

                <div className="flex flex-row gap-x-9  justify-start items-center  hi-icon-effect-2">
                  <Link
                    href=""
                    passHref
                  >
                    <a className="hi-icon-2 ">
                      <Image
                        alt={contactInstagramAlt || ''}
                        src={contactInstagram || instagram}
                        width={31.91}
                        height={30.11}
                        className="z-10"
                      />
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a className="hi-icon-2">
                      <Image
                        alt={contactFacebookAlt || ''}
                        src={contactFacebook || facebook}
                        width={31.88}
                        height={30.11}
                        className="z-10"
                      />
                    </a>
                  </Link>
                  <Link
                    href=""
                    passHref
                  >
                    <a className="hi-icon-2">
                      <Image
                        alt={contactLinkedinAlt || ''}
                        src={contactLinkedin || linkedin}
                        width={31.11}
                        height={30.11}
                        className="z-10"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div id="right-quote" className="flex ">
              <div className="flex gap-y-10 pt-20">
                <form
                 className="self-center bg-[#22789D] lg:p-20 p-4 rounded-2xl" 
                 onSubmit={formik.handleSubmit} >
                 <div className="flex  flex-col  gap-x-4 gap-y-6 pb-6">
                  <div className=' text-white text-2xl'>Контактирајте не</div>
                  <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
          
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder='Име и Презиме'
          onChange={formik.handleChange}
          value={formik.values.name}
          className=" w-[200px] md:w-full p-2 border text-[#22789D] border-gray-400 rounded-lg"
        />
      </div>
                    <div className="flex flex-row gap-x-4">
                    <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
          
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder='Емаил адреса'
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-[200px] md:w-full  p-2 border text-[#22789D] border-gray-400 rounded-lg"
        />
      </div>
                    
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      placeholder='Порака...'
                      className="p-2 mb-4 w-[200px] md:w-full  text-[#22789D]  h-[153px] text-sm rounded-xl border border-gray  resize-none "
                    />
                  
                  </div>
             
                  <button
                    type="submit"
                    className=" flex  justify-center hover:text-[#22789D]  self-center py-3  px-8 mt-5 w-[277px] text-lg font-bold text-white hover:text-darkGreen capitalize bg-darkGreen hover:bg-white  rounded-xl border-2 hover:border-2 hover:border-darkGreen transition  duration-[400ms] cursor-pointer sm:self-start "
                  >
                    {contactButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ContactPageBlock;

