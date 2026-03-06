import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer border-t border-glass mt-20">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Daniel Narváez</h3>
                    <p>Ingeniería, Arquitectura y Matemáticas.</p>
                </div>

                <div className="footer-links">
                    <a href="https://www.youtube.com/@jdanielnf" target="_blank" rel="noopener noreferrer" className="social-link">
                        YouTube
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Daniel Narváez. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
