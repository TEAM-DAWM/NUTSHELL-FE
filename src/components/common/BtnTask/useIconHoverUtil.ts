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
	const handleIconClick = (e: React.MouseEvent) => {
		setIconClicked(!iconClicked);
		e.stopPropagation();
	};
	return { iconHovered, iconClicked, handleIconMouseEnter, handleIconMouseLeave, handleIconClick };
};

export default useIconHoverUtil;
