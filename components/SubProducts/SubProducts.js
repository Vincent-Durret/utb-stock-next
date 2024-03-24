import React from 'react';
import Grid from '../Grid/Grid';

const SubProducts = (props) => {
  return (
    <div>
      {props.subProducts.map((product) => (
        <div
          className="relative box-border flex h-[250px] w-[250px] flex-col items-center justify-center overflow-hidden rounded-md border-black transition-all duration-500 ease-in-out hover:border-2"
          key={product.id}
        >
          <div className="relative z-10 ">
            <h2 className="text-2xl">{product.name}</h2>
            <p className="text-xl">{product.unit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubProducts;
