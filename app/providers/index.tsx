"use client";

import {useRouter} from "next/navigation";
import React, {FC} from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {NextUIProvider} from "@nextui-org/system";
import {Provider} from "react-redux";
import { store } from "../store";

interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: any;
}

const Providers: FC<ProvidersProps> = ({children, themeProps}) => {
    const router = useRouter();

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>
                <Provider store={store}>
                    {children}
                </Provider>
            </NextThemesProvider>
        </NextUIProvider>
    );
};

export default Providers;