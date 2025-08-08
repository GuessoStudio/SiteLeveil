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
                src="/public/images/L'éveil .jpg" 
                alt="L'Éveil" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold text-white">L'Éveil</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Votre guide vers une meilleure compréhension de l'esprit humain. 
              Psychologie, neurosciences et développement personnel fondés sur la science.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/blog" className="text-neutral-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/resources" className="text-neutral-400 hover:text-white transition-colors">Ressources</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal#mentions" className="text-neutral-400 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="/legal#privacy" className="text-neutral-400 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link to="/legal#cookies" className="text-neutral-400 hover:text-white transition-colors">Cookies</Link></li>
              <li><Link to="/legal#terms" className="text-neutral-400 hover:text-white transition-colors">CGU</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 L'Éveil. Tous droits réservés.
          </p>
          <p className="text-neutral-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Fait avec <Heart className="w-4 h-4 text-red-500" /> pour votre bien-être mental
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer