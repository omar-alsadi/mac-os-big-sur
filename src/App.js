import Spinner from './components/Spinner/Spinner.component';
import IsDesktop from './components/IsDesktop/WidthCondition.component'
import OS from './components/OS/Os.components';

const App = () => {

  return (
    <>
      { window.innerWidth < 862 && <IsDesktop /> }
      <Spinner />
      <OS />
    </>
  );
}

export default App;
