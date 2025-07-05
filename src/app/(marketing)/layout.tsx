'use client'

import React, { JSX, useEffect } from 'react'
import '../globals.css'
import '../../styles/style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import childProps from '../../../types/childTypes';
import Navbar from '../../components/custom/header/navbar';
import Footer from '../../components/custom/footer/footer';

function MarketingLayout({ children }: childProps): JSX.Element {
    useEffect(() => {
        AOS.init({
            duration: 800, // animatsiya davomiyligi
            once: false, // faqat bir marta trigger bo'lishi uchun
        });
    }, []);

    return (
        <html>
            <body>
                <Navbar />
                <main className="pt-[25px]">
                    {children}
                </main>
                <Footer
                 />
            </body>
        </html>
    )
}

export default MarketingLayout