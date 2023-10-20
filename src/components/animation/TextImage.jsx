import Image from 'next/image';
import textImage from '../../../public/textImage.png';
import { motion } from 'framer-motion';
const TextImage = () => {
    return (
      <motion.div
        className="text-image"
        initial={{ opacity: 0 ,x:-310}}
        animate={{ opacity: 1,x:-310 }} // aparece cuando el círculo amarillo se desvanece
        transition={{ duration: 0, delay: 4 }}
      >
        <Image src={textImage} alt="Mica Lab" width={700} height={75} />
      </motion.div>
    );
  };

export default TextImage;
