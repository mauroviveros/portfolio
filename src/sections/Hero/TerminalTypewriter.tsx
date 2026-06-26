import { memo, useEffect, useRef, useState } from 'react';

interface TerminalSegment {
  /** Texto del segmento */
  text: string;
  /** Clases Tailwind para colorear este segmento */
  className?: string;
  /** Pausa en ms DESPUÉS de escribir este segmento (antes de empezar el siguiente) */
  pauseAfter?: number;
}

interface TerminalTypewriterProps {
  /** Segmentos con colores individuales (alternativa a text) */
  segments?: TerminalSegment[];
  /** Texto plano sin colores (alternativa a segments) */
  text?: string;
  /** Clase por defecto cuando se usa text plano */
  textClassName?: string;
  /** ms entre cada carácter (default 20) */
  speed?: number;
  /** Clases extras para el <pre> */
  className?: string;
  /** Mostrar cursor blink al final (default true) */
  cursor?: boolean;
}

interface CharInfo {
  char: string;
  className: string;
}

/**
 * Aplana los segments/text en un array de caracteres con sus clases,
 * y construye un mapa de posición → pausa en ms.
 *
 * Ejemplo: si segments[0] tiene pauseAfter: 800 y mide 10 caracteres,
 * pauses.get(10) = 800, y al escribir el carácter en posición 10
 * (el primero del segmento siguiente) se esperarán 800ms.
 */
function buildChars(
  segments?: TerminalSegment[],
  text?: string,
  textClassName?: string,
): { chars: CharInfo[]; pauses: Map<number, number> } {
  const pauses = new Map<number, number>();
  let cursor = 0;

  if (segments && segments.length > 0) {
    const chars: CharInfo[] = segments.flatMap((seg) => {
      const next = cursor + seg.text.length;
      if (seg.pauseAfter) {
        pauses.set(next, seg.pauseAfter);
      }
      cursor = next;
      return seg.text.split('').map((char) => ({
        char,
        className: seg.className ?? '',
      }));
    });
    return { chars, pauses };
  }

  if (text) {
    return {
      chars: text.split('').map((char) => ({
        char,
        className: textClassName ?? '',
      })),
      pauses,
    };
  }

  return { chars: [], pauses };
}

export default memo(function TerminalTypewriter({
  segments,
  text,
  textClassName,
  speed = 20,
  className,
  cursor = true,
}: TerminalTypewriterProps) {
  const [pos, setPos] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { chars, pauses } = buildChars(segments, text, textClassName);
  const total = chars.length;

  useEffect(() => {
    if (pos >= total) return;

    // Si hay una pausa configurada para esta posición (primer carácter
    // de un segmento que le sigue a otro con pauseAfter), usamos ese
    // delay; si no, usamos speed.
    const delay = pauses.get(pos) ?? speed;

    timeoutRef.current = setTimeout(() => {
      setPos((p) => p + 1);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pos, speed, total, pauses]);

  if (total === 0) return null;

  return (
    <pre
      className={`m-0 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre-wrap ${className ?? ''}`}
    >
      {chars.slice(0, pos).map((c, i) => (
        <span key={i} className={c.className}>
          {c.char}
        </span>
      ))}
      {cursor && (
        <span
          className="animate-blink animation-duration-[1.05s] animate-ease-in-out animate-iteration-count-infinite inline-block h-[1em] w-[.55ch] bg-current align-text-bottom"
          aria-hidden="true"
        />
      )}
    </pre>
  );
});
