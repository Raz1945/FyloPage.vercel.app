import { icons } from "../../../assets/icons"

export const Logo = () => {
    return(
        <>
            <div className="navbar-logo">
                <a className="navbar-logo__link">
                    <img className="navbar-logo__img" src={icons.logo} alt="Fylo logo" width="80" height="25" />
                </a>
            </div>
        </>
    )
}