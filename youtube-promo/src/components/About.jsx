import React from 'react';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section container">
            <div className="about-grid">
                <div className="about-image glass-panel">
                    <div className="image-placeholder">
                        <span className="text-gradient display-icon">{"</>"}</span>
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="section-title">
                        Entender el <span className="text-gradient">Por Qué</span> detrás del Cómo
                    </h2>
                    <p className="about-description">
                        Hola, soy Daniel Narváez. En este canal no solo aprendemos a usar herramientas, sino a entenderlas a un nivel fundamental.
                    </p>
                    <p className="about-description">
                        Aquí no armamos tutoriales básicos; diseñamos sistemas robustos y exploramos los fundamentos matemáticos y lógicos de la Inteligencia Artificial.
                    </p>

                    <ul className="about-features">
                        <li>
                            <span className="feature-icon">🚀</span>
                            <strong>Ve más allá de lo básico:</strong> Domina la arquitectura y los microservicios.
                        </li>
                        <li>
                            <span className="feature-icon">🧠</span>
                            <strong>IA desde cero:</strong> Redes neuronales sin cajas negras.
                        </li>
                        <li>
                            <span className="feature-icon">📐</span>
                            <strong>Ciencia de Computación:</strong> Lógica, Álgebra y Filosofía aplicada.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
