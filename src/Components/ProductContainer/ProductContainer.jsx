import React from 'react'
import "./productcontainer.css"

function ProductContainer({children}) {
    return (

        <div className="Container Spacer">
            
            
            {children}
            
        
        </div>
    )
}

export default ProductContainer