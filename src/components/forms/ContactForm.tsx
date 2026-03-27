'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { companyInfo } from '@/lib/constants'
import { Button } from '@/components/ui'
import { useLanguage } from '@/context/LanguageContext'

const createSchema = (translations: { nameRequired: string; emailInvalid: string; phoneInvalid: string; subjectRequired: string; messageRequired: string }) => z.object({
  name: z.string().min(3, translations.nameRequired),
  company: z.string().optional(),
  email: z.string().email(translations.emailInvalid),
  phone: z.string().min(10, translations.phoneInvalid),
  subject: z.string().min(5, translations.subjectRequired),
  message: z.string().min(10, translations.messageRequired),
})

type ContactFormDataSchema = z.infer<ReturnType<typeof createSchema>>

interface ContactFormProps {
  onSubmit?: (data: ContactFormDataSchema) => void
  className?: string
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const { t } = useLanguage()
  
  const translate = (key: string): string => {
    const result = t(key)
    return typeof result === 'string' ? result : key
  }

  const schema = createSchema({
    nameRequired: translate('form.nameRequired'),
    emailInvalid: translate('form.emailInvalid'),
    phoneInvalid: translate('form.phoneInvalid'),
    subjectRequired: translate('form.subjectRequired'),
    messageRequired: translate('form.messageRequired'),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormDataSchema>({
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = async (data: ContactFormDataSchema) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const mailtoLink = `mailto:${companyInfo.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Nome: ${data.name}\nEmpresa: ${data.company || 'Não informado'}\nE-mail: ${data.email}\nTelefone: ${data.phone}\n\nMensagem:\n${data.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setIsSubmitted(true)
      reset()
    } catch (err) {
      setError(translate('form.error'))
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
          {translate('form.successTitle')}
        </h3>
        <p className="text-gray-600 mb-6">
          {translate('form.successMessage')}
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          {translate('form.newMessage')}
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
            {translate('form.name')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="input-field"
            placeholder={translate('form.namePlaceholder')}
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
            {translate('form.company')}
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="input-field"
            placeholder={translate('form.companyPlaceholder')}
            disabled={isSubmitting}
          />
        </div>

        {/* E-mail e Telefone - 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {translate('form.email')} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="input-field"
              placeholder={translate('form.emailPlaceholder')}
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
              {translate('form.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="input-field"
              placeholder={translate('form.phonePlaceholder')}
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
            {translate('form.subject')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className="input-field"
            placeholder={translate('form.subjectPlaceholder')}
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
            {translate('form.message')} <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="input-field resize-none"
            placeholder={translate('form.messagePlaceholder')}
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
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {translate('form.submitting')}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {translate('form.submitEmail')}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}