import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Gestión de Mantenimientos",
    description:
      "Registra, programa y notifica mantenimientos para cada vehículo. Mantén un control preciso sobre el historial de servicios.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Agendamiento de Citas",
    description:
      "Permite a los clientes reservar citas para mantenimientos de manera rápida y sencilla, con recordatorios automáticos.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Cálculo de Ingresos y Nómina",
    description:
      "Genera reportes detallados de ingresos y administra la nómina del personal del taller de forma eficiente.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Compra de Repuestos",
    description:
      "Facilita la compra de repuestos directamente desde la plataforma, asegurando disponibilidad y calidad.",
    icon: ClipboardDocumentCheckIcon,
  },
];

function Support() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" bg-white bg-opacity-80  py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Optimiza la gestión de tu taller
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            AutoManage: La solución integral para talleres automotrices
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Una plataforma diseñada para agilizar la gestión de vehículos,
            mantenimiento, agenda y finanzas de tu taller. Todo en un solo lugar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative pl-16"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
                >
                  <feature.icon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </motion.div>
                <dt className="text-base/7 font-semibold text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Support;
