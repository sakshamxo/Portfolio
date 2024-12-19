import React from 'react'

const background = () => {
  return (
    <div className='fixed -z-10' >
        <div className="background h-[28rem] w-[28rem] fixed flex justify-items-center items-center top-0 left-0 rounded-full blur-xl bg-brand dark:bg-azure transition duration-500 animate-float">
        <div className="mx-auto h-96 w-96 self-center justify-self-center rounded-full bg-grey border-brand-dark border-[24px] dark:bg-pop dark:border-azure-dark transition duration-500 "></div>
        </div>
    </div>
  )
}

export default background