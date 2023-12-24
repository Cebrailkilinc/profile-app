import React from 'react'

//Components
import Shares from './Shares';

// Dynamic Components
// const Shares = dynamic(() => import('./Shares'), {
//   loading: () => <Loading />,})

const TabsItemSocial = () => {
  return (
    <div className='tablet:h-[calc(100vh_-_200px)] overflow-y-auto top-0 bottom-0 pt-5 flex flex-col  gap-3 '>
      <Shares />
    </div>
  )
}

export default TabsItemSocial