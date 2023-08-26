"use client";

import {useStoreModal} from "@/hooks/use-store-module";
import {Modal} from "@/components/ui/modal";

export const StoreModule = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title='Create store'
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future create store form
        </Modal>
    );
};

