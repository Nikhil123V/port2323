"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="relative w-full aspect-square max-w-xs mx-auto">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 blur-xl opacity-20 -rotate-6" />
                <Image
                  src="/profile.jpg?height=400&width=400"
                  alt="About Me"
                  width={400}
                  height={400}
                  className="relative rounded-lg shadow-lg object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-3 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an enthusiastic Computer Science engineer with a passion for AI, web development, and problem-solving. My expertise spans from building AI-powered applications to full-stack web development. I am always eager to learn and explore new technologies. My goal is to create impactful digital solutions that enhance user experiences.
              </p>

             

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-2">Name:</span> Chipati Swathi Reddy  
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-2">Email:</span> swathireddy151828@gmail.com  

                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-2">Location:</span> Chennai, India
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium mr-2">Availability:</span> Freelance / Full-time
                  </li>
                </ul>
                <div className="mt-6">
    <a
      href="https://i.ibb.co/dwrwpPCm/CSReddy-CV-1.png"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      View Resume
    </a>
  </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
