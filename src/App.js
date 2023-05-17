import './App.css';
import { Counter } from './components/Counter';
import { Title } from './components/Title';

import newYear from './imgs/new-year.jpg'

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${newYear})` }}>
      <div className='containerRelogio'>
        <Title title='Contagem Regressiva para 2024' />
        <div className='relogio'>
          <Counter time='Dias' number='2' />
          <Counter time='Horas' number='2' />
          <Counter time='Minutos' number='2' />
          <Counter time='Segundos' number='2' />
        </div>
      </div>
    </div>
  );
}

export default App;
