import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import tavernLogo from '../assets/table-1837-logo.webp'
import hibiscusMargaritaImg from '../assets/hibiscus-margarita.jpg'
import cavaSpritZImg from '../assets/cava-spritz.jpg'
import hugoSpritZImg from '../assets/hugo-spritz.jpg'
import millManhattanImg from '../assets/mill-manhattan.jpg'
import appleMartiniImg from '../assets/apple-martini.jpg'
import blueberryLemonadeImg from '../assets/blueberry-lemonade.jpg'
import espressoMartiniImg from '../assets/espresso-martini.jpg'
import charredPeachOldFashionedImg from '../assets/charred-peach-old-fashioned.jpg'

const CocktailsPage = () => {
  const [selectedCocktail, setSelectedCocktail] = useState(null)

  const cocktails = [
    {
      id: 1,
      name: "Hibiscus Margarita",
      image: hibiscusMargaritaImg,
      glassware: "Tom Collins",
      garnish: "Smoked salt rim with lime wedge",
      ingredients: [
        "1.75 oz Casamigos Blanco",
        "2.5 oz Hibiscus Tea",
        "0.25 oz Lime juice",
        "0.25 oz Agave"
      ],
      instructions: [
        "Rim Tom Collins glass with smoked salt",
        "Add all ingredients to shaker with ice",
        "Shake vigorously and strain into glass",
        "Garnish with lime wedge",
        "Serve over fresh ice"
      ]
    },
    {
      id: 2,
      name: "Cava Spritz",
      image: cavaSpritZImg,
      glassware: "Wine Glass",
      garnish: "Dehydrated orange wheel + mint sprig",
      ingredients: [
        "1 oz Blood orange simple",
        "1 oz Aperol",
        "1 oz Triple Sec",
        "Ice",
        "Top with Cava champagne"
      ],
      instructions: [
        "Add blood orange simple, Aperol, and Triple Sec to wine glass",
        "Fill with ice",
        "Top with Cava champagne",
        "Stir gently to combine",
        "Garnish with dehydrated orange wheel and mint sprig"
      ]
    },
    {
      id: 3,
      name: "Hugo Spritz",
      image: hugoSpritZImg,
      glassware: "Wine Glass",
      garnish: "Mint sprig + Lime wedge/wheel",
      ingredients: [
        "0.75 oz St-Germain",
        "0.25 oz Simple syrup",
        "0.25 oz Lime juice",
        "Ice",
        "Top with Cava champagne"
      ],
      instructions: [
        "Add St-Germain, simple syrup, and lime juice to wine glass",
        "Fill with ice",
        "Top with Cava champagne",
        "Stir gently to combine",
        "Garnish with mint sprig and lime wedge"
      ]
    },
    {
      id: 4,
      name: "Mill Manhattan",
      image: millManhattanImg,
      glassware: "Double rocks glass",
      garnish: "2x Luxardo cherries on plastic black spear",
      ingredients: [
        "2.25 oz Bulleit Rye",
        "2 dashes Lavender orange bitters",
        "0.75 oz Sweet vermouth"
      ],
      instructions: [
        "In double rocks glass:",
        "   2.5 oz Bulleit Rye",
        "   1 oz Sweet Vermouth",
        "   2 dashes lavender orange bitters",
        "   Add Ice",
        "   Garnish with 2x luxardo cherries"
      ]
    },
    {
      id: 5,
      name: "Apple Martini",
      image: appleMartiniImg,
      glassware: "Martini",
      garnish: "2x Blue cheese olives",
      ingredients: [
        "3 oz Grey Goose Vodka",
        "1 drop Dry Vermouth"
      ],
      instructions: [
        "In pint glass:",
        "   3oz Grey Goose",
        "   1 Drop Dry Vermouth",
        "   Add Ice & shake",
        "In Martini:",
        "   Hawthorne Strain Contents",
        "   Garnish with 2x blue cheese olives"
      ]
    },
    {
      id: 6,
      name: "Cherry Point Sour",
      image: millManhattanImg,
      glassware: "Coupe",
      garnish: "Cherry and lemon twist",
      ingredients: [
        "2.25 oz Dewar's White Label",
        "0.75 oz Lemon juice",
        "0.5 oz Simple syrup",
        "0.5 oz Bordeaux wine"
      ],
      instructions: [
        "Combine whiskey, lemon juice, and simple syrup in shaker",
        "Shake with ice and double strain into coupe",
        "Float Bordeaux wine on top",
        "Garnish with cherry and lemon twist",
        "Serve up"
      ]
    },
    {
      id: 7,
      name: "Blueberry Lemonade",
      image: blueberryLemonadeImg,
      glassware: "Tom Collins",
      garnish: "Lemon + Mint sprig",
      ingredients: [
        "Splash Blue Curacao",
        "Ice",
        "1.5 oz Blueberry Lemonade Vodka",
        "0.5 oz Lemonade",
        "0.25 oz Lemon juice"
      ],
      instructions: [
        "Add splash of Blue Curacao to Tom Collins glass",
        "Fill with ice",
        "Add vodka, lemonade, and lemon juice",
        "Stir to combine",
        "Garnish with lemon wheel and mint sprig"
      ]
    },
    {
      id: 8,
      name: "Charred Peach Old Fashioned",
      image: charredPeachOldFashionedImg,
      glassware: "Double rocks glass",
      garnish: "Chargrilled peach, 2x Luxardo cherries",
      ingredients: [
        "2.25 oz Bulleit Bourbon",
        "1 oz Peach puree",
        "2 dashes Angostura bitters"
      ],
      instructions: [
        "Muddle peach puree in double rocks glass",
        "Add bourbon and bitters",
        "Fill with ice and stir",
        "Garnish with chargrilled peach and Luxardo cherries",
        "Serve on the rocks"
      ]
    },
    {
      id: 9,
      name: "Espresso Martini",
      image: espressoMartiniImg,
      glassware: "Martini glass",
      garnish: "Three coffee beans",
      ingredients: [
        "1.25 oz Espresso",
        "1 oz Kahlúa",
        "1 oz Smirnoff Vanilla Vodka",
        "0.25 oz Simple syrup"
      ],
      instructions: [
        "Add all ingredients to shaker with ice",
        "Shake vigorously to create foam",
        "Double strain into chilled Martini glass",
        "Garnish with three coffee beans",
        "Serve immediately"
      ]
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 speakeasy-bg" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-primary">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Tavern
            </Button>
          </Link>
          
          <div className="tavern-logo">
            <img 
              src={tavernLogo} 
              alt="Table 1837's Tavern" 
              className="h-16 w-auto filter brightness-150"
            />
          </div>
          
          <div className="w-32" /> {/* Spacer for centering */}
        </header>

        {/* Title Section */}
        <section className="text-center py-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wide">
              SIGNATURE
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              COCKTAILS
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handcrafted libations inspired by the prohibition era, 
              each telling its own story of rebellion and refinement.
            </p>
          </motion.div>
        </section>

        {/* Cocktails Grid - 5 Columns */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {cocktails.map((cocktail, index) => (
                <motion.div
                  key={cocktail.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedCocktail(cocktail)}
                >
                  <Card className="cocktail-card cursor-pointer h-full">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img 
                          src={cocktail.image} 
                          alt={cocktail.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-serif text-white text-center">
                          {cocktail.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded Cocktail Modal */}
        <AnimatePresence>
          {selectedCocktail && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCocktail(null)}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="expanded-card">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10 text-white hover:text-primary"
                        onClick={() => setSelectedCocktail(null)}
                      >
                        <X className="w-6 h-6" />
                      </Button>
                      
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="aspect-square md:aspect-auto">
                          <img 
                            src={selectedCocktail.image} 
                            alt={selectedCocktail.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="p-8">
                          <h2 className="text-3xl font-serif text-white mb-2">
                            {selectedCocktail.name}
                          </h2>
                          <p className="text-primary mb-2">
                            Served in: {selectedCocktail.glassware}
                          </p>
                          <p className="text-gray-300 mb-6">
                            Garnish: {selectedCocktail.garnish}
                          </p>
                          
                          <div className="mb-8">
                            <h3 className="text-xl font-serif text-primary mb-4">
                              Ingredients
                            </h3>
                            <ul className="space-y-2">
                              {selectedCocktail.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-300 flex items-center">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                  {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-serif text-primary mb-4">
                              Instructions
                            </h3>
                            <ol className="space-y-3">
                              {selectedCocktail.instructions.map((instruction, index) => (
                                <li key={index} className="text-gray-300 flex">
                                  <span className="text-primary font-semibold mr-3 flex-shrink-0">
                                    {index + 1}.
                                  </span>
                                  {instruction}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CocktailsPage

