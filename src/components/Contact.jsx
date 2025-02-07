import React, { useState } from 'react';
import Title from './Title';

function Contact() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
          action="http://localhost:3000/" 
          method="POST" 
          className='flex flex-col w-full md:w-7/12'
        >
          <Title>Contact Me</Title>

          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            className='my-4 p-2 bg-transparent border-2 focus:outline-none' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea 
            name="message"
            placeholder='Message'
            rows="10" 
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button 
            type='submit' 
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:text-black'
          >
            Work with Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
