import React from 'react';
import { CgSearch } from "react-icons/cg";

interface SearchBarProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
	return (
		<>
			<div className='bg-zinc-800 text-white rounded flex gap-4 h-10 justify-center pl-4 pr-4 w-full max-w-full'>
				<input
					className='bg-zinc-800 font-semibold border-0 text-md outline-none w-full placeholder:text-gray-500'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Ex: Guts'
				/>
				<CgSearch className='mt-2.5' size={20} color="#4c4d5e" />
			</div>
		</>
	);
}
