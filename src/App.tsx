import React from 'react';
import { useEffect } from 'react';
import Engine from './Engine/render';

const App = () => {

  useEffect(() => {
    new Engine({ $canvas: document.querySelector('#canvas') })
  }, [])

  return <div>
    <canvas id='canvas' width={300} height={300}></canvas>
  </div>
}

export default App;