"use client";
import React, { useRef, useEffect, useState } from "react";
import Container from "../Common/Container";
import MainButton from "../button/MainButton";

const BusinessJourney = ({
  heading,
  imageSrc,
  paragraph1,
  paragraph2,
  button2Text,
  button2Url,
}) => {
  const buttonRef = useRef(null);
  const imageContainerRef = useRef(null);
  const rafRef = useRef(null);
  const lastWidthRef = useRef(100);

  const [imgWidth, setImgWidth] = useState(100); // in %

  useEffect(() => {
    const onScroll = () => {
      // throttle with rAF
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        if (!buttonRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();

        // Start when button's top reaches the top of viewport (buttonRect.top <= 0)
        // Then spread the zoom over triggerDistance px (here 60% of viewport height)
        const triggerDistance = window.innerHeight * 0.6;

        // buttonRect.top goes from positive -> 0 -> negative as user scrolls up.
        // We want progress 0 when buttonRect.top === 0, and 1 when buttonRect.top <= -triggerDistance
        const raw = -buttonRect.top; // positive once button passed the top
        const progress = Math.max(0, Math.min(raw / triggerDistance, 1));

        // Change the growth range if you want less dramatic zoom:
        // e.g. growthRange = 40 for 100 → 140%
        const growthRange = 100; // percent added to 100% (100 -> 160). reduce for subtler zoom.

        const newWidth = 100 + progress * growthRange;

        // Avoid re-rendering if width didn't change (small float tolerance)
        if (Math.abs(newWidth - lastWidthRef.current) > 0.25) {
          lastWidthRef.current = newWidth;
          setImgWidth(newWidth);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to set initial state
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="py-8 md:py-14">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="h-full">
            <h2 className="text-2xl mb-3 md:text-3xl main-text font-bold text-white">
              {heading}
            </h2>

            {/* Sticky container */}
            <div
              className="lg:sticky lg:top-24 overflow-hidden rounded-xl"
              ref={imageContainerRef}
              style={{
                width: `${imgWidth}%`,
                maxWidth: "100vw",
                transition: "width 0.18s linear",
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden">
                <video
                  src={"/assets/videos/service-adl-business.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (scrollable) */}
          <div className="space-y-8 flex flex-col items-center mt-10 w-full h-auto md:min-h-[240vh]">
            <p className="text-base md:text-xl max-w-sm">{paragraph1}</p>

            <p className="text-base md:text-xl max-w-sm">{paragraph2}</p>

            <div ref={buttonRef} className="pt-5">
              <MainButton text={button2Text} url={button2Url} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessJourney;
