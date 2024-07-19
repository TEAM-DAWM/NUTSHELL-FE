import { useState } from 'react';

const useIconHoverUtil = () => {
	const [iconHovered, setIconHovered] = useState(false);
	const [iconClicked, setIconClicked] = useState(false);

	const handleIconMouseEnter = () => {
		setIconHovered(true);
	};
	const handleIconMouseLeave = () => {
		setIconHovered(false);
	};
	const stopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const handleIconClick = (e: React.MouseEvent) => {
		if (iconClicked) {
			setIconClicked(false);
		} else {
			setIconClicked(true);
		}
		stopPropagation(e);
	};
	return { iconHovered, iconClicked, handleIconMouseEnter, handleIconMouseLeave, handleIconClick };
};

export default useIconHoverUtil;
