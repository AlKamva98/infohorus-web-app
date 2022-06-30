import React from 'react';

function ContactSec(props) {
    return (
        <div className='bg-cyan-900 '>
            
            <div className="flex flex-col items-center text-center justify-between col-span-4 px-8 py-12 space-y-4 ">
                <h1 className="text-4xl py-4 text-white text-center font-bold tracking-tight ">Contact Us</h1>
                <p className='text-base text-gray-100 text-center mx-32'>Do you have questions about which products or services are right for your organization? We would be delighted to assist you.</p>
                <p className='text-base text-gray-100 text-center'>Please fill out the form and a Bahati Tech Representative will follow up with you by phone or e-mail.</p>
            <button className='flex items-center w-full btn px-6 py-3 mb-3 text-lg text-white bg-gray-900 rounded-full sm:mb-0 hover:bg-gray-700 sm:w-auto'>Send Message</button>
            </div>
        </div>
    );
}

export default ContactSec;