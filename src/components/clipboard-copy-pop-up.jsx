import React from 'react';
import CHECKED from '../assets/img/checked.png';

export default function ClipboardCopyPopUp() {
  const msg = 'Link copied to clipboard!';
  return (
    <div
      className="w-screen h-16 bg-gray-800 flex items-center justify-around
      fixed left-0 top-0 z-10"
    >
      <img
        className="h-10 object-contain"
        src={ CHECKED }
        alt="checked"
      />
      <span className="text-lg font-medium tracking-wider text-white">{ msg }</span>
    </div>
  );
}
