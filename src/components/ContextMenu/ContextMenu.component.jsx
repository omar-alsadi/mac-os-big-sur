import useContextMenu from './ContextMenu';
import { defaultMenu } from './Context-menu-list/defaultMenu'
import { BreakLine, ContextMenuContainer, ContextMenuList } from './ContextMenu.style';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useStateValue } from '../../StateProvider';

const ContextMenu = (mainRef) => {

  const [{ isDark }, dispatch] = useStateValue();

  const { xPos, yPos, isMenuVisible } = useContextMenu(mainRef);

  return isMenuVisible ? (
    <ContextMenuContainer isDark={isDark} style={{ position: 'absolute', top: yPos, left: xPos }}>
      { defaultMenu.map((list, index) => (
        <>
          <ContextMenuList isDark={isDark} key={index}>{list.title}{list.hasOptions && <span><RiArrowRightSLine /></span>}</ContextMenuList>
          {list.breakLine && <BreakLine />}
        </>
      ))}
    </ContextMenuContainer>
  ) : (
    <></>
  );
};

export default ContextMenu;
