import React from 'react'
import myimg from '../images/IMG_9700.JPG'

const About = () => {
  return (
    <div name='about' className='w-full lg:h-screen flex items-center py-16 bg-[#070708]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-10'>
            <div className='col-span-3 pl-4'>
              <div className=' py-4'>
                <p className='text-3xl tracking-widest font-bold inline border-b-4 border-[#ff5757] uppercase '>About</p>
              </div>
              <h2 className='text-4xl font-bold py-2 text-gray-400'>Who I Am</h2>
              <p className='py-2 text-gray-400'>I am a Frontend Web Developer who loves making experiences that sticks. My passion for learning and my ability to learn quickly enabled me gain mastery over a wide range of design concepts and technologies.<b> My drive is simple:Build good websites that solves a problem. Also, build websites that people would love to use and experience again.</b></p>

              <p className='py-2 text-gray-400'>I take pride in my work, and only deliver professional, clean, polished products. Currently a student of the University of Lagos to gain my Bachelors Degree in Applied Physics and Electronics, I learnt frontend web development in Tech Studio Academy for three(3) months where I gained my first certificate in web development. Today, I have more than one(1) year of experience in I.T and Web development.</p>

              <p className='py-2 text-gray-400 md:hidden lg:block'>I pivoted into I.T because it was fascinating to see how tech products could help individuals and organisations save time, save money and expedite processes. It's simply magical!</p>
            </div>
            <div className=' hidden col-span-2 pt-[3rem] lg:flex'>
              <img src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/"  />
            </div>
            <div className='lg:hidden col-span-2 pt-[3rem]'>
              <img src={myimg} alt="/" className='object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About