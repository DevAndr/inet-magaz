import React, {FC} from "react";
import {NavBar} from "@/widgets/NavBar";

interface PublicLayoutPageProps {
    children: React.ReactNode
}
const PublicLayoutPage: FC<PublicLayoutPageProps> = ({children}) => {

    return (<div>
        <NavBar/>
        <main className='p-10 min-h-screen'>
            {children}
        </main>
        <footer>

        </footer>
    </div>)
}

export default PublicLayoutPage