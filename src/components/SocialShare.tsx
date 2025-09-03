import React, { useState } from 'react'
import { Share2, Twitter, Facebook, Linkedin, Link2, Mail, MessageCircle, Check } from 'lucide-react'

type SocialShareProps = {
  title: string
  url: string
  description?: string
  via?: string
  hashtags?: string[]
  className?: string
  showLabels?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'buttons' | 'dropdown'
}

const SocialShare: React.FC<SocialShareProps> = ({
  title,
  url,
  description = '',
  via = 'leveil_psy',
  hashtags = [],
  className = '',
  showLabels = false,
  size = 'md',
  variant = 'buttons'
}) => {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Tailles des boutons
  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-3 text-base',
    lg: 'p-4 text-lg'
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5', 
    lg: 'h-6 w-6'
  }

  // URLs de partage
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=${via}${hashtags.length ? '&hashtags=' + hashtags.join(',') : ''}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
  }

  // Copier le lien
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erreur copie lien:', err)
      // Fallback pour anciens navigateurs
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Ouvrir dans nouvelle fenêtre
  const openShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
    
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: shareUrl.includes('twitter') ? 'twitter' : 
               shareUrl.includes('facebook') ? 'facebook' :
               shareUrl.includes('linkedin') ? 'linkedin' : 'other',
        content_type: 'article',
        item_id: title
      })
    }
  }

  // Données des plateformes
  const platforms = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: shareUrls.twitter,
      color: 'hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/20 dark:hover:text-blue-400',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Facebook', 
      icon: Facebook,
      url: shareUrls.facebook,
      color: 'hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/20 dark:hover:text-blue-300',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin, 
      url: shareUrls.linkedin,
      color: 'hover:bg-blue-50 hover:text-blue-800 dark:hover:bg-blue-950/20 dark:hover:text-blue-200',
      bgColor: 'bg-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: shareUrls.whatsapp,
      color: 'hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: shareUrls.email,
      color: 'hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-400',
      bgColor: 'bg-gray-500',
      isEmail: true
    }
  ]

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 ${sizeClasses[size]} bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors`}
        >
          <Share2 className={iconSizes[size]} />
          {showLabels && <span>Partager</span>}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg z-50">
            <div className="py-1">
              {platforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => {
                    if (platform.isEmail) {
                      window.location.href = platform.url
                    } else {
                      openShare(platform.url)
                    }
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 ${platform.color} transition-colors`}
                >
                  <platform.icon className="h-4 w-4" />
                  {platform.name}
                </button>
              ))}
              
              <hr className="my-1 border-neutral-200 dark:border-neutral-700" />
              
              <button
                onClick={() => {
                  copyLink()
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4" />}
                {copied ? 'Copié !' : 'Copier le lien'}
              </button>
            </div>
          </div>
        )}

        {/* Overlay pour fermer */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    )
  }

  // Variant "buttons" (default)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabels && (
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mr-2">
          Partager :
        </span>
      )}
      
      {platforms.map((platform) => (
        <button
          key={platform.name}
          onClick={() => {
            if (platform.isEmail) {
              window.location.href = platform.url
            } else {
              openShare(platform.url)
            }
          }}
          title={`Partager sur ${platform.name}`}
          className={`${sizeClasses[size]} text-neutral-600 dark:text-neutral-400 ${platform.color} rounded-lg transition-all duration-200 transform hover:scale-105`}
        >
          <platform.icon className={iconSizes[size]} />
        </button>
      ))}
      
      <button
        onClick={copyLink}
        title={copied ? 'Lien copié !' : 'Copier le lien'}
        className={`${sizeClasses[size]} text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-all duration-200 transform hover:scale-105 ${copied ? 'text-green-500' : ''}`}
      >
        {copied ? <Check className={iconSizes[size]} /> : <Link2 className={iconSizes[size]} />}
      </button>
    </div>
  )
}

export default SocialShare