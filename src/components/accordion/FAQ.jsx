import React from 'react'
import Accordion from './Accordion'

const faqContent = [
  {
    id: 1,
    title: "Hangi paketi almalıyım ?",
    content: "Paket seçimi yaparken, mağazanızda bulunan envanter sayınız ve o ay içerisinde mağazanıza yüklemeyi planladığınız ürün adet sayısını göz önünde bulundurarak size en yakın paketi seçmenizi tavsiye ediyoruz."
  },
  {
    id: 2,
    title: "Fikri Mülkiyet Şikayeti alırsam ne olur ?",
    content: "Safe-As, Fikri Mülkiyet Şikayeti gönderme potansiyeline sahip marka ve satıcıları önceden tespit ettiğini vaad ediyor. Buna rağmen yazılımda taradığınız ürünlere 'Güvenilir' statüsünde olmasına rağmen Fikri Mülkiyet Şikayeti almanız durumunda bu sorunu ücretsiz bir şekilde biz çözüyoruz."
  },
  {
    id: 3,
    title: "Paketlerde bulunan aylık ASIN tarama hakkı yeterli olur mu ?",
    content: "Paket seçimini ihtiyacınıza göre yapmanız durumunda yeterli olur. Örneğin mağazanızda 3.*** adet ürün var ve sermayeniz, mağazanızın durumu veya yoğunluk gibi bir çok faktörü göz önünde bulundurduktan sonra 4.*** adet ürün daha eklemeyi planlıyorsunuz bu durumda 10.000 adet ASIN tarama hakkının olduğu STANDART paket yeterli olacaktır."
  },
  {
    id: 4,
    title: "Safe-As yazılımı envanter kontrolü veya fiyat takibi gibi özelliklere sahip mi ?",
    content: "Hayır, Safe-As yazılımı Planlanan gelişmeler de dahil olmak üzere kapsamlı bir Amazon Hesap Sağlığı destek yazılımıdır."
  }
]

const FAQ = () => {
  return (
    <>

      
      <div id='faq' className='px-10 bg-[#22364E]'>
        <div className='flex items-center justify-center pt-6 '>
          <h1 className='sm:text-3xl text-2xl bg-[#E19930] px-3 py-1 rounded-xl text-white poppins-semibold '>SIKÇA SORULAN SORULAR</h1>
        </div>

        <div className='p-4'>
          <div className=' p-1 bg-[#DCDCDC] rounded-lg'>
            {
              faqContent.map(item => (
                <Accordion title={item.title} content={item.content} key={item.id} />
              ))
            }
          </div>
        </div>

      </div>
      
    </>
  )
}

export default FAQ


/*


*/