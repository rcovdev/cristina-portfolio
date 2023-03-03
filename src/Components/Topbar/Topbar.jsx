import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    window.onload=function(){
        const hamburger = document.querySelector("#hamburger");
        const menu = document.querySelector("#menu");
        const firstBar = document.querySelector("#firstBar");
        const secondBar = document.querySelector("#secondBar");
        const thirdBar = document.querySelector("#thirdBar");
    
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            secondBar.classList.toggle("hidden");
            firstBar.classList.toggle("translate-y-8");
            firstBar.classList.toggle("rotate-45");
            thirdBar.classList.toggle("translate-y-2");
            thirdBar.classList.toggle("rotate-n45");
        });
    }

  return (
    <nav className="w-full top-0">
        <div className="container mx-auto px-3 py-5 flex items-center justify-between">
            <div>
                <Link className="text-2xl md:text-3xl font-bold tracking-wider" to="/">
                    Cristina Nuñez
                </Link>
            </div>
            <ul className="hidden md:flex space-x-10 font-bold text-lg uppercase tracking-widest">
                <li>
                    <Link to="/" className="hover:text-amber-500" href="#">Inicio</Link>
                </li>
                <li>
                    <Link className="hover:text-amber-500" to="/fotos">Fotos</Link>
                </li>
                <li>
                    <Link className="hover:text-amber-500" to="/demo">Demo</Link>
                </li>
                <li>
                    <Link className="hover:text-amber-500" to="/contacto">Contacto</Link>
                </li>
            </ul>
            <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-[4]">
                <div id="firstBar" className="w-6 h-0.5 bg-white"></div>
                <div id="secondBar" className="w-6 h-0.5 bg-white"></div>
                <div id="thirdBar" className="w-6 h-0.5 bg-white"></div>
            </div>
            <ul id="menu" className="hidden bg-amber-500 absolute left-0 top-0 w-full p-10 rounded-b-3xl text-center text-2xl z-[3]">
                <li className="mt-5">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mt-5">
                    <Link to="/fotos">Fotos</Link>
                </li>
                <li className="mt-5">
                    <Link to="/demo">Demo</Link>
                </li>
                <li className="mt-5">
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Topbar
