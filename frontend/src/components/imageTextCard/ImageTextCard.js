import React from 'react'

const ImageTextCard = (props) => {
    const imageSrc = props.imgSrc
    const textTitle = props.textTitle ? props.textTitle : ''
    const subText = props.subText ? props.subText : ''
    const height = props.height ? props.height : 30
    const width = props.width ? props.width : 60

  return (
    <div className={`relative h-[${height}rem] w-[${width}rem] overflow-hidden rounded-2xl shadow-lg group`}>
        <img 
            src={imageSrc} 
            alt='' 
            className={` h-[${height}rem] w-[${width}rem] transition-tranform group-hover:scale-110 duration-200`}/>)
      
        <div className='absolute flex items-center inset-0 w-full bg-gradient-to-t from-black'>
            <div className='p-4 text-white'>
                <h3>{textTitle}</h3>
                <p >
                    {subText}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ImageTextCard