import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      setMessage(result);
    } catch {
      setMessage("Error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="isolate bg-white bg-opacity-90 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Contactar Ventas
        </motion.h2>
      </div>
      <motion.form 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-600" /> Nombre
            </label>
            <input 
              name="nombre" 
              type="text" 
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 border border-gray-300 focus:border-indigo-600"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-indigo-600" /> Correo Electrónico
            </label>
            <input 
              name="email" 
              type="email" 
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 border border-gray-300 focus:border-indigo-600"
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              <FontAwesomeIcon icon={faCommentDots} className="mr-2 text-indigo-600" /> Mensaje
            </label>
            <textarea 
              name="mensaje" 
              rows={4} 
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 border border-gray-300 focus:border-indigo-600"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-10">
          <button 
            type="submit" 
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-white"
            disabled={loading}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>

        {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
      </motion.form>
    </motion.div>
  );
}

export default Contacts;
