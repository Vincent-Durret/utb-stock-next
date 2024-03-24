import Grid from '@/components/Grid/Grid';
import SectionAddSubProduct from '@/components/ProductSection/SectionAddSubProduct';
import SubProducts from '@/components/SubProducts/SubProducts';
import React from 'react';

const Product = (props) => {
  return (
    <section>
      <SectionAddSubProduct />
      <Grid>
        <SubProducts subProducts={props.subProducts} />
      </Grid>
    </section>
  );
};

export default Product;
