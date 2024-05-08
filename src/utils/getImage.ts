import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import favorites from "../assets/icons/heart.svg";

export const getImage = (name: string) => {
    switch (name) {
        case "logo-light":
            return logoLight;

        case "logo-dark":
            return logoDark;

        case "favorites":
            return favorites;

        default:
            break;
    }
};
