import React, {FC} from 'react';
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";
import {Logo} from "@/features/Logo";
import {CartNavItem} from "@/widgets/CartNavItem";

interface NavBarProps {

}

export const NavBar: FC<NavBarProps> = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <Logo/>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem >
                    <CartNavItem/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
