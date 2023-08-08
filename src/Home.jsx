import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import ProductDetails from './Product/productDetails';
import ProductData from './productData';
import PreviewProduct from './previewProduct/previewProduct';


function Home() {

  const [previewColorPickedPos, setpreviewColorPickedPos] = useState(0);

  const previewSelected = () => {
    return ProductData.colorOptions[previewColorPickedPos].imageUrl;
  }

  const selectedPreview = (pos) => {
    return setpreviewColorPickedPos(pos)
  }
  const colorOptionsFun =  ProductData.colorOptions.map((item, pos) => {
    return <img key={pos} onClick={() => selectedPreview(pos)} className='productColor' src={item.imageUrl} alt={item.styleName}></img>
  })
  
  const featureOptionsFun = ProductData.featureList.map((item, pos) => {
    return <button key={pos} className='featureButton'> {item} </button>
  })

  return (
    
    <div className="App">
      <title>Amazon -  Product Page</title>
      <Header />
      <div className='productBody'>
        <PreviewProduct previewColorPicked={previewSelected()}/>
        <ProductDetails data={ProductData} colorOptionsFun={colorOptionsFun} featureOptionsFun={featureOptionsFun}/>
      </div>
    </div>


  );
}

export default Home;