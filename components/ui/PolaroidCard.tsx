"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = { src: string; title: string; text: string; rotate?: number };

export function PolaroidCard({ src, title, text, rotate = 0 }: Props) {
  return (
    <motion.article
      className="overflow-hidden rounded-sm bg-[#f2d5c7] text-[#3b1e19] shadow-2xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.035, rotate: 0, y: -5 }}
      transition={{ duration: .45 }}
      style={{ rotate }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={src} alt="" fill sizes="(max-width: 700px) 45vw, 18vw" className="object-cover" />
      </div>
      <div className="px-3 py-3">
        <h3 className="text-sm font-semibold uppercase tracking-[.12em]">{title}</h3>
        <p className="mt-1 text-xs leading-5 opacity-75">{text}</p>
      </div>
    </motion.article>
  );
}
