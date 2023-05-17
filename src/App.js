import './App.css';
import { Counter } from './components/Counter';
import { Title } from './components/Title';

import newYear from './imgs/new-year.jpg'

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${newYear})` }}>
      <div className='containerRelogio'>
        <Title />
        <div className='relogio'>
          <Counter title='dias' />
          <Counter title='horas' />
          <Counter title='minutos' />
          <Counter title='segundos' />
        </div>
      </div>
    </div>
  );
}

export default App;
