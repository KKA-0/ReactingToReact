import React from 'react';
import './previewProduct.css'

const PreviewProduct = (props) => {
    console.warn(props)
    return (
        <section className='productImagesDiv'>
            <img className='ProductImage' src={props.previewColorPicked} alt='Product Images' />
        </section>
    )
}

export default PreviewProduct;
