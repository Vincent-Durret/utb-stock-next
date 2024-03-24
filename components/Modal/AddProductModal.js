import React from 'react';
import AddProductForm from '../Form/AddProductForm';

const AddProductModal = (props) => {
  if (!props.modalIsOpen) {
    return null;
  }
  return (
    <section className="-transform-x-1/2 -transform-y-1/2 fixed left-1/2 top-1/2 z-20 ">
      <div className="h-auto w-96 rounded-lg bg-black p-4">
        <h2 className="text-white">Ajout d'un produits</h2>
        <button className="text-white" onClick={props.closeModal}>
          Fermer
        </button>
        <AddProductForm form={props.form} addDocument={props.addDocument} handleChange={props.handleChange} />
      </div>
    </section>
  );
};

export default AddProductModal;
