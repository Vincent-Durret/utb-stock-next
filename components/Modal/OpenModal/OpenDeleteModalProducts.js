'use client';

import React, { useState } from 'react';
import { db } from '../../../firebase/index';
import { deleteDoc, doc } from 'firebase/firestore';
import DeleteModal from '../DeleteModal';
import CardBtnDelete from '../../ui/Button/CardBtn/CardBtnDelete';

const OpenDeleteModalProducts = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const deleteProduct = async () => {
    await deleteDoc(doc(db, 'products', props.id));
    closeModal();
  };

  return (
    <div className="absolute -top-4 right-4 z-10 ">
      <CardBtnDelete openModal={openModal} />
      <DeleteModal deleteProduct={deleteProduct} name={props.name} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default OpenDeleteModalProducts;
