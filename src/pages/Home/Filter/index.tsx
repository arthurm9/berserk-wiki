import filter from './filter.json';

type IOption = (typeof filter)[0];

export default function Filter() {
  return(
    <>
      <div className='flex gap-6 flex-wrap m-5'>
        {filter.map((option) => (
          <button className='align-middle bg-gray-200 border-0 rounded flex-1 text-xl font-bold h-10 justify-center w-36 hover:cursor-pointer active:bg-black active:text-neutral-50' 
          key={option.id}>
            {option.label}
          </button>
        ))};
      </div>
    </>
  );
}