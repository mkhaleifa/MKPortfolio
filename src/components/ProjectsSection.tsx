import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import shopBot from "@/assets/project-screenshots/shopBot.png";
import replayai from "@/assets/project-screenshots/replayAi.png";
import salesDashboard from "@/assets/project-screenshots/salesDashboard.png";
import travelAgent from "@/assets/project-screenshots/travelAgent.png";
import vanlife from "@/assets/project-screenshots/vanlife.png";
import dashboard from "@/assets/project-screenshots/dashboard.png";

const projects = [
  {
    title: "ShopBot",
    image: shopBot,
    desc: "AI customer support assistant for e-commerce, built to handle FAQs, order tracking, returns, and support tickets.",
    tags: ["Next.js", "AI ChatAI Models ", "API routes", "Tailwind CSS", "Supabase"],
    link: "https://shopbot-delta.vercel.app/",
  },
  {
    title: "ReplayAI",
    image: replayai,
    desc: "AI-powered support platform for e-commerce businesses with knowledge-base-driven customer assistance.",
    tags: ["Next", "API routes", "RAG", "Multi-Tenant Architecture","Supabase"],
    link: "https://replyai-w92r.vercel.app/",
  },
  {
    title: "Sales Dashboard",
    image: salesDashboard,
    desc: "Full-stack dashboard for tracking sales activity, managing workflows, and improving team visibility.",
    tags: ["Full Stack", "Node.js", "React Router", "Supabase"],
    link: "https://sales-dashboard-app-12pf.vercel.app/",
  },
  {
    title: "Travel Agent",
    image: travelAgent,
    desc: "Conversational AI travel assistant for trip planning and intelligent travel support.",
    tags: ["React", "AI Agent ", "Node.js", "CSS"],
    link: "https://travel-agent-sepia.vercel.app/",
  },
  {
    title: "Dashboard",
    image: dashboard,
    desc: "Responsive dashboard interface focused on clarity, usability, and component-driven frontend design.",
    tags: ["React", "Dashboard", "Data Visualization", "Tailwind CSS"],
    link: "https://your-dashboard.vercel.app/",
  },
  {
    title: "vanlife",
    image: vanlife,
    desc: "A travel planning app for van life enthusiasts, offering route planning, campsite recommendations, and community features to connect travelers on the road.",
    tags: ["React", "Travel Planning", "Van Life", "Community"],
    link: "https://vanlifetravell.netlify.app/",
  
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground">Real-world applications I've built</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient glow-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden bg-[#070c12]">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                width={720}
                height={288}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
