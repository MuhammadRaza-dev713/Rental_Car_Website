import React from 'react'
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/customButton";

const Navbar = () =>
{
    return (
        <header className="w-full absolute z-10  px-[2rem] md:px-[4rem]">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image src="/logo.svg"
                           alt="car hub logo"
                           width={118}
                           height={18}
                           className="object-contain">
                    </Image>
                </Link>
                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                ></CustomButton>


            </nav>

        </header>
    )
}



export default Navbar