import prismadb from "@/lib/prismadb";
import ProductForm from "@/app/(dashboard)/[storeId]/(routes)/products/[productId]/components/product-form";


const ProductPage = async ({ params }: {  params:  { productId: string, storeId: string }}) => {

    const product = await prismadb.product.findUnique({
        where : {
            id:  params.productId
        },
        include: {
            images: true
        }
    });

    const categories = await prismadb.category.findMany({
        where : {
            id:  params.storeId
        }
    });

    const sizes = await prismadb.size.findMany({
        where : {
            id:  params.storeId
        }
    });

    const colors = await prismadb.color.findMany({
        where : {
            id:  params.storeId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8">
                <ProductForm
                    categories={categories}
                    colors={colors}
                    sizes={sizes}
                    initialData={product}
                />
            </div>
        </div>
    );
};

export default ProductPage;