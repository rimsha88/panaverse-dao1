import React from 'react'
import Hero from './components/sections/Hero'
import CoreTracks from './components/sections/CoreTracks'
import SpecializedTrack from './components/sections/SpecializedTrack'
import ProgramOutcome from './components/sections/ProgramOutcome'

const page = () => {
  return (
    <div>
      {/* {"Hero section"} */}
     <Hero/>
     {/* { CoreTracks} */}
     <CoreTracks/>
     {/* { specializedTrack} */}
     <SpecializedTrack/>
     {/* outcome */}
     <ProgramOutcome/>
    </div>
  )
}

export default page