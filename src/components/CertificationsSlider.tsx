import { motion } from "framer-motion";

const certificates = [
    { id: 1, title: "Módulo 1: Fundamentos", img: "url_recorte_1.jpg" },
    { id: 2, title: "Módulo 2: Estructura", img: "url_recorte_2.jpg" },
    // ... añadir los 6
];

export const CertificationsSlider = () => {
    return (
        <div className="py-20 bg-black overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-blue-500 mb-10 shadow-blue-500/50 drop-shadow-lg">
                FORMACIÓN PROFESIONAL
            </h2>
            <motion.div
                className="flex gap-8"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {[...certificates, ...certificates].map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="min-w-[350px] p-2 bg-blue-900/30 border-2 border-blue-600 rounded-xl backdrop-blur-md"
                    >
                        <img src={cert.img} alt={cert.title} className="rounded-lg mb-4" />
                        <h3 className="text-blue-400 font-bold text-center uppercase tracking-tighter">
                            {cert.title}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};