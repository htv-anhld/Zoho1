'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { CTAButton } from './cta-button'

const benefits = [
  { text: 'Phản hồi trong 30 phút' },
  { text: 'Hỗ trợ triển khai tiếng Việt' },
]

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    employees: '21-50',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Vui lòng nhập email hợp lệ'
    }

    const phoneRegex = /^[0-9]{10}$/
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ'
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - show success message
      alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ bạn trong 30 phút.')
      setFormData({ fullName: '', email: '', phone: '', employees: '21-50' })
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="lead-form" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Illustration & Benefits */}
          <div className="animate-fade-up order-2 md:order-1">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/collaboration-illustration.png"
                alt="Đội ngũ hợp tác trên Zoho Workplace"
                fill
                className="object-cover"
              />
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✔</span>
                  </div>
                  <span className="text-lg font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-fade-up-delay order-1 md:order-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-heading">
                Nhận Báo Giá Miễn Phí
              </h3>
              <p className="text-muted-foreground mb-8">
                Điền thông tin để nhận tư vấn từ đội ngũ Connecta
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 border rounded-xl bg-white text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.fullName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 border rounded-xl bg-white text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 border rounded-xl bg-white text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.phone ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="0901234567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>

                {/* Employees */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Quy mô nhân sự
                  </label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-border rounded-xl bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="1-20">1–20 nhân sự</option>
                    <option value="21-50">21–50 nhân sự</option>
                    <option value="51-100">51–100 nhân sự</option>
                    <option value="100+">Trên 100 nhân sự</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="mt-8 w-full">
                  <CTAButton
                    variant="primary"
                    type="submit"
                    fullWidth
                    trustText={['Phản hồi trong 30 phút', 'Hỗ trợ triển khai tiếng Việt']}
                  >
                    Nhận Báo Giá & Dùng Thử Miễn Phí
                  </CTAButton>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-muted-foreground text-center pt-4">
                  🔒 Thông tin của bạn được bảo mật tuyệt đối và chỉ sử dụng để tư vấn giải pháp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
