import Spinner from './components/Spinner/Spinner.component';
import IsDesktop from './components/IsDesktop/WidthCondition.component'
import OS from './components/OS/Os.components';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize);
  },[])

  return (
    <>
      { window.innerWidth < 862 && <IsDesktop /> }
      <Spinner />
      <OS />
    </>
  );
}

export default App;
