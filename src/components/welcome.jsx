import React from "react";
import styled from "styled-components";
import "react-animated-slider/build/horizontal.css";
import { useState } from "react";
import { Animated } from "react-animated-css";
import { useEffect } from "react";

const StyledMainWelcome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: white;
    background-image: white;
    transition: all 1s;
    width: 100vw;
    img {
        width: 100%;
        /* min-width: 100vw; */
        transition: all 1s;
        opacity: 0;
        /* min-height: 100vh; */
    }
    &.algo {
        img {
            width: 100%;
            opacity: 1;
        }
    }
`;

const StyledWelcomeMessage = styled(Animated)`
    font-size: 3vw;
    padding: 20px;
    position: absolute;
    color: white;
    text-align: center;
    font-family: "Raleway", sans-serif;
    border-radius: 10px;
    text-shadow: -2px 2px 18px rgba(255, 255, 255, 0.49);
`;

const imagesList = [
    {
        url: "img/foto8.jpeg",
        mensaje:
            "No importa lo profundo que llegue a una postura, lo que importa es quién eres cuando llegas allí.",
        entrada: "fadeIn",
        style: { left: "60%", top: "30%", maxWidth: "50vw" },
    },
    {
        url: "img/foto4.jpeg",
        mensaje: "Deja que la mente se calme y el corazón se abra.",
        entrada: "fadeIn",
        style: { left: "15%", top: "80%" },
    },
    {
        url: "img/foto5.jpeg",
        mensaje:
            "No podemos hacerlo por nuestra cuenta, se necesita de una comunidad para cultivar buenos hábitos.",
        entrada: "fadeIn",
        style: { left: "0%", top: "70%" },
    },
];

export const Welcome = () => {
    const [url, setUrl] = useState(0);
    const [flag, setFlag] = useState(false);
    const [mensaje, setMensaje] = useState(imagesList[0].mensaje);
    const [flagMensaje, setFlagMensaje] = useState(false);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFlag(false);
            setFlagMensaje(false);
            setTimeout(() => {
                setUrl((url) => (url + 1 === imagesList.length ? 0 : url + 1));
            }, 300);
        }, 7000);

        return () => {
            clearInterval(intervalo);
        };
    }, []);

    const aparecerMensaje = () => {
        setFlag(true);
        setTimeout(() => {
            setMensaje(imagesList[url].mensaje);
            setFlagMensaje(true);
        }, 1500);
    };

    return (
        <StyledMainWelcome className={flag ? "algo" : ""} id={"welcome"}>
            <img
                src={imagesList[url].url}
                alt="instituto sol naciente"
                onLoad={() => aparecerMensaje()}
            />
            <StyledWelcomeMessage
                animationIn={imagesList[url].entrada}
                animationOut="fadeOut"
                isVisible={flagMensaje}
                style={imagesList[url].style}
            >
                {mensaje}
            </StyledWelcomeMessage>
        </StyledMainWelcome>
    );
};
