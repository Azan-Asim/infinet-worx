import React from 'react';
import { motion } from 'framer-motion';
import '../css/Cardsection.css';
import Card from './Card';
import Supersetion from './Teck';

const CardSection = () => {
    return (
        <section className="card-section">
            <div className="main-heading">
                <h1>
                    <motion.span
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
                    >
                        Be your own platform.
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                    >
                        Share freely and fairly.
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
                    >
                        Participate, and own a piece.
                    </motion.span>
                </h1>
            </div>

            <div className="card-container">
                <Card
                    image="./finaance.jpg"
                    title="Creatures"
                    description="Build the next generation of products and experiences. Embed revenue sharing and participation into your products and infrastructure."
                    alt="Creatures"
                />
                <Card
                    image="./arham.jpeg"
                    title="Participants"
                    description="Be yourself online and become an active participant and builder in a collaborative digital economy."
                    alt="Participants"
                />
                <Card
                    image="./coding.jpg"
                    title="Developer & Companies"
                    description="Build the next generation of products and experiences. Embed revenue sharing and participation into your products and infrastructure."
                    alt="Developers & Companies"
                />
            </div>
            <Supersetion />
        </section>
    );
};

export default CardSection;
