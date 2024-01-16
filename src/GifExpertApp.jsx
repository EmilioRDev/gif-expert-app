import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['']);

	const onAddCategory = (newCatergory) => {
		if (categories.includes(newCatergory)) return;

		setCategories([newCatergory, ...categories]);
	};

	return (
		<>
			<h1>Gif Expert App</h1>

			<AddCategory onNewCategory={(event) => onAddCategory(event)} />

			{categories.map((category) => (
			<GifGrid key={category} category={category} />
			))}

		</>
	);
};
