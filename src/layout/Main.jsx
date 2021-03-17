import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../features/brand/Brand';
import Search from '../features/search/Search';
import Map from '../features/map/Map';
import SearchResult from '../features/search-result/SearchResult';
import { getStores } from '../services/stores';
import { haversineInKM } from '../utilities/math';

import './main.scss';

const { Content } = Layout;

class Main extends Component {
  state = {
    stores: [],
    currentPosition: null,
    query: '',
    distance: '1',
    searchQuery: {
      distance: 1,
      query: '',
      stores: [],
    },
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(({ coords}) => {
      const currentPosition = {
        lat: coords.latitude,
        lng: coords.longitude,
      };
      this.setState({ currentPosition });
      this.getStores();
    });
  }

  onInputChange(event) {
    const stateKey = event.target.name;
    this.setState({ [stateKey]: event.target.value });
  }

  async getStores() {
    const { data} = await getStores();
    const stores = this.mapStoreDistance(data);
    this.setState({ stores });
  }

  mapStoreDistance(data = []) {
    const stores = data.reduces((mappedStores, store) => {
      const { lat,lng } = this.state.currentPosition;
      const distance = haversineInKM(lat, lng, store.latitude, store.longitude);
      return [ ...mappedStores, {  ...store, distance }];
    }, []);
    return stores;
  }

  onSearch() {
    const { distance, query, stores } =  this.state;
      const filterStores = this.filterStores({ distance, query, stores });
      const searchQuery = { distance, query, stores: filterStores };
      this.setState({ searchQuery });
  }

  filterStores({ distance, query, stores }) {
    const filterStores = stores.filter((stores) => {
      const isStoreInRange = stores.distance <= parseInt(distance);
      if (!query || !isStoreInRange) return isStoreInRange;
      const isStoreQueried =
        stores.name.toLowerCase().includes(query.toLowerCase()) ||
        stores.tags.toLowerCase().includes(query.toLowerCase());
      return isStoreInRange && isStoreQueried;
    });
    return filterStores;
  }

  render() {
    return (
      <div className='main-layout'>
        <content className='content'>
          <Brand />
          <Search 
          query={this.state.query}
           distance={this.state.distance} 
           onChange={(event) => this.onInputChange(event)}
           onSubmit={() => this.onSearch()} 
          />
          <div className='search-content'>
            <Map 
              currentPosition={this.state.currentPosition} 
              distance={this.state.searchQuery.distance}
              stores={this.state.searchQuery.stores}
            />
            <SearchResult stores={this.state.searchQuery.stores} />

          </div>
        </content>
      </div>
    );
  }
}

export default Main;