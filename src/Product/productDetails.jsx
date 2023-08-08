import React from 'react';
import productDetailsStyle from './productDetails.module.css';


const ProductDetails = (Props) => {
  console.log(Props)
  return (
        <section className={productDetailsStyle.productDetailsDiv}>
          <div className={productDetailsStyle.productNameDiv}>
            <h1>{Props.data.title}</h1>
          </div>
          <div className={productDetailsStyle.productDescDiv}>
            <span>{Props.data.description}</span>
          </div>
          <div className={productDetailsStyle.productColorDiv}>
            <span>Pick Color</span>
          </div>
          <div className={productDetailsStyle.productColorOptions}>
            {Props.colorOptionsFun}
          </div>
          <div className={productDetailsStyle.productFeatureDiv}>
            <span className={productDetailsStyle.productFeatureTitle}>Features</span><br></br>
            {Props.featureOptionsFun}
          </div>
          <div data-tooltip="Price: $20" className={productDetailsStyle.button}>
          <div className={productDetailsStyle.buttonWrapper}>
            <div className={productDetailsStyle.text}>Buy Now</div>
              <span className={productDetailsStyle.icon}>
                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
              </span>
            </div>
          </div>
        </section>
    );
}

export default ProductDetails;