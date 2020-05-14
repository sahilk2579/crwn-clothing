import React from 'react';
import SHOP_DATA from './shop.data';

import PreviewSection from '../../preview-collection/preview-collection.component.jsx';


class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            
            collections : SHOP_DATA
           
        };

        

    }

    render(){

        const { collections }= this.state;

        return (

            <div className="shop-page">
                {
                    collections.map(({id , ...othercollectiondata}) => (
                        <PreviewSection key={id}  { ...othercollectiondata}/>
                    ) )
                    

                }

            </div>

        )
    }

}

export default ShopPage;