import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputField from '../common/InputField'
import ToggleSwitch from '../common/ToggleSwitch'
import { useSubmitRegistration } from '../hooks/useSubmitRegistration'
import VisaImg from '/visa.png'
import MasterImg from '/master.png'
import SepaImg from '/sepa.png'

// Registration Schema
const registrationSchema = yup.object({
  loginPhone: yup.string().required('Login phone number is required'),
  contactPhone: yup.string().required('Contact phone number is required'),
  contactEmail: yup.string().email('Please enter a valid email address').required('Contact email is required'),
  contactName: yup.string().required('Contact name is required'),
  address: yup.string().required('Address is required'),
  addressNr: yup.string().required('Address number is required'),
  postalCode: yup.string().required('Postal code is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  monthlySessions: yup.string().required('Please select monthly sessions'),
  paymentMethod: yup.string().oneOf(['sepa', 'card'], 'Please select a payment method').required('Please select a payment method'),
  cardNumber: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Card number is required'),
    otherwise: (schema) => schema.optional()
  }),
  cardExpiry: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Card expiry is required'),
    otherwise: (schema) => schema.optional()
  }),
  cardCvc: yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Card CVC is required'),
    otherwise: (schema) => schema.optional()
  })
})

// Default values
const defaultValues = {
  loginPhone: '',
  contactPhone: '',
  contactEmail: '',
  contactName: '',
  address: '',
  addressNr: '',
  postalCode: '',
  city: '',
  country: '',
  monthlySessions: '',
  paymentMethod: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: ''
}

function RegistrationForm() {
  const [selectedDuration, setSelectedDuration] = useState(6)
  const [payInAdvance, setPayInAdvance] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const { isSubmitting, submitMessage, submitRegistration } = useSubmitRegistration()

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(registrationSchema),
    defaultValues,
    mode: 'onChange'
  })

  // Initialize form with default values
  useEffect(() => {
    reset(defaultValues)
  }, [reset])

  const formData = watch()
  //calculate the pricing
  const calculatePricing = () => {
    const basePrice = 29.60
    const discount = 0.04
    const yourPrice = basePrice * (1 - discount)
    const totalMonthly = yourPrice * selectedDuration

    let finalTotal = totalMonthly
    if (payInAdvance) {
      finalTotal = finalTotal * 0.95
    }

    return {
      regularPrice: basePrice.toFixed(2),
      yourPrice: yourPrice.toFixed(2),
      discount: (basePrice * discount).toFixed(2),
      totalMonthly: finalTotal.toFixed(2)
    }
  }

  // Form handle submit
  const onSubmit = async (data) => {
    if (!acceptTerms) {
      return
    }

    const pricing = calculatePricing()
    const result = await submitRegistration(data, selectedDuration, payInAdvance, pricing)

    if (result.success) {
      reset()
      setSelectedDuration(6)
      setPayInAdvance(false)
      setAcceptTerms(false)
    }
  }

  const pricing = calculatePricing()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 bg-gray-100">

          {/* right section - registration form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Registration & Booking at GoStudent
              </h1>
              <p className="text-gray-600">The leading platform for online tutoring.</p>
            </div>

            {/* Contact Information Form */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>

              <div className="space-y-4">
            {/* login phone number  with controller*/}
                <Controller
                  name="loginPhone"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      name="loginPhone"
                      label="LOGIN PHONE NUMBER (preferably the student's)"
                      type="phone"
                      placeholder="Phone number"
                      value={field.value}
                      onChange={field.onChange}
                      error={errors.loginPhone?.message}
                    />
                  )}
                />  
                 {/* contact phone number with controller*/}
                <Controller
                  name="contactPhone"
                  control={control}
                  render={({ field }) => (
                    <InputField
                      name="contactPhone"
                      label="CONTACT PHONE NUMBER (preferably the parent's)"
                      type="phone"
                      placeholder="Phone number"
                      value={field.value}
                      onChange={field.onChange}
                      error={errors.contactPhone?.message}
                    />
                  )}
                />

                <InputField
                  label="CONTACT EMAIL ADDRESS (preferably the parent's)"
                  {...register('contactEmail')}
                  type="email"
                  placeholder="Email address"
                  required
                  error={errors.contactEmail?.message}
                />

                <InputField
                  name="contactName"
                  label="CONTACT NAME"
                  {...register('contactName')}
                  placeholder="Full name"
                  required
                  error={errors.contactName?.message}
                />
              </div>
            </div>

            {/* billing address */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-500">Billing Address</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <InputField
                  {...register('address')}
                  placeholder="Address"
                  required
                  error={errors.address?.message}
                />
                <InputField
                  {...register('addressNr')}
                  placeholder="Number"
                  required
                  error={errors.addressNr?.message}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <InputField
                  {...register('postalCode')}
                  placeholder="Postal code"
                  required
                  error={errors.postalCode?.message}
                />
                <InputField
                  {...register('city')}
                  placeholder="City"
                  required
                  error={errors.city?.message}
                />
                <InputField
                  {...register('country')}
                  type="select"
                  options={[
                    { value: '', label: 'Select country' },
                    { value: 'GR', label: 'Greece' },
                    { value: 'US', label: 'United States' },
                    { value: 'GB', label: 'United Kingdom' }
                  ]}
                  required
                  error={errors.country?.message}
                />
              </div>
            </div>

            {/* monthly sessions */}
            <div className="mb-8">
              <InputField
                label="MONTHLY SESSIONS"
                {...register('monthlySessions')}
                type="select"
                options={[
                  { value: '4', label: '4 Sessions' },
                  { value: '6', label: '6 Sessions' },
                  { value: '8', label: '8 Sessions' },
                  { value: '12', label: '12 Sessions' }
                ]}
                error={errors.monthlySessions?.message}
              />
            </div>

            {/* payment method */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-500">Select Payment Method</h2>

              <div className="space-y-4">
                <div className="flex space-x-4 flex-col">
                  <label className="flex items-center pb-3 border-b border-gray-200 cursor-pointer">
                    <input
                      type="radio"
                      {...register('paymentMethod')}
                      value="sepa"
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">                
                            <img src={SepaImg} alt="Sepa" className="w-12 h-8 object-contain" />
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      {...register('paymentMethod')}
                      value="card"
                      className="mr-2"
                    />
                      <span className="text-sm font-medium text-gray-700">
                        <img src={VisaImg} alt="Visa" className="w-12 h-8 object-contain" />
                      </span>
                      <span className="text-sm font-medium text-gray-700 flex">
                        <img src={MasterImg} alt="Mastercard" className="w-12 h-8 object-contain" />
                        <img src={MasterImg} alt="Mastercard" className="w-12 h-8 object-contain" />


                      </span>
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
                )}

                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <InputField
                        label="Card number"
                        {...register('cardNumber')}
                        placeholder="1234 5678 9012 3456"
                        error={errors.cardNumber?.message}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        label="MM/YY"
                        {...register('cardExpiry')}
                        placeholder="MM/YY"
                        error={errors.cardExpiry?.message}
                      />
                      <InputField
                        label="CVC"
                        {...register('cardCvc')}
                        placeholder="123"
                        error={errors.cardCvc?.message}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-sm text-gray-600">
              100% secure payment. All data is encrypted.
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`mt-4 p-3 rounded-md ${submitMessage.includes('successfully')
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
                }`}>
                {submitMessage}
              </div>
            )}
          </div>

          {/* right section - order overview */}
          <div className="bg-gray-200 rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <div className="box1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ORDER OVERVIEW</h2>

              {/* Duration Selection */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                  {[6, 9, 12, 18, 24, 36].map((duration) => (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => setSelectedDuration(duration)}
                      className={`py-2 px-3 text-sm font-medium rounded-md transition-colors ${selectedDuration === duration
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {duration} MONTHS
                    </button>
                  ))}
                </div>
              </div>

              {/* Pay in Advance Option */}
              <div className="mb-6">
                <ToggleSwitch
                  id="payInAdvanceToggle"
                  checked={payInAdvance}
                  onChange={(e) => setPayInAdvance(e.target.checked)}
                  label="Pay in advance - EXTRA 5% DISCOUNT"
                />
              </div>

              {/* Pricing Details */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">NUMBER OF SESSIONS P.M.</span>
                    <span className="font-medium">{formData.monthlySessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">REGULAR PRICE</span>
                    <span className="font-medium">{pricing.regularPrice}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">YOUR PRICE</span>
                    <span className="font-medium">{pricing.yourPrice}€</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>DISCOUNT 4%</span>
                    <span>-{pricing.discount}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup fee</span>
                    <span className="font-medium">0.00€</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>TOTAL P.M.</span>
                    <span>{pricing.totalMonthly}€</span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    required
                    className="mr-2 mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I accept the Terms & Conditions and understand my right of withdrawal as well as the circumstances that lead to a repeal of the same.
                  </span>
                </label>
              </div>

              {/* Order Button */}
              <button
                type="submit"
                disabled={!acceptTerms || isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 ${acceptTerms
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {isSubmitting ? 'Submitting...' : acceptTerms ? 'Order Now' : 'Please accept terms to order'}
              </button>
            </div>

            <div className="box2">
              <div className="text-center mt-4">
                <span className="text-sm font-bold text-gray-600">95% SATISFACTION RATE!</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </form>
  )
}

export default RegistrationForm 