import  imagen_frente from "../../imagenes/imagen_frente.png";
 
import '../Fondo/Fondo.css'

const Fondo = () =>{
    return(
        <div className="marca">
            <div className="marca_texto">
                <h2><span>AIRMAX</span></h2>
                <h2 className="super">SUPERARCHIMEGA</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur .</p>
            </div>
            <img src={ imagen_frente } alt="" />  
        </div>
        
    );
};
export default Fondo;