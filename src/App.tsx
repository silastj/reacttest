import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <section className='sectionOne'>
          <h3>Quem vai tirar o papelzinho?</h3>
          <Formulario/>
          <h4>Clique em sortear para ver quem é seu</h4>
          <p>amigo secreto</p>
          <button>Sortear</button>
        </section>
      </body>
    </div>
  );
}

export default App;
