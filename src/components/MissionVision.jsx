import React from 'react'
import { FaBullseye, FaEye, FaGraduationCap, FaFlask, FaCogs } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MissionVision = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [missionRef, missionVisible] = useScrollAnimation()
  const [visionRef, visionVisible] = useScrollAnimation()
  const [goalsRef, goalsVisible] = useScrollAnimation()
  const [valuesRef, valuesVisible] = useScrollAnimation()

  return (
    <section id="mission-vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div
            ref={missionRef}
            className={`glass rounded-3xl p-8 md:p-10 shadow-2xl hover-lift scroll-fade-in-left ${missionVisible ? 'animate-in' : ''}`}
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 rounded-full p-4 mr-4">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Advance an inclusive, equitable, and globally relevant polytechnic education towards national development.
            </p>
          </div>

          {/* Vision */}
          <div
            ref={visionRef}
            className={`glass rounded-3xl p-8 md:p-10 shadow-2xl hover-lift scroll-fade-in-right ${visionVisible ? 'animate-in' : ''}`}
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 rounded-full p-4 mr-4">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              A leading comprehensive polytechnic university in Asia.
            </p>
          </div>
        </div>

        {/* Strategic Goals */}
        <div
          ref={goalsRef}
          className={`mt-16 scroll-scale-in ${goalsVisible ? 'animate-in' : ''}`}
        >
          <div className="glass rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              Strategic Goals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: Teaching and Learning */}
              <div className="hover-lift bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-full p-3 mr-3 flex-shrink-0">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800">Pillar 1: Teaching and Learning</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 font-bold flex-shrink-0">SG 1:</span>
                    <span>Quality Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 font-bold flex-shrink-0">SG 2:</span>
                    <span>Student Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1 font-bold flex-shrink-0">SG 3:</span>
                    <span>Academic Excellence</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Research and Extension */}
              <div className="hover-lift bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 rounded-full p-3 mr-3 flex-shrink-0">
                    <FaFlask className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800">Pillar 2: Research and Extension</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1 font-bold flex-shrink-0">SG 4:</span>
                    <span>Research Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1 font-bold flex-shrink-0">SG 5:</span>
                    <span>Community Engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1 font-bold flex-shrink-0">SG 6:</span>
                    <span>Extension Services</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Internal Governance */}
              <div className="hover-lift bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full p-3 mr-3 flex-shrink-0">
                    <FaCogs className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800">Pillar 3: Internal Governance</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1 font-bold flex-shrink-0">SG 7:</span>
                    <span>Institutional Effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1 font-bold flex-shrink-0">SG 8:</span>
                    <span>Resource Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1 font-bold flex-shrink-0">SG 9:</span>
                    <span>Organizational Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1 font-bold flex-shrink-0">SG 10:</span>
                    <span>Sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1 font-bold flex-shrink-0">SG 11:</span>
                    <span>Stakeholder Relations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div
          ref={valuesRef}
          className={`mt-16 scroll-scale-in ${valuesVisible ? 'animate-in' : ''}`}
        >
          <div className="glass rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
              Core Values
            </h3>
            <p className="text-center text-2xl font-bold text-orange-600 mb-8">INSPIRED</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center hover-lift stagger-1 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrity and Accountability</h4>
                <p className="text-gray-600">Upholding honesty and responsibility in all actions</p>
              </div>
              <div className="text-center hover-lift stagger-2 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🇵🇭</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Nationalism</h4>
                <p className="text-gray-600">Commitment to national development and progress</p>
              </div>
              <div className="text-center hover-lift stagger-3 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Sense of Service</h4>
                <p className="text-gray-600">Dedication to serving others and the community</p>
              </div>
              <div className="text-center hover-lift stagger-1 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Passion for Learning and Innovation</h4>
                <p className="text-gray-600">Continuous pursuit of knowledge and creative solutions</p>
              </div>
              <div className="text-center hover-lift stagger-2 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤗</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Inclusivity</h4>
                <p className="text-gray-600">Embracing diversity and promoting equal opportunities</p>
              </div>
              <div className="text-center hover-lift stagger-3 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Respect for Human Rights and the Environment</h4>
                <p className="text-gray-600">Protecting dignity and sustainability for all</p>
              </div>
              <div className="text-center hover-lift stagger-1 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h4>
                <p className="text-gray-600">Striving for the highest standards in all endeavors</p>
              </div>
              <div className="text-center hover-lift stagger-2 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🗳️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Democracy</h4>
                <p className="text-gray-600">Promoting participatory governance and freedom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision

