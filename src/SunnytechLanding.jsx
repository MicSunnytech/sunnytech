import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sun, PanelsTopLeft, BatteryCharging, Leaf, Zap, Phone, Mail, MapPin, CheckCircle2, ArrowRight, Shield, LineChart, Wrench } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import Logo from "./assets/logo_negro.png";
import paneles_anochecer from "./assets/casa-anochecer3.png";

export default function SunnytechLanding() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const templateParams = {
      Nombre: formData.get("Nombre"),
      Email: formData.get("Email"),
      telefono: formData.get("telefono"),
      poblacion: formData.get("poblacion"),
      Tipo_vivienda: formData.get("Tipo_vivienda"),
      Tipo_instalacion: formData.get("Tipo_instalacion"),
      Tipo_calefaccion: formData.get("Tipo_calefaccion"),
      AAconbombadecalor: formData.get("AAconbombadecalor"),
      Factura_electrica: formData.get("Factura_electrica"),
      Factura_calefaccion: formData.get("Factura_calefaccion"),
      porque: formData.get("porque"),
      Mensaje: formData.get("Mensaje")
    };

    emailjs.send("service_el5ohej", "template_vsgqtqj", templateParams, "TJcjLjtlw8LStEEkC")
      .then(() => {
        setSent(true);
        form.current.reset();
      }, (error) => {
        alert("❌ Error al enviar: " + error.text);
      });
  };

  const features = [
    { icon: <PanelsTopLeft className="w-6 h-6"/>, title: "Instalaciones residenciales", desc: "Soluciones llave en mano para viviendas: estudio, montaje y legalización." },
    { icon: <BatteryCharging className="w-6 h-6"/>, title: "Autoconsumo industrial", desc: "Proyectos a gran escala con monitorización y ahorro energético garantizado." },
    { icon: <Leaf className="w-6 h-6"/>, title: "Sostenibilidad real", desc: "Reducimos la huella de carbono con materiales y procesos responsables." },
    { icon: <Wrench className="w-6 h-6"/>, title: "Mantenimiento y soporte", desc: "Plan preventivo y correctivo con asistencia técnica 24/7." },
  ];

  const solutions = [
    { title: "Tejado inclinado", points: ["Estructuras ligeras", "Inversores híbridos", "Batería opcional"] },
    { title: "Cubierta industrial", points: ["Optimización de cargas", "Monitorización SCADA", "Retorno < 4 años"] },
    { title: "Carports solares", points: ["Sombra + energía", "Carga de vehículo", "Ampliable"] },
    { title: "Aisladas / off‑grid", points: ["Autonomía total", "Generadores de apoyo", "Control remoto"] },
  ];

  const faqs = [
    { q: "¿Necesito permisos para instalar?", a: "Nos encargamos de toda la tramitación: licencias municipales, legalización y alta de compensación de excedentes." },
    { q: "¿Cuánto se ahorra?", a: "Depende del perfil de consumo y la tarifa. Nuestros clientes ahorran entre un 40% y un 100% en la factura eléctrica." },
    { q: "¿Y si no hay sol?", a: "Los sistemas siguen produciendo con radiación difusa. Además, integramos baterías e inversores de alta eficiencia." },
    { q: "¿Ofrecen financiación?", a: "Sí. Disponemos de opciones de financiación a tu medida." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src={Logo} alt="SunnyTech" className="h-24 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-12 text-2xl">
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#soluciones" className="hover:opacity-80">Soluciones</a>
            <a href="#proyectos" className="hover:opacity-80">Proyectos</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:opacity-90">
              <Phone className="w-6 h-6"/> Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-yellow-200/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-2">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
              <p className="inline-flex items-center gap-2 text-xl font-medium px-3 py-1 rounded-full bg-slate-900 text-white w-fit">
                <Shield className="w-5 h-5"/> Instaladores certificados • Garantía hasta 30 años
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                Energía solar profesional para <span className="underline decoration-yellow-300 decoration-8 underline-offset-6">hogares</span> y <span className="underline decoration-yellow-300 decoration-8 underline-offset-6">empresas</span>
              </h1>
              <p className="mt-5 text-slate-600 text-lg">
                En Sunnytech diseñamos, instalamos y mantenemos sistemas fotovoltaicos de alto rendimiento. Ahorra en tu factura desde el primer día.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-yellow-400 hover:bg-yellow-300 transition font-medium">
                  Solicitar estudio gratuito <ArrowRight className="w-4 h-4"/>
                </a>
                <a href="#servicios" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 hover:bg-slate-50 transition font-medium">
                  Ver servicios
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Compensación de excedentes</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Monitorización en tiempo real</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Atención 24/7</div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/60">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/50 via-transparent to-transparent"/>
                <img src={paneles_anochecer} alt="paneles_anochecer" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
                <div className="rounded-2xl border border-slate-200 p-3">
                  <LineChart className="w-4 h-4 mx-auto"/> Ahorro medio 75%
                </div>
                <div className="rounded-2xl border border-slate-200 p-3">
                  <Zap className="w-4 h-4 mx-auto"/> 98.7% disponibilidad
                </div>
                <div className="rounded-2xl border border-slate-200 p-3">
                  <Shield className="w-4 h-4 mx-auto"/> Garantía premium
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-20" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Servicios integrales</h2>
            <p className="mt-4 text-slate-600">Desde el estudio hasta la puesta en marcha. Gestionamos permisos, instalación y monitorización para que solo te preocupes de aprovechar la energía del sol.</p>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {features.map((f, i) => (
              <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md">
                <div className="w-10 h-10 rounded-2xl bg-yellow-100 grid place-items-center">{f.icon}</div>
                <h3 className="mt-4 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section id="soluciones" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Soluciones a medida</h2>
            <p className="mt-3 text-slate-600">Cada proyecto es único. Dimensionamos la instalación para tu consumo y te acompañamos durante toda la vida útil.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6 bg-white">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <PanelsTopLeft className="w-4 h-4"/> {s.title}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> {p}</li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">Solicitar propuesta <ArrowRight className="w-4 h-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Proyectos recientes</h2>
            <p className="mt-3 text-slate-600">Una selección de instalaciones entregadas por nuestro equipo.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="group rounded-3xl overflow-hidden border border-slate-200 bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200"/>
                <div className="p-5">
                  <div className="text-xs text-slate-500">{i % 2 === 0 ? "Residencial" : "Industrial"}</div>
                  <h3 className="mt-1 font-medium">Instalación #{i+1}</h3>
                  <p className="mt-1 text-sm text-slate-600">Potencia: {i%2===0?"6 kWp":"180 kWp"} · Producción anual estimada: {i%2===0?"9 MWh":"265 MWh"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-tr from-yellow-100 to-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">¿Empezamos con tu estudio gratuito?</h3>
              <p className="mt-2 text-slate-600">En menos de 48h te enviamos una propuesta técnica y económica adaptada a tu consumo.</p>
            </div>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:opacity-90"><ArrowRight className="w-4 h-4"/> Contactar ahora</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Preguntas frecuentes</h2>
            <p className="mt-3 text-slate-600">Si tienes otra duda, estaremos encantados de atenderte.</p>
          </div>
          <div className="mt-8 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
            {faqs.map((f,i)=> (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Contacto</h2>
              <p className="mt-3 text-slate-600">Cuéntanos tu proyecto y nos pondremos en contacto contigo.</p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +34 627 78 34 53</div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> comercial@sunnytech.es</div>
              </div>
              <div className="mt-8 rounded-3xl border border-slate-200 p-6 bg-white">
                <h3 className="font-medium">Certificaciones</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {['IEC 61215','IEC 61730','ISO 9001','ISO 14001'].map((t)=> (
                    <span key={t} className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario con EmailJS */}
            <div>
              <form ref={form} onSubmit={sendEmail} className="rounded-3xl border border-slate-200 p-6 bg-yellow-300 grid gap-8">
                {/* Nombre */}
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Nombre<span className="text-red-500"> *</span></label>
                  <input id="name" name="Nombre" required className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300"/>
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email<span className="text-red-500"> *</span></label>
                  <input id="email" name="Email" type="email" required className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300"/>
                </div>
                
                {/* Teléfono */}
                <div className="grid gap-2">
                  <label htmlFor="telefono" className="text-sm font-medium">Teléfono<span className="text-red-500"> *</span></label>
                  <input id="telefono" name="telefono" type="tel" required className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300"/>
                </div>

               {/* Dirección */}
                <div className="grid gap-2">
                  <label htmlFor="poblacion" className="text-sm font-medium">Población / Municipio<span className="text-red-500"> *</span></label>
                  <input id="poblacion" name="poblacion" required className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300"/>
                </div>

                {/* Tipo de vivienda */}
                <div className="grid gap-2">
                  <label htmlFor="housing" className="text-sm font-medium">Tipo de vivienda<span className="text-red-500"> *</span></label>
                  <select id="housing" name="Tipo_vivienda" required className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="Unifamiliar">Unifamiliar independiente</option>
                    <option value="Atico">Ático</option>
                    <option value="Empresa_Industria ">Empresa / Industria</option>
                  </select>
                </div>

                {/* Tipo instalación eléctrica */}
                <div className="grid gap-2">
                  <label htmlFor="Tipo_instalacion" className="text-sm font-medium">Tipo de instalación eléctrica</label>
                  <select id="Tipo_instalacion" name="Tipo_instalacion" className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="monofasica">Monofásica</option>
                    <option value="trifasica">Trifásica</option>
                    <option value="No lo sé">No lo sé</option>
                  </select>
                </div>

                {/* Tipo calefacción */}
                <div className="grid gap-2">
                  <label htmlFor="Tipo_calefaccion" className="text-sm font-medium">Tipo de calefacción</label>
                  <select id="Tipo_calefaccion" name="Tipo_calefaccion" className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="gas">Caldera de gas</option>
                    <option value="gasoil">Caldera de gasoil</option>
                    <option value="electrica">Eléctrica</option>
                    <option value="otras">Otras</option>
                  </select>
                </div>

                {/* Aire acondicionado */}
                <div className="grid gap-2">
                  <label htmlFor="AAconbombadecalor" className="text-sm font-medium">¿Cuántos equipos de Aire Acondicionado con bomba de calor tienes?</label>
                  <select id="AAconbombadecalor" name="AAconbombadecalor" className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="Ninguno">Ninguno</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="Mas de 2">Más de 2</option>
                  </select>
                </div>

                {/* Factura eléctrica */}
                <div className="grid gap-2">
                  <label htmlFor="Factura_electrica" className="text-sm font-medium">Cuánto pagas de factura de la luz al mes</label>
                  <select id="Factura_electrica" name="Factura_electrica" className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="0-50">0-50 €</option>
                    <option value="50-100">50-100 €</option>
                    <option value="100-150">100-150 €</option>
                    <option value="150-200">150-200 €</option>
                    <option value="Mas de 200">Más de 200 €</option>
                    <option value="No lo sé">No lo sé</option>
                  </select>
                </div>

                {/* Factura calefacción */}
                <div className="grid gap-2">
                  <label htmlFor="Factura_calefaccion" className="text-sm font-medium">Cuánto pagas de factura de calefacción en invierno al mes</label>
                  <select id="Factura_calefaccion" name="Factura_calefaccion" className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="0-100">0-100 €</option>
                    <option value="100-200">100-200 €</option>
                    <option value="200-300">200-300 €</option>
                    <option value="300-400">300-400 €</option>
                    <option value="masde400">Más de 400 €</option>
                    <option value="No lo sé">No lo sé</option>
                  </select>
                </div>

                {/* Objetivo */}
                <div className="grid gap-2">
                  <label htmlFor="porque" className="text-sm font-medium">¿Cuál es tu objetivo?<span className="text-red-500"> *</span></label>
                  <select id="porque" name="porque" required className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300">
                    <option value="">Selecciona...</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="confort">Confort</option>
                    <option value="medioambiente">Medio ambiente</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="grid gap-2">
                  <label htmlFor="msg" className="text-sm font-medium">¿Quieres contarme algo más?</label>
                  <textarea id="msg" name="Mensaje" rows={5} className="rounded-2xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 ring-yellow-300"/>
                </div>

                <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:opacity-90 justify-center">
                  Enviar <ArrowRight className="w-4 h-4"/>
                </button>

                {sent && <p className="text-green-700 font-medium text-center">✅ Formulario enviado correctamente</p>}

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
             <img src={Logo} alt="SunnyTech" className="h-16 w-auto" />
            <p className="mt-3 text-slate-600">Ingeniería e instalaciones fotovoltaicas. Ahorro, sostenibilidad y servicio técnico experto.</p>
          </div>
          <div>
            <div className="font-medium">Compañía</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#servicios" className="hover:opacity-80">Servicios</a></li>
              <li><a href="#soluciones" className="hover:opacity-80">Soluciones</a></li>
              <li><a href="#proyectos" className="hover:opacity-80">Proyectos</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Recursos</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#faq" className="hover:opacity-80">Preguntas frecuentes</a></li>
              <li><a href="#contacto" className="hover:opacity-80">Contacto</a></li>
            </ul>
          </div>
          {/* <div> // A implementar cuando tengamos redes 
            <div className="font-medium">Síguenos</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:opacity-80">Instagram</a></li>
              <li><a href="#" className="hover:opacity-80">Facebook</a></li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-slate-200 text-xs text-slate-500 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Sunnytech. Todos los derechos reservados.</span>
            <span className="inline-flex items-center gap-1"><Shield className="w-3.5 h-3.5"/> Empresa instaladora autorizada</span>
          </div>
        </div>
      </footer>
    </div>
  );
}









































