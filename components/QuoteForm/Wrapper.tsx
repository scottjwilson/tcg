import { motion } from "framer-motion";

interface WrapperProps {
  title: string;
  children: React.ReactNode;
}

const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }}>
      <div>
        <h2 className="text-center text-xl bg-gray-100 p-4 my-8 rounded-lg">
          {title}
        </h2>
      </div>
      <div className="">{children}</div>
    </motion.div>
  );
};
export default Wrapper;
