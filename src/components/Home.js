import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section 
                backgroundImg={'SXM8_pad39a_fss_Desktop_3.webp'}
                caption="Recent Launch"
                title="SXM-8 Mission"
                btnText="Rewatch"
            />
            <Section 
                backgroundImg={'Homepage_CRS-22_8035_Desktop.webp'}
                caption="Recent Launch"
                title="CRS-22 Mission"
                btnText="Rewatch"
            />
            <Section 
                backgroundImg={'Crew-1_Crew_Desktop.webp'}
                caption="Completed Mission"
                title="Dragon Returns to Earth"
                description="After 167 days, Dragon completes its first long-duration mission."
                btnText="Rewatch"
            />
            <Section 
                backgroundImg={'HP_Star28_DSC_9214_Desktop.webp'}
                caption="Recent Launch"
                title="Starlink Mission"
                btnText="Rewatch"
            />
            <Section 
                backgroundImg={'hls-resized-2.webp'}
                title="Starship to Land NASA Astronauts on the Moon"
                btnText="Learn"
            />
            <Section 
                backgroundImg={'iss_game.webp'}
                title="DRAGON DOCKING SIMULATOR"
                description="Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary."
                btnText="Try Now"
            />
        </div>
    )
}

export default Home
