export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  description: string
  fullDescription: string
  image: string
  images: string[]
  price?: number
  specifications: ProductSpecification[]
  features: string[]
  applications: string[]
  datasheet?: string
  manual?: string
  inStock: boolean
  featured: boolean
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface ProductSpecification {
  name: string
  value: string
  unit?: string
}

export type ProductCategory = 
  | 'clps'
  | 'sensores'
  | 'atuadores'
  | 'painels'
  | 'software'
  | 'interfaces'
  | 'comunicacao'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  fullDescription: string
  icon: string
  image: string
  benefits: string[]
  process: ServiceProcessStep[]
  duration: string
  price?: string
  featured: boolean
  tags: string[]
}

export interface ServiceProcessStep {
  id: string
  title: string
  description: string
  duration?: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  email: string
  phone?: string
  linkedin?: string
  order: number
}

export interface Client {
  id: string
  name: string
  logo: string
  website?: string
  description?: string
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
  featured: boolean
}

export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface CompanyHistory {
  year: string
  title: string
  description: string
  image?: string
}

export interface Certification {
  id: string
  name: string
  description: string
  image: string
  validUntil?: string
  issuer: string
}

export interface SEOData {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export interface BreadcrumbItem {
  name: string
  href?: string
  current?: boolean
}

export interface NavItem {
  name: string
  href: string
  icon?: string
  children?: NavItem[]
  badge?: string
}

export interface FormField {
  name: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
  rows?: number
  options?: { label: string; value: string }[]
}

export interface Address {
  street: string
  district: string
  city: string
  state: string
  zipCode: string
  fullAddress: string
}

export interface Location {
  lat: number
  lng: number
}

export interface SocialLinks {
  linkedin?: string
  instagram?: string
  facebook?: string
  twitter?: string
  youtube?: string
}