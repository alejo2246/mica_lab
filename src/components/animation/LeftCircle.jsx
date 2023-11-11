import Image from 'next/image';
import leftCircleImage from '../../../public/leftCircle.png';
import { motion } from 'framer-motion';
const LeftCircle = () => {
    return (
      <motion.div
        className="circle"
        initial={{ opacity: 1, x: 250 }}
        animate={{ opacity: 1, x: 70 }}
        transition={{ duration: 4 }}
      >
        <Image className='imageani23' src={leftCircleImage} alt="Left Circle" />
      </motion.div>
    );
  };

export default LeftCircle;
