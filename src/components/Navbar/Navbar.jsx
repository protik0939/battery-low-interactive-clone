import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Navbar.css'
import { TfiYoutube } from 'react-icons/tfi';
import { useState } from 'react';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const openClose = () => {
        setClicked(!clicked);
    }

    return (
        <div className={`absolute w-full text-center bottom-0 contact-container ${clicked ? 'expanded overflow-y-auto' : 'collapsed overflow-hidden'}`}>

            <div className="absolute w-full text-center top-0 z-10">

                <button onClick={openClose} className="bg-[#333] p-2 px-6 rounded-t-lg text-white likha tracking-[.5em] font-bold text-xs hover:text-hovercolor ease-in duration-100">Contact</button>

                <div className=' h-contect bg-[#333] h-full grid md:grid-cols-3 p-20'>

                    <div className='md:col-span-2 mt-10 ml-20 mr-20'>
                        <input className='input-field' type="text" name="name" id="" placeholder="Name" /><br />
                        <input className='input-field' type="email" name="email" id="" placeholder="Email" /><br />
                        <input className='input-field' type="text" name="subject" id="" placeholder="Subject" /><br />
                        <textarea rows={7} className='input-field' placeholder="Message"></textarea><br />
                        <input type="submit" className='px-6 py-2 bg-[#d50000] ' value="Submit" />
                    </div>
                    <div className='text-left mt-5'>
                        <div>
                            <h1 className='font-extrabold text-white likha tracking-[.5em] font-bold text-xs leading-8'>Battery Low Interactive HQ</h1>
                            <h1>House - 8, Road - 2, Block - J,</h1>
                            <h1>Baridhara, Dhaka 1212, Bangladesh</h1>
                        </div>
                        <br />

                        <div>
                            <h1 className='font-extrabold text-white likha tracking-[.5em] font-bold text-xs'>Any Time. We are open<br />24/7</h1>
                            <h1 className='leading-8'>+880 1521 112329</h1>
                        </div>
                        <br />

                        <div>
                            <h1 className='font-extrabold text-white likha tracking-[.5em] font-bold text-xs leading-8'>Get support via email</h1>
                            <h1>info@batterylowinteractive.com</h1>
                        </div>

                        <br />
                        <div>
                            <h1 className='font-extrabold text-white likha tracking-[.5em] font-bold text-xs leading-8'>Social Networks</h1>
                            <div className='flex flex-wrap space-x-2'>
                                <FaFacebookF className='hover:text-hovercolor ease-in duration-100 cursor-pointer'></FaFacebookF>
                                <FaLinkedinIn className='hover:text-hovercolor ease-in duration-100 cursor-pointer'></FaLinkedinIn>
                                <TfiYoutube className='hover:text-hovercolor ease-in duration-100 cursor-pointer'></TfiYoutube>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;