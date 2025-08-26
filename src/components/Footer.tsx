import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Twitter, Linkedin, Facebook, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/public/images/logo-footer.png" 
                alt="L'Éveil" 
                className=  "w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold text-white">L'Éveil</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Votre guide vers une meilleure compréhension de l'esprit humain. 
              Psychologie, neurosciences et développement personnel fondés sur la science.
            </p>
            <div className="flex space-x-4">
  
  {/* Twitter */}
  <a 
    href="https://twitter.com" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous rejoindre sur Twitter" 
    className="text-neutral-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-neutral-800/50"
  >
    <Twitter className="w-5 h-5" aria-hidden="true" />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://linkedin.com" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous rejoindre sur LinkedIn" 
    className="text-neutral-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-neutral-800/50"
  >
    <Linkedin className="w-5 h-5" aria-hidden="true" />
  </a>

  {/* Facebook */}
  <a 
    href="https://facebook.com" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Nous rejoindre sur Facebook" 
    className="text-neutral-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-neutral-800/50"
  >
    <Facebook className="w-5 h-5" aria-hidden="true" />
  </a>

  {/* Email */}
  <a 
    href="mailto:contact@leveil.fr" 
    aria-label="Nous envoyer un email" 
    className="text-neutral-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-neutral-800/50"
  >
    <Mail className="w-5 h-5" aria-hidden="true" />
  </a>
  
</div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/blog" className="text-neutral-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/resources" className="text-neutral-300 hover:text-white transition-colors">Ressources</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal#mentions" className="text-neutral-300 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="/legal#privacy" className="text-neutral-300 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link to="/legal#cookies" className="text-neutral-300 hover:text-white transition-colors">Cookies</Link></li>
              <li><Link to="/legal#terms" className="text-neutral-300 hover:text-white transition-colors">CGU</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-neutral-300 text-sm">
  <img 
    src="/images/logo-footer.png" 
    alt="Logo L'Éveil" 
    className="w-5 h-5 rounded-full"
  />
  <span>© 2024 L'Éveil. Tous droits réservés.</span>
</div>
          <p className="text-neutral-300 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Fait avec <Heart className="w-4 h-4 text-red-500" /> pour votre bien-être mental
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer