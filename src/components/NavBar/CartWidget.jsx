import { PiShoppingCartBold } from "react-icons/pi"
import "./CartWidget.css"



const CartWidget = () => {
    //PiShoppingCartBold
  return (
    <div className="carrito">
        <PiShoppingCartBold /><span>0</span>
    </div>
  )
}

export default CartWidget