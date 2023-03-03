import React from 'react'

const Contact = () => {
  return (
    <div className="h-[calc(100vh-76px)]">
      <form className="flex flex-col h-full items-center justify-center" action="">
        <input className="p-3 mx-8 my-3 w-[70%] rounded-lg" type="text" required placeholder="Nombre / Name *" />
        <input className="p-3 mx-8 my-3 w-[70%] rounded-lg" type="email" required placeholder="Correo / E-Mail *" />
        <input className="p-3 mx-8 my-3 w-[70%] rounded-lg" type="text" placeholder="Asunto / Subject" />
        <textarea className="p-3 mx-8 my-3 w-[70%] rounded-lg" required placeholder="Mensaje / Message *" name="" id="" cols="30" rows="10"></textarea>
        <button className="p-3 md:p-5 md:text-lg m-3  bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">ENVIAR</button>
      </form>
    </div>
  )
}

export default Contact