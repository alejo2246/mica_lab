import Image from "next/image";
import leftCircleImage from "../../../public/leftCircle.png";
import { motion } from "framer-motion";
const LeftCircle = ({ start }) => {
  return (
    <motion.div
      className="circle"
      initial={{ opacity: 1, x: 450 }}
      animate={{ opacity: 1, x: start ? 110 : 110 }}
      transition={{ duration: 4 }}
    >
      <Image src={leftCircleImage} alt="Left Circle" width={214} height={440} />
    </motion.div>
  );
};

export default LeftCircle;
