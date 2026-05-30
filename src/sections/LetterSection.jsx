import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";

export default function LetterSection() {

  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);

  return (
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-[#050505] px-4">

      {/* glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[140px]" />

      <div className="relative flex flex-col items-center justify-center">

        {/* CARTA */}

        <motion.div
          initial={{
            y: 120,
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            y: open ? -40 : 120,
            opacity: open ? 1 : 0,
            scale: open ? 1 : 0.3,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="flex  md:h-[25vw] w-auto md:mx-40  flex-col rounded-2xl bg-white p-6 text-black shadow-[0_20px_100px_rgba(0,0,0,0.5)] md:p-10"
        >

          {/* topo */}

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold md:text-4xl">
              Para mamãe ❤️
            </h2>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom(!zoom);
              }}
              className="rounded-full bg-black/10 p-3 transition hover:scale-110 hover:bg-black/20"
            >
              <Search size={20} />
            </button>

          </div>

          {/* texto */}

          <div
            className={`overflow-y-auto pr-3 text-neutral-700 transition-all duration-300 ${zoom
              ? "text-lg md:text-3xl leading-10"
              : "text-sm md:text-lg leading-7 md:leading-9"
              }`}
          >
            Se leveza e alegria pudessem ser traduzidos em um nome, certamente seria Katiane. Celebrar sua vida, não só para nós, mas para todos que tem essa incrível oportunidade de compartilhar os momentos ao seu lado, é uma dádiva, algo lindo de se experimentar. Ter você como mãe, para nós dois, seus filhos, representa mais do que pode imaginar. Representa um sorriso sempre no rosto, mesmo que tímido; representa uma boa auto estima; representa inteligência; representa calma; representa serenidade; representa lar. Você, além de mãe, é amiga, é conselheira, é força, é coragem. Você é um presente de Deus colocado na vida de todos nós, e como tal, nós pedimos a Ele que faça da sua vida ainda mais linda, cheirosa e harmoniosa. Que Deus complete de saúde cada cantinho da sua vida, saúde transbordante, saúde por completo. Que Ele te dê segurança e proteção em cada passo que dê, guardando seu caminho e aqueles que estão nele com você. Que Ele te permita viver todos os seus sonhos, te permita viver conquistas maravilhosas, e que Ele te permita ver que todas são possíveis. Que você viva uma vida linda todos os dias. E sempre que se sentir desamparada, sozinha ou com dúvida, primeiramente olhe para o céu, Deus estará lá olhando para sua linda criação, e nós também conseguiremos escutar essa conversa. Sua família te ama muito, Carlos, Marcus, Aron, Cida, Cleidson, Cleiciene, todos, sem exceção, e nos alegramos de comemorar seu dia. Um abraço enorme, lotado de amor de seus filhos. Feliz aniversário!!!!!
          </div>
        
        </motion.div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="mt-8 flex justify-center"
          >
            <p className="rounded-full bg-gradient-to-r from-pink-500/20 via-white/10 to-orange-500/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-pink-100 shadow-[0_20px_50px_rgba(255,125,160,0.15)] backdrop-blur-sm md:text-base">
              Tá achando que é só isso? Desce pra você ver o seu verdadeiro presente!
            </p>
          </motion.div>
        )}

        {/* ENVELOPE */}

        {!open && (
          <motion.div
            onClick={() => setOpen(true)}
            onHoverStart={() => setHoverOpen(true)}
            onHoverEnd={() => setHoverOpen(false)}
            animate={{
              y: hoverOpen ? -18 : 0,
              scale: open ? 0.9 : 1,
              opacity: open ? 0 : 1,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 z-20 mx-auto -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >

            {/* envelope */}

            <div className="relative h-[240px] w-[340px] overflow-hidden rounded-sm bg-white/90 shadow-[0_20px_80px_rgba(255,120,120,0.25)]">

              {/* tampa superior */}

              <motion.div
                animate={{
                  // levanta a tampa sem fazê-la sumir
                  rotateX: hoverOpen ? -80 : 0,
                  translateY: hoverOpen ? -8 : 0,
                  opacity: 1, // garante visibilidade
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className="absolute top-0 left-0 z-40 h-[140px] w-full"
              >
                <div
                  className="h-full w-full bg-[#ff7676]"
                  style={{
                    clipPath: "polygon(0 0, 50% 70%, 100% 0)",
                  }}
                />
              </motion.div>

              {/* lado esquerdo */}

              <div
                className="absolute bottom-0 left-0 z-20 h-full w-1/2 bg-[#ff9a8d]"
                style={{
                  clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0 100%)",
                }}
              />

              {/* lado direito */}

              <div
                className="absolute bottom-0 right-0 z-20 h-full w-1/2 bg-[#ff8c82]"
                style={{
                  clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
                }}
              />

              {/* parte inferior */}

              <div
                className="absolute bottom-0 left-0 z-10 h-[55%] w-full bg-[#f48d82]"
                style={{
                  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                }}
              />

              {/* coração */}

              <div className="absolute left-1/2 top-[58%] z-30 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 60 60"
                  className="fill-current text-pink-600"
                >
                  <path d="M30 55c-8-6-15-12-15-21 0-7 5-12 10-12 3 0 5 1 7 3 2-2 4-3 7-3 5 0 10 5 10 12 0 9-7 15-15 21z" />
                </svg>
              </div>
            </div>

            <p className={`mt-4 flex w-full justify-center text-center text-sm transition-colors ${hoverOpen ? "text-pink-400" : "text-neutral-400"}`}>
              clique na carta para abri-la
            </p>

          </motion.div>
        )}
      </div>

    </section>
  );
}