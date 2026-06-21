import { memo } from 'react';

import { useTypingText } from '@/hooks/useTypingText';

interface TypingTextProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
  loop?: boolean;
  className?: string;
}

export default memo(function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  holdTime = 1400,
  loop = true,
  className,
}: TypingTextProps) {
  const { text, currentWord } = useTypingText({
    words,
    typeSpeed,
    deleteSpeed,
    holdTime,
    loop,
  });

  if (!words.length) return null;

  return (
    <>
      <span className={className} aria-label={currentWord}>
        {text}
      </span>
      <span
        className="animate-blink animation-duration-[1.05s] animate-ease-in-out animate-iteration-count-infinite inline-block h-[1em] w-[.55ch] bg-current"
        aria-hidden="true"
      />
    </>
  );
});
