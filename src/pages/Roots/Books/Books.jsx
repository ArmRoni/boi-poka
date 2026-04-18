import React, { useEffect, useState } from 'react';
import { data } from 'react-router';

const Books = () => {

    const [allBooks, setAllBooks] =useState([]);
    useEffect( () => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => {setAllBooks(data)})
    },[])

    return (
        <div>
            <h2>this is books sections</h2>
        </div>
    );
};

export default Books;