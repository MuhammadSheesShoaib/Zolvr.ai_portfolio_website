import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Sparkles, Bot, Eye, Brain, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { coreServices } from '../../data/services';

export default function Home() {
  // Icon mapping for services
  const serviceIcons = {
    'Generative AI': Sparkles,
    'Agentic AI': Bot,
    'Computer Vision': Eye,
    'Natural Language Processing': Brain,
    'Predictive Analysis': TrendingUp,
  };

  const serviceColors = {
    'Generative AI': 'text-purple-500',
    'Agentic AI': 'text-indigo-500', 
    'Computer Vision': 'text-green-500',
    'Natural Language Processing': 'text-blue-500',
    'Predictive Analysis': 'text-orange-500',
  };

  // Dynamic services from shared data
  const services = coreServices.map(service => ({
    icon: serviceIcons[service.title as keyof typeof serviceIcons],
    title: service.title,
    description: service.description,
    color: serviceColors[service.title as keyof typeof serviceColors],
  }));

  const testimonials = [
    {
      content: 'Zolvr.ai transformed our data processing capabilities. Their AI solutions reduced our analysis time by 80%.',
      rating: 5,
    },
    {
      content: 'The predictive analytics platform helped us increase efficiency and reduce costs significantly.',
      rating: 5,
    },
    {
      content: 'Working with Zolvr.ai was seamless. They delivered exactly what we needed, on time and within budget.',
      rating: 5,
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
              AI-Powered Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              From Vision to{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Version 1.0
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help businesses leverage artificial intelligence to drive innovation, 
              optimize operations, and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emerging Tech & Automation */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Emerging Tech & Automation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use the latest AI trends to simplify and automate the way you work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Custom MCP Servers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex p-4 rounded-lg bg-blue-50 text-blue-500 mb-4 mx-auto">
                    <Bot size={32} />
                  </div>
                  <CardTitle className="text-xl px-4">Custom MCP Servers – Built for Your Use Case</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-center text-base leading-relaxed">
                    Every business runs differently. That's why we design custom MCP servers to match your exact needs. Whether it's an AI that updates your reports, fetches insights from your database, or keeps your team organized—your MCP server is built around your workflow. You tell us the use case, we make it happen automatically.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* n8n Workflows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex p-4 rounded-lg bg-green-50 text-green-500 mb-4 mx-auto">
                    <Sparkles size={32} />
                  </div>
                  <CardTitle className="text-xl px-4">n8n Workflows & Automation</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-center text-base leading-relaxed">
                    Think of all the small but time-consuming tasks—sending follow-ups, moving data between apps, posting updates. With n8n automation, we connect everything together, so those tasks happen automatically in the background. Your business runs smoother, faster, and with fewer manual steps.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Closing Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1 flex items-center justify-center"
            >
              <div className="text-center max-w-md px-4">
                <div className="inline-flex p-4 rounded-lg bg-purple-50 text-purple-500 mb-6 mx-auto">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl mb-4">The Big Picture</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Together, these tools mean your work gets done automatically—leaving you free to focus on growth, strategy, and the big picture.
                </p>
                <Button asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our AI Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-muted mb-4 ${service.color}`}>
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by forward-thinking companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-medium">Verified Client</p>
                      <p className="text-sm text-muted-foreground">Anonymous Review</p>
                    </div>
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
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how AI can solve your complex challenges and drive growth.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}