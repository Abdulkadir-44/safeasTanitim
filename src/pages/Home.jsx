import React from 'react'
import Header from '../components/Header'
import Main from '../components/main/Main'
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <title>Safe-As</title>
      <meta name='keywords' content='Amazon suspend , fikri mülkiyet , ahr suspend , Dropshopping' /> */}
        <title>Safe-As - Ana Sayfa</title>
        <meta name="description" content="Amazon hesap sağlığı yazılımımız, dropshipping yapanlar için mükemmel bir çözümdür. " />
        <meta name="keywords" content="Amazon hesap sağlığı, dropshipping, e-ticaret, satış artırma, müşteri memnuniyeti" />
        <meta name="keywords" content="Amazon suspend, fikri mülkiyet,ahr suspend,dropshipping" />
        <meta property="og:title" content="Amazon Hesap Sağlığı Yazılımı - Ana Sayfa" />
        <meta property="og:description" content="Amazon hesap sağlığı yazılımımız, dropshipping  yapanlar için mükemmel bir çözümdür. " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.safeastr.com/" />
        {/* <meta property="og:image" content="https://www.yourwebsite.com/images/homepage-image.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amazon Hesap Sağlığı Yazılımı - Ana Sayfa" />
        <meta name="twitter:description" content="Amazon hesap sağlığı yazılımımız, dropshipping  yapanlar için mükemmel bir çözümdür. " />
        {/* <meta name="twitter:image" content="https://www.yourwebsite.com/images/homepage-image.jpg" /> */}
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home