import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import next from '../images/icons8-next.js-144.png'
import bootstrap from '../images/icons8-bootstrap-144.png'
import wordpress from '../images/icons8-wordpress-144.png'
import tailwind from '../images/tailwind.png'
import firebase from '../images/firebase.png'
import github from '../images/github.png'
import git from '../images/icons8-git-144.png'

const Skills = () => {
  return (
    <div name='skill' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex  flex-col justify-center h-full lg:pl-4 mt-[2.8rem] py-[1rem] lg:py-0'>
            <div className='py-2'>
                <p className='text-3xl font-bold inline border-b-4 border-[#ff5757] uppercase tracking-widest'>Skills</p>
            </div>
            <h2 className='text-4xl text-gray-400 font-bold py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={html} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={css} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={javascript} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={react} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React JS </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={next} alt="/" style={{width: '70px', height: '70px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next JS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={tailwind} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={bootstrap} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={firebase} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={git} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={github} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-md shadow-black bg-[#0e0e10] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='mx-auto'>
                            <img src={wordpress} alt="/" style={{width: '64px', height: '64px'}} />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills