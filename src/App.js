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
          <Counter time='dias' number='2' />
          <Counter time='horas' number='2' />
          <Counter time='minutos' number='2' />
          <Counter time='segundos' number='2' />
        </div>
      </div>
    </div>
  );
}

export default App;
