import React from 'react';
import AddProductForm from '../Form/AddProductForm';
import { IoMdCloseCircle } from 'react-icons/io';

const AddProductModal = (props) => {
  if (!props.modalIsOpen) {
    return null;
  }
  return (
    <section className="-transform-x-1/2 -transform-y-1/2 fixed left-1/2 top-1/2 z-20 ">
      <IoMdCloseCircle
        className="absolute right-4 top-4 cursor-pointer text-4xl text-white transition-all hover:text-red-600"
        onClick={props.closeModal}
      />
      <div className="h-auto w-96 rounded-lg bg-black p-4">
        <h2 className="mb-4 text-white">Ajout d'un produits</h2>

        <AddProductForm form={props.form} addDocument={props.addDocument} handleChange={props.handleChange} />
      </div>
    </section>
  );
};

export default AddProductModal;
