import Profile from './Profile'

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function getRankIconSrc(rank: number, rank1: string, rank2: string, rank3: string) {
  if (rank === 1) return rank1
  if (rank === 2) return rank2
  if (rank === 3) return rank3
  return undefined
}

type Props = {
  id: string
  rank: number
  name: string
  scoreText: string
  avatarImg?: HTMLImageElement
  rank1Src: string
  rank2Src: string
  rank3Src: string
}

export default function RankListItem({
  id,
  rank,
  name,
  scoreText,
  avatarImg,
  rank1Src,
  rank2Src,
  rank3Src,
}: Props) {
  const iconSrc = getRankIconSrc(rank, rank1Src, rank2Src, rank3Src)

  return (
    <div
      key={id}
      className={cn(
        'h-[48px] rounded-[18px]',
        'bg-white/55 border border-white/65',
        'shadow-[0_8px_18px_rgba(0,0,0,0.10)]',
        'px-4 flex items-center'
      )}
    >
      {/* 순위 */}
      <div className="w-[110px] flex items-center gap-3">
        {iconSrc ? (
          <img src={iconSrc} alt={`rank-${rank}`} className="w-9 h-9 object-contain" />
        ) : (
          <div className="w-9 h-9" />
        )}
        <div className="text-sm font-semibold text-black/70">{rank}</div>
      </div>

      {/* 플레이어 */}
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
          <Profile name={name} img={avatarImg} />
          <div className="text-sm font-semibold text-white truncate">{name}</div>
        </div>
      </div>

      {/* 점수 */}
      <div
        className=
          'w-[110px] pr-2 text-right text-sm tabular-nums font-bold text-black'
      >
        {scoreText}
      </div>
    </div>
  )
}
