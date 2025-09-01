import React, { useState, useEffect } from 'react'
import { Quote, Share2, Twitter, Linkedin, Facebook, ChevronLeft, ChevronRight } from 'lucide-react'

interface QuoteData {
  id: number
  text: string
  author: string
  category: string
  source: string
}

const DailyQuote = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showShare, setShowShare] = useState(false)

  const quotes: QuoteData[] = [
    {
      id: 1,
      text: "La confiance en soi est le premier secret du succès",
      author: "Ralph Waldo Emerson",
      category: "confiance",
      source: "psychologie"
    },
    {
      id: 2,
      text: "Votre cerveau est neuroplastique : il peut changer à tout âge",
      author: "Dr. Norman Doidge",
      category: "neurosciences",
      source: "science"
    },
    {
      id: 3,
      text: "Le bonheur n'est pas quelque chose de tout fait. Il vient de vos propres actions",
      author: "Dalaï Lama",
      category: "bien-être",
      source: "philosophie"
    },
    {
      id: 4,
      text: "L'esprit qui s'ouvre à une nouvelle idée ne revient jamais à sa taille originale",
      author: "Albert Einstein",
      category: "apprentissage",
      source: "science"
    },
    {
      id: 5,
      text: "La résilience n'est pas ce qui vous arrive, mais comment vous réagissez à ce qui vous arrive",
      author: "Charles Swindoll",
      category: "résilience",
      source: "psychologie"
    },
    {
      id: 6,
      text: "Nous sommes ce que nous répétons sans cesse. L'excellence n'est donc pas un acte, mais une habitude",
      author: "Aristote",
      category: "habitudes",
      source: "philosophie"
    },
    {
      id: 7,
      text: "Votre zone de confort est un bel endroit, mais rien n'y pousse",
      author: "John Assaraf",
      category: "développement",
      source: "coaching"
    },
    {
      id: 8,
      text: "L'intelligence émotionnelle est plus importante que le QI",
      author: "Daniel Goleman",
      category: "émotions",
      source: "psychologie"
    },
    {
      id: 9,
      text: "La méditation n'est pas une évasion mais une rencontre sereine avec la réalité",
      author: "Thich Nhat Hanh",
      category: "mindfulness",
      source: "spiritualité"
    },
    {
      id: 10,
      text: "Les habitudes que vous créez vous créent en retour",
      author: "James Clear",
      category: "habitudes",
      source: "développement"
    },
    {
      id: 11,
      text: "La vulnérabilité est le berceau de l'innovation, de la créativité et du changement",
      author: "Brené Brown",
      category: "vulnérabilité",
      source: "psychologie"
    },
    {
      id: 12,
      text: "Votre attention est votre ressource la plus précieuse",
      author: "Cal Newport",
      category: "focus",
      source: "productivité"
    },
    {
      id: 13,
      text: "La croissance commence à la fin de votre zone de confort",
      author: "Tony Robbins",
      category: "croissance",
      source: "coaching"
    },
    {
      id: 14,
      text: "Ce ne sont pas les événements qui nous troublent, mais nos jugements sur ces événements",
      author: "Épictète",
      category: "stoïcisme",
      source: "philosophie"
    },
    {
      id: 15,
      text: "Votre état d'esprit détermine votre expérience de vie",
      author: "Carol Dweck",
      category: "mindset",
      source: "psychologie"
    },
    {
      id: 16,
      text: "La gratitude transforme ce que nous avons en suffisant",
      author: "Melody Beattie",
      category: "gratitude",
      source: "bien-être"
    },
    {
      id: 17,
      text: "L'échec n'est pas le contraire du succès, c'est une partie du succès",
      author: "Arianna Huffington",
      category: "échec",
      source: "entrepreneuriat"
    },
    {
      id: 18,
      text: "Votre potentiel est infini quand vous cessez de vous limiter",
      author: "Wayne Dyer",
      category: "potentiel",
      source: "développement"
    },
    {
      id: 19,
      text: "La paix intérieure commence au moment où vous choisissez de ne pas laisser les autres contrôler vos émotions",
      author: "Pema Chödrön",
      category: "paix intérieure",
      source: "spiritualité"
    },
    {
      id: 20,
      text: "Investissez en vous-même : c'est le meilleur investissement que vous puissiez faire",
      author: "Warren Buffett",
      category: "investissement personnel",
      source: "développement"
    },
    {
      id: 21,
      text: "La compassion envers soi-même est la clé de la guérison émotionnelle",
      author: "Kristin Neff",
      category: "auto-compassion",
      source: "psychologie"
    },
    {
      id: 22,
      text: "Votre environnement façonne plus votre comportement que votre motivation",
      author: "B.J. Fogg",
      category: "environnement",
      source: "comportement"
    },
    {
      id: 23,
      text: "La pleine conscience est l'art d'être présent à sa propre vie",
      author: "Jon Kabat-Zinn",
      category: "pleine conscience",
      source: "méditation"
    },
    {
      id: 24,
      text: "Vos pensées deviennent vos mots, vos mots deviennent vos actions",
      author: "Lao Tseu",
      category: "pensées",
      source: "philosophie"
    },
    {
      id: 25,
      text: "La créativité naît de l'angoisse comme le jour naît de la nuit obscure",
      author: "Albert Einstein",
      category: "créativité",
      source: "science"
    }
  ]

  useEffect(() => {
    // Citation du jour basée sur la date - calcul fiable
    const today = new Date()
    const start = new Date(today.getFullYear(), 0, 1)
    const dayOfYear = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const dailyIndex = (dayOfYear - 1) % quotes.length
    
    setCurrentIndex(dailyIndex)
    setQuote(quotes[dailyIndex])
  }, [quotes.length])

  const nextQuote = () => {
    const newIndex = (currentIndex + 1) % quotes.length
    setCurrentIndex(newIndex)
    setQuote(quotes[newIndex])
  }

  const prevQuote = () => {
    const newIndex = currentIndex === 0 ? quotes.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setQuote(quotes[newIndex])
  }

  const shareQuote = (platform: string) => {
    if (!quote) return
    
    const text = `"${quote.text}" - ${quote.author}`
    const url = window.location.origin
    
    let shareUrl = ''
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  // Fallback au cas où quote est null
  const displayQuote = quote || quotes[0]

  if (!displayQuote) return null

  return (
    <div className="daily-quote bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto shadow-lg border border-neutral-200 dark:border-neutral-700">
      <div className="flex items-start gap-4">
        <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <blockquote className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-medium mb-4 leading-relaxed">
            "{displayQuote.text}"
          </blockquote>
          <div className="flex items-center justify-between mb-4">
            <cite className="text-neutral-600 dark:text-neutral-400 font-medium">
              — {displayQuote.author}
            </cite>
            <div className="relative">
              <button
                onClick={() => setShowShare(!showShare)}
                className="p-2 text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                aria-label="Partager la citation"
              >
                <Share2 className="w-5 h-5" />
              </button>
              
              {showShare && (
                <div className="absolute right-0 top-full mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 flex gap-2 z-10">
                  <button
                    onClick={() => shareQuote('twitter')}
                    className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    aria-label="Partager sur Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => shareQuote('linkedin')}
                    className="p-2 text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    aria-label="Partager sur LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => shareQuote('facebook')}
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    aria-label="Partager sur Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Navigation entre citations */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevQuote}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
              aria-label="Citation précédente"
            >
              <ChevronLeft className="w-4 h-4" />
              Précédente
            </button>
            
            <span className="text-xs text-neutral-400">
              {currentIndex + 1} / {quotes.length}
            </span>
            
            <button
              onClick={nextQuote}
              className="flex items-items gap-1 text-sm text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
              aria-label="Citation suivante"
            >
              Suivante
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
          Citation du jour #{currentIndex + 1}
        </span>
      </div>
    </div>
  )
}

export default DailyQuote