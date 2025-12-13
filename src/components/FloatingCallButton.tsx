export default function FloatingCallButton() {
  return (
    <a
      href="tel:010-6753-8985"
      className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="전화 연결"
    >
      <i className="ri-phone-fill text-3xl"></i>
    </a>
  );
}
