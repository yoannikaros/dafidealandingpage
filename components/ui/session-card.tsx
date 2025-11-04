"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type SessionCardProps = {
  title: string
  tags?: string[]
  description?: string
  cta?: { text: string; href?: string }
}

export function SessionCard({ title, tags, description, cta }: SessionCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50/60 p-6 hover:bg-white hover:shadow-sm transition">
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{title}</h3>
      {tags && tags.length ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              className="rounded-full bg-white text-gray-800 border border-gray-200 px-3 py-1 font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      ) : (
        <div>
          {description && (
            <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
          )}
          {cta ? (
            cta.href ? (
              <Link href={cta.href}>
                <Button className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800">{cta.text}</Button>
              </Link>
            ) : (
              <Button className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800">{cta.text}</Button>
            )
          ) : null}
        </div>
      )}
    </div>
  )
}