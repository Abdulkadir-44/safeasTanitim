import React from 'react'
import CardItem from "./CardItem"
const Cards = () => {

    const plannedDevelopmentsData = [
        {
          id : 1,
          title : "Parallel Import İhlali Potansiyelli Ürünleri Önceden Tespit Edebilme",
          content : "Safe-As Dünyada tek yapay zeka destekli kapsamlı bir Amazon Hesap Sağlığı koruması sunan yazılım iddiasını sürdürmenin getirisi olarak Parallel Import ve benzeri Amazon Hesap Sağlığı Derecelendirmesini olumsuz yönde etkileyebilecek tüm ihlal çeşitlerine önceden önlem alabilmek adına çalışmalarını sürdürüyor.",
          image : "/cardsBg/bg-1.avif"
        },
        {
          id : 2,
          title : "Meksika Pazar Yeri Gümrük Sorunları",
          content : "Meksika pazar yerinde yaşanan gümrük sorunlarının farkındayız. Aynı ürünün farklı kargo firmaları ile gümrükten geçebilme işleminin farklı sonuçlandığı zamanlarda oldu. Ancak Safe-As Meksika pazar yerinde satış yapan satıcıların bir daha gümrük sorunu yaşamaması ve kesintisiz teslimat yapabilmeleri adına yeni filtreler geliştirmeyi planlıyor.",
          image : "/cardsBg/bg-2.avif"
          
        },
        {
          id : 3,
          title : "A.B.D. Ve Birleşik Krallık Ürün Farklılıkları Sorunu",
          content : "İki ülke arasında özellikle teknolojik ürünlerde farklılık mevcut. Yüksek envanter sayılarına ulaşmış mağazalarda bu ürünleri tespit edip listeyi kaldırmak bir hayli güç. Bu durumun varlığının en üzücü handikapı ise A to Z şikayetleri. Safe-As iki ülke arasında farklılık olan ürünleri önceden tespit edip kesintisiz ve sürdürülebilir Dropshipping yapmanızda sizlere yardımcı olmayı planlıyor.",
          image : "/cardsBg/bg-3.avif"
          
        },
        {
          id : 4,
          title : "Safe-As Google Eklentisi",
          content : "Bu güncellememiz Arbitraj yapan kullanıcıların belirlediği üründe Fikri Mülkiyet Şikayeti, ortalama satış sayısı, kargo maliyeti, Amazon depo ve komisyon kesintileri, ROI gibi çok önemli verileri tek tek veya toplu bir şekilde incelemelerine olanak tanımayı planlıyor.",
          image : "/cardsBg/bg-4.avif"
          
        },
        {
          id : 5,
          title : " Ücretsiz Eğitimler Ve Webinarlar",
          content : "Alanında uzman mentörlerle birlikte Hesap Sağlığı, Suspend çözümleri, Ürün araştırma teknikleri, Mağaza Yönetimi, Sermaye Yönetimi gibi konularda Safe-As panelinde ekstra hiç bir ücret ödemeden erişebileceğiniz bir eğitim portalı oluşturmayı planlıyor.",
          image : "/cardsBg/bg-5.avif"
          
        },
        {
          id : 6,
          title : "Safe-AI İle Metin Hazırlama",
          content : "Safe-As bünyesinde geliştirilen yapay zeka modeli ile ihlaller, suspendler, Müşteri mesajları, A to Z kaldırma talebi gibi bir çok konuda satıcı hakları gözetilerek ve bir birinden farklı Appeal veya mesaj taslakları ile gerekli bilgileri sağlamanız halinde daha etkili ve kolay bir yönteme sorunu çözüme kavuşturmayı planlıyor.",
          image : "/cardsBg/bg-6.avif"
        },
        {
          id : 7,
          title : "Seller Partner API Entegrasyonu",
          content : "Safe-As, Amazon SP-API ortaklığı onaylandı! Bu sayede envanterinizde bulunan ürünleri tekrar kontrol etmeye gerek duymadan analiz edebilmiş olacaksınız. Aynı zamanda statüsü değişen ürünler de sizlerin izniyle mağazanızdan otomatik olarak silinebilecek.",
          image : "/cardsBg/bg-7.webp"
        },
        
      ]
      // bold h1 için
  return (
    <div id='plans' className='px-10 py-5  flex items-center flex-col gap-y-4  ' style={{ backgroundImage: "url('/stains/10.webp')", backgroundSize: "contain", backgroundPosition:"bottom" }}>
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