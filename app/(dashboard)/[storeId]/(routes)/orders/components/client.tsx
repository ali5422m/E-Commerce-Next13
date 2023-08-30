"use client";


import Heading from "@/components/ui/heading";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {columns, OrderColumn} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";


interface OrderClientProps {
    data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({data}) => {


    return (
        <>
                <Heading
                    title={`Orders (${data.length})`}
                    description="Manage Orders for your store"
                />
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey= "products"
                />
        </>
    );
};

export default OrderClient;