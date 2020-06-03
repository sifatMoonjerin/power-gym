import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <div className="top-banner ">
            <div className='row'>
            <div className='col-md-6 p-5'>
                <h1 className='text-light'>THE BEST FITNESS STUDIO IN TOWN</h1>
                <p className='text-light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Link to='/pricing'>
                    <button className='btn btn-warning'>JOIN US</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default TopBanner; 