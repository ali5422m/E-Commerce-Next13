import BillboardClient from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/client";

const BillboardsPage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient/>
            </div>
        </div>
    );
};

export default BillboardsPage;