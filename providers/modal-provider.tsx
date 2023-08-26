"use client";

import {useState, useEffect} from 'react';

import {StoreModule} from "@/components/modals/store-module";
const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[]);

    if (!isMounted) {
        return null;
    }

    return (
        <StoreModule />
    );
};

export default ModalProvider;