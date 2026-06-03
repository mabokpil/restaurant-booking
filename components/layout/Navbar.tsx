'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession() // 세션 확인

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#c9a96e]/10 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.3em] text-[#f0ebe3] hover:text-[#c9a96e] transition-colors"
        >
          MINGLES
        </Link>

        {/* 메뉴 */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            About
          </Link>
          <Link
            href="/reservations"
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            Reserve
          </Link>
          <Link
            href="/menu"
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            Contact
          </Link>

          {/* 로그인/로그아웃 버튼 */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-xs tracking-[0.2em] text-[#c9a96e] hover:text-[#f0ebe3] transition-colors uppercase"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
            >
              Sign In
            </button>
          )}
        </div>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block w-6 h-px bg-[#c9a96e] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#c9a96e] transition-all ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#c9a96e] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden border-t border-[#c9a96e]/10 px-6 py-6 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            About
          </Link>
          <Link
            href="/reservations"
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            Reserve
          </Link>
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase"
          >
            Contact
          </Link>

          {/* 모바일 로그인/로그아웃 */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-xs tracking-[0.2em] text-[#c9a96e] uppercase text-left"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="text-xs tracking-[0.2em] text-[#888] hover:text-[#c9a96e] transition-colors uppercase text-left"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  )
}
