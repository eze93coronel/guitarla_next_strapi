  import Head from "next/head";
  import Header from './Header'
  import Footer from './Footer'
const Layout = ({children,pagina}) => {
    return ( 

        <div>

     <Head>
     <title>GuitarLA-{pagina}</title>
    <meta name="description" content="Sitio Web de Venta de Guitarras"/>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&family=Rubik+Beastly&display=swap" rel="stylesheet"/>

     </Head>
     <Header />
   

         {children}
      <Footer/>

        </div>

        );
}
 
export default Layout;