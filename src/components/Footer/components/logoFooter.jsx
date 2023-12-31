import { icons } from "../../../assets/icons"

export const Logo = () => {
    return (
        <>
            <div className="footer-logo">
                <a className="footer-logos__img-link">
                    <img className="footer-logo__img" src={icons.logo} alt="Fylo logo" width="135" height="41" />
                </a>
            </div>
        </>
    )
}