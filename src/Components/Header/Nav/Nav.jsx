import React, { useContext, useState } from 'react';
import './Nav.css';
import axios from 'axios';
import searchContext from '../../searchContext';

const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const search=useContext(searchContext);
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/products/search/1', {
                search: searchTerm,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            search.setSearchRes(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleBlur = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <nav>
                <a href='http://127.0.0.1:8000/sellerDashboard'>
                    لوحة التحكم
                </a>
                <h1>
                    المنتجات
                </h1>
                <form onSubmit={handleSearch}>
                    <div className="search_container">
                        <input
                            name="search"
                            type="search"
                            className="search-input"
                            id="search-input"
                            placeholder="بحث"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={handleBlur}
                        />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.3251 12.8985L19.7048 18.2783C19.8939 18.4676 20.0001 18.7242 20 18.9917C19.9999 19.2592 19.8935 19.5157 19.7043 19.7048C19.5151 19.8939 19.2585 20.0001 18.991 20C18.7235 19.9999 18.467 19.8935 18.2779 19.7043L12.8981 14.3244C11.2899 15.5701 9.26759 16.1563 7.24253 15.9638C5.21748 15.7712 3.34182 14.8145 1.99713 13.2881C0.652446 11.7617 -0.0602623 9.78035 0.00399614 7.74712C0.0682545 5.7139 0.904653 3.78152 2.34304 2.3431C3.78143 0.904675 5.71376 0.0682562 7.74693 0.00399624C9.7801 -0.0602638 11.7614 0.652463 13.2877 1.99718C14.8141 3.3419 15.7708 5.21761 15.9634 7.24271C16.1559 9.26782 15.5697 11.2902 143241L14..3251ZM8..00037 ..13..9994C9..5916 ..13..9994L11...1176 ...3673L12...2428 ...2421C13...368 ...1169L14...000 ...5908L14...000 ...9996..59C14...000 ...40831...99L4...88309...6318L3...75793...75702L2...63276...88222L2...00065...40831L2...00065 ...59995C2...00065 ...59084L2...63276 ...11696L3...75793 ...24211C4...88309 ...36736L6...40915 ...39994L8...0037 .39994Z.." fill="#D2D2D2"/>
      </svg>
    </div>
    </form>

    </nav>
    </>
  )
}

export default Nav