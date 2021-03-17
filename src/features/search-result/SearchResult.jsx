import React, { Component } from 'react';
import SearchResultItem from '../../components/search-result-item/SearchResultItem';

class SearchResult extends Component {
    render() {
        return (
            <div className='search-result-component'>
                {
                 this.props.stores && 
                 this.props.stores.map((store) => <SearchResultItem Key={store.id} result={store} />)
                }                                         
            </div>              
        )
    }
}

export default SearchResult;
    