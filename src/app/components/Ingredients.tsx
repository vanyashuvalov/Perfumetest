import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Droplets, Flower2, Flame } from 'lucide-react';

const ingredients = [
  {
    icon: Flower2,
    name: 'Жасмин',
    description: 'Из садов Грасса',
    image: 'https://images.unsplash.com/photo-1525316885-69d120cf430b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwaW5ncmVkaWVudHMlMjBmbG93ZXJzJTIwbGF2ZW5kZXJ8ZW58MXx8fHwxNzc1MjE2MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Droplets,
    name: 'Уд',
    description: 'Редкая древесина',
    image: 'https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZ29sZHxlbnwxfHx8fDE3NzUxNDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Sparkles,
    name: 'Амбра',
    description: 'Океанское сокровище',
    image: 'https://images.unsplash.com/photo-1767379462101-b93554f3025c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjByb3NlJTIwcGV0YWxzfGVufDF8fHx8MTc3NTIxNjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Flame,
    name: 'Пряности',
    description: 'Экзотические специи',
    image: 'https://images.unsplash.com/photo-1770331168812-06a793129c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGJvdHRsZSUyMHdoaXRlfGVufDF8fHx8MTc3NTIxNjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Ingredients() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-zinc-900 px-6 py-32 md:px-12">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-amber-500 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-amber-500">
            PRÉCIEUX INGRÉDIENTS
          </span>
          <h2 className="mb-6 font-serif text-5xl text-white md:text-6xl">
            Драгоценные Ингредиенты
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Мы используем только самые редкие и качественные компоненты
            со всего мира
          </p>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm transition-all duration-500 hover:bg-zinc-800"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="h-full w-full object-cover transition-all duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="mb-4 inline-flex rounded-full bg-amber-500/20 p-3"
                  >
                    <Icon className="h-6 w-6 text-amber-400" />
                  </motion.div>
                  <h3 className="mb-2 font-serif text-2xl text-white">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-gray-400">{ingredient.description}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
