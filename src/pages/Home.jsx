import React from 'react'
import Header from '../components/Header'
import Main from '../components/main/Main'
import Footer from "../components/Footer"
import {Helmet} from "react-helmet"

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Safe-As</title>
      <meta name='keywords' content='Amazon suspend , fikri mülkiyet , ahr suspend , Dropshopping' />
    </Helmet>
      <Header/>
      <Main/>
      <Footer/>  
    </>
  )
}

export default Home