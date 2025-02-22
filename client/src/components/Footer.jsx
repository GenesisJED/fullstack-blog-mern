import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin } from 'react-icons/bs';

export const FooterCom = () => {

    return (
        <Footer container className='border border-t-2 border-purple-400'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link
                            to='/'
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                        >
                            <span className='px-2 py-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-lg text-white'>
                                Genesis's
                            </span>
                            Blog
                        </Link>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by="Genesis"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='https://www.linkedin.com/in/g%C3%A9nesis-e-602b151b4/' icon={BsLinkedin} />
                        <Footer.Icon href='https://https://github.com/GenesisJED' icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}