import { motion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1];
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (<motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease }}>{children}</motion.div>);
}
export function Mask({ children, className = '' }) {
  return (<motion.div className={className} initial={{ clipPath: 'inset(0 0 100% 0)' }} whileInView={{ clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1.1, ease }}>{children}</motion.div>);
}
