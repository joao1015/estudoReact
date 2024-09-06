import Botao from "../Botao/index"; // Certifique-se de que a importação esteja correta

function Formulario() {
  return (
    <form>
      <div>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao /> 
    </form>
  )
}

export default Formulario;