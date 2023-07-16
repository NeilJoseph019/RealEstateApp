import React from 'react'
import ImageTextCard from '../../components/imageTextCard/ImageTextCard'
import PlainCard from '../../components/plainCard/PlainCard'
// import styles from './homePage.module.css'

const HomePage = () => {
  return (
    <div>
        <section className='flex justify-center items-center'>
            <ImageTextCard 
                imgSrc='/images/image_houses_0.jpeg' 
                width={50}
                textTitle="Welcome" 
                subText="We will help you find the dream properties you always wanted." />
                <PlainCard>
                <p className='text-xl'>
                Discover your perfect home with us! We're thrilled to introduce a wide selection 
                of newly available properties for both rent and purchase. 
                </p>
            </PlainCard>
        </section>
        <br/>
        <br/>
        <section className='flex justify-center items-center'>
            <PlainCard>
                <p className='text-xl'>
                Discover your perfect home with us! We're thrilled to introduce a wide selection 
                of newly available properties for both rent and purchase. At our site, we prioritize 
                quality and assurance. Rest assured that all homes listed have undergone thorough 
                checks and verification by our dedicated staff. 
                </p>
            </PlainCard>
        </section>
        <br/>
        <br/>
        <section className='flex justify-center items-center'></section>
    </div>
  )
}

export default HomePage