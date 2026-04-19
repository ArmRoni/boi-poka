import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addtoDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readlist, setReadlist ] = useState([]);
    const [sort, setSort] = useState('');

const data = useLoaderData();
useState(() => {
    const storedBookData = getStoredBook();
    const CovertedStoreBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book =>CovertedStoreBooks.includes(book.bookId))
    setReadlist(myReadList)
},[]);


const handleSort = (type) => {
    setSort(type);
    if(type === "pages") {
        const sortedByPage = [...readlist].sort((a,b) => a.totalPages - b.totalPages);
        setReadlist(sortedByPage)
    }
     if(type === "rating") {
        const sortedByRating = [...readlist].sort((a,b) => a.rating - b.rating);
        setReadlist(sortedByRating)
    }
}

    return (
        <div>
            <details className="dropdown">
            <summary className="btn m-1">sort by {sort?sort:""}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={() => handleSort("pages")}>pages</a></li>
                <li><a onClick={() => handleSort("rating") }>Rating</a></li>
            </ul>
        </details>

        <Tabs>
            <TabList>
            <Tab>Read Book List</Tab>
            <Tab>MY Wish List</Tab>
            </TabList>

            <TabPanel>
             <h2>Book i read {readlist.length}</h2>
             {
                readlist.map(b => <Book key={b.bookId} singleBook={b} ></Book>)
                
             }
            </TabPanel>
            <TabPanel>
                <h2>My Wish List</h2>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default ReadList;