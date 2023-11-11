import Image from 'next/image';
import yellowCircleImage from '../../../public/yellowCircle.png';
import { motion } from 'framer-motion';
const YellowCircle = () => {
    return (
      <motion.div
        className="circle"
        initial={{ opacity: 1, scale: 1,x:46 }}
        animate={{ opacity: 0, scale: 1 ,x:46}}
        transformorigin="center"
        transition={{ duration: 4 }}
      >
        <Image className='imageani1' src={yellowCircleImage} alt="Yellow Circle"/>
      </motion.div>
    );
  };

export default YellowCircle;
