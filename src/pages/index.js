import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Instagram, FileText } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Figma Prototype",
      year: "2024",
      type: "UI Design",
      link: "https://www.figma.com/proto/CR8I6g1GGLM3q7c2JfZelh/Untitled?node-id=3-3&p=f&t=JZzrTeDWEP13yiNZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3",
    },
    {
      title: "HCI Prototype",
      year: "2024",
      type: "UI Design",
      link: "https://www.figma.com/proto/tvZ8XXD5zDK2P6CKSHvuqv/HCI-Hi-Fi?node-id=13-742&starting-point-node-id=13%3A742&t=eEqxv2M0WbmcXHyT-1",
    },
    {
      title: "Social Media App",
      year: "2023",
      type: "Full Stack Dev",
      link: "https://github.com/DkshLuvsDucks/FCS-Project-Social_Media_App",
    },
  ];

  const filters = ["All", "UI/UX", "Web", "Mobile"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-20"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/anish_new.jpg"
              alt="Anish Bera"
              width={160}
              height={160}
              className="rounded-full border-4 border-blue-400 shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-blue-400">
            Hello It’s Me, Anish Bera, and I am a Tech and Design enthusiast
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            I turn complex problems into delightful user interfaces.
          </p>
          <p className="mt-2 text-sm uppercase tracking-wider text-blue-200">
            UI/UX Designer & Full Stack Developer
          </p>
          <a href="#projects">
            <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-6 py-3 text-lg">
              My Work
            </Button>
          </a>
        </motion.div>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">Projects</h2>
          <div className="flex gap-2 mb-6">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className="rounded-full"
              >
                {f}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-[#0f172a] border border-blue-500/30 shadow-lg hover:shadow-blue-500/30 transition rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-400">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-400">{proj.year}</p>
                    <p className="mt-2 text-gray-300">{proj.type}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">About</h2>
          <p className="text-gray-300 max-w-2xl">
            Hello there! I'm Anish Bera and I am currently pursuing my undergraduate studies at the prestigious Indraprastha Institute of Information Technology, Delhi (IIITD). I'm enthusiastic about delving into the realms of Computer Science and Design (CSD), where I explore the fascinating intersections between technology and creativity. Eager to learn and contribute to the evolving landscape of computer science, I'm constantly engaged in seeking new challenges and opportunities for growth.
          </p>
          <p className="text-gray-300 max-w-3xl mt-4">
            Till date, I actively contributed to various group design projects, showcasing a blend of creativity, teamwork, and problem-solving skills. From ideation to execution, I played a pivotal role in crafting innovative solutions and ensuring project success. My attention to detail and commitment to excellence were evident in every phase of our work, be it conceptualizing ideas, designing interfaces, or refining visual elements. Effective communication fostered a collaborative environment, allowing us to leverage diverse perspectives and deliver exceptional results. Our collective efforts not only met but surpassed expectations, leaving a lasting impact within our college community and beyond.
          </p>
        </section>

        {/* Resume + Contact */}
        <section className="mt-20 flex flex-col items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1naIe35t--TNF_eS4vkJYZVhFdP8aNPrR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl text-lg"
          >
            <FileText /> View Resume
          </a>

          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/Anish152003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.instagram.com/anibrowski_15?igsh=MmdhOXN0Y2JiOHVn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <Instagram size={28} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
