import useContextMenu from './ContextMenu';
import { defaultMenu } from './Context-menu-list/defaultMenu'
import { BreakLine, ContextMenuContainer, ContextMenuList } from './ContextMenu.style';
import { RiArrowRightSLine } from 'react-icons/ri';

const ContextMenu = ( mainRef ) => {
  
  const { xPos, yPos, isMenuVisible } = useContextMenu(mainRef);

  return isMenuVisible ? (
    <ContextMenuContainer style={{ position: 'absolute', top: yPos, left: xPos }}>
      { defaultMenu.map((list , index) => (
        <>
          <ContextMenuList key={index}>{list.title}{list.hasOptions && <span><RiArrowRightSLine/></span>}</ContextMenuList>
          {list.breakLine && <BreakLine />}
          {console.log('list: ', list)}
        </>
      ))}
    </ContextMenuContainer>
  ) : (
    <></>
  );
};

export default ContextMenu;
