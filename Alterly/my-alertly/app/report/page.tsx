'use client'

import { useState } from 'react'
import Layout from '../components/layout'
import Button from '../components/button'

export default function ReportPage() {
  const [report, setReport] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the report to your backend
    console.log('Report submitted:', report)
    setReport('')
    alert('Report submitted successfully!')
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Submit a Report</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Describe the issue you've noticed..."
            className="w-full h-40 p-4 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
            required
          />
          <Button href="#" variant="dark">
            Submit Report
          </Button>
        </form>
      </div>
    </Layout>
  )
}