import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to FitBae - where style meets convenience! Founded with a
            passion for fashion and a commitment to quality, we are your go-to
            destination for the latest trends, timeless classics, and everything
            in between.
          </p>
          <p>
            At FitBae, we believe that clothing is more than just fabric – it’s
            a form of self-expression. Our curated collections are designed to
            help you look and feel your best, whether you’re dressing for a
            special occasion or elevating your everyday wardrobe.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is simple: To empower individuals to express themselves
            confidently through fashion. We strive to inspire and support our
            customers by offering a diverse range of clothing that blends
            quality, comfort, and style.
          </p>
          <p>
            Join our growing community of fashion
            lovers and discover the perfect pieces to enhance your unique style.
            Thank you for choosing FitBae - we can't wait to be a
            part of your fashion journey!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 border divide-y md:divide-y-0 md:divide-x">
        <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We carefully select and inspect every item to ensure you receive only the best quality clothing. Our strict quality checks guarantee that each piece meets our high standards before it reaches you.
          </p>
        </div>
        <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Enjoy a smooth and easy shopping experience with fast shipping, secure payments, and a simple returns process. Finding your next favorite outfit has never been easier!
          </p>
        </div>
        <div className="px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our friendly support team is always here to help. Whether you have questions or need assistance, we’re dedicated to making your shopping experience exceptional every time.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
