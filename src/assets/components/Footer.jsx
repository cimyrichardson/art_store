import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react'

function Footer() {
    return (
    <footer className='bg-slate-900' shadow-md>
        <div className="container mx-auto px-4">
            <div className="min-h-16">
                <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                    <h2 className='text-4xl font-bold text-white'>Subscribe Our Newsletter</h2>
                    <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
                        <input type="email" placeholder='Enter Your Email' className='py-4 px-4 rounded w-full'/>
                        <button className='bg-gray-200 px-4 py-3 rounded-full absolute right-3 top-1'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="bg-slate-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <div>
                        <img 
                            src="" 
                            alt="Art_Store Logo"
                            className='my-4'
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non, 
                            impedit rem itaque qui, debitis culpa eligendi, temporibus magnam quos doloremque ipsam enim ducimus eveniet 
                            perferendis tempora quisquam pariatur tempore?
                        </p>

                        <div className='flex gap-8 items-center mt-5'>
                            <Facebook 
                                size={40}
                                className='bg-white text-black rounded-md p-2'
                            />
                            <Twitter 
                                size={40}
                                className='bg-white text-black rounded-md p-2'
                            />
                            <Instagram
                                size={40}
                                className='bg-white text-black rounded-md p-2'
                            />
                            <Youtube 
                                size={40}
                                className='bg-white text-black rounded-md p-2'
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold my-4">Pages</h2>
                    </div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;