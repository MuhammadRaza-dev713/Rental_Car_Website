"use client"

import Image from "next/image";
import Link from "next/link";
import {footerLinks} from "@/constants";
const Footer = () =>
{
    return(
        <footer className="flex flex-col text-black-100 mt-5 bg-gray-100 px-[2rem] sm:px-[4rem]">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
                    <p className="text-base text-gray-700">
                        Car hub 2023 <br/>
                        All Right Reserved &copy;
                    </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link)=>(
                    <div key={link.title} className="footer__link">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item)=>(
                                <Link
                                key={item.title}
                                href={item.url}
                                className="text-grey-500">{item.title}
                                </Link>
                            ))}
                    </div>
                ))}</div>
            </div>
                <div className="flex justify-between flex-wrap mt-10 border-t border-gray-400 py-10 ">
                <p className="">&copy; {new Date().getFullYear()} Car Hub. All rights reserved.</p>

                    <div className=" flex gap-4">
                        <Link href="/"
                        className="text-gray-500">
                            Privacy Policy
                        </Link>
                        <Link href="/"
                        className="text-gray-500">
                            Terms of use
                        </Link>
                    </div>

                </div>

        </footer>
    )
}



export default Footer