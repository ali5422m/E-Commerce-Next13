"use client";

// import {UserButton} from "@clerk/nextjs";

import {Modal} from "@/components/ui/modal";

const SetupPage = () => {
    return (
        <div className='p-4'>
            {/*<UserButton afterSignOutUrl="/"/>*/}
            <Modal title='Text' description="Text Desc" isOpen onClose={() => {}}>
                Hello
            </Modal>
        </div>
    )
}

export default SetupPage;