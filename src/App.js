import Spinner from './components/Spinner/Spinner.component';
import OS from './components/OS/Os.components';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  },[])

  return (
    <>
      <Spinner />
      <OS />
    </>
  );
}

export default App;
