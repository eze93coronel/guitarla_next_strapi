import Layout from "../../components/Layout";
import Image from 'next/image'
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Entrada.module.css'
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";
const EntradaBlog = ({entrada}) => {

const {contenido,imagen,published_at,titulo}= entrada
  return (
    <Layout
     pagina={titulo}
    >
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
      <div className={styles.contenido}>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.texto}>{contenido}</p>

      </div>

        </article>

      </main>
      </Layout>   
  )
}
export async function getStaticPaths(){
 const url = `${process.env.API_URL}/blogs`;
 const respuesta = await fetch(url);
 const entradas = await respuesta.json();

 const paths =entradas.map(entrada=>({
   params: {url:entrada.url}
 }))

 return {
     paths,
     fallback: false
 }
}

//EN NEXT COMO MANTENEMOS LAS REGLAS REST/API USAMOS FILTROS DE STRAPI PARA ACCEDER A LAS RUTAS 
//POR QUE NEXT SOPORTA FILTROS PARA ACEDER A ESA RUTAS 

export async function getStaticProps ({params : {url}}){
  
 const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
 const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();


  return {
    props:{
   entrada : entrada[0]
    }
 }
}


//export async function getServerSideProps ({query : {id}}){
  
 // const url = `${process.env.API_URL}/blogs/${id}`;
 // console.log(url)
//  const respuesta = await fetch(url);
 // const entrada = await respuesta.json();


 // return {
 //   props:{
  //  entrada
   // }
 // }
//}
export default EntradaBlog;
