import React, { useState } from 'react'
import "./items.css"
import MostPopular from './MostPopular'
import MostTrending from './MostTrending'

function Items() {
    const [items, setItems] = useState(false);
    const toggleItems = () => setItems(!items);



    return (
        <div className='Items'>
            <div className='Text'>
                <div className={items? "disabled":"enabled"} onClick={toggleItems}  >
                    <span>Most popular items</span>
                </div>
                <div className={items? "enabled":"disabled"} onClick={toggleItems}  >
                    <span>Most trending items</span>
                </div>
            </div>
                <MostPopular visible={!items} />
                <MostTrending visible={items} />

           


        </div>
    )
}

export default Items