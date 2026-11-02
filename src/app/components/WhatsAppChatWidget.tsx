const whatsappChatUrl =
  "https://wa.me/919971033924?text=Hi%2C%20I%27d%20like%20to%20know%20more.";

export function WhatsAppChatWidget() {
  return (
    <a
      href={whatsappChatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/95 py-2 pl-2 pr-5 shadow-[0_10px_35px_rgba(15,23,42,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(15,23,42,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/30 sm:bottom-7 sm:right-7"
    >
      <img
        src="/images/whatsapp-logo-clean.png"
        alt=""
        className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="text-sm font-bold text-slate-900 sm:text-base">Chat with us</span>
    </a>
  );
}
