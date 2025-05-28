import React from 'react'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-40 text-sm'>
        <div className=''>
            <img src={assets.logo} className='mb-5 w-23' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>At Fitbae, we believe fashion should be fun, accessible, and empowering for everyone. Our carefully curated collections blend comfort, quality, and the latest styles, making it easy for you to express your individuality with confidence. Whether you’re shopping for everyday essentials or standout pieces, we’re dedicated to delivering a seamless experience from browsing to delivery. Thank you for choosing Fitbae as your go-to destination for all things fashion. We’re excited to be a part of your style journey and look forward to serving you every step of the way!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>91+6395906XXX</li>
                <li>sagarnegi@gmail.com</li>
                <li>deepanshuadhikari@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @FitBae.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
