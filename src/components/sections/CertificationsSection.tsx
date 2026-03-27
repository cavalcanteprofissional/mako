'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CertificationsSection() {
  const { t } = useLanguage()

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' && result !== key ? result : key
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {translate('certifications.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translate('certifications.subtitle')}
          </p>
        </div>

        {/* Certifications Display */}
        <div className="max-w-4xl mx-auto">
          {/* Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* ISO 9001 Certificate Image */}
            <a href="/pdf/certifications/certificado.pdf" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-primary-400 transition-colors cursor-pointer">
              <div className="aspect-[4/3] relative flex items-center justify-center">
                <Image
                  src="/images/certifications/ISO.png"
                  alt="Certificado ISO 9001:2015"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            {/* ABNT Certification Image */}
            <a href="/pdf/certifications/certificado.pdf" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-primary-400 transition-colors cursor-pointer">
              <div className="aspect-[4/3] relative flex items-center justify-center">
                <Image
                  src="/images/certifications/ABNT.png"
                  alt="Certificação ABNT"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          {/* ISO Description */}
          <div className="bg-primary-50 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {translate('certifications.isoTitle')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {translate('certifications.isoDescription')}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    {translate('certifications.certifiedBy')}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    {translate('certifications.validUntil')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {translate('certifications.whyCertifiedTitle')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{translate('certifications.qualityTitle')}</h4>
                <p className="text-gray-600 text-sm">
                  {translate('certifications.qualityDesc')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{translate('certifications.excellenceTitle')}</h4>
                <p className="text-gray-600 text-sm">
                  {translate('certifications.excellenceDesc')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{translate('certifications.complianceTitle')}</h4>
                <p className="text-gray-600 text-sm">
                  {translate('certifications.complianceDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}