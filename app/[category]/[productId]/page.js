'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/index';
import Image from 'next/image';
import Product from '@/views/product';
import OpenModal from '@/components/ui/Button/ButtonAddProducts';

const ProductPage = ({ params }) => {
  const productId = params.productId; // Utiliser params pour accéder au productId
  const [subProducts, setSubProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Ajouter un état pour le chargement

  useEffect(() => {
    const fetchSubProducts = () => {
      if (!productId) return;
      const q = collection(db, 'products', productId, 'subproducts');

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const subProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSubProducts(subProducts);
        setLoading(false); // Mise à jour de l'état de chargement
      });

      return unsubscribe;
    };

    const unsubscribe = fetchSubProducts();

    return () => unsubscribe();
  }, [productId]);

  // Afficher un message de chargement
  if (loading) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="bg-red-100 p-4 text-4xl">Chargement en cours...</p>
      </div>
    );
  }

  return (
    <main>
      <Product subProducts={subProducts} productId={productId} />
      {subProducts.length === 0 && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="bg-red-100 p-4 text-4xl">Aucun produits trouver</p>
        </div>
      )}
    </main>
  );
};

export default ProductPage;
