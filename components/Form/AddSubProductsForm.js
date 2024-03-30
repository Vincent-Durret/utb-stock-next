import React from 'react';

const AddSubProductsForm = (props) => {
  return (
    <section>
      <form onSubmit={props.addSubProduct} className="flex flex-col">
        <label htmlFor="name" className="text-white">
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="mb-4 bg-white text-black"
          value={props.form.name}
          onChange={props.handleChange}
        />
        <label htmlFor="value" className="text-white">
          Quantités
        </label>
        <input
          type="number"
          name="quantités"
          id="value"
          className="mb-4 bg-white text-black"
          value={props.form.value}
          onChange={props.handleChange}
        />
        <label htmlFor="unit" className="text-white">
          Unité
        </label>
        <input
          type="text"
          name="unit"
          id="unit"
          className="mb-4 bg-white text-black"
          value={props.form.unit}
          onChange={props.handleChange}
        />
        <button type="submit" className="btn btn-primary mt-4 rounded-lg bg-white p-2">
          Ajouter
        </button>
      </form>
    </section>
  );
};

export default AddSubProductsForm;
