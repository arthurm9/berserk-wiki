import React, { useState } from 'react';
import logo from './../../assets/logo.png';
import SearchBar from './SearchBar';
import Filter from './Filter';

export default function Home() {
  const [search, setSearch] = useState("");

  return(
    <main>
      <nav className='items-center align-middle justify-center w-full h-fit'>
        <img height={64} width={64} src={logo} alt="logo" />
        <h1 className='font-bold'>BERSERK WIKI</h1>
      </nav>
      <header className='align-middle bg-red-900 bg-cover bg-no-repeat flex h-72 p-0'>
        <div className='text-slate-50 text-5xl min-w-fit w-2/5 p-4'>
          Tudo que você precisa saber sobre o melhor anime que existe!
        </div>
      </header>
      <section className='p-12'>
        <h3 className='text-slate-800 text-5xl mb-7'>Dúvidas</h3>
        <SearchBar search={search} setSearch={setSearch} />
        <div className='align-middle flex flex-wrap justify-between mb-7 w-full'>
          <Filter />
        </div>
      </section>
    </main>
  );
}