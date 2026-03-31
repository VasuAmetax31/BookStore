import React from 'react'

const Banner = () => {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
            <div className='md:w-1/2 w-full'>
                <h1 className='text-4xl font-bold'>Hello, welcome here to learn somthing <span className='text-pink-500'> new everyday!!!</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem provident quisquam culpa nisi dolore suscipit libero unde nihil inventore laboriosam. Porro, eligendi. Voluptates vero excepturi tempora, eum iste recusandae qui aut doloribus sed nobis id quibusdam deleniti quaerat. Illum explicabo magni debitis veniam facere et animi mollitia labore saepe neque?</p>
            </div>
            <div className='md:w-1/2 w-full'>Right</div>
        </div>
    </>
  )
}

export default Banner
