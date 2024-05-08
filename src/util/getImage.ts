import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";

export const getImage = (name: string) => {
    switch (name) {
        case "logo-light":
            return logoLight;

        case "logo-dark":
            return logoDark;

        default:
            break;
    }
};
