import React from 'react'
import Slider from 'react-slick'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import cscLogo from '../Picture/csc-logo.png'
import cscpres from '../Picture/president.png'
import vpres from '../Picture/vp.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import sec from '../Picture/sec.png'
import gent from '../Picture/gent.png'
import aud from '../Picture/aud.png'
import acadC from '../Picture/acad-c.png'
import acadVc from '../Picture/acad-vc.png'
import culVc from '../Picture/cul-vc.png'
import insC from '../Picture/ins-c.png'
import insVc from '../Picture/ins-vc.png'
import netC from '../Picture/net-c.png'
import pcaC from '../Picture/pca-c.png'
import pcaVc from '../Picture/pca-vc.png'
import pcaM from '../Picture/pca-m.png'
import sportC from '../Picture/sport-c.png'
import sportVc from '../Picture/sport-vc.png'
import sportM from '../Picture/sport-m.png'
import strawVc from '../Picture/straw-vc.png'
import strawC from '../Picture/straw-c.png'
import asec from '../Picture/a-sec.png'
import culC from '../Picture/cul-c.png'

const MeetOfficers = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation()
  const officers = [
    {
      id: 1,
      name: 'Ms. Franz Bondeci',
      position: 'President',
      image: cscpres,
      social: {
        facebook: 'https://www.facebook.com/franzlaurine.bondeci',
      }
    },
    {
      id: 2,
      name: 'Mr. Mark Aron Barretto Reyes',
      position: 'Vice President',
      image: vpres,
      social: {
        facebook: 'https://www.facebook.com/eyronrys',
      }
    },
    {
      id: 3,
      name: 'Ms. Nehemiah Yzabhll F. Gallardo',
      position: 'General Secretary',
      image: sec,
      social: {
        facebook: 'https://www.facebook.com/yzabhll',
      }
    },
    {
      id: 4,
      name: 'Mx. Ahyesha Hernandez',
      position: 'Assistant Secretary',
      image: asec,
      social: {
        facebook: 'https://www.facebook.com/harry.hzhz',
      }
    },
    {
      id: 5,
      name: 'Ms. Kate Angel E. Driz',
      position: 'General Treasurer',
      image: gent,
      social: {
        facebook: 'https://www.facebook.com/kate.angel.driz.2024',
      }
    },
    {
      id: 5,
      name: 'Ms. Janelle L. Cantillana',
      position: 'General Auditor',
      image: aud,
      social: {
        facebook: 'https://www.facebook.com/elle.cantillana.16',
      }
    },
    {
      id: 6,
      name: 'Ms. Precious Mikyla Montes',
      position: 'Chairperson, Academic Committee',
      image: acadC,
      social: {
        facebook: 'https://www.facebook.com/precious.mikylla.montes.2025',
      }
    },
    {
      id: 7,
      name: 'Mr. Francis S. Flores',
      position: 'Vice Chairperson, Academic Committee',
      image: acadVc,
      social: {
        facebook: 'https://www.facebook.com/francis.flores.287655',
      }
    },
    {
      id: 8,
      name: 'Mr. Kurl Paulo L. Bulaklak',
      position: 'Chairperson, Cultural Committee',
      image: culC,
      social: {
        facebook: 'https://www.facebook.com/kurlpaulo.bulaklak.58',
      }
    },
    {
      id: 9,
      name: 'Ms. Jorgia Beatriz C. Albos',
      position: 'Vice Chairperson, Cultural Committee',
      image: culVc,
      social: {
        facebook: 'https://www.facebook.com/jorgiabeatriz.albos',
      }
    },
    {
      id: 10,
      name: 'Mr. Jolan R. Maquiñana',
      position: 'Chairperson, Institutional Committee',
      image: insC,
      social: {
        facebook: 'https://www.facebook.com/jolan.maquinana',
      }
    },
    {
      id: 11,
      name: 'Mr. Juan Jordan Emmanuel Revediso',
      position: 'Vice Chairperson, Institutional Committee',
      image: insVc,
      social: {
        facebook: 'https://www.facebook.com/jordan.revediso',
      }
    },
    {
      id: 12,
      name: 'Mr. Darren A. Morelo',
      position: 'Chairperson, Networking Committee',
      image: netC,
      social: {
        facebook: 'https://www.facebook.com/darren.morelo',
      }
    },
    {
      id: 13,
      name: 'Mr. Reiven Kyle M. Velano',
      position: 'Chairperson, PCA Committee',
      image: pcaC,
      social: {
        facebook: 'https://www.facebook.com/reivenkyle.velano',
      }
    },
    {
      id: 14,
      name: 'Ms. Janella Kim E. Cantillana',
      position: 'Vice Chairperson, PCA Committee',
      image: pcaVc,
      social: {
        facebook: 'https://www.facebook.com/elle.cantillana.16',
      }
    },
    {
      id: 15,
      name: 'Mr. Jon Carlo A. Marasigan',
      position: 'Member, PCA Committee',
      label: 'Web Dev',
      image: pcaM,
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=61580875614163',
      }
    },
    {
      id: 16,
      name: 'Ms. Jayzel L. Pedrezuela',
      position: 'Chairperson, Sports Committee',
      image: sportC,
      social: {
        facebook: 'https://www.facebook.com/jayzel.lumban.pedrezuela',
      }
    },
    {
      id: 17,
      name: 'Ms. Ann Jillian Pauleen B. Avila',
      position: 'Vice Chairperson, Sports Committee',
      image: sportVc,
      social: {
        facebook: 'https://www.facebook.com/avila.jillian',
      }
    },
    {
      id: 18,
      name: 'Ms. Noelle Cassandra A. Perida',
      position: 'Member, Sports Committee',
      image: sportM,
      social: {
        facebook: 'https://www.facebook.com/noellecassandra.perida',
      }
    },
    {
      id: 19,
      name: 'Ms. Joy Ann E. Tormon',
      position: 'Chairperson, S.T.R.A.W Committee',
      image: strawC,
      social: {
        facebook: 'https://www.facebook.com/Tormonjoyann',
      }
    },
    {
      id: 20,
      name: 'Ms. Aina Mae L. Lascano',
      position: 'Vice Chairperson, S.T.R.A.W Committee',
      image: strawVc,
      social: {
        facebook: 'https://www.facebook.com/ainamae.lascano.9',
      }
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section id="officers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className={`text-center mb-16 scroll-fade-in ${sectionVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet the Officers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated leaders serving the student body
          </p>
        </div>

        <Slider {...settings} className="officer-slider">
          {officers.map((officer) => (
            <div key={officer.id} className="px-4">
              <div className="glass rounded-2xl p-6 shadow-xl hover-lift hover-glow smooth-transition">
                <div className="relative mb-4">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1">
                  {officer.name}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-2 mb-3">
                  <span className="text-orange-600 font-medium text-center">
                    {officer.position}
                  </span>
                  {officer.label && (
                    <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded border border-orange-200 uppercase tracking-wider">
                      {officer.label}
                    </span>
                  )}
                </div>
                {officer.bio && (
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {officer.bio}
                  </p>
                )}
                <div className="flex justify-center space-x-4">
                  <a
                    href={officer.social.facebook}
                    className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default MeetOfficers

