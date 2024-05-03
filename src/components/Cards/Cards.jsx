import React from 'react'
import CardItem from "./CardItem"
const Cards = () => {

    const plannedDevelopmentsData = [
        {
          id : 1,
          title : "Parallel Import İhlali Potansiyelli Ürünleri Önceden Tespit Edebilme",
          content : "Safe-As Dünyada tek yapay zeka destekli kapsamlı bir Amazon Hesap Sağlığı koruması sunan yazılım iddiasını sürdürmenin getirisi olarak Parallel Import ve benzeri Amazon Hesap Sağlığı Derecelendirmesini olumsuz yönde etkileyebilecek tüm ihlal çeşitlerine önceden önlem alabilmek adına çalışmalarını sürdürüyor.",
          image : "https://images.unsplash.com/photo-1588877508081-a454a07bb06c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id : 2,
          title : "Meksika Pazar Yeri Gümrük Sorunları",
          content : "Meksika pazar yerinde yaşanan gümrük sorunlarının farkındayız. Aynı ürünün farklı kargo firmaları ile gümrükten geçebilme işleminin farklı sonuçlandığı zamanlarda oldu. Ancak Safe-As Meksika pazar yerinde satış yapan satıcıların bir daha gümrük sorunu yaşamaması ve kesintisiz teslimat yapabilmeleri adına yeni filtreler geliştirmeyi planlıyor.",
          image : "https://images.unsplash.com/photo-1537222961176-50d25fff78ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id : 3,
          title : "A.B.D. Ve Birleşik Krallık Ürün Farklılıkları Sorunu",
          content : "İki ülke arasında özellikle teknolojik ürünlerde farklılık mevcut. Yüksek envanter sayılarına ulaşmış mağazalarda bu ürünleri tespit edip listeyi kaldırmak bir hayli güç. Bu durumun varlığının en üzücü handikapı ise A to Z şikayetleri. Safe-As iki ülke arasında farklılık olan ürünleri önceden tespit edip kesintisiz ve sürdürülebilir Dropshipping yapmanızda sizlere yardımcı olmayı planlıyor.",
          image : "https://images.unsplash.com/photo-1494419470281-65c2b001a42b?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id : 4,
          title : "Safe-As Google Eklentisi",
          content : "Bu güncellememiz Arbitraj yapan kullanıcıların belirlediği üründe Fikri Mülkiyet Şikayeti, ortalama satış sayısı, kargo maliyeti, Amazon depo ve komisyon kesintileri, ROI gibi çok önemli verileri tek tek veya toplu bir şekilde incelemelerine olanak tanımayı planlıyor.",
          image : "https://images.unsplash.com/photo-1573141597928-403fcee0e056?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id : 5,
          title : " Ücretsiz Eğitimler Ve Webinarlar",
          content : "Alanında uzman mentörlerle birlikte Hesap Sağlığı, Suspend çözümleri, Ürün araştırma teknikleri, Mağaza Yönetimi, Sermaye Yönetimi gibi konularda Safe-As panelinde ekstra hiç bir ücret ödemeden erişebileceğiniz bir eğitim portalı oluşturmayı planlıyor.",
          image : "https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          id : 6,
          title : "Safe-AI İle Metin Hazırlama",
          content : "Safe-As bünyesinde geliştirilen yapay zeka modeli ile ihlaller, suspendler, Müşteri mesajları, A to Z kaldırma talebi gibi bir çok konuda satıcı hakları gözetilerek ve bir birinden farklı Appeal veya mesaj taslakları ile gerekli bilgileri sağlamanız halinde daha etkili ve kolay bir yönteme sorunu çözüme kavuşturmayı planlıyor.",
          image : "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
      ]
      
  return (
    <div id='plans' className='px-10 py-5  flex items-center flex-col gap-y-4  ' style={{ backgroundImage: "url('./stains/10.png')", backgroundSize: "contain" }}>
        <h1 className='text-center poppins-bold w-full text-2xl sm:text-4xl bg-[#22364E] py-1 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-white'>PLANLANAN GELİŞMELER</h1>
        <div className='grid lg:grid-cols-3 gap-x-6  gap-y-6 '>
          {
            plannedDevelopmentsData.map(item=>(
              <CardItem key={item.id} image={item.image} content={item.content} title={item.title}/>
            ))
          }
        </div>
      </div>
  )
}

export default Cards