import React, { useRef } from "react";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/cg";
import "./slide.css";

export const Slide: React.FC<{}> = ({}) => {
  const slideShowRef = useRef<HTMLDivElement>(null);

  const next = () => {
    // Comprobamos que el slideshow tenga elementos
    if (slideShowRef.current) {
      if (slideShowRef.current.children.length > 0) {
        // Obtenemos el primer elemento del slideshow
        const firstElement = slideShowRef.current.children[0];
        // Establecemos la transición para el slideshow
        slideShowRef.current.style.transition = `500ms ease-out all`;

        const slideSize = slideShowRef.current.children[0].clientWidth;

        // Movemos el slideshow
        slideShowRef.current.style.transform = `translateX(-${slideSize}px)`;

        const transition = () => {
          // Reiniciamos la posición del slideshow
          if (slideShowRef.current) {
            slideShowRef.current.style.transition = "none";
            slideShowRef.current.style.transform = `translateX(0)`;

            //Tomamos el primer elemento y lo mandamos al final.
            slideShowRef.current.appendChild(firstElement);

            slideShowRef.current.removeEventListener(
              "transitionend",
              transition
            );
          }
        };
        // Eventlistener para cuando termina la animacion.
        slideShowRef.current.addEventListener("transitionend", transition);
      }
    }
  };

  const previous = () => {
    if (slideShowRef.current) {
      if (slideShowRef.current.children.length > 0) {
        // Obtenemos el ultimo elemetno del slideshow
        const index = slideShowRef.current.children.length - 1;
        const lastElement = slideShowRef.current.children[index];
        slideShowRef.current.insertBefore(
          lastElement,
          slideShowRef.current.firstChild
        );

        slideShowRef.current.style.transition = "none";

        const slideSize = slideShowRef.current.children[0].clientWidth;

        // Movemos el slideshow
        slideShowRef.current.style.transform = `translateX(-${slideSize}px)`;

        setTimeout(() => {
          if (slideShowRef.current) {
            slideShowRef.current.style.transition = `300ms ease-out all`;
            slideShowRef.current.style.transform = `translateX(0)`;
          }
        }, 30);
      }
    }
  };

  return (
    <div className="app-container-slides">
      <div className="app-container-slide-show" ref={slideShowRef}>
        <div className="app-container-slide">
          <a href="https://www.google.com">
            <img src={slide1} alt="Slide 1"></img>
          </a>
        </div>
        <div className="app-container-slide">
          <a href="https://www.google.com">
            <img src={slide2} alt="Slide 1"></img>
          </a>
        </div>
        <div className="app-container-slide">
          <a href="https://www.google.com">
            <img src={slide3} alt="Slide 1"></img>
          </a>
        </div>
      </div>
      <div className="app-container-slide-controls">
        <button className="app-container-slide-button" onClick={previous}>
          <CgArrowLeftO size={40}></CgArrowLeftO>
        </button>
        <button
          className="app-container-slide-button button-right"
          onClick={next}
        >
          <CgArrowRightO size={40}></CgArrowRightO>
        </button>
      </div>
    </div>
  );
};
