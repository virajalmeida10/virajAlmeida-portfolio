const NODE_FILL = '#ffffff'
const NODE_STROKE = 'rgba(26, 22, 17, 0.16)'
const ACCENT_BAR = '#3b82f6'
const ARROW = '#1d4ed8'
const TITLE = '#1c1a17'
const SUB = '#57534a'

function Node({ x, y, w, h, title, sub, sub2 }) {
  const midY = y + h / 2
  const singleLine = !sub
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={NODE_FILL} stroke={NODE_STROKE} strokeWidth="1" />
      <rect x={x} y={y} width="3" height={h} rx="1.5" fill={ACCENT_BAR} />
      {singleLine ? (
        <text x={x + w / 2} y={midY + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill={TITLE}>
          {title}
        </text>
      ) : sub2 ? (
        <>
          <text x={x + 18} y={y + 26} fontSize="13.5" fontWeight="700" fill={TITLE}>{title}</text>
          <text x={x + 18} y={y + 44} fontSize="10.5" fill={SUB}>{sub}</text>
          <text x={x + 18} y={y + 62} fontSize="9.5" fill={SUB}>{sub2}</text>
        </>
      ) : (
        <>
          <text x={x + 18} y={y + h / 2 - 4} fontSize="13.5" fontWeight="700" fill={TITLE}>{title}</text>
          <text x={x + 18} y={y + h / 2 + 15} fontSize="10.5" fill={SUB}>{sub}</text>
        </>
      )}
    </g>
  )
}

function Arrow({ d, label, labelX, labelY }) {
  return (
    <g>
      <path d={d} stroke={ARROW} strokeWidth="1.5" fill="none" opacity="0.65" markerEnd="url(#stanza-arrow)" />
      {label && (
        <text x={labelX} y={labelY} fontSize="9.5" fill={ARROW} opacity="0.85" fontFamily="'Space Mono', monospace">
          {label}
        </text>
      )}
    </g>
  )
}

export default function StanzaArchitecture() {
  return (
    <svg viewBox="0 0 1160 480" role="img" aria-label="Stanza system architecture diagram">
      <defs>
        <marker id="stanza-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0.5 L7,4 L0,7.5 Z" fill={ARROW} opacity="0.8" />
        </marker>
      </defs>

      {/* Browser */}
      <Node x={480} y={16} w={200} h={40} title="Browser / Client" />
      <Arrow d="M580,56 L580,90" />

      {/* SPA */}
      <Node x={450} y={90} w={260} h={64} title="React + TypeScript SPA" sub="Vercel · Static Hosting" />
      <Arrow d="M580,154 L580,196" label="HTTPS + JWT (refresh cookie)" labelX={598} labelY={180} />

      {/* API hub */}
      <Node
        x={390}
        y={196}
        w={380}
        h={84}
        title="Spring Boot REST API"
        sub="Docker container · Render"
        sub2="JWT Auth · Booking Engine · Dynamic Pricing"
      />

      {/* Fan-out arrows */}
      <Arrow d="M460,280 C460,308 240,308 200,334" />
      <Arrow d="M580,280 L580,334" />
      <Arrow d="M700,280 C700,308 920,308 960,334" />

      {/* Downstream services */}
      <Node x={60} y={334} w={260} h={72} title="PostgreSQL" sub="Neon · Managed Postgres" />
      <Node x={450} y={334} w={260} h={72} title="Stripe" sub="Checkout · Webhooks" />
      <Node x={840} y={334} w={260} h={72} title="Anthropic Claude API" sub="Structured-Output Intent Extraction" />

      {/* Deploy strip */}
      <rect x={60} y={432} width={1040} height={34} rx={17} fill="rgba(59, 130, 246, 0.08)" stroke="rgba(59, 130, 246, 0.25)" />
      <text x={580} y={453} textAnchor="middle" fontSize="10.5" fill={ARROW} fontFamily="'Space Mono', monospace" letterSpacing="0.02em">
        Git-Based Auto-Deploy · Render (API) · Vercel (Frontend) · Neon (Database)
      </text>
    </svg>
  )
}
