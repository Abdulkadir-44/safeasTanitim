import React from 'react'

const BotMain = () => {
    return (
        <>
            <section id='pricing' className="bg-[#22364E]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-2 text-3xl sm:text-4xl poppins-bold tracking-tight font-extrabold text-white ">FİYATLANDIRMA</h2>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">BASIC</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">5000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$14.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white  rounded-lg border  shadow border-gray-600 xl:p-8 bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">STANDART</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">10.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$25.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">ADVANCED</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">25.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$49.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white  rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">PREMIUM</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">50.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$89.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">ELITE</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">100.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$138.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">ENTERPRISE</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">120.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$204.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">PLATINIUM</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">200.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$274.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>

                        
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                            <h3 className=" text-2xl font-semibold">V.I.P.</h3>
                            <p className="font-light  sm:text-lg  text-gray-400">250.000 ASIN</p>
                            <div className="flex justify-center items-baseline my-4">
                                <span className="mr-2 text-5xl font-extrabold">$344.99</span>
                                <span className="  text-gray-400">/aylık</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Tüm Pazaryerleri</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>8 Filtre</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Yapay Zeka</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>%100 Fikri Mülkiyet Şikayeti Koruma Garantisi</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Planlanan Güncellemelere Erişim</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>7/24 Müşteri Hizmetleri Desteği</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Sınırsız Kullanıcı Sayısı</span>
                                </li>
                            </ul>
                            <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                        </div>
                    </div>
                </div>
                
            </section>

        </>
    )
}

export default BotMain