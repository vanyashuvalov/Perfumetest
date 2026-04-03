import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 inline-block text-sm tracking-widest text-amber-600"
            >
              NOTRE HISTOIRE
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 font-serif text-5xl leading-tight text-black md:text-6xl"
            >
              Создаём ароматы с 1925 года
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6 text-lg leading-relaxed text-gray-700"
            >
              <p>
                Наш дом парфюмерии сочетает вековые традиции с инновационными
                технологиями для создания неповторимых композиций.
              </p>
              <p>
                Каждый аромат — это история, рассказанная через тщательно
                отобранные ингредиенты со всего мира.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12"
            >
              <button className="group relative overflow-hidden rounded-full border-2 border-black px-10 py-4 text-sm font-medium tracking-wider transition-all hover:border-amber-600">
                <span className="relative z-10 transition-colors group-hover:text-white">
                  НАША ИСТОРИЯ
                </span>
                <div className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-amber-500 to-amber-700 transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            style={{ x }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1774682060992-4ae4fb77e73f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZnJhZ3JhbmNlJTIwc3ByYXklMjBtaXN0fGVufDF8fHx8MTc3NTIxNjE0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Perfume crafting"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating element */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -right-6 bottom-12 bg-amber-500 p-8 text-white shadow-2xl md:-right-12"
            >
              <div className="text-5xl font-bold">98+</div>
              <div className="text-sm tracking-wider">ЛЕТ ОПЫТА</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
