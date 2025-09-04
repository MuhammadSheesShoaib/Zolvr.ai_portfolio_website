import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Code, 
  GitBranch, 
  Monitor, 
  Lock,
  ArrowRight,
  CheckCircle,
  Brain,
  Bot,
  Server,
  Settings
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Technology() {
  const techStack = [
    {
      category: 'Machine Learning Frameworks',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Hugging Face', 'spaCy', 'OpenCV'],
      icon: Brain,
      color: 'text-blue-500',
    },
    {
      category: 'Generative & Agentic AI Tools',
      technologies: ['LangChain', 'LlamaIndex', 'Ray (scaling AI agents)', 'RAG Pipelines', 'Vector Databases (Pinecone, Weaviate, FAISS, Milvus)'],
      icon: Bot,
      color: 'text-purple-500',
    },
    {
      category: 'Data Processing & Databases',
      technologies: ['Apache Spark', 'Kafka', 'Elasticsearch', 'MongoDB', 'PostgreSQL'],
      icon: Database,
      color: 'text-green-500',
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform'],
      icon: Cloud,
      color: 'text-cyan-500',
    },
    {
      category: 'Deployment & MLOps',
      technologies: ['FastAPI', 'Flask', 'MLflow', 'CI/CD', 'MLOps'],
      icon: Settings,
      color: 'text-orange-500',
    },
    {
      category: 'Programming Languages',
      technologies: ['Python', 'Go', 'JavaScript'],
      icon: Code,
      color: 'text-red-500',
    },
  ];

  const methodology = [
    {
      phase: 'Discovery & Assessment',
      description: 'We start by understanding your business challenges, data landscape, and success metrics.',
      activities: [
        'Business requirement analysis',
        'Data audit and quality assessment',
        'Technical infrastructure review',
        'Feasibility study and ROI analysis'
      ],
      duration: '1-2 weeks',
      icon: Monitor,
    },
    {
      phase: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy aligned with your business objectives.',
      activities: [
        'Solution architecture design',
        'Technology stack selection',
        'Project roadmap creation',
        'Risk assessment and mitigation'
      ],
      duration: '1-2 weeks',
      icon: GitBranch,
    },
    {
      phase: 'Development & Training',
      description: 'Build, train, and optimize AI models using your data and best practices.',
      activities: [
        'Data preprocessing and feature engineering',
        'Model development and training',
        'Hyperparameter optimization',
        'Model validation and testing'
      ],
      duration: '4-12 weeks',
      icon: Code,
    },
    {
      phase: 'Deployment & Optimization',
      description: 'Deploy solutions to production with continuous monitoring and improvement.',
      activities: [
        'Production deployment',
        'Performance monitoring setup',
        'User training and documentation',
        'Continuous optimization'
      ],
      duration: 'Ongoing',
      icon: Zap,
    },
  ];

  const principles = [
    {
      title: 'Data-Driven Approach',
      description: 'Every decision is backed by comprehensive data analysis and statistical validation.',
      icon: Database,
    },
    {
      title: 'Ethical AI Development',
      description: 'We prioritize fairness, transparency, and accountability in all our AI solutions.',
      icon: Shield,
    },
    {
      title: 'Scalable Architecture',
      description: 'Our solutions are designed to grow with your business and handle increasing demands.',
      icon: Cloud,
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security and compliance are built into every solution from day one.',
      icon: Lock,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6" variant="secondary">
              Technology & Approach
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Cutting-Edge{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our proven methodology and advanced technology stack ensure reliable, 
              scalable, and secure AI solutions for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools and frameworks for building robust AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-muted mb-4 ${stack.color}`}>
                      <stack.icon size={24} />
                    </div>
                    <CardTitle className="text-lg">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {stack.technologies.map((tech) => (
                        <div key={tech} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to AI development that ensures successful outcomes
            </p>
          </motion.div>

          <div className="space-y-12">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mr-4">
                        <phase.icon size={24} />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {phase.duration}
                        </Badge>
                        <h3 className="text-2xl">{phase.phase}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1551434678-e076c223a692' :
                        index === 1 ? '1559136555-9303baea8ebd' :
                        index === 2 ? '1517077304055-6e89abbf09b0' :
                        '1551288049-bebda4e38f71'
                      }?w=600&h=400&fit=crop`}
                      alt={phase.phase}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The fundamental values that guide our AI development process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground mb-4 mx-auto">
                      <principle.icon size={24} />
                    </div>
                    <CardTitle>{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{principle.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Experience Our Technology?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how our proven methodology and cutting-edge technology 
              can solve your specific AI challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Schedule a Technical Discussion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}