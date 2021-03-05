import React, { Component } from 'react';

import './search-result-item.scss';

class SearchResultItem extends Component {
    render() {
        return (
            <div className='search-result-item'>
               <div className='search-result__item'>
                   <span>JJ's Chika-an</span>
                   <span className='result-item__distance'> 2 KM </span>                                  
               </div>
               <div className='result-item__description'>                   
                   <span>Capt. Flordelis, Street, Hilongos, Leyte</span>
               </div>
               <div>                 
                   <span className='tags'Restaurant></span>                 
               </div>
            </div>
        );
    }
}
export default SearchResultItem;
    