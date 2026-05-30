import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import bg from "../assets/kati.mp4";

export default function HeroSection() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {

        const handleMouseMove = (e) => {

            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    const bgX = useTransform(mouseX, [0, 1], [-20, 20]);
    const bgY = useTransform(mouseY, [0, 1], [-20, 20]);

    return (
        <section className="relative h-screen snap-start overflow-hidden will-change-transform">

            {/* background */}

            <motion.video
                style={{
                    x: bgX,
                    y: bgY,
                }}
                src={bg}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-[-40px] object-cover bg-center scale-110 opacity-80"
            />

            {/* overlay */}

            <div className="absolute inset-0 bg-black/60" />

            {/* glow */}

            <motion.div
                style={{
                    x: useTransform(mouseX, [0, 1], [-40, 40]),
                    y: useTransform(mouseY, [0, 1], [-40, 40]),
                }}
                className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-[140px]"
            />

            {/* partículas */}

            <div className="absolute inset-0 overflow-hidden">

                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/40 blur-[2px]"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}

            </div>

            {/* conteúdo */}

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold md:text-7xl"
                >
                    Feliz Aniversário ❤️
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 max-w-xl text-lg text-gray-300"
                >
                    Preparei algo especial para você.
                </motion.p>

                <motion.button
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth",
                        });
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-10 rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/20"
                >
                    Continuar ↓
                </motion.button>

            </div>

        </section>
    );
}