'use client';

import React, { useState } from 'react';
import AddProductModal from '../Modal/AddProductModal';
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import ButtonAddProducts from '../ui/Button/ButtonAddProducts';

const SectionAddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState({ category: '', name: '', image: '', unit: '' });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addDocument = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(collection(db, 'products'), form);
    console.log('Document written with ID: ', docRef.id);

    setForm({ category: '', name: '', image: '', unit: '' });
    closeModal();
  };
  return (
    <section>
      <ButtonAddProducts openModal={openModal} />
      <AddProductModal
        addDocument={addDocument}
        handleChange={handleChange}
        form={form}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </section>
  );
};

export default SectionAddProduct;
