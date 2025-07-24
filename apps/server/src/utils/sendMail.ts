import { Resend } from 'resend'
import { getTemplate } from './getMailTemplate'

export type Options = {
  tag:
    | 'verify-email'
    | 'password_reset'
    | 'subscription_active'
    | 'free_trial_active'
  message?: string
  email?: string
  username?: string
  razorpayId?: string
  subject: string
  dateOfActivation?: string
  planId?: string
  planName?: string
  duration?: number
  price?: number
  dashboardLink?: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendMail = async (options: Options) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ghost Chat <noreply@mahendrakumawat.tech>',
      to: [options.email!],
      subject: options.subject,
      html: getTemplate(options),
    })

    if (error) {
      console.error('Resend error:', error)
      return
    }

    console.log('Email sent successfully:', data)
  } catch (error) {
    console.error('SendMail error:', error)
  }
}
