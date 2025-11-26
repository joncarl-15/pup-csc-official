import React from 'react'
import Slider from 'react-slick'
import balikSintaImage from '../Picture/balik-sinta.jpg'
import leadershipImage from '../Picture/leadership.jpg'
import walkoutImage from '../Picture/walkout.jpg'
import hivImage from '../Picture/hiv.jpg'
import teacherImage from '../Picture/teacher.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ProgressSlideshow = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [sliderRef, sliderVisible] = useScrollAnimation()
  const progressImages = [
    {
      id: 1,
      image: balikSintaImage,
      title: 'PUP Balik Sinta 2025',
      description: 'Byaheng Balik Sinta reminds us that this academic year is a new adventure. With 𝙛𝙧𝙚𝙨𝙝 𝙜𝙤𝙖𝙡𝙨, 𝙧𝙚𝙣𝙚𝙬𝙚𝙙 𝙚𝙣𝙚𝙧𝙜𝙮, 𝙖𝙣𝙙 𝙨𝙩𝙧𝙤𝙣𝙜𝙚𝙧 𝙗𝙤𝙣𝙙𝙨, we are all on board for another chapter filled with 𝙜𝙧𝙤𝙬𝙩𝙝, 𝙛𝙧𝙞𝙚𝙣𝙙𝙨𝙝𝙞𝙥, 𝙖𝙣𝙙 𝙨𝙝𝙖𝙧𝙚𝙙 𝙫𝙞𝙘𝙩𝙤𝙧𝙞𝙚𝙨. 🤓💪🏻💥',
    },
    {
      id: 2,
      image: leadershipImage,
      title: 'Leadership Training Seminar and Workshop 2025',
      description: 'A heartfelt thank you to all the participants who took part in our 𝗟𝗲𝗮𝗱𝗲𝗿𝘀𝗵𝗶𝗽 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗮𝗻𝗱 𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽 held from September 29–30, 2025. Your active 𝙞𝙣𝙫𝙤𝙡𝙫𝙚𝙢𝙚𝙣𝙩, 𝙚𝙣𝙩𝙝𝙪𝙨𝙞𝙖𝙨𝙢, 𝙖𝙣𝙙 𝙩𝙚𝙖𝙢𝙬𝙤𝙧𝙠 made this event truly remarkable and meaningful. ',
    },
    {
      id: 3,
      image: walkoutImage,
      title: 'PUP Walkout 2025',
      description: 'Sa bawat 𝙨𝙞𝙜𝙖𝙬, 𝙥𝙡𝙖𝙠𝙖𝙧𝙙, 𝙖𝙩 𝙝𝙖𝙠𝙗𝙖𝙣𝙜 𝙣𝙜 𝙢𝙜𝙖 𝙄𝙨𝙠𝙤𝙡𝙖𝙧 𝙣𝙜 𝘽𝙖𝙮𝙖𝙣—naroon ang diwa ng pagkakaisa at paninindigan! Ang mga larawang ito ay patunay ng ating kolektibong lakas at tapang na humarap sa mga isyung patuloy na bumabagabag sa ating edukasyon at karapatan.',
    },
    {
      id: 4,
      image: hivImage,
      title: 'HIV Awareness Webinar',
      description: 'A heartfelt thank you to everyone who joined us via 𝙑𝙞𝙖 𝙕𝙤𝙤𝙢 𝙖𝙣𝙙 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙇𝙞𝙫𝙚, and to our insightful resource speaker, 𝗞𝗹𝗮𝘂𝗱𝗲 𝗠. 𝗕𝘂ñ𝗮𝗴, 𝗥𝗡, 𝗠𝗦𝗡, 𝗟𝗣𝗧 for sharing valuable knowledge on Adolescent Reproductive Health and HIV awareness.',
    },
    {
      id: 4,
      image: teacherImage,
      title: 'Teachers’ Day Celebration 2025',
      description: 'The event was filled with touching messages, fun games, and heartfelt tokens of love that reminded us just how much our educators mean to us. 🤩❤️‍🔥 Their dedication, patience, and passion continue to inspire us to reach for our dreams and become the best versions of ourselves. 😊🌠🌟',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Progress & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Celebrating milestones and accomplishments in serving the student community
          </p>
        </div>

        <div
          ref={sliderRef}
          className={`glass-dark rounded-3xl p-4 md:p-8 shadow-2xl scroll-scale-in ${sliderVisible ? 'animate-in' : ''}`}
        >
          <Slider {...settings}>
            {progressImages.map((item) => (
              <div key={item.id} className="outline-none">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <h3 className="text-lg md:text-4xl font-bold mb-1 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-xl text-gray-200 line-clamp-2 md:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ProgressSlideshow

