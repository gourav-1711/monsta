"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";


export default function ScrollTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      setShowScrollButton(window.scrollY > 200);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors animate-fade-in"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        )}
    </>
  );
}
