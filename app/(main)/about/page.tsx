'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#f0ebe3] tracking-widest mb-6">
            ABOUT
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#c9a96e]/30" />
            <p className="text-[#666] text-xs tracking-widest">SINCE 2014</p>
            <div className="h-px w-16 bg-[#c9a96e]/30" />
          </div>
        </motion.div>

        {/* 스토리 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f0ebe3] font-light leading-relaxed mb-8">
            "Where Korean tradition meets contemporary cuisine."
          </p>
          <p className="text-[#666] text-sm tracking-wider leading-loose mb-6">
            Mingles was founded in 2014 by Chef Kang Min-goo, who sought to
            reinterpret the deep-rooted traditions of Korean cuisine through a
            modern, global lens. The name itself — a blend of "mingle" and the
            chef's own name — reflects the restaurant's philosophy: the
            harmonious intermingling of flavors, cultures, and techniques.
          </p>
          <p className="text-[#666] text-sm tracking-wider leading-loose">
            Located in the heart of Cheongdam-dong, Mingles has earned two
            Michelin stars and consistently ranks among Asia's 50 Best
            Restaurants. Every dish tells a story — of seasons, of memory, of a
            culture in quiet conversation with the world.
          </p>
        </motion.div>

        {/* 셰프 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-[#c9a96e]/10 pt-16 mb-20"
        >
          <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-8">
            The Chef
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden">
              <Image
                src="/chef.jpg"
                alt="Chef Kang Min-goo"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f0ebe3] mb-2">
                Kang Min-goo
              </p>
              <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-6">
                Executive Chef & Founder
              </p>
              <p className="text-[#666] text-sm tracking-wider leading-loose mb-4">
                Chef Kang trained at the Culinary Institute of America before
                honing his craft at acclaimed kitchens across New York, Spain,
                and Japan. Returning to Korea with a global perspective, he
                opened Mingles with a singular vision: to elevate Korean flavors
                to the world stage.
              </p>
              <p className="text-[#666] text-sm tracking-wider leading-loose">
                His cuisine is defined by restraint, precision, and an
                unwavering respect for ingredients — particularly the fermented
                and aged products that form the backbone of Korean culinary
                heritage.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 수상 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-[#c9a96e]/10 pt-16 mb-20"
        >
          <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-10">
            Recognition
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { award: 'Michelin', detail: 'Two Stars · 2016 — Present' },
              { award: "Asia's 50 Best", detail: 'Top 10 · 2017 — Present' },
              {
                award: "The World's 50 Best",
                detail: 'Listed · 2019 — Present',
              },
            ].map(item => (
              <div
                key={item.award}
                className="border-t border-[#c9a96e]/20 pt-6"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#f0ebe3] mb-2">
                  {item.award}
                </p>
                <p className="text-[#666] text-xs tracking-wider">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 하단 버튼 */}
        <div className="text-center border-t border-[#c9a96e]/10 pt-16">
          <a
            href="/reservations"
            className="inline-block border border-[#c9a96e] text-[#c9a96e] px-12 py-4 text-xs tracking-[0.4em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-500"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </main>
  )
}
