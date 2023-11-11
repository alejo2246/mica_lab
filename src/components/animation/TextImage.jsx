import Image from 'next/image';
import textImage from '../../../public/textImage.png';
import { motion } from 'framer-motion';
const TextImage = () => {
    return (
      <motion.div
        className="text-image"
        initial={{ opacity: 0 ,x:-190}}
        animate={{ opacity: 1,x:-190 }} 
        transition={{ duration: 0, delay: 4 }}
      >
        <Image className='imageani4' src={textImage} alt="Mica Lab"  />
      </motion.div>
    );
  };

export default TextImage;
