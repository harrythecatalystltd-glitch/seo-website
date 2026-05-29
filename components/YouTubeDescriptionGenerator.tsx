'use client'
import { useState, useRef } from 'react'
import { generateDescription } from '@/lib/youtube-description'
import type { GeneratedDescription } from '@/lib/youtube-description'

/* ── Shared tokens ── */
const NAVY   = '#002B45'
const GOLD   = '#FFD700'
const RED    = '#ff4e4e'

/* ── YouTube icon ── */
const YouTubeIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
    <rect width="22" height="16" rx="4" fill={RED} />
    <path d="M9 4.5l6 3.5-6 3.5V4.5z" fill="#fff" />
  </svg>
)

/* ── Copy button ── */
function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={copy}
      title="Copy to clipboard"
      style={{
        background: copied ? 'rgba(255,215,0,0.15)' : 'rgba(255,255,255,0.07)',
        border: `1px solid ${copied ? GOLD : 'rgba(255,255,255,0.15)'}`,
        borderRadius: '8px',
        color: copied ? GOLD : 'rgba(255,255,255,0.6)',
        cursor: 'pointer',
        fontSize: '0.78rem',
        fontWeight: 700,
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.05em',
        padding: '6px 14px',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      {copied ? '✓ Copied' : `⎘ ${label}`}
    </button>
  )
}

/* ── Hashtag pills ── */
function HashtagPills({ hashtags }: { hashtags: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginTop: '8px' }}>
      {hashtags.map(tag => (
        <span key={tag} style={{
          background: 'rgba(255,78,78,0.12)',
          border: '1px solid rgba(255,78,78,0.3)',
          borderRadius: '20px',
          color: '#ff8080',
          fontSize: '0.78rem',
          fontWeight: 600,
          fontFamily: "'Montserrat', sans-serif",
          padding: '4px 12px',
        }}>
          {tag}
        </span>
      ))}
    </div>
  )
}

/* ── Above-fold preview ── */
function AboveFoldPreview({ text }: { text: string }) {
  const pct = Math.min(100, Math.round((text.length / 125) * 100))
  const colour = pct >= 90 ? '#4ade80' : pct >= 60 ? GOLD : '#ff8080'

  return (
    <div style={{
      background: 'rgba(0,0,0,0.25)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '10px',
      padding: '16px 20px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
      }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
          Search snippet preview
        </span>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", color: colour }}>
          {text.length}/125 chars
        </span>
      </div>
      {/* Progress bar */}
      <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', marginBottom: '12px' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: colour, borderRadius: '2px', transition: 'width 0.4s' }} />
      </div>
      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px', fontFamily: "'Montserrat', sans-serif" }}>
        What shows in YouTube search results before someone clicks your video
      </p>
      <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
        &ldquo;{text}&rdquo;
      </p>
    </div>
  )
}

/* ── Results ── */
function Results({ result }: { result: GeneratedDescription }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '20px' }}>

      {/* Above fold preview */}
      <AboveFoldPreview text={result.aboveFold} />

      {/* Full description */}
      <div style={{
        background: 'rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.5)', letterSpacing: '0.07em', textTransform: 'uppercase' as const }}>
            Full Description
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Montserrat', sans-serif" }}>
              {result.charCount.toLocaleString()} / 5,000 chars
            </span>
            <CopyButton text={result.full} label="Copy description" />
          </div>
        </div>
        <textarea
          readOnly
          value={result.full}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255,255,255,0.8)',
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '0.88rem',
            lineHeight: 1.7,
            outline: 'none',
            padding: '20px',
            resize: 'vertical' as const,
            width: '100%',
            minHeight: '340px',
            boxSizing: 'border-box' as const,
          }}
          onClick={e => (e.target as HTMLTextAreaElement).select()}
        />
      </div>

      {/* Hashtags */}
      {result.hashtags.length > 0 && (
        <div style={{
          background: 'rgba(0,0,0,0.2)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          padding: '16px 20px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
              Hashtags ({result.hashtags.length})
            </span>
            <CopyButton text={result.hashtags.join(' ')} label="Copy hashtags" />
          </div>
          <HashtagPills hashtags={result.hashtags} />
        </div>
      )}

      {/* Tips */}
      <div style={{
        background: 'rgba(255,215,0,0.04)',
        border: '1px solid rgba(255,215,0,0.12)',
        borderRadius: '12px',
        padding: '16px 20px',
      }}>
        <p style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", color: GOLD, letterSpacing: '0.06em', textTransform: 'uppercase' as const, margin: '0 0 10px' }}>
          💡 Before you upload
        </p>
        <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
          {[
            'YouTube reads your entire description for search ranking, not just the opening line. Keywords mentioned naturally throughout the full text all count.',
            'The first 125 characters are your search snippet. That is what people see in YouTube search results before clicking, so make sure your main topic is in there.',
            'Replace [Add your chapter timestamps here] with real chapter times. Chapters improve watch time and show up as sections under the video.',
            'YouTube recommends 3 to 5 hashtags. The first 3 show above your video title so put the most relevant ones first.',
            'Add any links you mention in the video to the links section before publishing.',
          ].map((tip, i) => (
            <li key={i} style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,215,0,0.15)',
        borderRadius: '14px',
        padding: '22px 24px',
        textAlign: 'center' as const,
      }}>
        <p style={{ margin: '0 0 14px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
          Want help building a YouTube and SEO strategy that actually brings in leads?
        </p>
        <a href="/" style={{
          background: GOLD,
          borderRadius: '8px',
          color: NAVY,
          display: 'inline-block',
          fontSize: '0.82rem',
          fontWeight: 800,
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '0.07em',
          padding: '11px 24px',
          textDecoration: 'none',
          textTransform: 'uppercase' as const,
        }}>
          Get a Free Audit
        </a>
      </div>
    </div>
  )
}

/* ── Main component ── */
export default function YouTubeDescriptionGenerator() {
  const [title, setTitle]       = useState('')
  const [tags, setTags]         = useState('')
  const [notes, setNotes]       = useState('')
  const [channelName, setChannel] = useState('')
  const [result, setResult]     = useState<GeneratedDescription | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const canGenerate = title.trim().length >= 5

  const handleGenerate = () => {
    if (!canGenerate) return
    const desc = generateDescription({ title, tags, notes, channelName })
    setResult(desc)
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 20px 80px' }}>

      {/* Form */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '28px 28px 24px',
        marginBottom: '32px',
      }}>

        {/* Title */}
        <label style={{ display: 'block', marginBottom: '18px' }}>
          <span style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Video title <span style={{ color: RED }}>*</span>
          </span>
          <input
            type="text"
            placeholder="e.g. How to get more leads as a small business in 2026"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleGenerate()}
            style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              color: '#fff',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1rem',
              outline: 'none',
              padding: '13px 16px',
              width: '100%',
              boxSizing: 'border-box' as const,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = GOLD)}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </label>

        {/* Tags */}
        <label style={{ display: 'block', marginBottom: '18px' }}>
          <span style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Tags / keywords <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400, fontStyle: 'italic' }}>optional, comma separated</span>
          </span>
          <input
            type="text"
            placeholder="e.g. lead generation, small business, get more clients, marketing"
            value={tags}
            onChange={e => setTags(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleGenerate()}
            style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              color: '#fff',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '0.95rem',
              outline: 'none',
              padding: '12px 16px',
              width: '100%',
              boxSizing: 'border-box' as const,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = GOLD)}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </label>

        {/* Notes */}
        <label style={{ display: 'block', marginBottom: '18px' }}>
          <span style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
            What does your video cover? <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400, fontStyle: 'italic' }}>optional</span>
          </span>
          <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Open Sans', sans-serif", marginBottom: '8px' }}>
            One point per line or comma separated. The more you add, the more specific the description.
          </span>
          <textarea
            placeholder={'The 3 tools I actually use\nWhy most people get this wrong\nMy step by step process\nCommon mistakes to avoid'}
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={4}
            style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              color: '#fff',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '0.92rem',
              lineHeight: 1.6,
              outline: 'none',
              padding: '12px 16px',
              resize: 'vertical' as const,
              width: '100%',
              boxSizing: 'border-box' as const,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = GOLD)}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </label>

        {/* Channel name */}
        <label style={{ display: 'block', marginBottom: '24px' }}>
          <span style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Channel name <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400, fontStyle: 'italic' }}>optional</span>
          </span>
          <input
            type="text"
            placeholder="e.g. The Catalyst Method"
            value={channelName}
            onChange={e => setChannel(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleGenerate()}
            style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              color: '#fff',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '0.95rem',
              outline: 'none',
              padding: '12px 16px',
              width: '100%',
              boxSizing: 'border-box' as const,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = GOLD)}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </label>

        {/* Button */}
        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          style={{
            background: canGenerate ? GOLD : 'rgba(255,215,0,0.25)',
            border: 'none',
            borderRadius: '10px',
            color: canGenerate ? NAVY : 'rgba(255,255,255,0.3)',
            cursor: canGenerate ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.07em',
            padding: '14px 28px',
            textTransform: 'uppercase' as const,
            transition: 'opacity 0.2s',
          }}
        >
          <YouTubeIcon />
          Generate description
        </button>
      </div>

      {/* Results */}
      {result && (
        <div ref={resultRef}>
          <Results result={result} />
        </div>
      )}
    </div>
  )
}
