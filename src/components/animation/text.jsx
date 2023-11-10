import Image from 'next/image';
import textImage from '../../../public/text.png';
import { motion } from 'framer-motion';
const Text = () => {
    return (
      <motion.div
        className="text"
        initial={{ opacity: 0 ,x:-310}}
        animate={{ opacity: 1,x:-310 }} // aparece cuando el círculo amarillo se desvanece
        transition={{ duration: 0, delay: 4 }}
      >
        <Image src={textImage} alt="Mica Lab" width={'960px'} height={'103px'} />
      </motion.div>
    );
  };

export default Text;
