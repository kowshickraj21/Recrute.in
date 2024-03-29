import React from 'react'
import Nav from './Nav';
import banner from '@/assets/banner.png';
import Image from 'next/image';

const DefaultPage = () => {
  return (
    <div>
      <main className="h-screen w-full m-0" >
        <Image src={banner} alt='background' width={1500} height={10} className='-z-10 absolute w-full h-screen'/>
      <Nav />
      <h1 className="mt-48 ml-10 text-7xl font-medium">Everything in <span className="text-secondry font-semibold">ONE</span> Place.</h1>
      <h2 className="mt-5 ml-12 text-3xl">Freelance, Hire, Get Hired</h2>
      <form>
        <input type="text" className="pl-5 ml-12 mt-10 rounded-xl border w-2/5 h-14" placeholder="Search for a Freelancer" />
        <button type="submit" className="-ml-14 border rounded-xl w-32 h-14 bg-secondry text-white">Search</button>
      </form>
    </main>
     <div>
      <h1 className="text-center text-3xl p-10">Browse Popular Skills</h1>
     </div>
    </div>
  )
}

export default DefaultPage
