import React from 'react';
import Color from './Color';
import { useColors } from '../Providers/ColorProvider'

export default function ColorList() {
	const { colors } = useColors();
	if (!colors.length) return <div>Brak kolorów. (Dodaj kolor)</div>;
	console.log(colors)

	return (
		<div className='color-list'>
			{
				colors.map(color => 
					<Color 
						key={color.id} 
						{...color} 

					/>
				)
			}
		</div>
	);
}