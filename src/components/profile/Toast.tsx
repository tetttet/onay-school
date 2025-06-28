import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export interface ToastMessage {
  id: string;
  type: "success" | "error";
  text: string;
}

interface ToastProps {
  messages: ToastMessage[];
  onRemove: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ messages, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-2 rounded shadow-lg text-white ${
              msg.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{msg.text}</span>
              <button onClick={() => onRemove(msg.id)} className="ml-2 font-bold">
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
