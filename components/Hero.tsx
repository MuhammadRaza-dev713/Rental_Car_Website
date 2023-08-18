"use client";

import Image from "next/image";
import CustomButton from "@/components/customButton";
import {CustomButtonProps} from "@/types/interface";


const Hero = () => {
    const handleClick = () =>
    {}

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-1">
                <h1 className="hero__title">Find,Book, or rent A Car - Quickly and Easily</h1>
                <p className="hero__subtitle">
                    Streamline Your Car rental Experience With our Effortless Booking Process...
                </p>
             <CustomButton
             title="Explore car"
             containerStyles="bg-primary-blue text-white rounded-full mt-10"
             handleClick={handleClick}/>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero"
                    fill className="object-contain"/>
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    )
}
export default Hero