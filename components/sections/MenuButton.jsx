import React from "react";

export default function MenuButton({ onClick, menuLogo }) {
    return (
    <button
        onClick={onClick}
        className="fixed top-4 right-4 z-50 rounded-full shadow-lg overflow-hidden"
        aria-label="Open menu"
        title="Menu"
      >
        <div className="w-12 h-12 bg-orange-600 flex items-center justify-center">
          {menuLogo ? (
            <img
              src={menuLogo}
              alt="Menu"
              className="w-12 h-12 object-cover"
            />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </div>
      </button>
      );
}