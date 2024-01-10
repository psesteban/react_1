import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Header";
import Cards from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Titulo title="Adopta un perrito" />
      <main>
      <Cards
        image="src\assets\img\a.jpg"
        name="Mimo"
        description="Es un labrador de aproximadamente 2 años de edad. Es un perro muy cariñoso y juguetón, y le encanta estar con la gente, muy fácil de cuidar."
        color="success"
        breed="Retriever"
      />
      <Cards
        image="src\assets\img\b.jpg"
        name="Broti"
        description="Es un perro de aproximadamente 5 años de edad. Es un perro muy leal y protector, y es un gran compañero para la familia."
        color="primary"
        breed="Pastor Alemán"
      />
      <Cards
        image="src\assets\img\c.jpg"
        name="Carlitos"
        description="El perro tiene un pelaje dorado brillante, que es muy fácil de mantener. Adorable y tierno, de porte ligero." 
        color="danger"
        breed="Beagle"
      />

      <Cards
        image="src\assets\img\d.jpg"
        name="Chamelo"
        description="Perro muy cariñoso y leal, de 2 años y es un gran compañero para la familia. Come de todo, tiene buena salud, es un perro tranquilo y de buen humor."
        color="warning"
        breed="Mestizo"
      />
      </main>
      <Footer footer="¡Buscas un nuevo compañero peludo? ¡No busques más! En esta página, encontrarás una variedad de perros en adopción, todos esperando encontrar un hogar amoroso.
      Tenemos perros de todas las razas, tamaños y edades, así que seguro que encontrarás el perfecto para ti. Todos nuestros perros han sido evaluados por veterinarios y están sanos y listos para irse a casa.
      Si estás interesado en adoptar un perro, por favor, ponte en contacto con nosotros. Estaremos encantados de ayudarte a encontrar el perro perfecto para ti."
      />
      </>
  );
}
export default App;
