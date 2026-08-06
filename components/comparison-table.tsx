'use client'

import { useState } from 'react'
import { TrendingDown } from 'lucide-react'
import { CTAButton } from './cta-button'

const comparisonData = [
  {
    employees: '20 nhân sự',
    google: '~36.000.000',
    microsoft: '~36.000.000',
    zoho: '~12.000.000',
    savings: '~24 triệu',
  },
  {
    employees: '50 nhân sự',
    google: '~90.000.000',
    microsoft: '~90.000.000',
    zoho: '~30.000.000',
    savings: '~60 triệu',
  },
  {
    employees: '100 nhân sự',
    google: '~180.000.000',
    microsoft: '~180.000.000',
    zoho: '~60.000.000',
    savings: '~120 triệu',
  },
]

export default function ComparisonTable() {
  const [employees, setEmployees] = useState(50)
  const [savings, setSavings] = useState(3000000)

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    setEmployees(value)
    setSavings(value * 1200000)
  }

  return (
    <section id="comparison" className="py-16 md:py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            So sánh chi phí vận hành hàng năm
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Doanh nghiệp càng nhiều nhân sự thì mức tiết kiệm càng lớn
          </p>
        </div>

        {/* Pricing Table */}
        <div className="mb-16 animate-fade-up-delay overflow-x-auto">
          <div className="min-w-full bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-0 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="px-4 md:px-6 py-5 font-semibold text-foreground text-sm md:text-base">Quy mô</div>
              <div className="px-4 md:px-6 py-5 font-semibold text-foreground text-sm md:text-base text-center">Google</div>
              <div className="px-4 md:px-6 py-5 font-semibold text-foreground text-sm md:text-base text-center">Microsoft</div>
              <div className="px-4 md:px-6 py-5 font-semibold text-primary text-sm md:text-base text-center bg-primary/5">Zoho</div>
              <div className="px-4 md:px-6 py-5 font-semibold text-green-600 text-sm md:text-base text-center bg-green-50">Tiết kiệm</div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 gap-0 border-b border-border last:border-b-0 hover:bg-primary/2 transition-colors group"
              >
                <div className="px-4 md:px-6 py-5 font-semibold text-foreground text-sm md:text-base">{row.employees}</div>
                <div className="px-4 md:px-6 py-5 text-foreground text-sm md:text-base text-center text-muted-foreground">
                  {row.google} đ
                </div>
                <div className="px-4 md:px-6 py-5 text-foreground text-sm md:text-base text-center text-muted-foreground">
                  {row.microsoft} đ
                </div>
                <div className="px-4 md:px-6 py-5 text-primary font-semibold text-sm md:text-base text-center bg-primary/5 group-hover:bg-primary/10">
                  {row.zoho} đ
                </div>
                <div className="px-4 md:px-6 py-5 text-green-600 font-bold text-sm md:text-base text-center bg-green-50 group-hover:bg-green-100">
                  {row.savings} đ
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="max-w-2xl mx-auto animate-fade-up">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-heading">
                Ước tính mức tiết kiệm
              </h3>
              <p className="text-muted-foreground">
                Ước tính doanh nghiệp của bạn có thể tiết kiệm bao nhiêu
              </p>
            </div>

            {/* Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Số lượng nhân sự: <span className="text-primary">{employees}</span>
              </label>
              <input
                type="range"
                min="1"
                max="500"
                value={employees}
                onChange={handleEmployeeChange}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span>
                <span>500+</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-white rounded-xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-2">Ước tính tiết kiệm hàng năm</p>
              <div className="flex items-baseline justify-between">
                <div className="text-4xl md:text-5xl font-bold text-primary font-heading">
                  {(savings / 1000000).toFixed(1)} triệu
                </div>
                <TrendingDown size={32} className="text-green-600" />
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Dựa trên mức giá tiêu chuẩn 1.200.000 đ/người/năm
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 w-full">
              <CTAButton
                href="#lead-form"
                variant="primary"
                fullWidth
              >
                Tiết kiệm cho doanh nghiệp ngay hôm nay
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
