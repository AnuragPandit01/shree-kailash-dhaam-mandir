import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);

        setTimeout(() => {
          setIsVisible(false);
        }, 350);
      }

      setProgress(currentProgress);
    }, 90);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-maroon)] transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xs px-6 text-center">

        {/* Logo */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-cream)] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
          <img
            src="/images/logo/logo.png"
            alt="श्री कैलाश धाम मंदिर"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Temple Name */}
        <h1 className="mt-6 text-xl font-bold text-[var(--color-cream)] sm:text-2xl">
          दिव्य ज्योति लिंगेश्वर पंचतल महादेव मन्दिर
        </h1>

        <p className="mt-2 text-sm text-white/60">
          दौना, जसरा
        </p>

        {/* Progress */}
        <div className="mt-8">
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[var(--color-gold)] transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-white/45">
              दर्शन की तैयारी हो रही है...
            </span>

            <span className="font-semibold text-[var(--color-gold)]">
              {progress}%
            </span>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[var(--color-gold)]/40" />

          <span className="text-sm text-[var(--color-gold)]">
            ॐ
          </span>

          <span className="h-px w-8 bg-[var(--color-gold)]/40" />
        </div>
      </div>
    </div>
  );
}

export default Loader;