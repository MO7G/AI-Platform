"use client"
import axios from "axios"
import * as z from "zod"
import Heading from '@/components/custom/Heading'
import { Download, ImageIcon, MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Empty } from "@/components/custom/empty"
import Loader from "@/components/custom/loader"
import { cn } from "@/lib/utils"
import UserAvatar from "@/components/custom/user-avatar"
import BotAvatar from "@/components/custom/bot-avatar"
import { useTheme } from "next-themes"
import { amountOptions, formSchema, resolutionOptions } from "./constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Secular_One } from "next/font/google"



const ImageGeneration = () => {
    const [images, setImages] = useState<string[]>([])
    const { theme } = useTheme()
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            amount: "1",
            resolution: "512x512"
        }
    })

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log('yah this is the value ', values)
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        try {
            setImages([]);
            const response = await axios.post("/api/image", values);
            const urls = response.data.map((image: { url: string }) => image.url);
            setImages(urls);
            form.reset()
        } catch (error: any) {
            // todo open pro model 
            console.log("errro from the Conversation page ", error)
        } finally {
            // it's recommended to refresh the routers for some reason 
            router.refresh();
        }
    }


    const download = (filename: string, content: string) => {
        var element = document.createElement("a");
        element.setAttribute("href", content);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };



    const handleDownload = async (e:any , url : string) => {
        const temp = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-rwVj0VSQ1tnWMKOG5yxjJXkt/user-Pqjk19O2qE9yw1wn12Osf2F5/img-YHOTWX1FfWQGeAurqL3VymPm.png?st=2023-10-17T19%3A24%3A16Z&se=2023-10-17T21%3A24%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-10-17T07%3A17%3A28Z&ske=2023-10-18T07%3A17%3A28Z&sks=b&skv=2021-08-06&sig=LWCJtA%2BDdktIENPIENF5%2BfQYxMPzBtpaIwo3dA8ClDY%3D"
        const tempUrl = new URL(temp);
        const st = tempUrl.searchParams.get("st");
        console.log("here is the " ,st)


        try {
            const response = await fetch('https://api.unsplash.com/photos/random');
            const blob = await response.blob();
    
            // Generate a random filename or specify a custom one
            const filename = 'downloaded-image.png'; // You can specify the desired filename here
    
            const urlBlob = URL.createObjectURL(blob);
            download(filename, urlBlob);
            URL.revokeObjectURL(urlBlob);
        } catch (error) {
            console.error(error);
        }
    };






        return (
            <div>
                <Heading
                    title="Image Generator"
                    desc="Generate Your Image Right Now !!!"
                    Icon={ImageIcon}
                    iconColor='text-green-500'
                    bgColor='bg-violet-500/10'
                />
                <div className='px-4 lg:px-8'>
                    <div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}
                                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                            >
                                <FormField name="prompt" render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-6">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Ask Mo7aMind"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )} />


                                <FormField
                                    name="amount"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="col-span-12 lg:col-span-2">
                                            <Select
                                                disabled={isLoading}
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {amountOptions.map((option, index) => (
                                                        <SelectItem
                                                            key={index}
                                                            value={option.value}
                                                        >
                                                            {option.label}

                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />




                                <FormField
                                    name="resolution"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="col-span-12 lg:col-span-2">
                                            <Select
                                                disabled={isLoading}
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {resolutionOptions.map((resolution, index) => (
                                                        <SelectItem
                                                            key={index}
                                                            value={resolution.value}
                                                        >
                                                            {resolution.label}

                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />




                                <Button className="col-span-12 lg:col-span-2" disabled={isLoading}>
                                    Generate
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="space-y-4 mt-4" >
                        {isLoading && (
                            <div className="p-20">
                                <Loader />
                            </div>
                        )}
                        {images.length === 0 && !isLoading && (
                            <div>
                                <Empty image="photo-album" label="No images generated Yet" />
                            </div>
                        )}


                        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-4 mt-8">
                            {images.map((src, index) => (

                                <Card
                                    key={index}
                                    className="rounded-lg overflow-hidden"
                                >
                                    <div
                                        className="relative aspect-square"
                                    >
                                        <Image
                                            alt="image"
                                            fill
                                            src={src}
                                        />
                                    </div>
                                    <CardFooter className="p-2">
                                        <Button onClick={()=>window.open(src)} variant={"secondary"} className="w-full hover:text-green-500 transition duration-300">
                                            <Download className="h-4 w-4 mr-2" />
                                            Download
                                        </Button>
                                    </CardFooter>

                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ImageGeneration