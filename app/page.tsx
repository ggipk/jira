"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import React from "react";
import {toast, Toaster} from "sonner";

export default function Home() {
    const toastTest = () => toast.success('Hello World!',
        {
            duration: 1000,
            position: 'bottom-center',
            style: {
                backgroundColor: "black",
                opacity: 0.5, color: "white"
            }
        });
    return (
        <div>
            <Button variant="primary" size="lg" onClick={toastTest}>click me</Button>
            <Button variant="destructive" size="xs">click me</Button>
            <Button variant="secondary" size="sm">click me</Button>
            <Button variant="muted" size="sm">click me</Button>
            <Button variant="teritary" size="sm">click me</Button>
            <p className="text-red-200">test</p>
            <Button variant="secondary" size="sm">click me</Button>
            <Input/>

            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Toaster/>
        </div>
    );
}
