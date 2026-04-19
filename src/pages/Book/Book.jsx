import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(singleBook);

    const{bookName,bookId, publisher, image, rating, category, tags,yearOfPublishing} = singleBook;



    return (
  
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure className='p-3 bg-gray-200 w-2/3 mx-auto rounded-2xl mt-4'>
                    <img className='h-[166px]' src={image} alt="" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-2 justify-center">
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book By:{publisher}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline"> {category}</div>
                    <div className="badge badge-outline"> <FaRegStarHalfStroke /> {rating}</div>
                    </div>
                </div>
            </div>
        </Link>
        
    );
};

export default Book;