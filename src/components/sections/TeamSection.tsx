'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import type { TeamMember } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const { t } = useLanguage()
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)
  const [lockedMember, setLockedMember] = useState<string | null>(null)

  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const getMemberTranslations = (memberId: string) => {
    const memberKey = `team.member${memberId}`
    return {
      role: translate(`${memberKey}.role`),
      bio: translate(`${memberKey}.bio`),
    }
  }

  const sortedMembers = [...teamMembers].sort((a, b) => a.order - b.order)

  const handleClick = (memberId: string) => {
    if (lockedMember === memberId) {
      setLockedMember(null)
    } else {
      setLockedMember(memberId)
    }
  }

  const isExpanded = (memberId: string) => hoveredMember === memberId || lockedMember === memberId

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {translate('about.team')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            {translate('about.teamDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {sortedMembers.map((member) => {
            const isMemberExpanded = isExpanded(member.id)
            const isLocked = lockedMember === member.id
            const translations = getMemberTranslations(member.id)
            const translatedRole = translations.role !== `team.member${member.id}.role` ? translations.role : member.role
            const translatedBio = translations.bio !== `team.member${member.id}.bio` ? translations.bio : member.bio

            return (
              <div 
                key={member.id}
                className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => !isLocked && setHoveredMember(null)}
                onClick={() => handleClick(member.id)}
              >
                {/* Card - Single layout that adapts */}
                <div className="p-6">
                  <div className={`flex flex-col lg:flex-row items-center gap-6 ${isMemberExpanded ? 'lg:items-start' : ''}`}>
                    {/* Single Image - grows when expanded */}
                    <div className={`relative transition-all duration-500 ease-out ${isMemberExpanded ? 'w-64 h-64' : 'w-40 h-40'} flex-shrink-0`}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    
                    {/* Name, Role & Chevron */}
                    <div className={`flex-1 ${isMemberExpanded ? '' : 'flex flex-col items-start'}`}>
                      {isMemberExpanded ? (
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {member.name}
                            </h3>
                            <p className="text-primary-600 font-medium">
                              {translatedRole}
                            </p>
                          </div>
                          <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-500 ${isMemberExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      ) : (
                        <div className="flex flex-col items-start">
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary-600 font-medium">
                            {translatedRole}
                          </p>
                          <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-500 mt-2 ${isMemberExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      )}

                      {/* Expanded Content - Bio */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-out ${isMemberExpanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed text-left">
                            {translatedBio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
