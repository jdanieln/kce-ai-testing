import React from 'react';
import './Topics.css';

const topicsData = [
    {
        icon: "🏛️",
        title: "Arquitectura",
        description: "Diseño de sistemas, microservicios, y patrones para construir software escalable y robusto."
    },
    {
        icon: "🤖",
        title: "Inteligencia Artificial",
        description: "Más allá de las APIs. Fundamentos de redes neuronales, lógica y matemática detrás de la IA."
    },
    {
        icon: "📐",
        title: "Teoría a Práctica",
        description: "Aplicación de lógica matemática y filosofía para resolver problemas reales de ingeniería."
    }
];

export default function Topics() {
    return (
        <section id="topics" className="topics-section container">
            <div className="section-header">
                <h2 className="section-title">Pilares de <span className="text-gradient">Aprendizaje</span></h2>
                <p className="section-subtitle">Lo que encontrarás en el canal</p>
            </div>

            <div className="topics-grid">
                {topicsData.map((topic, index) => (
                    <div key={index} className="topic-card glass-panel" style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="topic-icon">{topic.icon}</div>
                        <h3 className="topic-title">{topic.title}</h3>
                        <p className="topic-description">{topic.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
