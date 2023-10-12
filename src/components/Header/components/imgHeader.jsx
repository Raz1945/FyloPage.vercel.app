import { images } from "../../../assets/images";

export const HeaderImg = () => {
    return (
        <>
            <img
                src={images.intro}
                alt="Imagen ilustrativa"
                className="header__img"
            />
        </>
    );
}
