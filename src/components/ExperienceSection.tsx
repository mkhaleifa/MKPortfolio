import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
        <p className="text-muted-foreground">Building skills through personal projects and continuous learning</p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-gradient glow-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Python Developer</h3>
              <p className="text-primary text-sm font-medium">Self-Directed Projects</p>
              <p className="text-muted-foreground text-xs mt-1">CS50 at Harvard University</p>
              <p className="text-muted-foreground text-sm mt-3">
                I covered how to think like a programmer: problem-solving, writing efficient code, 
                and understanding how software works under the hood. I studied topics like algorithms, 
                data structures, memory, and multiple languages such as C, Python, and JavaScript. 
                I also learned practical skills like file handling,
                 debugging, testing.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Programming basics", "Functions and problem-solving", "File handling", "Debugging and testing"].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-secondary text-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="card-gradient glow-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-xs font-bold shrink-0">
              FCC
            </div>
            <div>
              <h3 className="text-lg font-semibold">Full Stack Web Development</h3>
              <p className="text-primary text-sm font-medium">Scrimba </p>
              <p className="text-muted-foreground text-xs mt-1">Completed · Online</p>
              <p className="text-muted-foreground text-sm mt-3">
                Completed the comprehensive full stack  covering HTML, CSS, JavaScript, 
                React, Node.js, databases, and more. Built multiple certification projects along the way.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML/CSS", "JavaScript", "React", "Node.js", "Express", "APIs"].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-secondary text-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
           <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-gradient glow-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">AI Engineer</h3>
              <p className="text-primary text-sm font-medium">Scrimba</p>
              <p className="text-muted-foreground text-xs mt-1">Completed online</p>
              <p className="text-muted-foreground text-sm mt-3">
                I  build real-world AI applications by combining software engineering with modern AI technologies. I gained hands-on experience with Large Language Models, Prompt Engineering, and Retrieval-Augmented Generation, 
                along with integrating AI APIs into full-stack web apps. I also developed skills in building chatbots, managing data,
                and deploying AI-powered solutions.
                </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["LLMs", "Prompt Engineering", "API Integration", "RAG","Chatbot Development"].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-secondary text-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card-gradient glow-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-xs font-bold shrink-0">
              📚
            </div>
            <div>
              <h3 className="text-lg font-semibold">Self-Taught Learning</h3>
              <p className="text-primary text-sm font-medium">Online Courses & Resources</p>
              <p className="text-muted-foreground text-xs mt-1">Ongoing · Self-Directed</p>
              <p className="text-muted-foreground text-sm mt-3">
                Continuously expanding my skill set through online courses, tutorials, documentation, 
                and hands-on project building. Focused on modern web technologies, AI, and best practices.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["TypeScript", "AI/ML", "System Design", "DevOps", "Problem Solving"].map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded bg-secondary text-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
