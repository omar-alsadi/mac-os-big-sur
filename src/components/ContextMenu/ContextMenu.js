import { useEffect, useCallback, useState } from 'react';

const useContextMenu = ({ mainRef }) => {
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      if ( mainRef && mainRef.current.contains(e.target)) {
        let x = e.pageX;
        let y = e.pageY;
        setXPos(`${x}px`);
        setYPos(`${y}px`);
        setIsMenuVisible(true);
      } else {
        setIsMenuVisible(false);
      }
    },
    [setIsMenuVisible, mainRef, setXPos, setYPos],
  );

  const handleClick = useCallback(() => {
    setIsMenuVisible(false);
  }, [setIsMenuVisible]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return { xPos, yPos, isMenuVisible };
};

export default useContextMenu;
