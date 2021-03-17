import React, { Component } from 'react';

import './search-result-item.scss';

class SearchResultItem extends Component {
    render() {
        const { result } = this.props;
        const tagList = result.tags.split(',');
        debugger;
        return (
            <div className='search-result-item'>
               <div className='result_item__name'>
                   <span>{result.name}</span>
                   <span className='result-item__distance'> {result.distance.toFixed(2)} KM </span>                                  
               </div>
               <div className='result-item__description'>                   
                   <span>{result.address}</span>
               </div>
               <div>  
                   {
                       tagList && 
                       tagList.map((tag, index) => (
                       <span className='tags' key={index}>
                           {tag}
                       </span> 
                    ))}               
                   <span className='tags'>{result.tags}</span>                 
               </div>
            </div>
        );
    }
}
export default SearchResultItem;
    