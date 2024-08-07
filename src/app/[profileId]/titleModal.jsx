import React,{useRef} from 'react'
import { MdClose } from 'react-icons/md'
import { setTitle } from '../api/profile/editDetails'

const TitleModal = ({close,profile}) => {
  const text = useRef();
  const handleChange = () => {
    setTitle(text.current.value,profile);
    close(false);
  }
  return (
    <div className='absolute w-full min-h-svh bg-black bg-opacity-50 top-0 z-20 flex justify-center items-center'>
      <div className='bg-gray-100 min-h-1/2 md:w-2/3 w-full rounded-md flex flex-col'>
      <div className='flex justify-between m-5'>
        <h2 className='text-xl font-semibold m-3'>Edit Title:</h2>
        <MdClose onClick={() => close(false)} className='hover:cursor-pointer text-xl'/>
      </div>
      <input type='text' name="description" id="title" className='px-5 py-2 md:mx-20 mx-10' placeholder='New Title' ref={text} defaultValue={profile.title} />
      <button className='m-auto w-1/2 bg-secondry text-white h-10 my-8' onClick={() => handleChange()}>Edit Title</button>
      </div>
    </div>
  )
}

export default TitleModal
