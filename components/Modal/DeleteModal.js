import React from 'react';

const DeleteModal = (props) => {
  if (!props.modalIsOpen) {
    return null;
  }
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ">
      <div className="h-auto w-96 rounded-lg bg-black p-4">
        <h1 className="mb-8 text-center text-2xl text-white">
          Êtes vous sur de vouloir supprimer <span className="capitalize text-orange-400">{props.name}</span>
        </h1>
        <div className="flex justify-center space-x-8">
          <button className="btn btn-primary rounded-lg bg-orange-400  p-1 text-white" onClick={props.closeModal}>
            Non
          </button>
          <button className="btn btn-primary rounded-lg bg-red-600 p-1  text-white" onClick={props.deleteProduct}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
