import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  text: string;
  delay?: number;
}

const TypewriterText = ({ className, text, delay = 75 }: Props) => {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTyped('');
    setDone(false);
    let i = 0;
    const tick = window.setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(tick);
        setDone(true);
      }
    }, delay);
    return () => window.clearInterval(tick);
  }, [text, delay]);

  return (
    <span className={className}>
      {typed}
      <span aria-hidden="true" className={done ? 'animate-pulse' : ''}>_</span>
    </span>
  );
};

export default TypewriterText;
