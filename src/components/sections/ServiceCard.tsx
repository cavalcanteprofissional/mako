'use client'

import Image from 'next/image'
import { Card, Button, Badge } from '@/components/ui'
import { Clock, ArrowRight, CheckCircle } from 'lucide-react'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card padding="lg" hover className="h-full group">
      {/* Service Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconPath(service.icon)} />
          </svg>
        </div>
        
        {service.featured && (
          <Badge variant="warning" size="sm">
            Destaque
          </Badge>
        )}
      </div>

      {/* Service Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>

      {/* Key Benefits */}
      <div className="space-y-2 mb-6">
        {service.benefits.slice(0, 3).map((benefit, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            {benefit}
          </div>
        ))}
      </div>

      {/* Duration & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          {service.duration}
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-200"
        >
          Ver Detalhes
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </Card>
  )
}

// Helper function to get icon path
function getIconPath(iconName: string): string {
  const icons: Record<string, string> = {
    settings: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z",
    tools: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75M17.25 21v-7.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v7.5M17.25 21H12a3 3 0 0 1-3-3v-1.5M17.25 21v1.5a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1.5M6.75 17.25h3v-1.5h-3v1.5z",
    wrench: "M21.75 17.25v-.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v.75m0 0a1.5 1.5 0 0 0 3 0m0-7.5a1.5 1.5 0 0 0 3 0m-16.5 7.5h3v-1.5h-3v1.5z",
    users: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0z",
    shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
    default: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1 3 0m-3 7.5a1.5 1.5 0 1 1 3 0m-3-7.5h3.75M3.75 7.5h1.5a1.5 1.5 0 1 1 3 0m-1.5-3H4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3z"
  }
  
  return icons[iconName] || icons.default
}