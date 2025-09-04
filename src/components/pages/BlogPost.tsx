import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function BlogPost() {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    id: 'future-of-ai-in-healthcare',
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    excerpt: 'Explore how artificial intelligence is revolutionizing healthcare, from diagnostic imaging to personalized treatment plans.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
    category: 'Healthcare',
    author: 'Dr. Alex Chen',
    authorBio: 'AI researcher and healthcare technology expert with over 10 years of experience in machine learning applications.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Healthcare', 'AI', 'Machine Learning', 'Medical Technology'],
    content: `
      <p>Artificial intelligence is reshaping healthcare in unprecedented ways, offering new possibilities for diagnosis, treatment, and patient care. As we stand at the intersection of technology and medicine, the potential for AI to transform healthcare delivery has never been more promising.</p>

      <h2>The Current Landscape</h2>
      <p>Healthcare organizations worldwide are increasingly adopting AI technologies to address long-standing challenges in the industry. From reducing diagnostic errors to streamlining administrative processes, AI is proving to be a valuable ally in the quest for better patient outcomes.</p>

      <p>The global AI in healthcare market is projected to reach $148.4 billion by 2029, growing at a CAGR of 37.5%. This explosive growth reflects the increasing recognition of AI's potential to revolutionize medical practice.</p>

      <h2>Key Applications of AI in Healthcare</h2>

      <h3>1. Medical Imaging and Diagnostics</h3>
      <p>AI-powered diagnostic imaging is one of the most mature applications in healthcare AI. Machine learning algorithms can now:</p>
      <ul>
        <li>Detect early-stage cancers in mammograms with 94.5% accuracy</li>
        <li>Identify diabetic retinopathy in eye scans</li>
        <li>Analyze CT scans for COVID-19 diagnosis</li>
        <li>Predict cardiovascular events from ECG data</li>
      </ul>

      <h3>2. Drug Discovery and Development</h3>
      <p>AI is accelerating the traditionally lengthy drug discovery process by:</p>
      <ul>
        <li>Identifying potential drug compounds in months instead of years</li>
        <li>Predicting drug interactions and side effects</li>
        <li>Optimizing clinical trial design and patient recruitment</li>
        <li>Repurposing existing drugs for new indications</li>
      </ul>

      <h3>3. Personalized Treatment Plans</h3>
      <p>Machine learning algorithms analyze vast amounts of patient data to create personalized treatment recommendations, considering factors such as:</p>
      <ul>
        <li>Genetic makeup and biomarkers</li>
        <li>Medical history and comorbidities</li>
        <li>Lifestyle factors and environmental exposures</li>
        <li>Treatment response patterns</li>
      </ul>

      <h2>Challenges and Considerations</h2>
      <p>While the potential is enormous, implementing AI in healthcare comes with significant challenges:</p>

      <h3>Data Privacy and Security</h3>
      <p>Healthcare data is highly sensitive, requiring robust security measures and compliance with regulations like HIPAA and GDPR. Organizations must ensure that AI systems protect patient privacy while enabling innovation.</p>

      <h3>Regulatory Approval</h3>
      <p>Medical AI applications must undergo rigorous testing and approval processes. The FDA has created new pathways for AI-based medical devices, but the regulatory landscape continues to evolve.</p>

      <h3>Clinical Integration</h3>
      <p>Successfully integrating AI tools into clinical workflows requires careful planning, training, and change management. Healthcare providers must adapt to new technologies while maintaining focus on patient care.</p>

      <h2>Looking Ahead: The Future of AI in Healthcare</h2>
      <p>The next decade promises even more exciting developments in healthcare AI:</p>

      <h3>Predictive Healthcare</h3>
      <p>AI will increasingly shift healthcare from reactive to predictive, identifying health risks before symptoms appear and enabling preventive interventions.</p>

      <h3>AI-Powered Medical Assistants</h3>
      <p>Virtual health assistants will become more sophisticated, providing 24/7 support for patients and assisting healthcare providers with routine tasks.</p>

      <h3>Precision Medicine</h3>
      <p>Treatment plans will become increasingly personalized, with AI analyzing individual patient data to recommend the most effective therapies.</p>

      <h2>Conclusion</h2>
      <p>The future of AI in healthcare is bright, with the potential to improve patient outcomes, reduce costs, and make quality healthcare more accessible. As we continue to develop and refine these technologies, collaboration between technologists, healthcare providers, and patients will be essential to realize the full potential of AI in transforming healthcare delivery.</p>

      <p>At Zolvr.ai, we're committed to developing ethical, effective AI solutions that support healthcare providers in delivering better patient care. Our expertise in machine learning and healthcare applications positions us to be a valuable partner in your digital transformation journey.</p>
    `
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Badge>{blogPost.category}</Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(blogPost.date)}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {blogPost.readTime}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl mb-6">{blogPost.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{blogPost.excerpt}</p>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground">
                      {blogPost.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p>{blogPost.author}</p>
                    <p className="text-sm text-muted-foreground">{blogPost.authorBio}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${blogPost.title}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <ImageWithFallback
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <Separator className="my-8" />

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm text-muted-foreground mr-2">Tags:</span>
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <Button variant="outline" size="sm" asChild>
                  <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${blogPost.title}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl mb-4">Related Articles</h2>
            <p className="text-muted-foreground">Continue exploring AI insights and trends</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mock related articles */}
            {[
              {
                title: 'Building Ethical AI: Best Practices for Responsible Development',
                category: 'Ethics',
                slug: 'ethical-ai-development'
              },
              {
                title: 'How Computer Vision is Revolutionizing Retail Operations',
                category: 'Computer Vision',
                slug: 'computer-vision-retail'
              },
              {
                title: 'Natural Language Processing: The Key to Better Customer Service',
                category: 'NLP',
                slug: 'nlp-customer-service'
              }
            ].map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${article.slug}`} className="block group">
                  <div className="bg-card rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <Badge className="mb-3">{article.category}</Badge>
                    <h3 className="group-hover:text-primary transition-colors">{article.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}