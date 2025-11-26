import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutCSC from './components/AboutCSC'
import MeetOfficers from './components/MeetOfficers'
import AboutUniversity from './components/AboutUniversity'
import MissionVision from './components/MissionVision'
import MeetCSOA from './components/MeetCSOA'
import MeetCSOAOfficers from './components/MeetCSOAOfficers'
import ProgressSlideshow from './components/ProgressSlideshow'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutCSC />
      <MeetOfficers />
      <AboutUniversity />
      <MissionVision />
      <MeetCSOA />
      <MeetCSOAOfficers />
      <ProgressSlideshow />
      <Footer />
    </div>
  )
}

export default App

