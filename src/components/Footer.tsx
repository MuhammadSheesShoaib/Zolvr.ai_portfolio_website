import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import logo from 'figma:asset/94c5db9a91da0fb24ebe14081b75bae7a1180700.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Technology', path: '/technology' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Contact', path: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zolvr-ai', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zolvr.ai@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={logo} alt="Zolvr.ai" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-medium">Zolvr.ai</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Solving complex problems with AI. We help businesses leverage artificial intelligence 
              to drive innovation and achieve their goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Zolvr.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}