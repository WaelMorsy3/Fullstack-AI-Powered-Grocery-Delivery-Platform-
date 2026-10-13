"use client";

import { FiX } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import GroceryAssistantInput from "./GroceryAssistantInput";
import { useState } from "react";

interface GroceryAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GroceryAssistant({
  isOpen,
  onClose,
}: GroceryAssistantProps) {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bg-white right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-card shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F7EF] text-primary">
              <LuSparkles size={18}  />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-text">
                AI Grocery Assistant
              </h2>

              <p className="text-xs text-muted">
                Your smart shopping assistant
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-background hover:text-text"
            aria-label="Close AI assistant"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content */}
       <div className="flex-1 overflow-y-auto p-5">
  <div className="flex h-full flex-col">
    <div>
      <h3 className="text-lg font-semibold text-text">
        What are you cooking today?
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted">
        Tell me what you want to cook and I&apos;ll find the groceries you
        need from our store.
      </p>
    </div>

    <div className="mt-6">
      <GroceryAssistantInput
        onSearch={(prompt) => {
          console.log(prompt);
        }}
        isLoading={isLoading}
      />
    </div>
  </div>
</div>
      </div>
    </>
  );
}