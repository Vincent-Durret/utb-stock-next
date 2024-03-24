'use client';

import React, { useState, useEffect } from 'react';

import Home from '@/views/home';
import Image from 'next/image';

import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

const HomePage = () => {
  const [allProducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const allProducts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(allProducts);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <Home allProducts={allProducts} />
    </div>
  );
};

export default HomePage;
