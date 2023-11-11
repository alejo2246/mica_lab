import Image from 'next/image';
import textImage from '../../../public/text.png';
import { motion } from 'framer-motion';
const Text = () => {
    return (
      <motion.div
        className="text"
        initial={{ opacity: 0 ,x:-140, y:210}}
        animate={{ opacity: 1,x:-140,y:210 }} // aparece cuando el círculo amarillo se desvanece
        transition={{ duration: 0, delay: 4 }}
      >
        <Image className="imageani5" src={textImage} alt="Mica Lab"/>
      </motion.div>
    );
  };

export default Text;
