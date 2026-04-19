import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addtoDB';

const BookDetails = () => {
    const { id } = useParams();  
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook || {};

    const handleMarkAsRead = (id) => {
        //Store with Id
        //where to Store
        //array or Collection
        //if book already exixt the show a alart
        //if book not exist then push in the collection or array
        addToStoredDB(id)
    }

    console.log(singleBook);
    // console.log(id, data)
    return (
        <div className='w-2/3 max-auto'>
            <img className='w-48' src= {image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-info m-2">Mar as Read</button>
            <button className="btn btn-success m-2">Add to WishList</button>
        </div>
    );
};

export default BookDetails;