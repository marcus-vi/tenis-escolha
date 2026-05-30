import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
const WEBHOOK = import.meta.env.VITE_DISCORD_WEBHOOK;

const shoes = [
    {
        id: 1,
        name: "Adidas Runfalcon 5",
        images: [
            "https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-5-feminino/51/FB9-8804-851/FB9-8804-851_zoom1.jpg?ts=1779770225&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-5-feminino/51/FB9-8804-851/FB9-8804-851_zoom2.jpg?ts=1779770225&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-5-feminino/51/FB9-8804-851/FB9-8804-851_zoom3.jpg?ts=1779770225&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-5-feminino/51/FB9-8804-851/FB9-8804-851_zoom5.jpg?ts=1779770225&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-5-feminino/51/FB9-8804-851/FB9-8804-851_zoom6.jpg?ts=1779770225&ims=1088x",
        ],
    },

    {
        id: 2,
        name: "Adidas Response Runner 2",
        images: [
            "https://static.clube.netshoes.com.br/produtos/tenis-adidas-response-runner-2/88/FBA-83CJ-288/FBA-83CJ-288_zoom1.jpg?ts=1779986629&ims=1088x",
            "https://static.clube.netshoes.com.br/produtos/tenis-adidas-response-runner-2/88/FBA-83CJ-288/FBA-83CJ-288_zoom2.jpg?ts=1779986629&ims=1088x",
            "https://static.clube.netshoes.com.br/produtos/tenis-adidas-response-runner-2/88/FBA-83CJ-288/FBA-83CJ-288_zoom3.jpg?ts=1779986629&ims=1088x",
            "https://static.clube.netshoes.com.br/produtos/tenis-adidas-response-runner-2/88/FBA-83CJ-288/FBA-83CJ-288_zoom4.jpg?ts=1779986629&ims=1088x",
            "https://static.clube.netshoes.com.br/produtos/tenis-adidas-response-runner-2/88/FBA-83CJ-288/FBA-83CJ-288_zoom5.jpg?ts=1779986629&ims=1088x",
        ],
    },

    {
        id: 3,
        name: "Fila Inclusion Feminino",
        images: [
            "https://static.netshoes.com.br/produtos/tenis-fila-inclusion-feminino/96/SFK-0176-196/SFK-0176-196_zoom1.jpg?ts=1779983173&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-fila-inclusion-feminino/96/SFK-0176-196/SFK-0176-196_zoom2.jpg?ts=1779983173&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-fila-inclusion-feminino/96/SFK-0176-196/SFK-0176-196_zoom3.jpg?ts=1779983173&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-fila-inclusion-feminino/96/SFK-0176-196/SFK-0176-196_zoom4.jpg?ts=1779983173&ims=1088x",
            "https://static.netshoes.com.br/produtos/tenis-fila-inclusion-feminino/96/SFK-0176-196/SFK-0176-196_zoom5.jpg?ts=1779983173&ims=1088x",
        ],
    },
];

export default function ShoesSection() {

    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    async function sendWebhook() {

        const shoe = shoes.find(
            (shoe) => shoe.id === selected
        );

        try {

            await fetch(WEBHOOK, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({

                    embeds: [
                        {
                            title: "🎁 Novo presente escolhido",

                            description:
                                `Tênis escolhido: **${shoe.name}**`,

                            color: 0xff4fa3,

                            image: {
                                url: shoe.images[0],
                            },

                            footer: {
                                text: "Site de presente",
                            },

                            timestamp: new Date(),
                        },
                    ],
                }),
            });

            toast.success("Escolha enviada com sucesso ❤️");

            setShowModal(false);

        } catch (error) {

            toast.error("Erro ao enviar escolha.");

        }
    }

    return (
        <section className="relative flex w-screen min-h-screen snap-start items-center justify-center overflow-hidden bg-[#050505] px-6 py-20">

            {/* glow */}

            <div className="absolute h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[160px]" />

            <div className="relative z-10 w-full mx-46">

                {/* título */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-16 text-center"
                >

                    <h2 className="text-4xl font-bold md:text-6xl">
                        Escolha seu presente 👟
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Escolha o tênis que você mais gostar
                    </p>

                </motion.div>

                {/* cards */}

                <div className="grid gap-16 md:grid-cols-3">

                    {shoes.map((shoe, index) => {

                        const active = selected === shoe.id;

                        return (
                            <motion.div
                                key={shoe.id}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.15,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                onClick={() => {
                                    setSelected(shoe.id);
                                    setCurrentImage(0);
                                    setShowModal(true);
                                }}
                                className={`group relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-100 ${active
                                        ? "border-pink-400 bg-white/10"
                                        : "border-white/10 bg-white/5"
                                    } backdrop-blur-xl`}
                            >

                                {/* imagem */}

                                <div className="overflow-hidden">

                                    <img
                                        src={shoe.images[0]}
                                        alt={shoe.name}
                                        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                </div>

                                {/* conteúdo */}

                                <div className="p-6">

                                    <h3 className="text-2xl font-semibold">
                                        {shoe.name}
                                    </h3>

                                    <p className="mt-2 text-gray-400">
                                        Clique para selecionar
                                    </p>

                                </div>

                                {/* glow */}

                                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                            </motion.div>
                        );
                    })}

                </div>

            </div>

            {/* modal */}

            {showModal && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
                >

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full mx-28 overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
                    >

                        <div className="grid md:grid-cols-2">

                            {/* imagem */}

                            <div className="relative h-[300px] overflow-hidden md:min-h-[60vh]">

                                <motion.img
                                    key={currentImage}
                                    initial={{ opacity: 0.4, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    src={
                                        shoes.find((shoe) => shoe.id === selected)
                                            ?.images[currentImage]
                                    }
                                    alt={
                                        shoes.find((shoe) => shoe.id === selected)?.name
                                    }
                                    className="h-full w-full object-cover"
                                />

                                {/* overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                {/* esquerda */}

                                <button
                                    onClick={() => {

                                        const shoe = shoes.find(
                                            (shoe) => shoe.id === selected
                                        );

                                        setCurrentImage((prev) =>
                                            prev === 0
                                                ? shoe.images.length - 1
                                                : prev - 1
                                        );
                                    }}
                                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 backdrop-blur-xl transition hover:scale-110"
                                >
                                    ←
                                </button>

                                {/* direita */}

                                <button
                                    onClick={() => {

                                        const shoe = shoes.find(
                                            (shoe) => shoe.id === selected
                                        );

                                        setCurrentImage((prev) =>
                                            prev === shoe.images.length - 1
                                                ? 0
                                                : prev + 1
                                        );
                                    }}
                                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 backdrop-blur-xl transition hover:scale-110"
                                >
                                    →
                                </button>

                                {/* indicadores */}

                                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">

                                    {shoes
                                        .find((shoe) => shoe.id === selected)
                                        ?.images.map((_, index) => (

                                            <div
                                                key={index}
                                                className={`h-2 rounded-full transition-all ${currentImage === index
                                                        ? "w-8 bg-white"
                                                        : "w-2 bg-white/40"
                                                    }`}
                                            />

                                        ))}

                                </div>

                            </div>

                            {/* conteúdo */}

                            <div className="flex flex-col justify-between p-8">

                                <div>

                                    <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
                                        Presente escolhido
                                    </p>

                                    <h3 className="mt-4 text-4xl font-bold leading-tight">
                                        {
                                            shoes.find((shoe) => shoe.id === selected)?.name
                                        }
                                    </h3>

                                    <p className="mt-6 text-gray-400">
                                        Tem certeza que deseja confirmar essa escolha?
                                    </p>

                                </div>

                                {/* botões */}

                                <div className="mt-10 flex gap-4">

                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 transition hover:bg-white/10 cursor-pointer"
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        onClick={sendWebhook}
                                        className="flex-1 rounded-2xl bg-pink-500 py-4 font-semibold transition hover:scale-105 hover:bg-pink-400 cursor-pointer"
                                    >
                                        Confirmar
                                    </button>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </section>
    );
}