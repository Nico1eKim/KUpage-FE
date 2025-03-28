import { useState, useEffect } from 'react';

type EasingFunction = (t: number) => number;

const easeOutQuad: EasingFunction = (t) => t * (2 - t);

interface CounterProps {
  end?: number;
  duration?: number;
}

const Counter = ({ end = 100, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easedPercentage = easeOutQuad(percentage);
      const currentCount = Math.floor(easedPercentage * end);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <div className="text-main font-700 text-48 w-56">{count}</div>;
};

export default Counter;
