import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { coreServices as coreServicesData } from '../../data/services';
import { 
  Sparkles,
  Bot, 
  Eye, 
  Brain, 
  TrendingUp, 
  Cog, 
  MessageSquare, 
  Search, 
  BarChart3, 
  ArrowRight,
  Building2
} from 'lucide-react';

export default function Services() {
  // Enhanced service data with detailed information for the Services page
  const serviceDetails = {
    'Generative AI': {
      icon: Sparkles,
      capabilities: [
        'Conversational AI & Chatbots',
        'Large Language Models (LLMs)',
        'Fine-tuning & Customization',
        'Code & Content Generation',
        'Image, Audio & Video Synthesis'
      ],
      useCases: [
        'AI-powered chatbots and assistants',
        'Personalized marketing content',
        'Automated report and document generation',
        'Creative media and design production',
        'Domain-specific knowledge assistants'
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    'Agentic AI': {
      icon: Bot,
      capabilities: [
        'Autonomous Task Execution',
        'Multi-step Reasoning & Planning',
        'Tool & API Integration',
        'Contextual Memory & Adaptation',
        'Goal-driven Decision-Making'
      ],
      useCases: [
        'Enterprise virtual assistants',
        'Automated workflows & operations',
        'AI-driven research and analysis',
        'Customer service with problem-solving',
        'End-to-end task automation'
      ],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
    },
    'Computer Vision': {
      icon: Eye,
      capabilities: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'OCR & Document Scanning',
        'Quality Inspection',
        'Video Analytics'
      ],
      useCases: [
        'Manufacturing quality control',
        'Medical image analysis',
        'Retail inventory management',
        'Security and surveillance'
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    'Natural Language Processing': {
      icon: Brain,
      capabilities: [
        'Sentiment Analysis',
        'Text Classification',
        'Named Entity Recognition',
        'Language Translation',
        'Chatbot Development',
        'Document Processing'
      ],
      useCases: [
        'Customer feedback analysis',
        'Content moderation',
        'Automated customer support',
        'Legal document review'
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    'Predictive Analysis': {
      icon: TrendingUp,
      capabilities: [
        'Time Series Forecasting',
        'Demand Prediction',
        'Risk Assessment',
        'Anomaly Detection',
        'Customer Lifetime Value',
        'Price Optimization'
      ],
      useCases: [
        'Sales forecasting',
        'Fraud detection',
        'Predictive maintenance',
        'Market trend analysis'
      ],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  };

  // Combine shared data with detailed information
  const coreServices = coreServicesData.map(service => ({
    ...service,
    ...serviceDetails[service.title as keyof typeof serviceDetails]
  }));



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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From generative AI to predictive analytics, we deliver cutting-edge 
              AI technologies tailored to your specific business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Core AI Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Foundational AI technologies that power modern business transformation
            </p>
          </motion.div>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div>
                    <div className={`inline-flex p-4 rounded-lg ${service.bgColor} ${service.color} mb-6`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg mb-3">Key Capabilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((capability) => (
                          <Badge key={capability} variant="secondary">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Use Cases</CardTitle>
                      <CardDescription>
                        Real-world applications of {service.title.toLowerCase()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.useCases.map((useCase, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering successful AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business challenges and objectives' },
              { step: '02', title: 'Strategy', description: 'Developing a tailored AI roadmap and solution architecture' },
              { step: '03', title: 'Development', description: 'Building and training AI models with your data' },
              { step: '04', title: 'Deployment', description: 'Implementing solutions with ongoing support and optimization' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-medium">
                  {phase.step}
                </div>
                <h3 className="text-xl mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
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
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our AI services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}