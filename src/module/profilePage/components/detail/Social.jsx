import React from 'react'
import dynamic from 'next/dynamic';
//Components
import Loading from '../../../../package/components/content/Loading';
//Icons
import { PiCertificateBold } from "react-icons/pi";
import { MdAccountBox } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

// Dynamic Components
const Shares = dynamic(() => import('./Shares'), {
  loading: () => <Loading />,})

const Social = () => {
  return (
    <div className='tablet:h-[calc(100vh_-_200px)] overflow-y-auto top-0 bottom-0 pt-5 flex flex-col  gap-3 '>
      <Shares />
    </div>
  )
}

export default Social