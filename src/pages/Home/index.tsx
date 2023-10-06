import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import data from "../../data/data.json";
import Character from "./components/Character";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <main className='bg-zinc-800'>
      <Navbar />
      <section className='p-12 bg-neutral-900'>
        <h3 className='text-5xl text-gray-100 mb-7'>
          Quem você está procurando?
        </h3>
        <SearchBar search={search} setSearch={setSearch} />
        <div className='flex flex-wrap justify-between mb-7 w-full'>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className='grid grid-cols-5 justify-between w-full h-auto gap-4'>
          {data
            .filter(
              (e) => e.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
            .map((e) => (
              <Character name={e.name} img={e.img} />
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
