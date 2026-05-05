import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground">My learning foundation</p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-gradient glow-border rounded-xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Full Stack Web Development</h3>
              <p className="text-primary font-medium">Scrimba</p>
              <p className="text-muted-foreground text-sm mt-1">Completed · Online</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> Responsive Web Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> JavaScript Algorithms & Data Structures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> Front End Libraries (React, Next.js)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> Back End Development & APIs (Node.js, Express)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-gradient glow-border rounded-xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Undergraduate</h3>
              <p className="text-primary font-medium">Egypt</p>
              <p className="text-muted-foreground text-sm mt-1">is completing</p>
              <p className="text-muted-foreground text-sm mt-3">
                Artificial Intelligence is a field of computer science focused on building systems that can learn, think, and make decisions like humans. It combines areas like Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision to create applications such as chatbots, 
                recommendation systems, and self-driving technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
