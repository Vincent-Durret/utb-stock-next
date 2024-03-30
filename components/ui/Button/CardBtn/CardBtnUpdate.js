import React from 'react';
import { PiNotePencilFill, PiNotepadFill } from 'react-icons/pi';
const CardBtnUpdate = () => {
  return (
    <button>
      <PiNotePencilFill className="rounded-lg bg-black p-2 text-4xl text-white transition-all hover:text-orange-400" />
    </button>
  );
};

export default CardBtnUpdate;
