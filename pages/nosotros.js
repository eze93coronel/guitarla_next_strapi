
 import Image from 'next/image';
 import styles from '../styles/Nosotros.module.css';
 import Layout from "../components/Layout";
const Nosotros = () => {
    return ( 
        <Layout pagina="Nosotros">
        <main className="contenedor"> 
          <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
            <Image layout="responsive" width={600}  height={450} src="/img/nosotros.jpg" alt="imagen sobre nosotros"/>
            <div> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum blandit arcu, at gravida dui fringilla nec. Nunc maximus velit in porttitor hendrerit. Fusce gravida volutpat magna ut interdum. Suspendisse id lectus posuere, semper quam et, tempus est. Integer consectetur, erat at scelerisque consequat, dolor urna semper lorem, eget convallis quam arcu eu massa. Aliquam nec suscipit augue. Fusce tincidunt quis sapien ac suscipit. Sed imperdiet mi at pretium suscipit. Suspendisse potenti.

                Fusce laoreet purus id orci congue auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lorem mauris, in efficitur purus aliquam vitae. Nunc nisi neque, luctus sit amet iaculis at, accumsan venenatis diam. Mauris luctus est id est tempor, quis mollis arcu ullamcorper. Nam vel lorem id lectus condimentum blandit id eget diam. Donec eu interdum odio, a bibendum nunc. Aliquam rhoncus tempus semper. Maecenas eleifend id augue in tincidunt.

                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum blandit arcu, at gravida dui fringilla nec. Nunc maximus velit in porttitor hendrerit. Fusce gravida volutpat magna ut interdum. Suspendisse id lectus posuere, semper quam et, tempus est. Integer consectetur, erat at scelerisque consequat, dolor urna semper lorem, eget convallis quam arcu eu massa. Aliquam nec suscipit augue. Fusce tincidunt quis sapien ac suscipit. Sed imperdiet mi at pretium suscipit. Suspendisse potenti.

                  Fusce laoreet purus id orci congue auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lorem mauris, in efficitur purus aliquam vitae. Nunc nisi neque, luctus sit amet iaculis at, accumsan venenatis diam. Mauris luctus est id est tempor, quis mollis arcu ullamcorper. Nam vel lorem id lectus condimentum blandit id eget diam. Donec eu interdum odio, a bibendum nunc. Aliquam rhoncus tempus semper. Maecenas eleifend id augue in tincidunt.

                 </p>  
            </div>    
            

            </div>

        </main>
    
        </Layout>
     
     );
}
 
export default Nosotros;