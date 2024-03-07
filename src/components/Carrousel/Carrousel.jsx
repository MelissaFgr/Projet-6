import { useState } from 'react';
import nextButton from '../../assets/images/Carrousel_next.svg';
import previousButton from '../../assets/images/Carrousel_previous.svg';
import './Carrousel.scss';

export default function Carrousel({ slides: imagesCarrousel, title }) {
	const [index, setIndex] = useState(0);
	const [transition, setTransition] = useState(false);

	const previousImage = () => changeImage(index === 0 ? imagesCarrousel.length - 1 : index - 1);
	const nextImage = () => changeImage(index === imagesCarrousel.length - 1 ? 0 : index + 1);

	const changeImage = (newIndex) => {
		setTransition(true);
		setTimeout(() => {
			setIndex(newIndex);
			setTransition(false);
		}, 300);
	};

	return (
		<div className="carrousel">
			{imagesCarrousel.length === 0 ? (
				<h2 className="carrousel_no_images">Pas de photos pour ce bien</h2>
			) : imagesCarrousel.length === 1 ? (
				<img src={imagesCarrousel[index]} className="carrousel_images" alt={title} />
			) : (
				<div>
					<img className="carrousel_previous_button" src={previousButton} alt="Bouton d'image précédente" onClick={previousImage} />
					<img src={imagesCarrousel[index]} className={`carrousel_images ${transition ? 'transition' : ''}`} alt={title} />
					<img className="carrousel_next_button" src={nextButton} alt="bouton d'image suivante" onClick={nextImage} />
					<div className="carrousel_number_images">
						{index + 1} / {imagesCarrousel.length}
					</div>
				</div>
			)}
		</div>
	);
}