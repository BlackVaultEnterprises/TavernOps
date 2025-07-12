import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wine, Clock, Users, Star, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import tavernLogo from '../assets/table-1837-logo.webp'

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cardData = [
    {
      icon: <Wine className="w-8 h-8 text-primary" />,
      title: "Signature Cocktails",
      description: "Handcrafted cocktails inspired by the prohibition era, made with premium spirits and fresh ingredients.",
      link: "/cocktails"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Tavern Hours",
      description: "Wednesday & Thursday 12pm to 10pm, Friday & Saturday 12pm to 11pm, Sunday 4pm to 10pm"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Private Events",
      description: "Host your special occasions in our intimate speakeasy setting with personalized service."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Award Winning",
      description: "Recognized for exceptional hospitality and craft cocktails in the heart of Pennsylvania."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Historic Location",
      description: "Located in the historic Glen Rock Mill Inn, a beautifully restored 1837 woolen mill."
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Reservations",
      description: "Call ahead for the best seating. Walk-ins welcome based on availability."
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div 
        className="fixed inset-0 speakeasy-bg"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="tavern-logo"
          >
            <img 
              src={tavernLogo} 
              alt="Table 1837's Tavern" 
              className="h-24 w-auto filter brightness-150"
            />
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-wide">
              TABLE 1837'S
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8">
              TAVERN
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Where every visit is a special occasion. Experience the elegance of a bygone era 
              in our intimate speakeasy setting.
            </p>
            <Link to="/cocktails">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold tracking-wide"
              >
                Explore Our Cocktails
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Cards Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-card h-full cursor-pointer">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="mb-6 flex justify-center">
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-serif text-white mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed flex-grow">
                        {card.description}
                      </p>
                      {card.link && (
                        <div className="mt-6">
                          <Link to={card.link}>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-serif text-white mb-6">
              Visit Table 1837's Tavern
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Nestled in the heart of South-Central Pennsylvania, we offer an intimate 
              speakeasy experience with award-winning hospitality and craft cocktails.
            </p>
            <div className="glass-card p-6 inline-block">
              <p className="text-white text-lg">
                Glen Rock Mill Inn • Historic 1837 Building
              </p>
              <p className="text-gray-300 mt-2">
                Centrally located just 40 minutes from Harrisburg and Baltimore
              </p>
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage

