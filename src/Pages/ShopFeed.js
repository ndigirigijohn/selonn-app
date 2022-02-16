import React from 'react'
import { Container } from 'react-bootstrap'
import { User } from '../data/User'
import { Sellers } from '../data/Sellers'
import { Products } from '../data/Products'
import Product from '../components/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<<<<<<< HEAD

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../sass/shopFeed.scss'


function ShopFeed() {
=======
import { faLocation } from '@fortawesome/free-solid-svg-icons'


import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../sass/shopFeed.scss'
import { useState } from 'react'


function ShopFeed() {
  const [sellers,setSellers]=useState(Sellers);
  const [user,setUser]=useState(User);

  
const FeedCard=sellers.sort((a, b) => parseFloat(a.latitudeFixed) - parseFloat(b.latitudeFixed)).map((seller)=>{
 let distance=seller.latitudeFixed

 return (<div key={seller.userId} className="feed-card">
   <div className='feedcard-header'>
   <span className='brand'>{seller.brand}</span>
   <span className='distance'>{distance} KM</span>
   <span className='location-name'>{seller.locationName}<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></span>


   </div>


   <Product userId={seller.userId}/>

   
   
   </div>)
});
>>>>>>> 5ed355d8f8febfab5e840761f6e9ccbfd063dbd9
  return (
    <>
    <Container>
      <div className='search-container'>
      <div className='search'>
      <FontAwesomeIcon className='search-icon'  icon={faSearch}  />
<<<<<<< HEAD
      <input className='search-input' type="text"></input>

        
      </div>


      </div>

      <div className='feed-card'>

        <div>
          <div>
          <span>Brand</span><span>Distance:</span><span>location Name</span>
          </div>
        <Product/>
        </div>
      </div>
      <div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
<div className='feed-card'>

<div>
  <div>
  <span>Brand</span><span>Distance:</span><span>location Name</span>
  </div>
<Product/>
</div>
</div>
=======
      <input className='search-input' placeholder='Search...' type="text"></input>

        
      </div>
      

      </div>
      <div className='searchcover'></div>

      <div className='feed-div'>

      <div className='feed-container'>
      {FeedCard}



      </div>
      </div>


      
>>>>>>> 5ed355d8f8febfab5e840761f6e9ccbfd063dbd9

    </Container>
    
    
    </>
  )
}

export default ShopFeed