import React from 'react';

class Items extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { searchResult } = this.props;
    return (
        <div className='items'>
          {
            searchResult.map((item, index) => (
              <div key={index} className='item-card'>
                <img className='item-img' src={item.picture} />
                <div className='item-name'>{item.name}</div>
                <div className='item-price'>${item.price}</div>
                <div className='item-about'>{item.about.slice(0, 150)}</div>
              </div>
            ))
          }
        </div>
    );
}
}

export default Items;