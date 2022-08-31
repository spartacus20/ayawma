import React from 'react'
import "./cardCategorie.css"
function CardCategorie({svg, text,color }) {
    return (
        <div className='CategoriesC'>

            <div className='Categories' 
                 style={{
                    backgroundColor:`${color}`,
                  }}
            
            
            >
                {svg}
            </div>
            <span className="text-categorie">{text}</span>

        </div>
    )
}

export default CardCategorie