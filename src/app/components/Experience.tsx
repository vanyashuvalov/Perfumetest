import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: '1925', label: 'Год основания' },
    { number: '200+', label: 'Уникальных ароматов' },
    { number: '50+', label: 'Стран мира' },
    { number: '100%', label: 'Ручная работа' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-black px-6 py-32 md:px-12">
      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-serif text-5xl text-white md:text-7xl">
            Наша История в Цифрах
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                className="mb-4"
              >
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text font-serif text-6xl font-bold text-transparent md:text-7xl">
                  {stat.number}
                </span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                className="text-lg tracking-wider text-gray-400"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mx-auto mt-20 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
      </div>
    </section>
  );
}
