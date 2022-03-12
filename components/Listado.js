import Guitarra from '../components/Guitarra'
 const Listado = ({guitarras}) =>{
  return (
      <div>
        {guitarras.map(guitarra =>(
            <Guitarra 
             key={guitarra.url}
             guitarra={guitarra}
            />
        ))}
      </div>
  )
}

export default Listado