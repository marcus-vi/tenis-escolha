import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "./sections/HeroSection";
import LetterSection from "./sections/LetterSection";
import ShoesSection from "./sections/ShoesSection";

export default function App() {

  const [openGift, setOpenGift] = useState(false);
  const [opening, setOpening] = useState(false);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">

      <HeroSection />

      <motion.div
        initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <LetterSection />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        className="flex h-screen snap-start items-center justify-center bg-neutral-900 text-5xl"
      >

        <section className="relative flex min-h-screen w-screen snap-start items-center justify-center overflow-hidden bg-[#050505]">

          {/* glow */}

          <div className="absolute h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[160px]" />

          {/* explosão */}

          <AnimatePresence>

            {opening && !openGift && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center overflow-hidden"
              >

                {/* flash */}

                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    scale: 8,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                  }}
                  className="absolute h-40 w-40 rounded-full bg-pink-400 blur-3xl"
                />

                {/* luz */}

                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    scale: 5,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="absolute h-20 w-20 rounded-full bg-white blur-2xl"
                />

                {/* partículas */}

                {[...Array(20)].map((_, i) => (

                  <motion.div
                    key={i}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 1200,
                      y: (Math.random() - 0.5) * 1200,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: 1.6,
                      ease: "easeOut",
                    }}
                    className="absolute h-4 w-4 rounded-full bg-pink-300 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  />

                ))}

              </motion.div>

            )}

          </AnimatePresence>

          <AnimatePresence mode="wait">

            <div className="absolute inset-0 flex items-center justify-center">
              {/* shoes preload */}

              <motion.div
                animate={{
                  opacity: openGift ? 1 : 0,
                  scale: openGift ? 1 : 0.96,
                  pointerEvents: openGift ? "auto" : "none",
                  filter: openGift ? "blur(0px)" : "blur(10px)",
                }}
                transition={{
                  duration: 0.8,
                }}
                className="absolute inset-0 z-20 overflow-hidden"
              >
                <ShoesSection />
              </motion.div>

              {/* presente */}

              {!openGift && (

                <motion.div
                  key="gift"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: opening ? 0 : 1,
                    scale: opening ? 1.4 : 1,
                    rotate: opening ? 12 : 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{ duration: 0.8 }}
                  onClick={() => {

                    if (opening) return;

                    setOpening(true);

                    setTimeout(() => {
                      setOpenGift(true);
                    }, 1800);
                  }}
                  className="relative z-10 flex cursor-pointer flex-col items-center justify-center"
                >

                  {/* caixa */}

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[40px] bg-gradient-to-br from-pink-500 to-pink-700 shadow-[0_20px_80px_rgba(236,72,153,0.4)]"
                  >

                    {/* fita vertical */}

                    <div className="absolute h-full w-10 bg-pink-200/80" />

                    {/* fita horizontal */}

                    <div className="absolute h-10 w-full bg-pink-200/80" />

                    {/* laço */}

                    <div className="absolute -top-10 flex">

                      <div className="h-16 w-16 rounded-full border-[14px] border-pink-200" />

                      <div className="-ml-4 h-16 w-16 rounded-full border-[14px] border-pink-200" />

                    </div>

                  </motion.div>

                  <motion.p
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="mt-10 text-center text-lg text-gray-300"
                  >
                    Clique para abrir seu presente ✨
                  </motion.p>

                </motion.div>

              )}
            </div>

          </AnimatePresence>

        </section>

      </motion.section>

    </main>
  );
}