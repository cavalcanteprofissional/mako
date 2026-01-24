'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { companyInfo, navigation } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownClick = (e: React.MouseEvent, item: string) => {
    e.stopPropagation()
    setActiveDropdown(activeDropdown === item ? null : item)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')
    window.open(`https://wa.me/${companyInfo.whatsappFormatted}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                {companyInfo.phone}
              </span>
              <span className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                {companyInfo.email}
              </span>
            </div>
            <div className="text-gray-400">
              {companyInfo.workingHours.weekdays}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 bg-white shadow-soft transition-all duration-300",
          isScrolled && "shadow-medium"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="Mako Soluções Industriais"
            >
              <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                <Image
                  src="/images/logo.svg"
                  alt="Mako Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Mako
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 hidden lg:block">
                  Soluções Industriais
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.main.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center"
                    onClick={(e) => handleDropdownClick(e, item.name)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                aria-label="Contato via WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>(85) 98765-4321</span>
              </button>
              <Link href="/contato" className="btn-primary">
                Solicitar Orçamento
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="container-custom py-4 space-y-3 border-t border-gray-200">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 space-y-3 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Contato via WhatsApp</span>
              </button>
              <Link href="/contato" className="btn-primary w-full text-center">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}