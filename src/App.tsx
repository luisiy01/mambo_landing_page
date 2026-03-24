import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, Music, Users, Send, Zap, ChevronRight, X, ZoomIn } from 'lucide-react';

function App() {

  const [showVideo, setShowVideo] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    { title: "Módulo 1: Fundamentos y Técnica", img: "/cert_1.jpg" },
    { title: "Módulo 2: Estructura y Ritmo", img: "/cert_2.jpg" },
    { title: "Módulo 3: Ingeniería del Mambo", img: "/cert_3.jpg" },
    { title: "Módulo 4: Danza Moderna Cubana", img: "/cert_4.jpg" },
    { title: "Módulo 5: Estilo y Expresión", img: "/cert_5.jpg" },
    { title: "Módulo 6: Performance y Maestría", img: "/cert_6.jpg" }
  ];

  const whatsappNumber = "523121016033";
  const message = encodeURIComponent("Hola Luis, vi tu landing page de Mambo y me interesa agendar una clase o recibir más información.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">

      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-black italic text-xl tracking-tighter text-blue-500">LUIS.MAMBO</span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            <a href="#perfil" className="hover:text-blue-400 transition-colors">Perfil</a>
            <a href="#formacion" className="hover:text-blue-400 transition-colors">Formación</a>
            <a href="#clases" className="hover:text-blue-400 transition-colors">Clases</a>
          </div>
          <button onClick={() => setIsContactOpen(true)} className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-tighter transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            Contacto
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-[#020617]/80 to-[#020617] z-10" />
          {/* Aquí iría tu video de los zapatos morados */}
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover opacity-40 scale-110"
          >
            <source src="/newvideo.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            <Zap size={14} /> NewyoRican Mambo Certified
          </motion.div>


          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter italic uppercase">
            <span className="block text-slate-100">Luis</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 drop-shadow-[0_0_35px_rgba(37,99,235,0.5)]">Nuñez</span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl max-w-2xl mx-auto text-slate-400 font-light leading-relaxed">
            Donde la <span className="text-slate-100 font-medium">lógica de la ingeniería</span> se encuentra con la <span className="text-blue-400 font-semibold italic">geometría del Mambo</span>.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowVideo(true)}
              className="group relative px-10 py-4 bg-blue-600 rounded-full font-bold overflow-hidden transition-all shadow-lg shadow-blue-600/20"
            >
              <span className="relative z-10 flex items-center gap-2">VER SHOWREEL <ChevronRight size={18} /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SECCIÓN PERFIL DUAL --- */}
      <section id="perfil" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all" />
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
              <Code className="text-blue-500" size={32} /> El Perfil Dual
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Ingeniero de Software de profesión y bailarín de alto rendimiento por pasión.
              Aplico la <span className="text-slate-100 font-semibold">disciplina y el análisis</span> que uso para escribir código para diseccionar
              la técnica de giros y la musicalidad avanzada.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 p-10 rounded-[2.5rem] bg-blue-600 flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
          >
            <Music size={48} strokeWidth={1.5} />
            <div>
              <h3 className="text-5xl font-black mb-2 italic">+10 AÑOS</h3>
              <p className="text-blue-100 font-medium leading-tight">De trayectoria en técnica académica y baile social.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SLIDER INFINITO DE CERTIFICACIONES --- */}
      <section id="formacion" className="py-24 bg-slate-900/20 border-y border-slate-800/50">
        <div className="text-center mb-16 px-4">
          <h2 className="text-xs font-black text-blue-500 tracking-[0.4em] uppercase mb-4">Authority Statement</h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase">Formación de Élite</h3>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 mb-8 p-4 rounded-2xl bg-black/30 border border-slate-800 backdrop-blur-sm shadow-xl w-fit mx-auto flex items-center justify-center"
          >
            <img
              src="/image_63.jpg"
              alt="NewyoRican Mambo Certified"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </motion.div>
          <p className="text-slate-500 mt-2 font-medium">Graduado del Programa Intensivo(Módulos 1-6) +240hrs de Entrenamiento</p>
        </div>

        <div className="relative flex overflow-hidden py-10">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: isPaused ? 0 : [0, -1920] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...certs, ...certs].map((cert, index) => (
              <motion.div
                key={index}
                className="w-80 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group relative flex flex-col"
                // 2. Al hacer clic, guardamos el certificado seleccionado
                onClick={() => setSelectedCert(cert)}
                whileHover={{ y: -5 }} // Pequeño levantamiento visual en hover
              >
                {/* Número de fondo */}
                <div className="absolute top-6 right-8 text-blue-950 font-black text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                  0{(index % 6) + 1}
                </div>

                <Award className="text-blue-500 mb-4" size={32} strokeWidth={1.5} />

                {/* Contenedor de Imagen con icono de Zoom */}
                <div className="relative w-full h-44 mb-6 overflow-hidden rounded-xl border border-slate-700 bg-black group-hover:border-blue-500/30 transition-all shadow-inner group">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  {/* Icono de Zoom que aparece en hover */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn className="text-white" size={30} />
                  </div>
                </div>

                <h4 className="font-bold text-lg text-slate-100 mb-2 leading-tight whitespace-normal">
                  {cert.title}
                </h4>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-black">
                  NewyoRican Mambo CDMX
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN DE CLASES --- */}
      <section id="clases" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-black italic tracking-tighter mb-8 leading-none">
              APRENDE CON <br /><span className="text-blue-500">MÉTODO.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              No solo bailo por instinto; bailo con fundamento. Mis clases combinan la
              <span className="text-slate-100"> pedagogía profesional</span> con la claridad estructural de un ingeniero.
            </p>
            <div className="space-y-4">
              {['Técnica de Giros Física', 'Musicalidad Analítica', 'Estilo Masculino con Propósito'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-sm tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:bg-slate-800/50 transition-all group">
              <Users className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Clases Individuales</h3>
              <p className="text-slate-500 text-sm italic">Enfoque 100% técnico y personalizado para corregir vicios de movimiento.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:bg-slate-800/50 transition-all group text-right">
              <Zap className="text-blue-500 mb-4 ml-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Workshops Grupales</h3>
              <p className="text-slate-500 text-sm italic">Entrenamiento intensivo por módulos para escuelas o grupos coreográficos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-blue-600/5 blur-[100px]" />
        <div className="flex justify-center gap-8 mb-10">
          <motion.a whileHover={{ y: -3 }} href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
            <Send size={20} className="-rotate-45" />
          </motion.a>
        </div>
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black">
          © 2026 LUIS NUÑEZ <span className="mx-2 text-blue-900">|</span> HECHO CON RITMO & REACT
        </p>
      </footer>
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al clickear el video
          >
            <button
              className="absolute top-4 right-4 text-white z-10 bg-black/50 p-2 rounded-full hover:bg-blue-600"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>

            {/* Aquí puedes usar un video local o un link de YouTube/Vimeo */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/TU_ID_DE_VIDEO?autoplay=1"
              title="Luis Nuñez Showreel"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}

      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="bg-slate-900 border border-blue-500/30 p-10 rounded-[3rem] max-w-md w-full relative"
          >
            <button onClick={() => setIsContactOpen(false)} className="absolute top-6 right-8 text-slate-500 hover:text-white">✕</button>

            <h3 className="text-3xl font-black italic mb-2 text-blue-500">¿BAILAMOS?</h3>
            <p className="text-slate-400 mb-8 text-sm">Selecciona cómo prefieres conectar conmigo:</p>

            <div className="space-y-4">
              <a href={whatsappLink} className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl hover:bg-blue-600 transition-all group">
                <span className="font-bold">WhatsApp Directo</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:tu@email.com" className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all">
                <span className="font-bold">Enviar Correo</span>
                <Send size={18} />
              </a>
              <a href="https://instagram.com/luisiy0" target="_blank" className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl hover:bg-pink-600 transition-all">
                <span className="font-bold">Instagram DM</span>
                instagram icon
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            // Cerrar al hacer clic en el fondo borroso
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-slate-900 border-2 border-blue-500/30 p-6 md:p-8 rounded-[2.5rem] max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_60px_rgba(37,99,235,0.2)]"
              // Evitar cerrar al hacer clic dentro del modal
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors bg-black/40 p-2 rounded-full hover:bg-blue-600"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-12 gap-8 items-center mt-6">
                {/* Imagen Grande del Certificado */}
                <div className="md:col-span-8 rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-inner">
                  <img
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Detalles del Módulo */}
                <div className="md:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="text-blue-500" size={36} strokeWidth={1} />
                    <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Formación Profesional</span>
                  </div>
                  <h3 className="text-3xl font-black italic text-slate-100 tracking-tighter leading-none">
                    {selectedCert.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Bajo la metodología de <span className="text-white font-medium">NewyoRican Mambo</span> Ciudad de México. Módulo completado con excelencia técnica.
                  </p>
                  <div className="pt-4 border-t border-slate-800">
                    <button className="text-xs font-bold text-slate-500 hover:text-blue-400 transition-colors uppercase tracking-widest">
                      Volver al carrusel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App
