'use client'

import { useEffect, useRef, useState } from 'react'

interface MapSectionProps {
  address: string
  lat: number
  lng: number
  companyName: string
}

export default function MapSection({ address, lat, lng, companyName }: MapSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current || mapInstanceRef.current) return

    const initMap = async () => {
      const L = (await import('leaflet')).default

      const map = L.map(mapRef.current as HTMLDivElement, {
        center: [lat, lng],
        zoom: 15,
        scrollWheelZoom: false,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: #1a7f37;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            border: 3px solid white;
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      })

      L.marker([lat, lng], { icon }).addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <strong style="font-size: 14px; color: #1a7f37;">${companyName}</strong>
            <p style="margin: 4px 0 0; font-size: 12px; color: #666;">${address}</p>
          </div>
        `)
        .openPopup()

      mapInstanceRef.current = map
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [isClient, lat, lng, address, companyName])

  if (!isClient) {
    return (
      <div className="relative h-96 bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="animate-spin w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          Carregando mapa...
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden z-0">
      <div ref={mapRef} className="absolute inset-0" />
    </div>
  )
}
