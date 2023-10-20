import Image from 'next/image';
import rightCircleImage from '../../../public/rightCircle.png';
import { motion } from 'framer-motion';
const RightCircle = () => {
    return (
      <motion.div
        className="circle"
        initial={{ opacity: 1, x: 450 }}
        animate={{ opacity: 1, x: 790 }} // ajusta el valor de x para separar el círculo
        transition={{ duration: 4 }}
      >
        <Image src={rightCircleImage} alt="Right Circle" width={214} height={440} />
      </motion.div>
    );
  };

export default RightCircle;
