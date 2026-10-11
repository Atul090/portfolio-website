/**
 * SystemDiagram — the signature visual.
 *
 * A schematic of the systems Atul works on: webhooks and client requests
 * entering through an API layer, asynchronous work on RabbitMQ consumed by
 * idempotent workers, and state in MongoDB and Elasticsearch.
 *
 * Packets travel along the paths *underneath* the nodes, so each node
 * appears to receive, hold and hand off the request. Animation is pure SMIL
 * (no JS on the main thread) and is removed entirely under
 * prefers-reduced-motion via the `.motion-only` utility.
 */

type Variant = "wide" | "compact";

type NodeSpec = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: boolean;
  ports?: { y: number; text: string }[];
};

type Flow = { path: string; dur: number; begin: number; tone: "mint" | "violet"; r?: number };

const MINT = "var(--color-mint)";
const VIOLET = "var(--color-violet)";

const WIDE = {
  viewBox: "0 0 640 444",
  columns: [
    { x: 0, text: "A · Sources" },
    { x: 192, text: "B · Ingress" },
    { x: 392, text: "C · Async & state" },
  ],
  nodes: [
    { x: 0, y: 96, w: 144, h: 46, label: "Shopify", sub: "webhooks · Admin API" },
    { x: 0, y: 236, w: 144, h: 46, label: "Clients", sub: "web · mobile · admin" },
    {
      x: 192,
      y: 48,
      w: 144,
      h: 352,
      label: "API layer",
      sub: "Node.js · Express",
      accent: true,
      ports: [
        { y: 119, text: "verify HMAC → queue" },
        { y: 259, text: "REST · GraphQL" },
        { y: 379, text: "search" },
      ],
    },
    { x: 392, y: 96, w: 144, h: 46, label: "RabbitMQ", sub: "retry · backoff · DLQ" },
    { x: 392, y: 180, w: 144, h: 46, label: "Workers", sub: "idempotent consumers" },
    { x: 392, y: 272, w: 144, h: 46, label: "MongoDB", sub: "system of record" },
    { x: 392, y: 356, w: 144, h: 46, label: "Elasticsearch", sub: "semantic search" },
  ] as NodeSpec[],
  edges: [
    "M144,119 H192",
    "M144,259 H192",
    "M336,119 H392",
    "M464,142 V180",
    "M464,226 V272",
    "M536,203 H576 V379 H536",
    "M336,259 H364 V295 H392",
    "M336,379 H392",
  ],
  flows: [
    { path: "M144,119 H464 V295", dur: 6, begin: 0, tone: "mint" },
    { path: "M144,119 H464 V295", dur: 6, begin: 3, tone: "mint" },
    { path: "M536,203 H576 V379 H536", dur: 3.4, begin: 1.4, tone: "mint", r: 2.4 },
    { path: "M144,259 H364 V295 H392", dur: 3.8, begin: 0.6, tone: "violet" },
    { path: "M144,259 H264 V379 H392", dur: 4.2, begin: 2.3, tone: "violet" },
  ] as Flow[],
  legendY: 432,
  rulerWidth: 640,
};

const COMPACT = {
  viewBox: "0 0 320 392",
  columns: [] as { x: number; text: string }[],
  nodes: [
    { x: 16, y: 16, w: 128, h: 40, label: "Shopify", sub: "webhooks" },
    { x: 176, y: 16, w: 128, h: 40, label: "Clients", sub: "web · mobile" },
    { x: 16, y: 96, w: 288, h: 48, label: "API layer", sub: "HMAC · validate · publish · REST · GraphQL", accent: true },
    { x: 16, y: 184, w: 128, h: 40, label: "RabbitMQ", sub: "retry · DLQ" },
    { x: 176, y: 184, w: 128, h: 40, label: "MongoDB", sub: "system of record" },
    { x: 16, y: 272, w: 128, h: 40, label: "Workers", sub: "idempotent" },
    { x: 176, y: 272, w: 128, h: 40, label: "Elasticsearch", sub: "semantic search" },
  ] as NodeSpec[],
  edges: ["M80,56 V96", "M240,56 V96", "M80,144 V184", "M240,144 V184", "M80,224 V272", "M144,282 H160 V204 H176", "M144,302 H176"],
  flows: [
    { path: "M80,56 V282 H160 V204 H176", dur: 6, begin: 0, tone: "mint" },
    { path: "M80,56 V282 H160 V204 H176", dur: 6, begin: 3, tone: "mint" },
    { path: "M240,56 V204", dur: 3.2, begin: 1, tone: "violet" },
  ] as Flow[],
  legendY: 372,
  rulerWidth: 320,
};

export function SystemDiagram({ variant = "wide", className = "" }: { variant?: Variant; className?: string }) {
  const spec = variant === "wide" ? WIDE : COMPACT;
  const id = `sd-${variant}`;

  return (
    <svg
      viewBox={spec.viewBox}
      className={`block h-auto w-full ${className}`}
      role="img"
      aria-label="System diagram: Shopify webhooks and client requests enter through a Node.js API layer. Events are published to RabbitMQ and consumed by idempotent workers that write to MongoDB and index into Elasticsearch. Clients also query MongoDB and Elasticsearch synchronously."
    >
      <defs>
        <marker
          id={`${id}-arrow`}
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L8,4 L0,8 z" fill="var(--color-ink-faint)" />
        </marker>
      </defs>

      {/* Ruler */}
      <g aria-hidden="true" stroke="var(--color-line)" strokeWidth="1">
        <line x1="0" y1="8.5" x2={spec.rulerWidth} y2="8.5" />
        {Array.from({ length: spec.rulerWidth / 40 + 1 }, (_, i) => (
          <line key={i} x1={i * 40 + 0.5} y1={i % 5 === 0 ? 2 : 5} x2={i * 40 + 0.5} y2="8.5" />
        ))}
      </g>

      {/* Column labels */}
      {spec.columns.map((c) => (
        <text key={c.text} x={c.x} y="30" className="fill-ink-muted font-mono" fontSize="10" letterSpacing="1.2" aria-hidden="true">
          {c.text.toUpperCase()}
        </text>
      ))}

      {/* Edges */}
      <g fill="none" stroke="var(--color-line-strong)" strokeWidth="1.2" markerEnd={`url(#${id}-arrow)`} aria-hidden="true">
        {spec.edges.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Packets — rendered before nodes so they pass underneath */}
      <g aria-hidden="true">
        {spec.flows.map((f, i) => (
          <Packet key={i} {...f} />
        ))}
      </g>

      {/* Nodes */}
      {spec.nodes.map((n) => (
        <Node key={n.label} {...n} compact={variant === "compact"} />
      ))}

      {/* Legend */}
      <g aria-hidden="true" className="font-mono" fontSize="10" letterSpacing="1">
        <line x1={variant === "wide" ? 0 : 16} y1={spec.legendY} x2={variant === "wide" ? 18 : 34} y2={spec.legendY} stroke={MINT} strokeWidth="1.5" />
        <text x={variant === "wide" ? 26 : 42} y={spec.legendY + 3.5} className="fill-ink-muted">
          ASYNC · EVENT-DRIVEN
        </text>
        <line x1={variant === "wide" ? 192 : 176} y1={spec.legendY} x2={variant === "wide" ? 210 : 194} y2={spec.legendY} stroke={VIOLET} strokeWidth="1.5" />
        <text x={variant === "wide" ? 218 : 202} y={spec.legendY + 3.5} className="fill-ink-muted">
          SYNC · REQUEST
        </text>
      </g>
    </svg>
  );
}

function Node({ x, y, w, h, label, sub, accent, ports, compact }: NodeSpec & { compact: boolean }) {
  const pad = 12;
  return (
    <g>
      <rect x={x + 0.5} y={y + 0.5} width={w - 1} height={h - 1} rx="3" fill="var(--color-surface)" stroke={accent ? "var(--color-line-strong)" : "var(--color-line)"} />
      {accent && <rect x={x} y={y + 8} width="2" height={h - 16} fill={MINT} />}
      <text
        x={x + pad}
        y={y + (compact ? 17 : 19)}
        className="fill-ink font-sans"
        fontSize={compact ? 12 : 13}
        fontWeight="500"
        letterSpacing="-0.1"
      >
        {label}
      </text>
      {sub && (
        <text x={x + pad} y={y + (compact ? 31 : 35)} className="fill-ink-muted font-mono" fontSize={compact ? 9.5 : 10}>
          {sub}
        </text>
      )}
      {ports?.map((p) => (
        <g key={p.text}>
          <rect x={x - 1} y={p.y - 3} width="6" height="6" fill="var(--color-bg)" stroke={MINT} strokeWidth="1" />
          <text x={x + pad} y={p.y + 3.5} className="fill-ink-soft font-mono" fontSize="10">
            {p.text}
          </text>
          <rect x={x + w - 5} y={p.y - 3} width="6" height="6" fill="var(--color-bg)" stroke="var(--color-ink-faint)" strokeWidth="1" />
        </g>
      ))}
    </g>
  );
}

function Packet({ path, dur, begin, tone, r = 3 }: Flow) {
  const color = tone === "mint" ? MINT : VIOLET;
  const d = `${dur}s`;
  const b = `${begin}s`;
  return (
    <g className="motion-only">
      <circle r={r * 2.4} fill={color} opacity="0">
        <animate attributeName="opacity" to="0.16" dur="0.01s" begin={b} fill="freeze" />
        <animateMotion dur={d} begin={b} repeatCount="indefinite" path={path} calcMode="linear" />
      </circle>
      <circle r={r} fill={color} opacity="0">
        <animate attributeName="opacity" to="1" dur="0.01s" begin={b} fill="freeze" />
        <animateMotion dur={d} begin={b} repeatCount="indefinite" path={path} calcMode="linear" />
      </circle>
    </g>
  );
}
