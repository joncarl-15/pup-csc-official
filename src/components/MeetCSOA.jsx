import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MeetCSOA = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [aboutRef, aboutVisible] = useScrollAnimation()
  const [purposesRef, purposesVisible] = useScrollAnimation()
  const [functionsRef, functionsVisible] = useScrollAnimation()

  const purposes = [
    {
      title: 'Promote the right of students to organize',
      description: 'Support students in forming and joining legitimate organizations.'
    },
    {
      title: 'Establish clear accreditation and revalidation procedures',
      description: 'Ensure that all organizations comply with the standards and requirements set by the University, the OSAS, and the IRR.'
    },
    {
      title: 'Oversee proper management of student organizations',
      description: 'Guide organizations to operate responsibly, transparently, and in accordance with the University Code.'
    },
    {
      title: 'Develop student leadership and organizational discipline',
      description: 'Create systems that foster responsible participation in university affairs.'
    },
    {
      title: 'Ensure accountability and adherence to university policies',
      description: 'Monitor compliance, records, and documentation for all student organizations.'
    },
    {
      title: 'Maintain an organized, safe, and functional student organization environment',
      description: 'Promote order, safety, and integrity in all organization activities, finances, and internal operations.'
    }
  ]

  const keyFunctions = [
    {
      title: 'Accreditation & Revalidation',
      items: [
        'Process and evaluate applications for accreditation and revalidation',
        'Review constitutions, membership lists, activity plans, and compliance requirements',
        'Recommend and approve the recognition status of organizations in coordination with OSAS and the Campus Director'
      ]
    },
    {
      title: 'Supervision & Monitoring',
      items: [
        'Monitor all academic and non-academic student organizations',
        'Ensure organizations follow university guidelines, rules, and activity regulations',
        'Recommend disciplinary measures for violations (warnings, suspensions, revocations)'
      ]
    },
    {
      title: 'Documentation & Compliance Management',
      items: [
        'Maintain official records, minutes, reports, accreditation files, and organizational databases',
        'Track deadlines and require organizations to submit documents on time',
        'Ensure proper filing, safekeeping, and endorsement of reports'
      ]
    },
    {
      title: 'Policy Implementation',
      items: [
        'Implement the IRR for Student Councils and Student Organizations',
        'Oversee compliance with Title 7 of the PUP Handbook and CSC Constitution and By-Laws',
        'Create committees as needed to execute mandates effectively'
      ]
    },
    {
      title: 'Communication & Public Information',
      items: [
        'Release official announcements, guidelines, schedules, and results of accreditation',
        'Produce official publicity materials through the Office of the Director for Publicity & Creative Arts',
        'Coordinate with CSC and OSAS for verified dissemination of information'
      ]
    },
    {
      title: 'Leadership & Representation',
      items: [
        'Represent SC COSOA in CSC meetings, OSAS consultations, SCA matters, and university functions',
        'Exercise supervisory authority over all SC COSOA members, deputies, and committees'
      ]
    },
    {
      title: 'Enforcement of Organizational Policies',
      items: [
        'Regulate initiation rites, financial compliance, fund-raising activities, and membership fees',
        'Uphold sanctions stated in the IRR for accreditation, financial, initiation, and general policy violations'
      ]
    }
  ]

  return (
    <section id="csoa" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            SC COSOA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded mb-6"></div>
          <p className="text-xl font-semibold text-red-600 mb-2">
            Student Council Commission on Student Organizations and Accreditation
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
            "Empowered Organizations = Empowered Students"
          </p>
        </div>

        {/* About SC COSOA */}
        <div
          ref={aboutRef}
          className={`glass rounded-3xl p-8 md:p-10 shadow-xl mb-16 scroll-fade-in ${aboutVisible ? 'animate-in' : ''}`}
        >
          <h3 className="text-3xl font-bold text-red-600 mb-6">About SC COSOA</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Student Council Commission on Student Organizations and Accreditation (SC COSOA) is the <strong>sole accrediting body</strong> for all student organizations and formations at the Polytechnic University of the Philippines – Lopez, Quezon Campus.
            </p>
            <p>
              As an independent Constitutional Commission established under <strong>Article XII of the CSC Constitution and By-Laws</strong> and grounded in <strong>Title 7 of the 2019 PUP Student Handbook</strong>, SC COSOA ensures that all student organizations operate legitimately, transparently, and responsibly.
            </p>
            <p>
              Working in close coordination with the <strong>Office of Student Affairs and Services (OSAS)</strong> and the <strong>Central Student Council (CSC)</strong>, SC COSOA upholds standards of accountability, compliance, and organizational excellence across all academic and non-academic organizations.
            </p>
            <p>
              SC COSOA also embodies the symbolism of its official emblem — a <strong>torch and flame</strong> representing guidance, leadership, passion, and vigilance; <strong>three pylons</strong> symbolizing Service, Excellence, and Integrity; and the inner advocacy that anchors its identity:
            </p>
            <p className="text-center text-xl font-bold text-red-600 my-4">
              "Empowered Organizations = Empowered Students."
            </p>
            <p>
              This advocacy reflects SC COSOA's belief that strong, well-supported organizations lead to stronger, more capable, and more engaged PUPian students.
            </p>
          </div>
        </div>

        {/* Purposes of SC COSOA */}
        <div
          ref={purposesRef}
          className={`mb-16 scroll-fade-in ${purposesVisible ? 'animate-in' : ''}`}
        >
          <div className="glass rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-red-600 mb-6">Purposes of SC COSOA</h3>
            <div className="space-y-4">
              {purposes.map((purpose, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md hover-lift">
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-lg mr-3 flex-shrink-0">{index + 1}.</span>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{purpose.title}</h4>
                      <p className="text-gray-700">{purpose.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Functions */}
        <div
          ref={functionsRef}
          className={`scroll-fade-in ${functionsVisible ? 'animate-in' : ''}`}
        >
          <div className="glass rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-red-600 mb-6">Key Functions of SC COSOA</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFunctions.map((func, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover-lift">
                  <h4 className="text-xl font-bold text-red-600 mb-4">{func.title}</h4>
                  <ul className="space-y-2">
                    {func.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetCSOA
