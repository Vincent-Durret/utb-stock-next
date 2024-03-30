'use client';

import React, { useState } from 'react';
import { db } from '../../firebase/index';
import { addDoc, collection } from 'firebase/firestore';
import ButtonAddSubProducts from '../ui/Button/ButtonAddSubProducts';
import AddSubProductsModal from '../Modal/AddSubProductsModal';

const SectionAddSubProducts = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', value: '', unit: '' });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addSubProductDocument = async (event) => {
    event.preventDefault();
    if (!form.name || !form.value || !form.unit) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    const docRef = await addDoc(collection(db, 'products', props.productId, 'subproducts'), form);
    console.log('SubProduct written with ID: ', docRef.id);

    setForm({ name: '', value: '', unit: '' });
    closeModal();
  };

  return (
    <section>
      <ButtonAddSubProducts openModal={openModal} />
      <AddSubProductsModal
        addSubProduct={addSubProductDocument}
        handleChange={handleChange}
        form={form}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </section>
  );
};

export default SectionAddSubProducts;
