import React, { Children } from 'react'

const PlainCard = (props) => {
  return (
    <div className='bg-emerald-500 rounded-md w-[25rem] h-auto m-2 p-4 text-white'>
        {props.children}
    </div>
  )
}

export default PlainCard