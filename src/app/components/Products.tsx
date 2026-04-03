import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'NUIT DORÉE',
    category: 'Eau de Parfum',
    image: 'https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZ29sZHxlbnwxfHx8fDE3NzUxNDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    notes: 'Amber, Vanilla, Oud',
  },
  {
    id: 2,
    name: 'BLANC ESSENCE',
    category: 'Eau de Toilette',
    image: 'https://images.unsplash.com/photo-1770331168812-06a793129c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGJvdHRsZSUyMHdoaXRlfGVufDF8fHx8MTc3NTIxNjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    notes: 'Jasmine, Bergamot, Musk',
  },
  {
    id: 3,
    name: 'ROSE MYSTIQUE',
    category: 'Parfum',
    image: 'https://images.unsplash.com/photo-1767379462101-b93554f3025c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjByb3NlJTIwcGV0YWxzfGVufDF8fHx8MTc3NTIxNjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    notes: 'Rose, Peony, Sandalwood',
  },
];

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative bg-zinc-950 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-amber-500">
            SIGNATURE COLLECTION
          </span>
          <h2 className="font-serif text-5xl text-white md:text-6xl">
            Наша Коллекция
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-pointer"
            >
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-lg bg-zinc-900">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  animate={{
                    scale: hoveredId === product.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === product.id ? 1 : 0,
                    y: hoveredId === product.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <button className="w-full rounded-full bg-white py-3 text-sm font-medium tracking-wider text-black transition-all hover:bg-amber-400">
                    УЗНАТЬ БОЛЬШЕ
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                <p className="mb-2 text-sm tracking-wider text-amber-500">
                  {product.category}
                </p>
                <h3 className="mb-3 font-serif text-2xl text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400">{product.notes}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
