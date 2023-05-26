import React from "react";
import {useState, useEffect} from "react";
import './main.css'

function Main () {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setProductList(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className='MainContainer'>
      <div className='productText'>상품 리스트</div>
      <div className='productWrapper'>
        {productList.map(product => (
          <div key={product.id} className='productItem'>
            <h3>{product.title}</h3>
            <img src={product.image_url} alt={product.title} />
            <p>{product.description}</p>
            <hr />
          </div>
        ))}
      </div>
      <div className='productText'>북마크 리스트</div>
      <div className='productWrapper'></div>
    </div>
  );
}

export default Main;