import { useState } from 'react'

export const useSubmitRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const submitRegistration = async (formData, selectedDuration, payInAdvance, pricing) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const submissionData = {
        ...formData,
        selectedDuration,
        payInAdvance,
        totalPrice: pricing.totalMonthly
      }

      // post the data to the go student rest api
      const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'http://localhost/wordpress'
      
      const response = await fetch(`${WORDPRESS_URL}/wp-json/gostudent/v1/submit-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Registration submitted successfully! We will contact you soon.')
        return { success: true, data: result }
      } else {
        setSubmitMessage(result.message || 'Submission failed. Please try again.')
        return { success: false, error: result.message }
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.')
      return { success: false, error: 'Network error' }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    submitMessage,
    submitRegistration
  }
} 