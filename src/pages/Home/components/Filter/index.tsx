import data from '../../../../data/data.json';

type IOption = (typeof data)[0];

interface FilterProps {
  filter: number | null,
  setFilter: React.Dispatch<React.SetStateAction<number | null>>,
}

export default function Filter({ filter, setFilter }: FilterProps) {
  const selectFilter = (opt: IOption) => setFilter(opt.id)
  return (
    <>
      <div className='flex w-full justify-between gap-2 flex-wrap mt-6'>
        {data.map((opt) => (
          <button
            className={`${'text-white align-middle bg-zinc-800 border-0 rounded flex-1 text-md font-bold h-10 justify-center hover:bg-zinc-700 hover:cursor-pointer'} ${opt.id === filter ? ['bg-zinc-900 text-white hover:bg-zinc-900 border-white border-2'] : ''}`}
            key={opt.id}
            onClick={() => selectFilter(opt)}
          >
            {opt.name}
          </button>
        ))};
      </div>
    </>
  );
}