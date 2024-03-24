import React from 'react';

const AddProductForm = (props) => {
  return (
    <section>
      <form onSubmit={props.addDocument} className="flex flex-col">
        <label htmlFor="category" className="text-white">
          Catégorie
        </label>
        <input
          type="text"
          name="category"
          id="category"
          className="bg-white text-black"
          value={props.form.category}
          onChange={props.handleChange}
        />
        <label htmlFor="name" className="text-white">
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-white text-black"
          value={props.form.name}
          onChange={props.handleChange}
        />
        <label htmlFor="image" className="text-white">
          Image
        </label>
        <input
          type="text"
          name="image"
          id="image"
          className="bg-white text-black"
          value={props.form.image}
          onChange={props.handleChange}
        />
        <label htmlFor="unit" className="text-white">
          Unité
        </label>
        <input
          type="text"
          name="unit"
          id="unit"
          className="bg-white text-black"
          value={props.form.unit}
          onChange={props.handleChange}
        />
        <button type="submit" className="btn btn-primary rounded-lg bg-white p-2">
          Ajouter
        </button>
      </form>
    </section>
  );
};

export default AddProductForm;
