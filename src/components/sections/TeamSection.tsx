'use client'

import Image from 'next/image'
import { Card } from '@/components/ui'
import type { TeamMember } from '@/types'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profissionais especializados e dedicados a entregar as melhores soluções em automação industrial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} padding="lg" className="text-center group">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-blue-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.517-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                    </svg>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}