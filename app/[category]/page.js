'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Category from '@/views/category';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    // Extraction du slug du chemin de l'URL
    const pathSegments = pathname.split('/'); // exemple: ["", "categorie", "mon-slug"]
    const slug = pathSegments[pathSegments.length - 1]; // Prend le dernier segment comme slug

    // Fonction asynchrone pour charger les produits de la catégorie correspondante
    const fetchProducts = () => {
      if (!slug) return;
      const q = query(collection(db, 'products'), where('category', '==', slug));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const loadedProducts = querySnapshot.docs.map(async (doc) => {
          const productData = doc.data();
          const subProductsSnapshot = await getDocs(collection(doc.ref, 'subproducts'));
          const subProducts = subProductsSnapshot.docs.map((subDoc) => subDoc.data());
          return { id: doc.id, ...productData, subProducts };
        });

        Promise.all(loadedProducts).then(setProducts);
      });

      return unsubscribe;
    };

    const unsubscribe = fetchProducts();

    return () => unsubscribe();
  }, [pathname]); // Utilise pathname comme dépendance pour réagir aux changements de chemin // Utilise pathname comme dépendance pour réagir aux changements de chemin

  if (!products.length) {
    return <div>Chargement...</div>;
  }

  return (
    <main>
      <div className="flex items-center justify-center rounded py-4">
        <h1 className=" rounded-lg bg-black p-4  text-4xl text-orange-400">{pathname.split('/').pop()}</h1>
      </div>
      <Category products={products} />
    </main>
  );
};

export default CategoryPage;
