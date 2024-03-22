

import React from 'react'

import CloseIcon from '@mui/icons-material/Close';
function Announce() {
  const[announcestyle, setAnnouncestyle] = React.useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
  const handleClose=()=>{
    setAnnouncestyle(announcestyle + " hidden")
  }
  return (
    <div className={announcestyle}>
        <h2>Hurry up ! it's 40% Off NOW</h2>
        <CloseIcon className='cursor-pointer'
        onClick={handleClose}/>

    </div>
  )
}

export default Announce