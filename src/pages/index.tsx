import React, { useState } from "react";
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        {
            label: "Home",
            href: "#",
            title: "Home",
        },
        {
            label: "Profil",
            href: "#",
            title: "Profil",
        },
        {
            label: "Video",
            href: "#",
            title: "Video",
        },
        {
            label: "Kontak",
            href: "#",
            title: "Kontak",
        },
        {
            label: "Karya",
            href: "#",
            title: "Karya",
        },
    ];
    const video = [
        {
            label: "V1",
            href: "https://www.youtube.com/embed/4UuPGK_cync",
        },
        {
            label: "V2",
            href: "https://www.youtube.com/embed/XzzUo79LXO4",
        },
        {
            label: "V3",
            href: "https://www.youtube.com/embed/6BYlu2UbiTc",
        },
        {
            label: "V4",
            href: "https://www.youtube.com/embed/hUv7BCg5h6s",
        },
    ];
    return (
        <>
            {/* Navbar */}
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-transparent">
                <div className="relative flex items-center justify-between">
                    <a href="#" aria-label="Company" title="Company" className="inline-flex items-center">
                        <img className="object-cover h-4 sm:h-12 aos-item " data-aos="fade-up" src="/header.webp" alt="" />
                        {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">GAME TECHNOLOGY</span> */}
                    </a>
                    <ul className=" hidden items-center space-x-8 space-y-4 lg:flex">
                        <li>
                            {links.map((item, index) => {
                                return (
                                    <a key={index} className="font-medium tracking-wide text-yellow-400 transition-colors duration-200 hover:text-deep-purple-accent-400 " href={item.href}>
                                        {item.label}
                                    </a>
                                );
                            })}
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 "
                            onClick={() => setIsMenuOpen(true)}>
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a href="#" aria-label="Company" title="Company" className="inline-flex items-center">
                                                <img className="object-cover h-4 sm:h-14 aos-item" data-aos="fade-up" src="/header.webp" alt="" />
                                                {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">GAME TECHNOLOGY</span> */}
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}>
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="space-y-8">
                                        <li>
                                            {links.map((item, index) => {
                                                return (
                                                    <a
                                                        key={index}
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                        href={item.href}>
                                                        {item.label}
                                                    </a>
                                                );
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className="bg-[url(/heroes-01.webp)] bg-cover w-full h-full">
                <section className="flex justify-center items-center p-25 ">
                    <div className="container mx-auto flex flex-col items-center px-4 py-16 pb-18 text-center md:py-32 md:px-10">
                        <h1 className="text-4xl sm:text-5xl xl:max-w-3xl font5 text-white">HIMPUNAN MAHASISWA</h1>
                        <h2 className="text-2xl sm:text-4xl xl:max-w-xl font5 text-white">GAME TECHNOLOGY</h2>
                        <p className="mt-6 mb-8 text-md sm:mb-12 xl:max-w-3xl font5 text-white">POLITEKNIK NEGERI MEDIA KREATIF</p>
                        <span className="animate__animated animated bounce animate__bounce absolute w-full bottom-32 flex items-center justify-center">
                            <a href="#Profil"></a>
                        </span>
                    </div>
                </section>
            </div>

            <div className="bg-gray-900 " id="Profil">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center aos-item__inner">
                            <div className="max-w-xl mb-6 aos-item" data-aos="fade-up">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-yellow-400 sm:text-4xl sm:leading-none font5">PROFIL</h2>
                                <p className="text-base text-yellow-400 md:text-lg text-justify">
                                    Himpunan mahasiswa Game Technology Politeknik Negeri Media Kreatif Jakarta yang disingkat menjadi HIMA G.TECHTIV. Organisasi ini dibentuk dan didirikan pada Jum’at,
                                    4 April 2019 M / 29 Rajab 1440 H di Srengseng Sawah, Jakarta Selatan, dan berkedudukan di Politeknik Negeri Media Kreatif Jakarta.
                                </p>
                            </div>
                        </div>
                        <div className="aos-item__inner">
                            <img className="object-cover w-full h-56 rounded sm:h-96 aos-item" data-aos="fade-up" src="/images/logo_1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900" id="">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2 ">
                        <div className="flex flex-col justify-center aos-item__inner">
                            <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 aos-item" data-aos="fade-right">
                                <div className="p-6">
                                    <div>
                                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 aos-item">HIMPUNAN MAHASISWA GAME TECHNOLOGY</span>
                                        <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
                                            KABINET TIKTOK
                                        </a>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            Kabinet TikTok (Tingkatkan Toleransi dan Kekeluargaan) dipimpin oleh Raihan Pujarestu dan Wisnu Andrean V, Kabinet ini mulai menjabat pada tanggal 14
                                            Agustus 2020 untuk periode 2020/2021
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <img className="object-cover h-10 rounded-full" src="/images/logo/Logo_kabinet_2.jpg" alt="Avatar" />
                                            </div>
                                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 aos-item" data-aos="fade-left">
                            <div className="p-6">
                                <div>
                                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">HIMPUNAN MAHASISWA GAME TECHNOLOGY</span>
                                    <a href="hima.html" className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
                                        KABINET MABAR
                                    </a>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                        Kabinet Mabar (Maju bareng) dipimpin oleh Fajri Nurwahid Assyidiq dan Ahmad Shahal, Kabinet ini mulai menjabat pada tanggal 23 April 2021 untuk periode
                                        2021/2022
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <img className="object-cover h-10 rounded-full" src="/images/logo/logo_kabinet.jpg" alt="KabinetMabar" />
                                        </div>
                                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white" id="Video">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white -my-1">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 aos-item__inner">
                        <div className="" data-aos="fade-in">
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 text-gray-900 font5">Youtube</p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto font5  ">
                            <span className="relative inline-block">
                                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                    <defs>
                                        <pattern id="679d5905-e08c-4b91-a66c-84aefbb9d2f5" x="0" y="0" width=".135" height=".30">
                                            <circle cx="1" cy="1" r=".7"></circle>
                                        </pattern>
                                    </defs>
                                    <rect fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)" width="52" height="24"></rect>
                                </svg>
                                <span className="relative font2"> </span>
                            </span>
                            <div className="" data-aos="fade-in">
                                <span className="animate__animated animate__fadeInDown">GAME TECHNOLOGY</span>
                            </div>
                        </h2>
                        <p className="text-base text-gray-900 md:text-lg " data-aos="fade-in">
                            GAME TECHNOLOGY PRESENT | WEBINAR " SUKSES BERKARIR DIINDUSTRI GAME DAN GAME DEVELOPMENT "
                        </p>
                    </div>

                    <div className="!aspect-video w-full">
                        <iframe
                            src="https://www.youtube.com/embed/GGtgvC7Nq3w"
                            frameBorder="0"
                            data-aos="fade-up"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <section className="py-6 sm:py-12 dark:bg-coolGray-800  lg:py-12 bg-white">
                <div className="container p-6 mx-auto space-y-8 aos-item__inner">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col d">
                            <div className="!aspect-video">
                                <iframe frameBorder="0" data-aos="fade-up" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                    {video.map((item, index) => {
                                        return (
                                            <a key={index} className="" href={item.href}>
                                                {item.label}
                                            </a>
                                        );
                                    })}
                                </iframe>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}