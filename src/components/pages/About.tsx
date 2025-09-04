import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe AI should solve real problems and create meaningful impact for businesses and society.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to our clients\' unique needs and challenges.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI research to deliver cutting-edge solutions.',
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We prioritize responsible AI development with transparency and fairness.',
    },
  ];

  const differentiators = [
    'Deep technical expertise across all AI domains',
    'Proven track record with Fortune 500 companies',
    'End-to-end solution development and deployment',
    'Commitment to ethical and explainable AI',
    'Agile development with rapid prototyping',
    '24/7 support and maintenance services',
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
              About Zolvr.ai
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Pioneering the Future of{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Founded in 2025, Zolvr.ai has been at the forefront of AI innovation, 
              helping businesses unlock the transformative power of artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Zolvr.ai was born from a simple belief: artificial intelligence should be accessible, 
                  practical, and transformative for businesses of all sizes. Our founders, coming from 
                  diverse backgrounds in AI research, engineering, and business, recognized the gap 
                  between cutting-edge AI research and real-world business applications.
                </p>
                <p>
                  Since our inception, we've worked with over 100 companies across various industries, 
                  delivering AI solutions that have generated millions in cost savings and revenue growth. 
                  Our approach combines deep technical expertise with a thorough understanding of business 
                  challenges.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible with AI, always keeping 
                  our clients' success at the center of everything we do.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Team working on AI solutions"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To democratize artificial intelligence by making advanced AI solutions 
                    accessible and practical for businesses worldwide. We strive to bridge 
                    the gap between cutting-edge research and real-world applications, 
                    ensuring that every organization can harness the power of AI to solve 
                    complex problems and drive innovation.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To be the leading AI partner for businesses seeking transformative solutions. 
                    We envision a future where AI augments human capabilities, drives sustainable 
                    growth, and creates positive impact across industries. Our goal is to shape 
                    this future by delivering ethical, innovative, and impactful AI solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground mb-4 mx-auto">
                      <value.icon size={24} />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zolvr.ai */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                alt="AI technology visualization"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Why Choose Zolvr.ai?</h2>
              <p className="text-muted-foreground mb-6">
                We combine technical excellence with business acumen to deliver AI solutions 
                that truly make a difference.
              </p>
              <ul className="space-y-3">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}