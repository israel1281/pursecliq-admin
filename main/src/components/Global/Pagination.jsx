import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = ({total, callback}) => {
    const [page, setPage] = useState(1);
    
    const newArr = [...Array(total)].map((_, i) => i + 1)
    const navigate = useNavigate();
    
    const isActive = (index) => {
        if (index === page) return "active";
        return "";
    };
    
    const handlePagination = (num) => {
        navigate(`?page=${num}`);
        callback(num);
    };
    
    useEffect(() => {
        const num = navigate.location.search.slice(6) || 1;
        setPage(Number(num));
    }, [navigate.location.search])
    
    
    return (
        <nav aria-label="page navigation" className='cursor-pointer'>
            <ul className=''>
                {
                    page > 1 &&
                    <li className=''
                        onClick={() => handlePagination(page - 1)}
                    >
                        <span className='' aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>span
                        </span>
                    </li>
                }
                
                {
                    newArr.map(num => (
                        <li key={num} className={`page-item ${isActive(num)}`}
                            onClick={() => handlePagination(num)}
                        >
                            <span className=''>{num}</span>
                        </li>
                    ))
                }
                
                {
                    page < total &&
                    <li 
                        className=''
                        onClick={() => handlePagination(page + 1)}
                    >
                        <span className=''>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Pagination;