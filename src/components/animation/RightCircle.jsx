import Image from 'next/image';
import rightCircleImage from '../../../public/rightCircle.png';
import { motion } from 'framer-motion';
const RightCircle = () => {
    return (
      <motion.div
        className="circle"
        initial={{ opacity: 1, x: 250 }}
        animate={{ opacity: 1, x: 420 }} // ajusta el valor de x para separar el círculo
        transition={{ duration: 4 }}
      >
        <Image className='imageani23'src={rightCircleImage} alt="Right Circle" />
      </motion.div>
    );
  };

export default RightCircle;
