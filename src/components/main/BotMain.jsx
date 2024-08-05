const packages = [
    {
        name: "BASIC",
        tokenCount: "5.000 SAFE-AS TOKEN",
        price: 14.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "STANDART",
        tokenCount: "10.000 SAFE-AS TOKEN",
        price: 25.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "ADVANCED",
        tokenCount: "25.000 SAFE-AS TOKEN",
        price: 49.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "PREMIUM",
        tokenCount: "50.000 SAFE-AS TOKEN",
        price: 89.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "ELITE",
        tokenCount: "100.000 SAFE-AS TOKEN",
        price: 138.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "ENTERPRISE",
        tokenCount: "150.000 SAFE-AS TOKEN",
        price: 204.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "PLATINIUM",
        tokenCount: "200.000 SAFE-AS TOKEN",
        price: 274.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "V.I.P",
        tokenCount: "250.000 SAFE-AS TOKEN",
        price: 344.99,
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    },
    {
        name: "V.I.P PLUS",
        tokenCount: "SINIRSIZ SAFE-AS TOKEN",
        price: "Yakında",
        feature: ["1 Safe-As Token = 1 ASIN Tarama", "10 Safe-As Token = 1 Marka Tarama", "Masaüstü Uygulama", "Tüm Pazaryerleri", "8 Filtre", "Yapay Zeka", "%100 Fikri Mülkiyet Şikayeti Koruma Garantisi", "Planlanan Güncellemelere Erişim", "7/24 Müşteri Hizmetleri Desteği", "Sınırsız Kullanıcı Sayısı"]
    }
]
const BotMain = () => {
    
    return (
        <>
            <section id='pricing' className="bg-[#22364E]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-2 text-3xl sm:text-4xl poppins-bold tracking-tight font-extrabold text-white ">FİYATLANDIRMA</h2>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                        {
                            packages.map((pck, index) => (
                                <div key={index} className="flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border  shadow  border-gray-600 xl:p-8  bg-gray-800 ">
                                    <h3 className=" text-2xl font-semibold">{pck.name}</h3>
                                    <p className="font-light  sm:text-lg  text-gray-400">{pck.tokenCount}</p>
                                    <div className="flex justify-center items-baseline my-4">
                                        
                                        {
                                            index != 8 ? (<span className="mr-2 text-5xl font-extrabold">${pck.price} <span className="text-sm poppins-regular text-gray-400">/aylık</span> </span>) : <span className="mr-2 text-5xl font-extrabold">YAKINDA</span>
                                        }
                                    </div>

                                    <ul role="list" className="mb-8 space-y-3 text-left">
                                        {
                                            pck.feature.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-3">

                                                    <svg className="flex-shrink-0 w-5 h-5   text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                    <a href="https://panel.safeastr.com/pricing" target='_blank' className="text-white bg-[#E19930] hover:bg-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center poppins-regular"> Hemen Satın Al</a>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </section>

        </>
    )
}

export default BotMain

