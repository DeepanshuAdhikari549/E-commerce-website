import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            GRAPHIC ERA Fashion Street,
            <br />Dehradun , Uttarakhand, 248001 
          </p>
          <p className="text-gray-500">
            Tel: 91+6395906XXX <br /> Email: sagarnegi@gmail.com, deepanshuadhikari@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at FitBae
          </p>
          <p className="text-gray-500">
            Discover more about our company culture and explore current job
            openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <ContactForm/>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
