import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Grid from '../Grid/Grid';
import OpenDeleteModalProducts from '../Modal/OpenModal/OpenDeleteModalProducts';
import ProductCardBtns from './ProductCardBtns';

const ProductsCard = (props) => {
  return (
    <Grid>
      {props.products.map((product) => (
        <div className="relative" key={product.id}>
          <ProductCardBtns id={product.id} name={product.name} />
          <Link href={`/${product.category}/${product.id}`}>
            <div className=" relative box-border  flex h-[250px] w-[250px] flex-col items-center justify-center overflow-hidden rounded-md border-2 border-black">
              <Image
                className="absolute h-[200px] w-[200px] transition-transform duration-500 ease-in-out hover:scale-110"
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <div className="z-1 relative ">
                <h2 className="text-2xl">{product.name}</h2>
                <p className="text-xl">{product.unit}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Grid>
  );
};

export default ProductsCard;
