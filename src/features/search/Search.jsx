import React, { Component } from 'react';
import { Input, Select, Button } from 'antd';

import './search.scss';

const { Option } =Select;

class Search extends Component {  
    render() {     
      return (
         <div className='search-component'>
            <form className='search-component-form'>
               <div>
                  <Input 
                      name='query'
                      className='search'
                      size='large'
                       placeholder='Search for (e.g Hardware)'                                          
                    />
              </div>
              <div>
                 <div className='search-option'>
                    <Input.Group compact>
                       <Input name='distance' />                                          
                        <Select defaultValue='Distance'>
                           <Option value='Distance'>Distance (km)</Option>
                           <Option value='Current location'>Current location</Option>
                        </Select>
                        <Button
                           className='btn-search'
                           type='primary'
                           shape='round'
                           size='medium'
                           htmlType='submit'
                        >
                           SEARCH
                        </Button>
                    </Input.Group>
                 </div>
              </div>
            </form>
         </div>
      );
   }
}

export default Search;