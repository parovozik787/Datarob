import { tns } from "tiny-slider/src/tiny-slider";

export const slider = () => {
  tns({
    autoplay: "true",
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    center: "true",
    container: ".contact-slider__slides",
    controls: false,
    items: 1,
    mode: "carousel",
    mouseDrag: "true",
    navPosition: "bottom",
    // SwipeAngle: 'false',
    preventScrollOnTouch: "auto",
    speed: 600,
    touch: "true"
  });
};
