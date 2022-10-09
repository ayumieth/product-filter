import React from 'react';

class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name, price, picture } = this.props;
    return (
      <div className="item-card">
        <img src={picture}></img>
        <div>{price}</div>
        <div>{name}</div>
      </div>
    )
  }
}

export default Item;