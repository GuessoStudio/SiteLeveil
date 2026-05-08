import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Brain, Heart, TrendingUp, Users } from 'lucide-react'
import { MagicCard } from '../ui/MagicCard'

function DiscreteParticles({ count = 15 }: { count?: number }) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-indigo-400/20 rounded-full animate-pulse pointer-events-none"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 17) % 100}%`,
            animationDelay: `${(index % 4) * 0.5}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        />
      )),
    [count]
  )
}

export default function ThemeCards() {
  return (
    <section className="py-20 bg-sand-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background patterns — pointer-events-none : décoratifs uniquement */}
      <div className="absolute inset-0 opacity-20 md:opacity-30 pointer-events-none">
        <div className="absolute top-10 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 border border-indigo-200/20 dark:border-indigo-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 md:top-40 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 border border-purple-200/20 dark:border-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-8 md:w-16 h-8 md:h-16 border border-emerald-200/20 dark:border-emerald-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 md:bottom-40 right-1/3 w-10 md:w-20 h-10 md:h-20 border border-pink-200/20 dark:border-pink-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Particules — pointer-events-none : décoratifs uniquement */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block">
          <DiscreteParticles count={20} />
        </div>
        <div className="block md:hidden">
          <DiscreteParticles count={8} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sand-900 dark:text-sand-50 mb-4
                         animate-in fade-in slide-in-from-bottom-4 duration-700">
            Les thèmes que j'explore
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Des contenus basés sur la recherche en psychologie et neurosciences
          </p>
        </div>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {/* NEUROSCIENCES */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both h-full"
               style={{ animationDelay: '200ms' }}>
            <MagicCard
              gradientColor="#C9953A"
              gradientSize={200}
              className="h-full rounded-2xl"
            >
              <Link
                to="/blog?category=Neurosciences"
                className="group block h-full enhanced-transition"
                aria-label="Voir tous les articles de Neurosciences"
              >
                <div className="relative
                                bg-gradient-neurosciences-soft dark:bg-[#0d0500]/60
                                glass-card-soft p-6 md:p-8 rounded-2xl shadow-category h-full
                                transform transition-all duration-300 ease-out
                                focus-ring overflow-hidden
                                touch-manipulation
                                active:scale-95 active:shadow-lg
                                md:active:scale-100">

                  <div className="absolute inset-0 bg-gradient-neurosciences opacity-0
                                  md:group-hover:opacity-10 group-active:opacity-15
                                  transition-opacity duration-300 rounded-2xl"></div>

                  <div className="absolute top-4 right-4 opacity-10
                                  md:group-hover:opacity-20 group-active:opacity-25
                                  transition-opacity duration-300">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="text-current">
                      <path d="M20 8 L32 20 L20 32 L8 20 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-400"/>
                      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-500"/>
                    </svg>
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block overflow-hidden rounded-full">
                      <Brain className="w-8 h-8 text-[#C9953A]
                                       transition-transform duration-300
                                       md:group-hover:scale-110 md:group-hover:animate-glow-pulse
                                       group-active:scale-110 relative z-10" />
                      <div className="absolute inset-0 bg-[#C9953A]/20 rounded-full scale-0
                                      group-active:scale-150 md:group-active:scale-0
                                      transition-transform duration-300 ease-out pointer-events-none"></div>
                    </div>
                    <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-[#C9953A]/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.2s' }}></div>
                    <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-amber-400/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.4s' }}></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-sand-900 dark:text-sand-50 mb-3
                                   transition-all duration-300
                                   md:group-hover:text-gradient-neurosciences
                                   group-active:text-indigo-600 dark:group-active:text-indigo-400
                                   transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                      Neurosciences
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                                 transition-colors duration-300
                                 md:group-hover:text-sand-700 dark:md:group-hover:text-neutral-200
                                 group-active:text-sand-700 dark:group-active:text-neutral-200">
                      Découvrez comment votre cerveau fonctionne et comment l'optimiser
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-neurosciences
                                  transition-all duration-500 ease-out
                                  md:group-hover:w-full group-active:w-full"></div>

                  <div className="absolute inset-0 opacity-0
                                  md:group-hover:opacity-20 group-active:opacity-10
                                  bg-gradient-to-r from-transparent via-white to-transparent
                                  transform -skew-x-12 translate-x-full
                                  md:group-hover:translate-x-0 group-active:translate-x-0
                                  transition-transform duration-500 ease-out pointer-events-none"></div>

                  <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0
                                  transition-all duration-300 transform translate-y-2
                                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                                  group-active:opacity-100 group-active:translate-y-0">
                    <div className="bg-gradient-neurosciences text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      <span className="hidden sm:inline">Voir articles</span>
                      <span className="sm:hidden">Voir</span>
                    </div>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </div>

          {/* PSYCHOLOGIE */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both h-full"
               style={{ animationDelay: '300ms' }}>
            <MagicCard
              gradientColor="#C9953A"
              gradientSize={200}
              className="h-full rounded-2xl"
            >
              <Link
                to="/blog?category=Psychologie"
                className="group block h-full enhanced-transition"
                aria-label="Voir tous les articles de Psychologie"
              >
                <div className="relative
                                bg-gradient-psychologie-soft dark:bg-[#0d0500]/60
                                glass-card-soft p-6 md:p-8 rounded-2xl shadow-category h-full
                                transform transition-all duration-300 ease-out
                                focus-ring overflow-hidden
                                touch-manipulation
                                active:scale-95 active:shadow-lg
                                md:active:scale-100">

                  <div className="absolute inset-0 bg-gradient-psychologie opacity-0
                                  md:group-hover:opacity-10 group-active:opacity-15
                                  transition-opacity duration-300 rounded-2xl"></div>

                  <div className="absolute top-4 right-4 opacity-10
                                  md:group-hover:opacity-20 group-active:opacity-25
                                  transition-opacity duration-300">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink-400">
                      <path d="M20 32 C15 27, 8 20, 8 14 C8 10, 12 8, 16 10 C18 11, 20 13, 20 13 C20 13, 22 11, 24 10 C28 8, 32 10, 32 14 C32 20, 25 27, 20 32 Z"
                            stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block overflow-hidden rounded-full">
                      <Heart className="w-8 h-8 text-[#C9953A]
                                       transition-transform duration-300
                                       md:group-hover:scale-110 md:group-hover:animate-glow-pulse md:group-hover:animate-pulse
                                       group-active:scale-110 relative z-10" />
                      <div className="absolute inset-0 bg-[#C9953A]/20 rounded-full scale-0
                                      group-active:scale-150 md:group-active:scale-0
                                      transition-transform duration-300 ease-out pointer-events-none"></div>
                    </div>
                    <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-[#C9953A]/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.1s' }}></div>
                    <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-amber-400/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.3s' }}></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-sand-900 dark:text-sand-50 mb-3
                                   transition-all duration-300
                                   md:group-hover:text-gradient-psychologie
                                   group-active:text-pink-600 dark:group-active:text-pink-400
                                   transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                      Psychologie
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                                 transition-colors duration-300
                                 md:group-hover:text-sand-700 dark:md:group-hover:text-neutral-200
                                 group-active:text-sand-700 dark:group-active:text-neutral-200">
                      Comprenez vos émotions et développez votre intelligence émotionnelle
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-psychologie
                                  transition-all duration-500 ease-out
                                  md:group-hover:w-full group-active:w-full"></div>

                  <div className="absolute inset-0 opacity-0
                                  md:group-hover:opacity-20 group-active:opacity-10
                                  bg-gradient-to-r from-transparent via-white to-transparent
                                  transform -skew-x-12 translate-x-full
                                  md:group-hover:translate-x-0 group-active:translate-x-0
                                  transition-transform duration-500 ease-out pointer-events-none"></div>

                  <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0
                                  transition-all duration-300 transform translate-y-2
                                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                                  group-active:opacity-100 group-active:translate-y-0">
                    <div className="bg-gradient-psychologie text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      <span className="hidden sm:inline">Voir articles</span>
                      <span className="sm:hidden">Voir</span>
                    </div>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </div>

          {/* DÉVELOPPEMENT PERSONNEL */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both h-full"
               style={{ animationDelay: '400ms' }}>
            <MagicCard
              gradientColor="#C9953A"
              gradientSize={200}
              className="h-full rounded-2xl"
            >
              <Link
                to="/blog?category=Développement Personnel"
                className="group block h-full enhanced-transition"
                aria-label="Voir tous les articles de Développement Personnel"
              >
                <div className="relative
                                bg-gradient-developpement-soft dark:bg-[#0d0500]/60
                                glass-card-soft p-6 md:p-8 rounded-2xl shadow-category h-full
                                transform transition-all duration-300 ease-out
                                focus-ring overflow-hidden
                                touch-manipulation
                                active:scale-95 active:shadow-lg
                                md:active:scale-100">

                  <div className="absolute inset-0 bg-gradient-developpement opacity-0
                                  md:group-hover:opacity-10 group-active:opacity-15
                                  transition-opacity duration-300 rounded-2xl"></div>

                  <div className="absolute top-4 right-4 opacity-10
                                  md:group-hover:opacity-20 group-active:opacity-25
                                  transition-opacity duration-300">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="text-emerald-400">
                      <path d="M8 32 L16 24 L24 28 L32 8" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="32" cy="8" r="3" fill="currentColor"/>
                      <circle cx="24" cy="28" r="2" fill="currentColor"/>
                      <circle cx="16" cy="24" r="2" fill="currentColor"/>
                    </svg>
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block overflow-hidden rounded-full">
                      <TrendingUp className="w-8 h-8 text-[#C9953A]
                                            transition-transform duration-300
                                            md:group-hover:scale-110 md:group-hover:animate-glow-pulse
                                            group-active:scale-110 relative z-10" />
                      <div className="absolute inset-0 bg-[#C9953A]/20 rounded-full scale-0
                                      group-active:scale-150 md:group-active:scale-0
                                      transition-transform duration-300 ease-out pointer-events-none"></div>
                    </div>
                    <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-[#C9953A]/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.2s' }}></div>
                    <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-amber-400/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.4s' }}></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-sand-900 dark:text-sand-50 mb-3
                                   transition-all duration-300
                                   md:group-hover:text-gradient-developpement
                                   group-active:text-emerald-600 dark:group-active:text-emerald-400
                                   transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                      Développement Personnel
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                                 transition-colors duration-300
                                 md:group-hover:text-sand-700 dark:md:group-hover:text-neutral-200
                                 group-active:text-sand-700 dark:group-active:text-neutral-200">
                      Techniques pratiques pour votre croissance personnelle et professionnelle
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-developpement
                                  transition-all duration-500 ease-out
                                  md:group-hover:w-full group-active:w-full"></div>

                  <div className="absolute inset-0 opacity-0
                                  md:group-hover:opacity-20 group-active:opacity-10
                                  bg-gradient-to-r from-transparent via-white to-transparent
                                  transform -skew-x-12 translate-x-full
                                  md:group-hover:translate-x-0 group-active:translate-x-0
                                  transition-transform duration-500 ease-out pointer-events-none"></div>

                  <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0
                                  transition-all duration-300 transform translate-y-2
                                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                                  group-active:opacity-100 group-active:translate-y-0">
                    <div className="bg-gradient-developpement text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      <span className="hidden sm:inline">Voir articles</span>
                      <span className="sm:hidden">Voir</span>
                    </div>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </div>

          {/* RELATIONS HUMAINES */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both h-full"
               style={{ animationDelay: '500ms' }}>
            <MagicCard
              gradientColor="#C9953A"
              gradientSize={200}
              className="h-full rounded-2xl"
            >
              <Link
                to="/blog?category=Relations Humaines"
                className="group block h-full enhanced-transition"
                aria-label="Voir tous les articles de Relations Humaines"
              >
                <div className="relative
                                bg-gradient-relations-soft dark:bg-[#0d0500]/60
                                glass-card-soft p-6 md:p-8 rounded-2xl shadow-category h-full
                                transform transition-all duration-300 ease-out
                                focus-ring overflow-hidden
                                touch-manipulation
                                active:scale-95 active:shadow-lg
                                md:active:scale-100">

                  <div className="absolute inset-0 bg-gradient-relations opacity-0
                                  md:group-hover:opacity-10 group-active:opacity-15
                                  transition-opacity duration-300 rounded-2xl"></div>

                  <div className="absolute top-4 right-4 opacity-10
                                  md:group-hover:opacity-20 group-active:opacity-25
                                  transition-opacity duration-300">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-400">
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <circle cx="20" cy="28" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M16 12 L24 12 M16 15 L17 25 M24 15 L23 25" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>

                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block overflow-hidden rounded-full">
                      <Users className="w-8 h-8 text-[#C9953A]
                                       transition-transform duration-300
                                       md:group-hover:scale-110 md:group-hover:animate-glow-pulse
                                       group-active:scale-110 relative z-10" />
                      <div className="absolute inset-0 bg-[#C9953A]/20 rounded-full scale-0
                                      group-active:scale-150 md:group-active:scale-0
                                      transition-transform duration-300 ease-out pointer-events-none"></div>
                    </div>
                    <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-[#C9953A]/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.1s' }}></div>
                    <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-amber-400/60 rounded-full
                                    opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                         style={{ animationDelay: '0.3s' }}></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-sand-900 dark:text-sand-50 mb-3
                                   transition-all duration-300
                                   md:group-hover:text-gradient-relations
                                   group-active:text-purple-600 dark:group-active:text-purple-400
                                   transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                      Relations Humaines
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                                 transition-colors duration-300
                                 md:group-hover:text-sand-700 dark:md:group-hover:text-neutral-200
                                 group-active:text-sand-700 dark:group-active:text-neutral-200">
                      Améliorez vos relations et votre communication interpersonnelle
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-relations
                                  transition-all duration-500 ease-out
                                  md:group-hover:w-full group-active:w-full"></div>

                  <div className="absolute inset-0 opacity-0
                                  md:group-hover:opacity-20 group-active:opacity-10
                                  bg-gradient-to-r from-transparent via-white to-transparent
                                  transform -skew-x-12 translate-x-full
                                  md:group-hover:translate-x-0 group-active:translate-x-0
                                  transition-transform duration-500 ease-out pointer-events-none"></div>

                  <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0
                                  transition-all duration-300 transform translate-y-2
                                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                                  group-active:opacity-100 group-active:translate-y-0">
                    <div className="bg-gradient-relations text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      <span className="hidden sm:inline">Voir articles</span>
                      <span className="sm:hidden">Voir</span>
                    </div>
                  </div>
                </div>
              </Link>
            </MagicCard>
          </div>

        </div>

        {/* Message informatif */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
            <span className="hidden sm:inline">Cliquez sur une catégorie pour voir tous les articles correspondants</span>
            <span className="sm:hidden">Touchez une catégorie pour voir les articles</span>
          </p>
        </div>
      </div>
    </section>
  )
}
