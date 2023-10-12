import { Logo } from "./components/logoFooter";
import { Item } from "./components/itemFooter";
import { LitaDeEnlaces } from "./components/listasDeEnlaceFooter";
import { Redes } from "./components/redesFooter";
import "./css/style.css"
import { icons } from "../../assets/icons";

export const Footer = () => (
    <>
        <footer className="footer__conteiner">
            <Logo />
            <div className="footer__bottom">
                <div className="footer__box-01">
                    <Item
                        src={icons.location}
                        alt="Icono de Ubicacion"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti quos similique nam commodi voluptatum"
                    />
                </div>
                <div className="footer__box-02">
                    <Item
                        src={icons.phone}
                        alt="Icono de telefono"
                        text="+1-543-123-4567"
                    />
                    <Item
                        src={icons.email}
                        alt="Icono de email"
                        text="example@fylo.com"
                    />
                </div>
                <div className="footer__box-03">
                    <LitaDeEnlaces/>
                </div>
                <div className="footer__box-04">
                    <Redes/>
                </div>
            </div>
        </footer>
    </>
)