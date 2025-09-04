import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Mail, 
  Phone, 
  Linkedin
} from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'zolvr.ai@gmail.com',
      description: 'Send us an email anytime',
      link: 'mailto:zolvr.ai@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        { number: '+92 3022123635', link: 'tel:+923022123635' },
        { number: '+92 3180207344', link: 'tel:+923180207344' },
        { number: '+92 3320829325', link: 'tel:+923320829325' }
      ],
      description: 'Contact us through any of these numbers',
      isMultiple: true
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zolvr-ai', label: 'LinkedIn' },
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
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Start Building
              </span>{' '}
              Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with AI? Get in touch with our team 
              to discuss your project and discover how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We're here to help you harness the power of AI for your business. 
                  Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg mr-4">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg mb-1">{info.title}</h3>
                          {info.isMultiple ? (
                            <div className="space-y-1 mb-1">
                              {info.details.map((phone, index) => (
                                <a 
                                  key={index}
                                  href={phone.link}
                                  className="text-primary hover:underline block"
                                >
                                  {phone.number}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <a 
                              href={info.link}
                              className="text-primary hover:underline block mb-1"
                            >
                              {info.details}
                            </a>
                          )}
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Button key={social.label} variant="outline" size="icon" asChild>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon size={20} />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our AI services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical AI project take?",
                answer: "Project timelines vary based on complexity, but most projects range from 3-6 months for development and deployment."
              },
              {
                question: "Do you work with startups or only large enterprises?",
                answer: "We work with organizations of all sizes, from startups to Fortune 500 companies, tailoring solutions to fit your needs and budget."
              },
              {
                question: "What kind of data do you need for AI projects?",
                answer: "Data requirements vary by project type. We'll work with you to assess your current data and identify what's needed for success."
              },
              {
                question: "Do you provide ongoing support after deployment?",
                answer: "Yes, we offer comprehensive support packages including monitoring, maintenance, and continuous optimization of your AI solutions."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}