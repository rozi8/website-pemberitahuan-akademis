import React, { useState, useEffect } from 'react';

export default function EditProfil() {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');

  useEffect(() => {
    // Ambil data dari localStorage
    const storedNim = localStorage.getItem('nim') || '';
    const storedNama = localStorage.getItem('nama') || '';
    setNim(storedNim);
    setNama(storedNama);
  }, []);

  const handleSave = () => {
    localStorage.setItem('nim', nim);
    localStorage.setItem('nama', nama);
    alert('Profil berhasil diperbarui!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Profil Anda</h2>
        <label className="block mb-2">NIM:</label>
        <input
          type="text"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label className="block mb-2">Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button
          onClick={handleSave}
          className="w-full bg-teal-700 text-white p-2 rounded hover:bg-teal-800"
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
