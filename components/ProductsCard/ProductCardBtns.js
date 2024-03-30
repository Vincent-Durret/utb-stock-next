import React from 'react';
import OpenDeleteModalProducts from '../Modal/OpenModal/OpenDeleteModalProducts';
import OpenUpdateModalProducts from '../Modal/OpenModal/OpenUpdateModalProducts';

const ProductCardBtns = (props) => {
  return (
    <div>
      <OpenDeleteModalProducts id={props.id} name={props.name} />
      <OpenUpdateModalProducts />
    </div>
  );
};

export default ProductCardBtns;
