import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const BUSINESS_HOURS = {
  open: 12, // 12 PM
  close: 23, // 11 PM
};

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  const phoneNumber = "919325875685";

  const message = isBusinessOpen
    ? "Hello Cobbler & Crew, I’d like to know more about your mojitos or place an order."
    : "Hello Cobbler & Crew, I’m reaching out after hours. Please get back to me when you’re open.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  /* 1. Visibility on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.25) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ----------------------------------
     2. Business hours logic
  ---------------------------------- */
  useEffect(() => {
    const checkBusinessHours = () => {
      const currentHour = new Date().getHours();
      setIsBusinessOpen(
        currentHour >= BUSINESS_HOURS.open && currentHour < BUSINESS_HOURS.close
      );
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp Chat"
        className="fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full shadow-xl
        bg-green-600 hover:bg-green-700
        transition-all duration-300"
      >
        {open ? (
          <IoClose className="text-white text-2xl" />
        ) : (
          <FaWhatsapp className="text-white text-2xl" />
        )}
      </button>

      {/* Popup */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-72
          animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div
            className="rounded-2xl bg-black
          shadow-2xl border border-[#0f1f17]"
          >
            {/* Header */}
            <div className="px-3 py-2 border-b border-[#0f1f17]">
              <h3 className="text-lg font-semibold tracking-wide">
                Cobbler & Crew
              </h3>

              {/* Business Hours */}
              <div className="text-xs text-green-300 flex items-center justify-between">
                <span>Hours: 12:00 PM – 11:55 PM</span>
                <span
                  className={`font-medium ${
                    isBusinessOpen ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isBusinessOpen ? "● Open Now" : "● Closed"}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-3 py-2  text-sm leading-relaxed">
              Planning a visit, event, or custom drink?
              <br />
              Chat directly with our crew on WhatsApp.
            </div>

            {/* CTA */}
            <div className="p-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-lg py-2.5
                bg-green-600 hover:bg-green-700
                text-white font-medium tracking-wide
                transition-colors"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
