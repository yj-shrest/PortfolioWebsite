import React from 'react'

const Education = () => {
  return (
    <div id='education' className='flex flex-col w-[60rem] h-auto pt-10'>
        <div className="flex justify-center items-center">
        <h1 className='text-[2rem] font-sans font-semibold text-[#2f2f2f] pb-8'>Education</h1>
        </div>
      <div className="relative border-l-4 border-[#2D8BE8] ml-4">
  {/* Entry 1 */}
  <div className="mb-10 ml-6 relative">
    <span className="absolute -translate-x-[2.1rem] -translate-y-2 top-1 w-4 h-4 bg-[#2D8BE8] rounded-full"></span>
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-[#2D8BE8] font-semibold">2022–Present</p>
      <h3 className="font-bold text-lg">Pulchowk Campus, IOE</h3>
      <p className="text-gray-600">Bachelors in Computer Engineering</p>
    </div>
  </div>

  {/* Entry 2 */}
  <div className="mb-10 ml-6 relative">
    <span className="absolute -translate-x-[2.1rem] top-1 w-4 h-4 bg-[#2D8BE8] rounded-full"></span>
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-[#2D8BE8] font-semibold">2019–2021</p>
      <h3 className="font-bold text-lg">The Times International College</h3>
      <p className="text-gray-600">+2 in Science</p>
    </div>
  </div>

  {/* Entry 3 */}
  <div className="ml-6 relative">
    <span className="absolute -translate-x-[2.1rem] top-1 w-4 h-4 bg-[#2D8BE8] rounded-full"></span>
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-[#2D8BE8] font-semibold">2019</p>
      <h3 className="font-bold text-lg">Mt. Sagarmatha Brilliant’s Academy</h3>
      <p className="text-gray-600">Secondary Education Examination</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Education
