import { useEffect, useRef, useState } from 'react';

/**
 * Fases de la máquina de estados de la animación:
 * - 'typing':   agrega un carácter por tick hasta completar currentWord
 * - 'deleting': borra un carácter por tick hasta dejar el texto vacío
 */
type Phase = 'typing' | 'deleting';

interface UseTypingTextOptions {
  words: string[];
  /** ms entre cada carácter al tipear (default 70) */
  typeSpeed?: number;
  /** ms entre cada carácter al borrar (default 40) */
  deleteSpeed?: number;
  /** ms de pausa con la palabra completa antes de borrar (default 1400) */
  holdTime?: number;
  /** si es false, la animación termina al completar la última palabra (default true) */
  loop?: boolean;
}

/**
 * Hook que implementa un efecto typewriter cíclico.
 *
 * Máquina de estados: typing → deleting → typing → ...
 * - En 'typing' agrega caracteres uno a uno cada `typeSpeed` ms.
 * - Al completar la palabra, espera `holdTime` ms y pasa a 'deleting'.
 * - En 'deleting' borra caracteres uno a uno cada `deleteSpeed` ms.
 * - Al vaciar el texto, avanza al siguiente índice de `words` y vuelve a 'typing'.
 * - Si `loop={false}`, al llegar a la última palabra se detiene sin borrar.
 */
export function useTypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  holdTime = 1400,
  loop = true,
}: UseTypingTextOptions) {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const [index, setIndex] = useState(0);

  // Ref para el setTimeout activo, permite limpiarlo en el cleanup del efecto
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentWord = words[index % words.length] ?? '';
  const isLastWord = loop ? false : index >= words.length - 1;

  useEffect(() => {
    // Si no hay palabra (array vacío), no hacer nada
    if (!currentWord) return;

    // Helper para limpiar el timeout activo al desmontar o re-ejecutar el efecto
    const clearTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    // ── Fase TYPING: agregar caracteres ────────────────────
    if (phase === 'typing') {
      // ¿Ya terminamos de tipear la palabra completa?
      if (text === currentWord) {
        // Esperamos `holdTime` ms y pasamos a borrar
        timeoutRef.current = setTimeout(() => setPhase('deleting'), holdTime);
        return clearTimer;
      }

      // Todavía faltan caracteres: agregamos el siguiente
      timeoutRef.current = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typeSpeed,
      );
      return clearTimer;
    }

    // ── Fase DELETING: borrar caracteres ───────────────────
    if (phase === 'deleting') {
      // ¿Ya borramos todo?
      if (text === '') {
        // Si es la última palabra y no loop, detener la animación
        if (isLastWord && !loop) return;
        // Avanzar a la siguiente palabra (cíclico) y volver a tipear
        setIndex((i) => (i + 1) % words.length);
        setPhase('typing');
        return;
      }

      // Todavía quedan caracteres: borramos el último
      timeoutRef.current = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deleteSpeed,
      );
      return clearTimer;
    }
  }, [
    text,
    phase,
    index,
    currentWord,
    typeSpeed,
    deleteSpeed,
    holdTime,
    loop,
    isLastWord,
    words.length,
  ]);

  return { text, phase, currentWord } as const;
}
