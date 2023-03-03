import React from 'react';

import SEMBLANZA from '../../documents/semblanza.pdf';
import CURRICULUM from '../../documents/curriculum.pdf';

const Demo = () => {
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col md:flex-row">
      <div className="flex-1">
        <iframe className="w-full h-full p-8" src="https://drive.google.com/file/d/1fa1E656XWq9gWrTM6LaCwYFGIlyGsyon/preview" allowFullScreen="true" allow="autoplay" title="Demo"></iframe>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <a href={CURRICULUM} target="_blank" rel="noreferrer" className="p-2 md:p-5 md:text-lg m-2 bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">CURRICULUM</a>
        <a href={SEMBLANZA} target="_blank" rel="noreferrer" className="p-2 md:p-5 md:text-lg m-2 bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">SEMBLANZA</a>
        <a href="https://www.facebook.com/profile.php?id=100077418890732&mibextid=LQQJ4d" target="_blank" rel="noreferrer" className="p-2 md:p-5 md:text-lg m-2 bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">FACEBOOK</a>
        <a href="https://instagram.com/cristinannz?igshid=NTdlMDg3MTY=" target="_blank" rel="noreferrer" className="p-2 md:p-5 md:text-lg m-2 bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">INSTAGRAM</a>
      </div>
    </div>
  )
}

export default Demo