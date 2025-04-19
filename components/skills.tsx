"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Database, Globe, Layers, Smartphone } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      items: ["HTML/CSS", "JavaScript", "React",  "Tailwind CSS"],
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["Figma", ],
    },
    {
      category: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      items: ["Node.js", "MongoDB", "PostgreSQL"],
    },
   
    {
      category: "Development Tools",
      icon: <Layers className="w-6 h-6" />,
      items: ["Git", "GitHub", "VS Code", "npm/yarn", "Webpack", "Vercel"],
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      items: ["React Native"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          >
            My Skills
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
          >
            Here are some of the technologies and tools I work with
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md text-purple-600 dark:text-purple-400 mr-3">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></div>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
