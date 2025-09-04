import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Blog() {
  const blogPosts = [
    {
      id: 'future-of-ai-in-healthcare',
      title: 'The Future of AI in Healthcare: Transforming Patient Care',
      excerpt: 'Explore how artificial intelligence is revolutionizing healthcare, from diagnostic imaging to personalized treatment plans.',
      content: 'Artificial intelligence is reshaping healthcare in unprecedented ways...',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      category: 'Healthcare',
      author: 'Dr. Alex Chen',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['Healthcare', 'AI', 'Machine Learning', 'Medical Technology'],
      featured: true,
    },
    {
      id: 'ethical-ai-development',
      title: 'Building Ethical AI: Best Practices for Responsible Development',
      excerpt: 'Learn about the importance of ethical considerations in AI development and how to build fair, transparent AI systems.',
      content: 'As AI becomes more prevalent in our daily lives...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'Ethics',
      author: 'Sarah Rodriguez',
      date: '2024-03-10',
      readTime: '6 min read',
      tags: ['Ethics', 'AI Development', 'Responsible AI', 'Fairness'],
      featured: false,
    },
    {
      id: 'computer-vision-retail',
      title: 'How Computer Vision is Revolutionizing Retail Operations',
      excerpt: 'Discover the impact of computer vision technology on inventory management, customer experience, and loss prevention in retail.',
      content: 'Computer vision technology is transforming the retail landscape...',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      category: 'Computer Vision',
      author: 'Michael Park',
      date: '2024-03-05',
      readTime: '7 min read',
      tags: ['Computer Vision', 'Retail', 'Automation', 'Customer Experience'],
      featured: false,
    },
    {
      id: 'nlp-customer-service',
      title: 'Natural Language Processing: The Key to Better Customer Service',
      excerpt: 'Understanding how NLP technologies are improving customer interactions and support experiences across industries.',
      content: 'Natural Language Processing has become a game-changer...',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      category: 'NLP',
      author: 'Dr. Alex Chen',
      date: '2024-02-28',
      readTime: '5 min read',
      tags: ['NLP', 'Customer Service', 'Chatbots', 'Automation'],
      featured: false,
    },
    {
      id: 'predictive-analytics-finance',
      title: 'Predictive Analytics in Finance: Reducing Risk and Maximizing Returns',
      excerpt: 'How financial institutions are leveraging predictive analytics to make better investment decisions and manage risk.',
      content: 'The financial industry has always been data-driven...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'Finance',
      author: 'Sarah Rodriguez',
      date: '2024-02-20',
      readTime: '9 min read',
      tags: ['Predictive Analytics', 'Finance', 'Risk Management', 'Investment'],
      featured: false,
    },
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Driven Automation: The Future of Smart Manufacturing',
      excerpt: 'Exploring how AI and automation technologies are optimizing production processes and quality control in manufacturing.',
      content: 'Manufacturing has always been at the forefront of automation...',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      category: 'Manufacturing',
      author: 'Michael Park',
      date: '2024-02-15',
      readTime: '6 min read',
      tags: ['Manufacturing', 'Automation', 'Quality Control', 'IoT'],
      featured: false,
    },
  ];

  const categories = ['All', 'Healthcare', 'Ethics', 'Computer Vision', 'NLP', 'Finance', 'Manufacturing'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              Insights & Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              AI{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Insights & Trends
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest developments in artificial intelligence, 
              machine learning, and technology trends shaping the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4">Featured Article</Badge>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge>{featuredPost.category}</Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <p className="text-sm text-muted-foreground mb-4">By {featuredPost.author}</p>
                    <Button asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <p>By {post.author}</p>
                        <p>{formatDate(post.date)}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8">
              Subscribe to our newsletter for the latest AI insights and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}