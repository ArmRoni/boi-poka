import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { data } from 'react-router';
import Book from '../../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] =useState([]);
    // useEffect( () => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {setAllBooks(data)})
    // },[])

    // different way to fetch data
    // const bookPromise = fetch('./booksData.json').then(res => res.json())


    return (
        <div>
            <h2 className='text-3xl text-center p-6 font-bold'>Books</h2>

            <Suspense fallback={<span>loaging ..............</span>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook ={singleBook}></Book> )
                    }
                </div>
                
            </Suspense>

        
            
        </div>
    );
};

export default Books;