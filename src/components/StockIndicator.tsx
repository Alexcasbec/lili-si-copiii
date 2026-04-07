'use client'

import { getProductStock } from '@/lib/inventory'
import { AlertCircle, CheckCircle, Package } from 'lucide-react'

interface StockIndicatorProps {
  productId: string
  className?: string
}

export default function StockIndicator({ productId, className = '' }: StockIndicatorProps) {
  const stock = getProductStock(productId)
  
  if (!stock) return null

  const getStockStatus = () => {
    if (stock.available === 0) return 'out'
    if (stock.available <= stock.lowStockThreshold) return 'low'
    return 'in'
  }

  const status = getStockStatus()

  const statusConfig = {
    in: {
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      icon: CheckCircle,
      text: `În stoc (${stock.available} buc)`
    },
    low: {
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      icon: AlertCircle,
      text: `Stoc limitat (${stock.available} buc)`
    },
    out: {
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      icon: Package,
      text: 'Stoc epuizat'
    }
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <div className={`w-6 h-6 ${config.bgColor} rounded-full flex items-center justify-center`}>
        <Icon size={14} className={config.color} />
      </div>
      <span className={`${config.color} font-medium`}>
        {config.text}
      </span>
    </div>
  )
}
