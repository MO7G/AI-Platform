"use client"
import axios from "axios"
import * as z from "zod"
import Heading from '@/components/custom/Heading'
import { MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ChatCompletionMessageParam } from "openai/resources/chat/completions"
import { Empty } from "@/components/custom/empty"
import Loader from "@/components/custom/loader"
import { cn } from "@/lib/utils"
import UserAvatar from "@/components/custom/user-avatar"
import BotAvatar from "@/components/custom/bot-avatar"
import { useTheme } from "next-themes"



const Conversation = () => {
    const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
    const {theme} = useTheme()
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        //  await new Promise((resolve) => setTimeout(resolve, 5000));
        try {
            const userMessage: ChatCompletionMessageParam = {
                role: "user",
                content: values.prompt
            };

            const newMessages = [...messages, userMessage];
            const response = await axios.post("/api/conversation", { messages: newMessages });
            setMessages((current) => [...current, userMessage, response.data])
            form.reset();
        } catch (error: any) {
            // todo open pro model 
            console.log("errro from the Conversation page ", error)
        } finally {
            // it's recommended to refresh the routers for some reason 
            router.refresh();
        }
    }

    return (
        <div>
            <Heading
                title="Conversation"
                desc="Our most advanced Conversation model"
                Icon={MessageSquare}
                iconColor='text-pink-500'
                bgColor='bg-violet-500/10'
            />
            <div className='px-4 lg:px-8'>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                        >
                            <FormField name="prompt" render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                            disabled={isLoading}
                                            placeholder="Ask Mo7aMind"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}>

                            </FormField>
                            <Button className="col-span-12 lg:col-span-2" disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4" >
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )}
                    {messages.length === 0 && !isLoading && (
                        <div>
                            <Empty image="robot2" label="No Converstaion Yet" />
                        </div>
                    )}

                    <div className="flex flex-col-reverse gap-y-4">
                        {messages.map((message, index) => (
                            <div key={index}
                                className={cn("p-8 w-full resize-none flex  items-start gap-x-8 rounded-lg", message.role === "user" ? theme === "dark" ? "bg-slate-900" :  "bg-white border border-black/10 " : "bg-muted"
                                )}
                            >
                                    {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                                <p className="text-md">
                                    {message.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation