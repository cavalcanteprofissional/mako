'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { companyInfo, contactFormFields } from '@/lib/constants'
import { validateEmail, formatWhatsApp } from '@/lib/utils'
import { Button } from '@/components/ui'
import type { ContactFormData } from '@/types'

const contactFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  company: z.string().optional(),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormDataSchema = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  onSubmit?: (data: ContactFormDataSchema) => void
  className?: string
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormDataSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const handleFormSubmit = async (data: ContactFormDataSchema) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Simulação de envio - em produção, integrar com API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (onSubmit) {
        await onSubmit(data)
      }

      setIsSubmitted(true)
      reset()
    } catch (err) {
      setError('Ocorreu um erro ao enviar o formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppSubmit = (data: ContactFormDataSchema) => {
    const message = encodeURIComponent(
      `*Nova Mensagem de Contato*\n\n` +
      `*Nome:* ${data.name}\n` +
      `*Empresa:* ${data.company || 'Não informado'}\n` +
      `*E-mail:* ${data.email}\n` +
      `*Telefone:* ${data.phone}\n` +
      `*Assunto:* ${data.subject}\n\n` +
      `*Mensagem:*\n${data.message}`
    )
    
    window.open(`https://wa.me/${companyInfo.whatsappFormatted}?text=${message}`, '_blank')
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Mensagem Enviada!
        </h3>
        <p className="text-gray-600 mb-6">
          Obrigado pelo contato! Retornaremos o mais breve possível.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Enviar Nova Mensagem
        </Button>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {contactFormFields.name.label} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="input-field"
            placeholder={contactFormFields.name.placeholder}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            {contactFormFields.company.label}
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="input-field"
            placeholder={contactFormFields.company.placeholder}
            disabled={isSubmitting}
          />
        </div>

        {/* E-mail e Telefone - 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {contactFormFields.email.label} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="input-field"
              placeholder={contactFormFields.email.placeholder}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {contactFormFields.phone.label} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="input-field"
              placeholder={contactFormFields.phone.placeholder}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Assunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {contactFormFields.subject.label} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className="input-field"
            placeholder={contactFormFields.subject.placeholder}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {contactFormFields.message.label} <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={contactFormFields.message.rows}
            className="input-field resize-none"
            placeholder={contactFormFields.message.placeholder}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Erro geral */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Botões de envio */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar por E-mail
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            disabled={isSubmitting}
            onClick={() => handleSubmit(handleWhatsAppSubmit)()}
            className="flex-1"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Enviar via WhatsApp
          </Button>
        </div>
      </form>
    </div>
  )
}