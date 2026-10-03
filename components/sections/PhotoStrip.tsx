import Image from "next/image";

const photos = ["coastal.jpg", "top-2-2.jpg", "bottom-1-3.jpg", "restaurant.jpg", "bottom-2-6.jpg"];
export function PhotoStrip() {
  return <div className="grid grid-cols-5 border-y border-white/10">{photos.map((photo, i) => <div key={photo} className="relative aspect-square overflow-hidden"><Image src={`/assets/gallery/${photo}`} alt="" fill sizes="20vw" className="object-cover transition duration-700 hover:scale-105" priority={i < 2} /></div>)}</div>;
}
