import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {

    const { authState } = useOktaAuth();

    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What's on your reading list lately?</h1>
                            <p className='lead'>
                            The library team is eager to hear about your latest reads. Whether
                             you're diving into new skills or honing existing ones, we're here
                              to curate the best content for you!
                            </p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explore top books </Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>
                            }  
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is constantly evolving!</h1>
                            <p className='lead'>
                            We encourage you to check in daily as new books are frequently added. 
                            At Tech Library, we are dedicated to curating the best selection for our 
                            students, ensuring that you always have access to the most accurate and 
                            relevant titles. Our team works tirelessly to maintain and update our collection, 
                            as providing you with top-quality books is our highest priority.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What's on your reading list lately?</h1>
                            <p className='lead'>
                            The library team is eager to hear about your latest reads. Whether
                             you're diving into new skills or honing existing ones, we're here
                              to curate the best content for you!
                            </p>
                            {authState?.isAuthenticated ? 
                                <Link type='button' className='btn main-color btn-lg text-white'
                                    to='search'>Explore top books</Link>
                                :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign up</Link>
                        }
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is constantly evolving!</h1>
                            <p className='lead'>
                            We encourage you to check in daily as new books are frequently added. 
                            At Tech Library, we are dedicated to curating the best selection for our 
                            students, ensuring that you always have access to the most accurate and 
                            relevant titles. Our team works tirelessly to maintain and update our collection, 
                            as providing you with top-quality books is our highest priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}