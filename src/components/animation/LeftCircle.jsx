import Image from "next/image";
import leftCircleImage from "../../../public/leftCircle.png";
import { motion } from "framer-motion";
const LeftCircle = () => {
  return (
    <motion.div
      className="circle"
      initial={{ opacity: 1, x: 450 }}
      animate={{ opacity: 1, x: 110 }}
      transition={{ duration: 4 }}
    >
      <Image className="imageani23" src={leftCircleImage} alt="Left Circle" />
    </motion.div>
  );
};

export default LeftCircle;
