import React from 'react';
import { MdAddCircle } from 'react-icons/md';

const ButtonAddSubProducts = (props) => {
  return (
    <section className="flex items-center justify-center">
      <button onClick={props.openModal} className="btn btn-primary rounded-lg bg-black p-2">
        <MdAddCircle className="text-4xl text-orange-400" />
      </button>
    </section>
  );
};

export default ButtonAddSubProducts;
