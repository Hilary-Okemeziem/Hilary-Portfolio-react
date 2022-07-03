import React from 'react'
import { Link } from 'react-scroll'
import netflix from '../images/netflix.png'
import crypto from '../images/crypto.png'
import twitch from '../images/twitch.png'

const Projects = () => {
  return (
    <div name='project' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 lg:py-[9rem] py-[5rem]'>
            <div className='py-2'>
                <p className='text-3xl font-bold inline border-b-4 border-[#ff5757] uppercase tracking-widest'>Projects</p>
            </div>
            <h2 className='text-4xl text-gray-400 py-4 font-bold'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]'>
                    <img src={netflix} alt="/" className='rounded-xl group-hover:opacity-30' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-3xl tracking-wider text-white text-center'>Netflix UI Clone</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                        <Link to='/netflix'>
                            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]'>
                    <img src={crypto} alt="/" className='rounded-xl group-hover:opacity-30' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-3xl tracking-wider text-white text-center'>Crypto App</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                        <Link href='/'>
                            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

                <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-black bg-[#0e0e10] rounded-xl p-4 group hover:bg-gradient-to-r from-[#ff5757] to-[#f899ac]'>
                    <img src={twitch} alt="/" className='rounded-xl group-hover:opacity-30' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-3xl tracking-wider text-white text-center'>Twitch UI Clone</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Next JS</p>
                        <Link href='/'>
                            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects