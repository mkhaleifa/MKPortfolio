import { motion } from "framer-motion";
import { Code2, Brain, Layout, Lightbulb, Users,} from "lucide-react";

const cards = [
  { icon: Code2, title: "Full Stack Development", desc: "Building end-to-end web applications with React, Node.js, and modern JavaScript." },
  { icon: Brain, title: "AI Engineering", desc: "Creating AI-powered features  (LLMs, RAG systems, vector search)" },
  // { icon: Code2, title: "AI Agent Development", desc: "Designing intelligent agents that can understand and respond to user queries." },
  { icon: Layout, title: "UI/UX Design", desc: "Crafting clean, intuitive interfaces that prioritize user experience and accessibility." },
  { icon: Lightbulb, title: "Problem Solving", desc: "Turning real-world challenges into practical, technology-driven solutions." },
  { icon: Users, title: "Community Impact", desc: "Building tools that improve education, civic engagement, and daily life." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Junior Full-Stack Developer (React/Node) with AI product experience.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h3 className="text-xl font-semibold mb-4 text-primary">Background</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
I’m Mohamed Khalifa, a junior full-stack developer with experience building web applications using React, Next.js, Node.js, and modern JavaScript tools. I enjoy creating products that are both technically solid and easy for people to use.
My work combines frontend development, backend APIs, and practical AI integrations such as LLM-powered features, retrieval-based workflows, and intelligent assistants. Recently, I built projects including an AI customer support platform for e-commerce, a support chatbot, a sales dashboard, and an AI travel assistant.
I care about writing clean code, building responsive interfaces, and turning ideas into reliable, real-world products. I’m currently looking for an opportunity where I can contribute to a strong engineering team, continue growing as a full-stack developer, and help build products that deliver clear business value.

        </p>
        <p className="text-muted-foreground leading-relaxed">
          My work combines frontend development, backend APIs, and practical AI integrations such as LLM-powered features, retrieval-based workflows, and intelligent assistants. Recently, I built projects including an AI customer support platform for e-commerce, a support chatbot, a sales dashboard, and an AI travel assistant.

        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient glow-border rounded-xl p-6 hover:border-primary/50 transition-all group"
          >
            <card.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2">{card.title}</h4>
            <p className="text-sm text-muted-foreground">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
