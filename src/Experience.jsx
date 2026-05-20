import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex w-full max-w-[60rem] flex-col px-4 h-auto pt-10'>
        <div className="flex justify-center items-center">
        <h1 className='text-[2rem] font-sans font-semibold text-[#2f2f2f] pb-8'>Experience</h1>
        </div>
      <div className="relative border-l-4 border-[#2D8BE8] ml-4">
  {/* Entry 1 */}
  <div className="mb-10 ml-6 relative">
    <span className="absolute -translate-x-[2.1rem] -translate-y-2 top-1 w-4 h-4 bg-[#2D8BE8] rounded-full"></span>
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-[#2D8BE8] font-semibold">2025-Present</p>
      <h3 className="font-bold text-lg">Creative Director at Locus 2026</h3>
      <p className="text-gray-600">Leading the creative vision and design initiatives for Nepal’s largest student-led tech festival, LOCUS 2026</p>
    </div>
  </div>

  {/* Entry 2 */}
  <div className="mb-10 ml-6 relative">
    <span className="absolute -translate-x-[2.1rem] top-1 w-4 h-4 bg-[#2D8BE8] rounded-full"></span>
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-[#2D8BE8] font-semibold">2023–2025</p>
      <h3 className="font-bold text-lg">Design Chief LOCUS 2024-2025</h3>
      <p className="text-gray-600">Collaborated with diverse teams to deliver impactful designs and ensure a consistent brand experience across LOCUS events.</p>
    </div>
  </div>

  {/* Entry 3 */}
  <div className="ml-6 relative">
    <span className="absolute -translate-x-[2.1rem] top-1 w-4 h-4 bg-[#2D8BE8] rounded-full"></span>
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-[#2D8BE8] font-semibold">2023-2025</p>
      <h3 className="font-bold text-lg">Zerone Digital Media Designer</h3>
      <p className="text-gray-600">Worked as the digital media designer creating engaging posts and contents. </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Experience
