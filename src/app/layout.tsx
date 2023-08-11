import React from "react";
import {Providers} from "@/lib/providers";
import "../globals.css"

export const metadata = {
    title: "React Todo",
    description: 'Список задач на React/NextJS/Typescript',
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={"flex items-center justify-center w-full my-2.5"}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}