import React from 'react'

const ProductDetail = ({match,products}) => {
    const product = products.find(elt =>elt.id == match.params.id)
    console.log(match)
    return (
        <div>
            {product.name}
        
        </div>
    )
}

export default ProductDetail
