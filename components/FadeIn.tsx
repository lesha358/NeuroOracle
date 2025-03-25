import { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="opacity-0 translate-y-4 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
}; 