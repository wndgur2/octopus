import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/ROUTES'
import { useBackground } from '../context/BackgroundContext'
import { useAssets } from '../context/AssetContext'

import rank1 from '../assets/images/leaderboard/rank1.png'
import rank2 from '../assets/images/leaderboard/rank2.png'
import rank3 from '../assets/images/leaderboard/rank3.png'
import podium from '../assets/images/leaderboard/podium.png'

type Row = {
  id: string
  rank: number
  name: string
  score: number
  avatarKey?: string // AssetProvider에서 로드된 avatarAssets key (예: 'skin00')
}

const MOCK: Omit<Row, 'rank'>[] = [
  { id: '1', name: '한국주택금융공사차기사장', score: 5000, avatarKey: 'skin00' },
  { id: '2', name: '박경완레전드', score: 4800, avatarKey: 'skin01' },
  { id: '3', name: '이중혁혁중이', score: 4750, avatarKey: 'skin02' },
  { id: '4', name: '김률아는추위를많이타', score: 500, avatarKey: 'skin03' },
  { id: '5', name: '오렌지', score: 300, avatarKey: 'skin04' },
  { id: '6', name: 'Valorant', score: 200, avatarKey: 'skin05' },
  { id: '7', name: 'HideOnBush', score: 200, avatarKey: 'skin06' },
  { id: '8', name: 'wndgur2', score: 200, avatarKey: 'skin07' },
  { id: '9', name: 'wndgur2', score: 200, avatarKey: 'skin08' },
]

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function formatScore(n: number) {
  return n.toLocaleString()
}

function getRankIconSrc(rank: number) {
  if (rank === 1) return rank1
  if (rank === 2) return rank2
  if (rank === 3) return rank3
  return undefined // 4등 이하는 아이콘 없음
}

function RankIcon({ rank }: { rank: number }) {
  const src = getRankIconSrc(rank)
  if (!src) return <div className="w-9 h-9" />
  return <img src={src} alt={`rank-${rank}`} className="w-9 h-9 object-contain" />
}

function Avatar({ name, img }: { name: string; img?: HTMLImageElement }) {
  if (img) {
    return <img src={img.src} alt={name} className="w-7 h-7 rounded-full object-cover" />
  }
  return <div className="w-7 h-7 rounded-full bg-black/15" />
}

export default function LeaderboardPage() {
  const { playMusic } = useBackground()
  const { images, loading, progress } = useAssets()

  const [page, setPage] = useState(1)
  const totalPages = 3

  useEffect(() => {
    playMusic('lobby')
  }, [playMusic])

  const rows = useMemo<Row[]>(() => {
    const sorted = [...MOCK].sort((a, b) => b.score - a.score)
    return sorted.map((x, idx) => ({ ...x, rank: idx + 1 }))
  }, [])

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-2xl bg-white/60 border border-white/60 px-6 py-5 shadow-sm backdrop-blur-md">
          <div className="text-sm font-semibold text-black/70">Loading assets...</div>
          <div className="mt-2 text-xs text-black/50">{progress}%</div>
          <div className="mt-3 w-56 h-2 rounded-full bg-black/10 overflow-hidden">
            <div className="h-full bg-black/40" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    )
  }

  const bg = images['home-desktop'] ?? images['home-mobile']

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* 배경 */}
      {bg && (
        <img
          src={bg.src}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div
          className={cn(
            'w-full max-w-[540px]',
            'rounded-[28px]',
            'bg-white/35 backdrop-blur-md',
            'border border-white/45',
            'shadow-[0_18px_45px_rgba(0,0,0,0.18)]',
            'px-5 pt-4 pb-4',
            'flex flex-col',
            'max-h-[97vh]'
          )}
        >
          {/* 상단 타이틀 바 */}
          <div className="relative flex items-center justify-center">
            <div
              className={cn(
                'h-10 w-full max-w-[320px]',
                'rounded-full',
                'bg-white/55',
                'border border-white/60',
                'shadow-sm',
                'flex items-center justify-center gap-2'
              )}
            >
              <img src={podium} alt="leaderboard icon" className="w-5 h-5 object-contain" />
              <div className="text-[14px] font-semibold text-black/80">Leaderboard</div>
            </div>

            {/* 우측 닫기 버튼 */}
            <Link
              to={ROUTES.lobby}
              className={cn(
                'absolute right-0 top-0',
                'w-10 h-10 rounded-full',
                'bg-white/55 border border-white/60',
                'flex items-center justify-center',
                'text-black/70 font-semibold',
                'shadow-sm'
              )}
              aria-label="close"
            >
              ×
            </Link>
          </div>

          {/* 컬럼 헤더 */}
          <div className="mt-4 grid grid-cols-[110px_1fr_110px] gap-3">
            <div className="h-9 rounded-full bg-white/55 border border-white/60 flex items-center justify-center text-sm font-semibold text-black/70">
              rank
            </div>
            <div className="h-9 rounded-full bg-white/55 border border-white/60 flex items-center justify-center text-sm font-semibold text-black/70">
              player
            </div>
            <div className="h-9 rounded-full bg-white/55 border border-white/60 flex items-center justify-center text-sm font-semibold text-black/70">
              score
            </div>
          </div>

          {/* 리스트 */}
          <div className="mt-3 flex-1 pr-1">
            <div className="space-y-1">
              {rows.map((r) => {
                const avatarImg = r.avatarKey ? images[r.avatarKey] : undefined

                return (
                  <div
                    key={r.id}
                    className={cn(
                      'h-[48px] rounded-[18px]',
                      'bg-white/55 border border-white/65',
                      'shadow-[0_8px_18px_rgba(0,0,0,0.10)]',
                      'px-4 flex items-center'
                    )}
                  >
                    <div className="w-[110px] flex items-center gap-3">
                      <RankIcon rank={r.rank} />
                      <div className="text-sm font-semibold text-black/70">{r.rank}</div>
                    </div>

                    <div className="flex-1 flex items-center min-w-0">
                      <div
                        className={cn(
                          'h-8 px-3 rounded-full',
                          'bg-sky-500/90',
                          'border border-white/40',
                          'shadow-sm',
                          'flex items-center gap-2',
                          'min-w-0'
                        )}
                      >
                        <Avatar name={r.name} img={avatarImg} />
                        <div className="text-sm font-semibold text-white truncate">{r.name}</div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'w-[110px] pr-3 text-right text-sm tabular-nums',
                        r.rank <= 3 ? 'font-bold text-black' : 'font-medium text-black/80'
                      )}
                    >
                      {formatScore(r.score)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 페이지네이션 */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={cn(
                'w-10 h-10 rounded-full',
                'bg-white/45 border border-white/60',
                'shadow-sm',
                'text-black/70 font-semibold'
              )}
              aria-label="prev"
            >
              ‹
            </button>

            <div
              className={cn(
                'min-w-[90px] h-10 px-4 rounded-full',
                'bg-white/45 border border-white/60',
                'shadow-sm',
                'flex items-center justify-center',
                'text-sm font-semibold text-black/70'
              )}
            >
              {page} / {totalPages}
            </div>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={cn(
                'w-10 h-10 rounded-full',
                'bg-white/45 border border-white/60',
                'shadow-sm',
                'text-black/70 font-semibold'
              )}
              aria-label="next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
