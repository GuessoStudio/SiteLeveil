import React from 'react'
import { useParams } from 'react-router-dom'
import { Clock, User, Share2, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react'

const Article = () => {
  const { slug } = useParams()

  // Mock article data - in real app, this would come from your content management system
  const article = {
    title: "Comment surmonter le rejet social",
    excerpt: "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
    content: `
      <h2>Introduction</h2>
      <p>Le rejet social est l'une des expériences les plus douloureuses que nous puissions vivre en tant qu'êtres humains. Cette douleur n'est pas seulement métaphorique - des études en neurosciences montrent que le rejet active les mêmes zones cérébrales que la douleur physique.</p>
      
      <h2>Les mécanismes psychologiques du rejet</h2>
      <p>Comprendre pourquoi le rejet nous affecte autant est la première étape pour développer notre résilience. Notre cerveau est programmé pour détecter les menaces sociales car, historiquement, être exclu du groupe signifiait la mort.</p>
      
      <h3>L'impact neurologique</h3>
      <p>Quand nous sommes rejetés, notre cortex cingulaire antérieur s'active - la même région qui traite la douleur physique. C'est pourquoi nous disons que le rejet "fait mal".</p>
      
      <h2>Stratégies pour développer la résilience</h2>
      <p>Heureusement, il existe des techniques éprouvées pour renforcer notre capacité à faire face au rejet :</p>
      
      <h3>1. La restructuration cognitive</h3>
      <p>Apprenez à identifier et challenger vos pensées automatiques négatives. Le rejet ne définit pas votre valeur en tant que personne.</p>
      
      <h3>2. Le développement de l'estime de soi</h3>
      <p>Une estime de soi solide agit comme un bouclier protecteur contre les effets du rejet. Cultivez une relation positive avec vous-même.</p>
      
      <h3>3. L'exposition graduelle</h3>
      <p>Comme pour toute phobie, l'exposition contrôlée au rejet peut réduire sa charge émotionnelle. Commencez par de petits "défis de rejet".</p>
      
      <h2>Conclusion</h2>
      <p>Surmonter le rejet social est un processus qui demande du temps et de la patience avec soi-même. Rappelez-vous que chaque "non" vous rapproche du "oui" qui changera votre vie.</p>
    `,
    category: "Psychologie",
    readTime: 8,
    date: "2024-01-15",
    author: "L'Éveil",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["rejet social", "résilience", "psychologie", "estime de soi"]
  }

  const relatedArticles = [
    {
      title: "Construire une confiance en soi durable",
      slug: "confiance-en-soi-durable",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "La neuroplasticité : votre cerveau peut changer",
      slug: "neuroplasticite-cerveau",
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back to blog */}
        <div className="mb-8">
          <a
            href="/blog"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </a>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Partager :</span>
              <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-12">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Articles similaires</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <a
                  key={index}
                  href={`/article/${relatedArticle.slug}`}
                  className="group flex gap-4 p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <div className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 mt-2">
                      Lire l'article <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Article