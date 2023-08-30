"use client";

import * as z from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {useStoreModal} from "@/hooks/use-store-modal";
import {Modal} from "@/components/ui/modal";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(2),
})

export const StoreModule = () => {
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     name: "",
        // }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
       try{
            setLoading(true);

            const response = await axios.post('/api/stores', values);

            window.location.assign(`/${response.data.id}`);
       }catch (error) {
           toast.error("Something went wrong.")
       } finally {
           setLoading(false)
       }

    }

    return (
        <Modal
            title='Create store'
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2 pb-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        placeholder="E-Commerce"
                                        {...field}
                                    />
                                </FormControl>
                                {/*<FormDescription>*/}
                                {/*    This is your public display name.*/}
                                {/*</FormDescription>*/}
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="pt-6 space-x-2 flex items-center justify-end">
                        <Button
                            disabled={loading}
                            variant="outline"
                            onClick={storeModal.onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={loading}
                            type="submit"
                        >
                            Continue
                        </Button>
                    </div>
                </form>
            </Form>
        </Modal>
    );
};

