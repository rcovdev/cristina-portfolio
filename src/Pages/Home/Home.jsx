import React from 'react';
import Card from '../../Components/Card/Card';

import { Link } from 'react-router-dom';

import CURRICULUM from '../../documents/curriculum.pdf';

const Home = () => {
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col md:flex-row">
        <div className="flex-1 grid place-items-center">
            <Card />
        </div>
        <section className="flex-1 flex flex-col items-center md:justify-center">
          <h1 className="text-2xl md:text-4xl tracking-[4px] underline underline-offset-8">CRISTINA NUÑEZ</h1>
          <h2 className="text-lg md:text-2xl pt-1">ACTRIZ DE CINE Y TEATRO</h2>
          <article className="text-center text-3xl md:text-5xl px-5 py-8 tracking-[3px]">
            México
          </article>
          <aside className="flex items-center justify-center w-full">
            <a href={CURRICULUM} target="_blank" rel="noreferrer" className="p-3 md:p-5 md:text-lg m-3 bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">CURRICULUM</a>
            <Link to="/contacto" className="p-3 md:p-5 md:text-lg m-3 bg-white text-black font-extrabold rounded-lg cursor-pointer tracking-[1px] hover:bg-amber-500 hover:text-white">CONTACTO</Link>
          </aside>
        </section>
    </div>
  )
}

export default Home