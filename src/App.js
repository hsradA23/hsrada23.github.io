import {useState, useRef} from 'react';
import useInterval from "use-interval";
import useScrollSnap from 'react-use-scroll-snap';

import Fpage from './components/frontpage'

function App() {
  const [display, setDisplay] = useState(false);

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 100 });

  useInterval( () => { setDisplay(!display);} ,500);

  return (
    <div className="App" ref={scrollRef}>

    <div className='section1'>
      <Fpage display={display}/>
    </div>

    <div className='section2'>
    </div>

    <div className='section3'>
    </div>

    </div>
  );
}

export default App;
