import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16 w-full'>
            <div>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, commodi?</h1>
                <button className='btn btn-primary'>test text</button>
            </div>
            <div className="">
                <img className='w-6/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;