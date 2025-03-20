import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="flex justify-center mt-36 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* descripciones */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-20 xl:p-26">
          <motion.img
            variants={slideUp(0.2)}
            initial="initial"
            animate="animate"
            src={Logo}
            alt="logo del Juego"
            className="w-80 mx-auto" // Reducido el tamaño del logo
          />
          <motion.p
            variants={slideUp(0.3)}
            initial="initial"
            animate="animate"
            className="py-5 text-white text-lg md:text-xl" // Aumentado el tamaño del texto
          >
            &quot; AutoManage &quot; es una plataforma digital diseñada para
            optimizar la gestión de servicios automotrices en Duitama. Su
            objetivo es ofrecer a los usuarios una herramienta en línea que
            facilite la programación de citas para el mantenimiento de vehículos
            y la compra de repuestos automotrices. La plataforma permitirá a los
            propietarios de vehículos agendar servicios a través de un sistema
            de calendario, y acceder a un catálogo digital de repuestos con
            opción de compra en línea.
          </motion.p>
          <motion.div
            variants={slideUp(1)}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-4"
          >
            {/* Botón Jugar ahora */}
            <a
              href="http://localhost:4200/#/login"
              className="bg-blue-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 flex items-center cursor-pointer"
            >
              Ingresa
              <FontAwesomeIcon icon={faPlay} className="ml-2 text-xl" />
            </a>

            <br />

            <a
              href="http://localhost:4200/#/register"
              className="text-white flex items-center cursor-pointer"
            >
              Registrate
              <FontAwesomeIcon icon={faUserPlus} className="ml-2 text-xl" />
            </a>
          </motion.div>
        </div>

        {/* imagen */}
        <motion.div
          variants={slideInFromSide("right", 0.5)}
          initial="initial"
          animate="animate"
          className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36"
        >
          <img src={Personaje} alt="Personaje de juego" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
