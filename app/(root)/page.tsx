"use client";

// import {UserButton} from "@clerk/nextjs";

import {Modal} from "@/components/ui/modal";
import {useStoreModal} from "@/hooks/use-store-module";
import {useEffect} from "react";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    },[isOpen, onOpen]);

    return (
        <div className='p-4'>
            {/*<UserButton afterSignOutUrl="/"/>*/}
            {/*<Modal title='Text' description="Text Desc" isOpen onClose={() => {}}>*/}
            {/*    Hello*/}
            {/*</Modal>*/}
            Root page
        </div>
    )
}

export default SetupPage;