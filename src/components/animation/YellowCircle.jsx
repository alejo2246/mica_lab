import Image from 'next/image';
import yellowCircleImage from '../../../public/yellowCircle.png';
import { motion } from 'framer-motion';
const YellowCircle = () => {
    return (
      <motion.div
        className="circle"
        initial={{ opacity: 1, scale: 1,x:135 }}
        animate={{ opacity: 0, scale: 1 ,x:135}}
        transformOrigin="center"
        transition={{ duration: 4 }}
      >
        <Image src={yellowCircleImage} alt="Yellow Circle" width={206} height={213} />
      </motion.div>
    );
  };

export default YellowCircle;
