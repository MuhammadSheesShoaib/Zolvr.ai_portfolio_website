import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'smartsub',
      name: 'SmartSub | A Real-Time Intelligent Football Substitution Recommender System',
      description: 'Designed and developed a real-time football substitution recommender system that analyzes live match performance and provides tactical substitution suggestions.',
      keyOutcomes: [
        'Built real-time substitution recommender using Python, FastAPI, React, and TypeScript',
        'Implemented action recognition to detect 17 football events using OpenCV, YOLO, and ByteTrack',
        'Extracted player performance metrics (speed, distance, possession, passes) to assess fatigue and effectiveness',
        'Delivered substitution recommendations based on live match data stored in MongoDB'
      ],
      technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'OpenCV', 'YOLO', 'ByteTrack', 'MongoDB'],
      category: 'Sports Analytics'
    },
    {
      id: 'unburden',
      name: 'Unburden | AI-Driven Therapy App',
      description: 'Developed an AI-driven therapy app with an avatar for real-time interactive therapy, integrating facial emotion detection, sentiment analysis, and memory-enabled conversations.',
      keyOutcomes: [
        'Built custom generative model with RAG + Langchain & LangGraph for short- and long-term memory',
        'Enabled real-time facial emotion detection (MobileNetv2), head nod recognition, and sentiment analysis (Mental BERT)',
        'Deployed models using AWS ECS, Hugging Face Spaces & Inference Endpoints with Docker',
        'Integrated APIs into a FastAPI backend to manage Unburden\'s workflow'
      ],
      technologies: ['Python', 'FastAPI', 'MobileNetv2', 'BERT', 'Langchain', 'LangGraph', 'Docker', 'AWS', 'Hugging Face'],
      category: 'Healthcare AI'
    },
    {
      id: 'marketing-attribution',
      name: 'Marketing Attribution System with GA4 + BigQuery',
      description: 'Built a marketing attribution system that connects GA4 with BigQuery to automate marketing insights using RAG and vector embeddings.',
      keyOutcomes: [
        'Integrated GA4 with BigQuery to extract structured data and schema',
        'Converted schema into vector embeddings (all-MiniLM-L6-v2) stored in Weaviate',
        'Designed a RAG pipeline with SQLCoder-7B-2 to generate SQL queries from schema context',
        'Applied attribution models on query results to automate marketing attribution'
      ],
      technologies: ['BigQuery', 'GA4', 'Weaviate', 'all-MiniLM-L6-v2', 'SQLCoder-7B-2', 'RAG'],
      category: 'Marketing Analytics'
    },
    {
      id: 'ledgerflow',
      name: 'LedgerFlow | Automated Financial Accounting System',
      description: 'Engineered a modular accounting system to automate invoice processing, ledger management, and financial insights.',
      keyOutcomes: [
        'Developed financial system with Flask, MySQL, and Docker for managing invoices and ledgers',
        'Automated invoice entity extraction (sender, receiver, number, total) using Gemini API',
        'Built RAG-based pipeline to summarize revenue, expenses, and profit for actionable insights'
      ],
      technologies: ['Flask', 'MySQL', 'Docker', 'Gemini API', 'RAG'],
      category: 'Financial Technology'
    }
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
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our innovative AI solutions across sports analytics, healthcare, 
              marketing automation, and financial technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge>{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight mb-4">{project.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="mb-3">Key Feature:</h4>
                      <ul className="space-y-2">
                        {project.keyOutcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Project Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable results across our AI implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '4', label: 'Featured Projects', description: 'Across multiple industries' },
              { number: '10+', label: 'AI Technologies', description: 'Cutting-edge frameworks used' },
              { number: '100%', label: 'Success Rate', description: 'All projects delivered successfully' },
              { number: '24/7', label: 'Innovation', description: 'Continuous development cycle' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-primary mb-2">{stat.number}</div>
                <h3 className="text-lg mb-1">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Build Your Next AI Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you create innovative AI solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}