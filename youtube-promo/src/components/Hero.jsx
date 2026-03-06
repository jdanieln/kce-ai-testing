import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section container">
            <div className="hero-content animate-fade-in">
                <h1 className="hero-title">
                    De Programador a <span className="text-gradient">Ingeniero de Software</span>
                </h1>
                <p className="hero-subtitle delay-100 animate-fade-in">
                    Descubre los fundamentos matemáticos y arquitectónicos detrás de la Inteligencia Artificial y el diseño de sistemas complejos.
                </p>
                <div className="hero-actions delay-200 animate-fade-in">
                    <a
                        href="https://www.youtube.com/@jdanielnf?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary pulse-effect"
                    >
                        Suscribirse al Canal
                    </a>
                    <a href="#about" className="btn btn-secondary">
                        Conocer Más
                    </a>
                </div>
            </div>

            <div className="hero-visual delay-300 animate-fade-in">
                <div className="glass-panel visual-card">
                    <div className="code-snippet">
                        <span className="code-keyword">const</span> <span className="code-var">developer</span> = <span className="code-keyword">new</span> <span className="code-class">Engineer</span>({'{'}
                        <br />&nbsp;&nbsp;mindset: <span className="code-string">"Architecture First"</span>,
                        <br />&nbsp;&nbsp;skills: [<span className="code-string">"AI"</span>, <span className="code-string">"Math"</span>, <span className="code-string">"Clean Code"</span>]
                        <br />{'}'});
                        <br />
                        <span className="code-var">developer</span>.<span className="code-func">subscribe</span>(<span className="code-string">"jdanielnf"</span>);
                    </div>
                </div>
            </div>
        </section>
    );
}
