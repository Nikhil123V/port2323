"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [

    {
      title: "Knee Osteoarthritis App",
      description:"AI-based grading system for knee osteoarthritis using Flutter and TensorFlow.",
      image: "/project-1.png",
      tags: ["Web Development", "Next.js", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "https://github.com/CSwathi1518/Knee_Osteoarthritis_Project-",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      image: "/project-2.png",
      tags: ["Web Development", "React", "Node.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Traffic Sign Recognition System",
      description:"Achieved 85% accuracy using Support Vector Machine and optimized performance with various ML algorithms. ",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Web Development", "React", "Firebase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Car Washing Website",
      description:" Built a responsive car washing website that improved engagement by 20%.  ",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Web Development", "Next.js", "MongoDB","AI/ML Model"],
      demoLink: "#",
      githubLink: "#",
    },
    
  ]

  const filters = ["All", "Web Development", "React", "Next.js", "API Integration"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            My Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8"
          >
            Here are some of my recent projects. Feel free to check them out!
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`mb-2 ${activeFilter === filter ? "bg-purple-600 hover:bg-purple-700" : ""}`}
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
