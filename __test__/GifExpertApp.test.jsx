import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpetApp', () => {
	test('Debe hacer match con la snapshot ', () => {
		const { container } = render(<GifExpertApp />);
		screen.debug();
		expect(container).toMatchSnapshot();
	});

});
