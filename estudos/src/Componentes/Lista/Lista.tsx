import './styles.scss'


function Lista() 


{

const tarefa =[
  {tarefa:  'React',tempo:'2:00'},
  
  {tarefa:  'React',tempo:'2:00'},
  {tarefa:  'java',tempo:'1:00'}]

    return (
      <aside className="listaTarefas">
        <h2> Estudos do dia </h2>
        <ul>
         {tarefa.map((tarefa,index) =>(

            <li key={index} className='item'>
              <h3>{tarefa.tarefa}</h3>
              <span>{tarefa.tempo}</span>

            </li>
         )
        )}
         
        </ul>
      </aside>
    );
  }

  export default Lista;