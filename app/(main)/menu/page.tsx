'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const COURSES = [
  {
    no: '01',
    title: 'Amuse-Bouche',
    base: {
      name: 'Seasonal Bites',
      desc: 'Three bites to open the palate · house ferments · wild herbs',
      image:
        'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800&q=80',
    },
  },
  {
    no: '02',
    title: 'Cold Appetizer',
    base: {
      name: 'Jeju Abalone',
      desc: 'Thinly sliced abalone · gochujang emulsion · sea herbs',
      image:
        'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&q=80',
    },
    upgrade: {
      name: 'Jeju Abalone + Sea Urchin',
      desc: 'Premium uni from Hokkaido · abalone · caviar',
    },
  },
  {
    no: '03',
    title: 'Warm Appetizer',
    base: {
      name: 'Slow-Cooked Egg',
      desc: '63° egg · doenjang broth · crispy rice · spring onion oil',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80',
    },
    upgrade: {
      name: 'Egg & Black Truffle',
      desc: 'Shaved Périgord truffle · truffle cream · aged soy',
    },
  },
  {
    no: '04',
    title: 'Fish',
    base: {
      name: 'Korean Sea Bass',
      desc: 'Pan-roasted sea bass · perilla oil · fermented soy · chrysanthemum',
      image:
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    },
    upgrade: {
      name: 'Turbot',
      desc: 'Wild-caught turbot · beurre blanc · caviar · sea vegetables',
    },
  },
  {
    no: '05',
    title: 'Intermezzo',
    base: {
      name: 'Yuzu Sorbet',
      desc: 'House-made yuzu · ginger · chrysanthemum granita',
      image:
        'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&q=80',
    },
  },
  {
    no: '06',
    title: 'Meat',
    base: {
      name: 'Hanwoo Beef',
      desc: '1++ grade sirloin · aged kimchi jus · pine mushroom · seasonal greens',
      image:
        'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
    },
    upgrade: {
      name: 'A5 Wagyu',
      desc: 'Japanese A5 wagyu · bone marrow · truffle · fermented black garlic',
    },
  },
  {
    no: '07',
    title: 'Pre-Dessert',
    base: {
      name: 'Nurungji Ice Cream',
      desc: 'Scorched rice ice cream · caramel · toasted sesame · honey',
      image:
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
    },
  },
  {
    no: '08',
    title: 'Dessert',
    base: {
      name: 'Omija',
      desc: 'Five-flavor berry · wild berry compote · honey cream · edible flowers',
      image:
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    },
    upgrade: {
      name: 'Cheese Course',
      desc: 'Selection of aged Korean & European cheeses · house preserves · crackers',
    },
  },
  {
    no: '09',
    title: 'Petit Fours',
    base: {
      name: 'House Confections',
      desc: 'Seasonal sweets · Korean teas · chocolate · macarons',
      image:
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
    },
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">
            2026 Spring · Summer
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#f0ebe3] tracking-widest mb-6">
            TASTING MENU
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c9a96e]/30" />
            <p className="text-[#666] text-xs tracking-widest">9 COURSES</p>
            <div className="h-px w-16 bg-[#c9a96e]/30" />
          </div>
          <p className="text-[#555] text-xs tracking-wider max-w-md mx-auto leading-relaxed">
            Our tasting menu celebrates the seasons through a contemporary
            Korean lens. Each course may be enhanced with optional upgrades.
          </p>
        </motion.div>

        {/* 코스 */}
        <div className="flex flex-col gap-24">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
            >
              {/* 이미지 */}
              <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden">
                <Image
                  src={course.base.image}
                  alt={course.base.name}
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20" />
              </div>

              {/* 텍스트 */}
              <div className="w-full md:w-1/2">
                <p className="text-[#c9a96e]/40 font-[family-name:var(--font-cormorant)] text-sm tracking-widest mb-3">
                  {course.no}
                </p>
                <p className="text-[#666] text-xs tracking-[0.3em] uppercase mb-4">
                  {course.title}
                </p>
                <div className="mb-6">
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f0ebe3] mb-2">
                    {course.base.name}
                  </p>
                  <p className="text-[#666] text-xs tracking-wider leading-relaxed">
                    {course.base.desc}
                  </p>
                </div>
                {course.upgrade && (
                  <div className="border-l-2 border-[#c9a96e]/30 pl-4">
                    <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-2">
                      Optional Upgrade
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#f0ebe3]/80 mb-1">
                      {course.upgrade.name}
                    </p>
                    <p className="text-[#555] text-xs tracking-wider leading-relaxed">
                      {course.upgrade.desc}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 */}
        <div className="mt-24 text-center border-t border-[#c9a96e]/10 pt-16">
          <p className="text-[#555] text-xs tracking-widest uppercase mb-6">
            Wine pairing · Beverage pairing · Sake pairing available upon
            request
          </p>

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
