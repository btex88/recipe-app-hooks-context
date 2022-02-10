import React from 'react';
import local from '../assets/helpers/local';

export default function ProfileEmail() {
  const user = local.get('user');
  return (
    <div
      className="w-full h-auto text-2xl font-medium tracking-wide flex items-center
      justify-center px-2"
    >
      { user ? user.email : null }
    </div>
  );
}
