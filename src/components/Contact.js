import React from 'react'
import { AiOutlineMail} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <div name='contact' className='w-full lg:h-screen lg:mt-[17rem]'>
        <div className='max-w-[1240px] mx-auto px-2 lg:py-[9rem] py-[4rem]'>
            <div className='py-2'>
                <p className='text-3xl font-bold inline border-b-4 border-[#ff5757] uppercase tracking-widest'>Contact</p>
            </div>
            <h2 className='text-4xl text-gray-400 py-4 font-bold'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4'>
                    <div className='lg:p-4 w-full'>
                        <div>
                            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" className='rounded-xl hover:scale-105 ease-in duration-300' />
                        </div>
                        <div>
                            <h2 className='py-2 font-bold text-2xl'>Hilary Okemeziem</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4'>I am available for freelance, part-time or full-time positions. Contact me and let's talk.</p>
                        </div>
                    </div>

                    <div>
                        <p className='uppercase pt-8 text-center'>Connect With me</p>

                        <div className='flex items-center justify-between py-4 p-14'>
                            <a
                            href='https://www.linkedin.com/in/clint-briley-50056920a/'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            </a>
                            <a
                            href='https://github.com/fireclint'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            </a>
                            <Link href='/#contact'>
                                <div className='rounded-full shadow-md shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </Link>
                            <Link href='/resume'>
                                <div className='rounded-full shadow-md shadow-black bg-[#0e0e10] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </Link>
                        </div>
                    </div>  
                </div>

                <div className='col-span-3 w-full h-auto shadow-md shadow-black bg-[#0e0e10] rounded-xl'>
                    <div className='p-4'>
                        <form action='https://getform.io/f/ca318b4d-45cc-42a1-ade3-b46122deca17' method='POST'>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex 
                                    border-gray-300 text-black' name='name'  />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input type="tel" className='border-2 rounded-lg p-3 flex 
                                    border-gray-300 text-black ' name='tel' />
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="email" className='border-2 rounded-lg p-3 flex 
                                    border-gray-300 text-black ' name='email' />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex 
                                    border-gray-300 text-black ' name='subject' />
                            </div>

                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300 text-black' name='message' rows='5'></textarea>
                            </div>

                            <button className='w-full p-4 mt-4 shadow-md shadow-black rounded-xl uppercase bg-gradient-to-r from-[#ff5757] to-[#f899ac] text-gray-100'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact