import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import dev1 from "../../assets/developers/1.jpg";
import dev2 from "../../assets/developers/2.jpg";

const posts = [
  {
    id: 1,
    title: "Aumenta tu tasa de conversión",
    href: "#",
    description:
      "Descubre estrategias clave para mejorar la conversión en tu negocio. Consejos prácticos para optimizar tu embudo de ventas.",
    date: "7 de abril, 2025",
    datetime: "2025-04-07",
    category: { title: "Desarrollador", href: "#" },
    author: {
      name: "Daniela Melo",
      role: "Co-Fundadora / CTO",
      href: "#",
      imageUrl: dev2,
    },
  },
  {
    id: 2,
    title: "Mejora la experiencia del usuario",
    href: "#",
    description:
      "Aprende cómo una interfaz intuitiva y accesible puede aumentar la retención de clientes y mejorar la satisfacción general.",
    date: "7 de abril, 2025",
    datetime: "2025-04-07",
    category: { title: "Desarrollador", href: "#" },
    author: {
      name: "Esteban Ricardo",
      role: "Co-Fundador / CTO",
      href: "#",
      imageUrl: dev1,
    },
  },
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" bg-white bg-opacity-90 py-24 sm:py-32 flex flex-col items-center text-center"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center flex flex-col items-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <FontAwesomeIcon icon={faBlog} className="mr-2 text-pretty" /> Desde
            el blog
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Aprende cómo hacer crecer tu negocio con nuestros consejos de
            expertos.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-auto lg:max-w-4xl lg:grid-cols-2">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex max-w-xl flex-col items-center text-center"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="mr-2 text-pretty"
                      />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Explora más artículos en nuestro blog para descubrir estrategias
            innovadoras y consejos prácticos.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="mt-4 inline-block rounded-md bg-pretty px-6 py-3 text-dark hover:text-gray-600 font-medium hover:bg-pretty-dark"
          >
            Ver más artículos
          </motion.a>
        </div>
      </div>

    </motion.div>
  );
}

export default About;
