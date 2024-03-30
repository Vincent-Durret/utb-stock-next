import React from 'react';
import { MdDelete } from 'react-icons/md';

const CardBtnDelete = (props) => {
  return (
    <button>
      <MdDelete
        className="rounded-lg bg-black p-2 text-4xl text-white transition-all hover:text-orange-400"
        onClick={props.openModal}
      />
    </button>
  );
};

export default CardBtnDelete;
