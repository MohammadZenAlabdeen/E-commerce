import React, { useState, useEffect, useContext } from 'react';
import Card from './Card/Card';
import './Container.css';
import axios from 'axios';
import searchContext from '../../searchContext';

const Container = () => {
  const token = localStorage.getItem('token');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [totalPages,setTotalPages]=useState(null);
const search=useContext(searchContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${page}` ,{
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      setProducts(response.data.data);
      setTotalPages(response.data.meta.totalPages);
      setNextPage(parseInt(response.data.meta.currentPage)+1);
      if (response.data.meta.currentPage > 1) {
        setPreviousPage(parseInt(response.data.meta.currentPage)-1);
      } else {
        setPreviousPage(null);
      }
    if(search.searchRes != null){
        setProducts(search.searchRes.data);
        setTotalPages(search.searchRes.meta.totalPages);
        setNextPage(parseInt(search.searchRes.meta.currentPage)+1)
        if(search.searchRes.meta.currentPage>1)
        setPreviousPage(parseInt(search.searchRes.meta.currentPage)-1);
    else
    setPreviousPage(null)

    console.log(nextPage)
    }



}
    fetchProducts();
  }, [page,search.searchRes]);

  const handlePrevClick = () => {
    setPage(previousPage);
  };

  const handleNextClick = () => {
    setPage(nextPage);
  };

  return (
    <main>
      <div className='Container'>
        {products.map((element, index) => <Card product={element} key={index} />)}
      </div>
      <div className='pagination'>
        
          <button className={previousPage ? 'prev' : 'prev deactive'} onClick={handlePrevClick}>
            prev
          </button>
        
          <button className={nextPage <totalPages ? 'next':'next deactive'} onClick={handleNextClick}>
            next
          </button>
      </div>
    </main>
  );
};

export default Container;