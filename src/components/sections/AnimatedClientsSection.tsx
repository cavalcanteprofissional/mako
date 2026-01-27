'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Company {
  domain: string
  name: string
  id: string
}

export default function AnimatedClientsSection() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Comprehensive list of well-known company domains
  const companyDomains: Company[] = [
    // Tech Giants
    { domain: 'google.com', name: 'Google', id: '1' },
    { domain: 'microsoft.com', name: 'Microsoft', id: '2' },
    { domain: 'apple.com', name: 'Apple', id: '3' },
    { domain: 'amazon.com', name: 'Amazon', id: '4' },
    { domain: 'meta.com', name: 'Meta', id: '5' },
    
    // Industrial Companies
    { domain: 'ge.com', name: 'General Electric', id: '6' },
    { domain: 'siemens.com', name: 'Siemens', id: '7' },
    { domain: 'caterpillar.com', name: 'Caterpillar', id: '8' },
    { domain: 'honeywell.com', name: 'Honeywell', id: '9' },
    { domain: '3m.com', name: '3M', id: '10' },
    { domain: 'bosch.com', name: 'Bosch', id: '11' },
    { domain: 'abb.com', name: 'ABB', id: '12' },
    { domain: 'schneider-electric.com', name: 'Schneider Electric', id: '13' },
    
    // Automotive
    { domain: 'tesla.com', name: 'Tesla', id: '14' },
    { domain: 'ford.com', name: 'Ford', id: '15' },
    { domain: 'gm.com', name: 'General Motors', id: '16' },
    { domain: 'toyota.com', name: 'Toyota', id: '17' },
    { domain: 'volkswagen.com', name: 'Volkswagen', id: '18' },
    { domain: 'bmw.com', name: 'BMW', id: '19' },
    
    // Enterprise Software
    { domain: 'ibm.com', name: 'IBM', id: '20' },
    { domain: 'oracle.com', name: 'Oracle', id: '21' },
    { domain: 'salesforce.com', name: 'Salesforce', id: '22' },
    { domain: 'adobe.com', name: 'Adobe', id: '23' },
    { domain: 'sap.com', name: 'SAP', id: '24' },
    { domain: 'workday.com', name: 'Workday', id: '25' },
    { domain: 'service-now.com', name: 'ServiceNow', id: '26' },
    
    // E-commerce & Retail
    { domain: 'shopify.com', name: 'Shopify', id: '27' },
    { domain: 'walmart.com', name: 'Walmart', id: '28' },
    { domain: 'target.com', name: 'Target', id: '29' },
    { domain: 'home-depot.com', name: 'Home Depot', id: '30' },
    { domain: 'lowes.com', name: "Lowe's", id: '31' },
    
    // Communication & Media
    { domain: 'netflix.com', name: 'Netflix', id: '32' },
    { domain: 'spotify.com', name: 'Spotify', id: '33' },
    { domain: 'disney.com', name: 'Disney', id: '34' },
    { domain: 'warnerbros.com', name: 'Warner Bros', id: '35' },
    { domain: 'cnn.com', name: 'CNN', id: '36' },
    
    // Finance & Banking
    { domain: 'jpmorgan.com', name: 'JPMorgan Chase', id: '37' },
    { domain: 'bankofamerica.com', name: 'Bank of America', id: '38' },
    { domain: 'wellsfargo.com', name: 'Wells Fargo', id: '39' },
    { domain: 'goldmansachs.com', name: 'Goldman Sachs', id: '40' },
    { domain: 'paypal.com', name: 'PayPal', id: '41' },
    
    // Airlines & Transportation
    { domain: 'delta.com', name: 'Delta Air Lines', id: '42' },
    { domain: 'united.com', name: 'United Airlines', id: '43' },
    { domain: 'americanairlines.com', name: 'American Airlines', id: '44' },
    { domain: 'uber.com', name: 'Uber', id: '45' },
    { domain: 'lyft.com', name: 'Lyft', id: '46' },
    
    // Energy & Utilities
    { domain: 'exxonmobil.com', name: 'ExxonMobil', id: '47' },
    { domain: 'shell.com', name: 'Shell', id: '48' },
    { domain: 'bp.com', name: 'BP', id: '49' },
    { domain: 'chevron.com', name: 'Chevron', id: '50' },
    
    // Healthcare
    { domain: 'johnsonandjohnson.com', name: 'Johnson & Johnson', id: '51' },
    { domain: 'pfizer.com', name: 'Pfizer', id: '52' },
    { domain: 'moderna.com', name: 'Moderna', id: '53' },
    { domain: 'unitedhealth.com', name: 'UnitedHealth', id: '54' },
    
    // Consulting & Professional Services
    { domain: 'accenture.com', name: 'Accenture', id: '55' },
    { domain: 'deloitte.com', name: 'Deloitte', id: '56' },
    { domain: 'mckinsey.com', name: 'McKinsey & Company', id: '57' },
    { domain: 'bcg.com', name: 'BCG', id: '58' },
  ]

  // Function to get logo URL from Logo.dev API
  const getLogoUrl = (domain: string, size: number = 96) => {
    const apiKey = process.env.NEXT_PUBLIC_LOGO_DEV_KEY
    if (!apiKey) {
      console.error('Logo.dev API key not found')
      return '/images/placeholder-logo.png'
    }
    
    return `https://img.logo.dev/${domain}?token=${apiKey}&size=${size}&format=png&greyscale=false&theme=auto&retina=true&fallback=monogram`
  }

  // Function to get random companies
  const getRandomCompanies = (count: number = 20) => {
    const shuffled = [...companyDomains].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // Initialize companies on component mount
  useEffect(() => {
    const initializeCompanies = () => {
      try {
        setIsLoading(true)
        const selectedCompanies = getRandomCompanies(25)
        setCompanies(selectedCompanies)
        setError(null)
      } catch (err) {
        console.error('Error initializing companies:', err)
        setError('Failed to load company logos')
      } finally {
        setIsLoading(false)
      }
    }

    initializeCompanies()
  }, [])

  // Handle image load error
  const handleImageError = (company: Company) => {
    console.warn(`Failed to load logo for ${company.name} (${company.domain})`)
  }

  // Create duplicate array for infinite scroll effect
  const companiesForScroll = [...companies, ...companies]

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empresas que <span className="text-gradient">Inspiram</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Logos de empresas líderes em seus setores, demonstrando a diversidade 
            do mundo corporativo global
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}

        {/* Animated Logo Stream */}
        {!isLoading && companies.length > 0 && (
          <div className="relative">
            {/* First Row - Moving Right */}
            <div className="relative overflow-hidden mb-8">
              <div 
                ref={scrollRef}
                className="flex space-x-12 animate-scroll-slow"
                style={{
                  animation: 'scroll-left 30s linear infinite',
                }}
              >
                {companiesForScroll.map((company, index) => (
                  <div
                    key={`${company.id}-row1-${index}`}
                    className="flex-shrink-0 relative w-24 h-24 group"
                  >
                    <div className="w-full h-full bg-gray-50 rounded-xl shadow-soft flex items-center justify-center p-3 group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={getLogoUrl(company.domain)}
                        alt={company.name}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                        sizes="(max-width: 768px) 96px, 96px"
                        onError={() => handleImageError(company)}
                        unoptimized={true}
                      />
                    </div>
                    <div className="absolute inset-x-0 -bottom-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-gray-600 font-medium truncate px-2">
                        {company.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="relative overflow-hidden mb-8">
              <div 
                className="flex space-x-12 animate-scroll-slow"
                style={{
                  animation: 'scroll-right 35s linear infinite',
                }}
              >
                {companiesForScroll.slice().reverse().map((company, index) => (
                  <div
                    key={`${company.id}-row2-${index}`}
                    className="flex-shrink-0 relative w-24 h-24 group"
                  >
                    <div className="w-full h-full bg-primary-50 rounded-xl shadow-soft flex items-center justify-center p-3 group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={getLogoUrl(company.domain)}
                        alt={company.name}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                        sizes="(max-width: 768px) 96px, 96px"
                        onError={() => handleImageError(company)}
                        unoptimized={true}
                      />
                    </div>
                    <div className="absolute inset-x-0 -bottom-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-primary-600 font-medium truncate px-2">
                        {company.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Row - Moving Right Faster */}
            <div className="relative overflow-hidden">
              <div 
                className="flex space-x-12 animate-scroll-slow"
                style={{
                  animation: 'scroll-left 25s linear infinite',
                }}
              >
                {companiesForScroll.map((company, index) => (
                  <div
                    key={`${company.id}-row3-${index}`}
                    className="flex-shrink-0 relative w-20 h-20 group"
                  >
                    <div className="w-full h-full bg-gray-100 rounded-lg shadow-soft flex items-center justify-center p-2 group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={getLogoUrl(company.domain, 64)}
                        alt={company.name}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-90"
                        sizes="64px"
                        onError={() => handleImageError(company)}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 mb-4">
            Powered by Logo.dev API
          </p>
          <a
            href="https://www.logo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
          >
            Learn more about Logo.dev →
          </a>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-slow {
          will-change: transform;
        }

        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}