import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Homeafterlogin() {
  const nim = localStorage.getItem('nim') || 'Mahasiswa';
  const [date, setDate] = useState(new Date());
const [showDropdown, setShowDropdown] = useState(false);

const handleLogout = () => {
  localStorage.clear(); // atau hanya localStorage.removeItem('nim');
  window.location.href = "/"; // redirect ke halaman login/landing page
};

  return (
    <div className="min-h-screen bg-gray-1000 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-teal-100 px-6 py-4 flex justify-between items-center shadow relative">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img src="img/logo.png" alt="Educube Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation */}
      
        <nav className="flex items-center space-x-9">
                  <div className="relative">
                    <a href="Homeafterlogin">
                      <span className="bg-teal-700 text-white px-7 py-2 rounded-t-full rounded-b-lg shadow text-center">
                        Home
                      </span>
                    </a>
                  </div>
                  <a href="Dashboard" className="text-slate-800 font-medium hover:text-black">Dashboard</a>
                  <a href="#" className="text-slate-800 font-medium hover:text-black">My Class</a>
                </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <BellIcon className="h-6 w-6 text-slate-900" />
          <div className="relative">
  <UserCircleIcon 
    className="h-6 w-6 text-slate-900 cursor-pointer"
    onClick={() => setShowDropdown(!showDropdown)}
  />
  {showDropdown && (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
      <button 
        className="block w-full px-4 py-2 text-left text-sm text-white bg-teal-700 hover:bg-teal-800 rounded-t"
        onClick={() => window.location.href = "/editprofil"} // Ganti dengan rute edit profil
      >
        Edit Profil Anda
      </button>
      <button 
        className="block w-full px-4 py-2 text-left text-sm text-white bg-red-600 hover:bg-red-700 rounded-b"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  )}
</div>

        </div>
      </header>

      {/* Banner */}
      <div className="bg-white/90 w-full flex items-center justify-between px-8 py-6 shadow-md">
  {/* Logo dan Brand */}
  <div className="flex items-center space-x-4">
    <img src="/img/logo.png" alt="Educube Logo" className="h-14 w-auto" />
    <span className="text-3xl font-bold text-gray-800">Educube</span>
  </div>

  {/* Konten Teks */}
  <div className="text-right">
    <div className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded mb-2">
      Penjadwalan anda masih kurang tersusun rapih?
    </div>
    <p className="text-gray-700 text-lg mb-1">
      Ayo gunakan Educube aja untuk mempermudah penjadwalan mata kuliah anda!!!
    </p>
    <p className="text-gray-500 text-sm">
      08812-345-6789 | hello@educube.com | educube.com
    </p>
  </div>
</div>

      {/* Sapaan Pengguna */}
      <section className="bg-gray-300 text-gray-800 mx-6 mt-4 p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Halo, {nim}!</h2>
        <p className="text-sm mt-1">Silahkan memulai aktivitas anda, semangat!!</p>
      </section>

      {/* Main content */}
      <main className="p-6 flex flex-col lg:flex-row gap-6">
        {/* Pengumuman */}
        <section className="bg-white p-4 rounded shadow flex-1">
          <h3 className="text-lg font-semibold mb-2 bg-teal-700 text-white px-4 py-2 rounded w-fit">
            Pengumuman
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>21/04/2025, 12.00 WIB | Kelas Jaringan Komputer E081 akan segera dimulai.</li>
            <li>21/04/2025, 09.00 WIB | Kelas Jaringan Komputer E081 masih menunggu informasi kelas hari ini.</li>
            <li>21/04/2025, 08.00 WIB | Kelas Pemrograman Web D081 akan segera dimulai.</li>
            <li>20/04/2025, 20.32 WIB | Kelas Pemrograman Web D081 dilaksanakan online pada pukul 08.00 WIB.</li>
            <li>20/04/2025, 00.00 WIB | Tugas ETS Kelas Pemrograman Web D081 telah berakhir.</li>
            <li>19/04/2025, 22.00 WIB | Deadline Tugas ETS Kelas Pemrograman D081 2 jam lagi akan segera berakhir.</li>
          </ul>
        </section>

        {/* Kalender */}
        <section className="bg-white p-4 rounded shadow w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-2 text-center bg-teal-800 text-white p-2 rounded">
            April
          </h3>
          <Calendar
            onChange={setDate}
            value={date}
            className="mx-auto mb-4"
          />
          <button className="w-full bg-teal-900 text-white py-2 rounded mb-2 hover:bg-teal-800">
            Lihat My Classes
          </button>
          <button className="w-full bg-teal-900 text-white py-2 rounded hover:bg-teal-800">
            Lihat Dashboard
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-950 text-white text-center py-4">
        <p>Copyright © 2025 Team Educube</p>
        <p>www.educube.com</p>
      </footer>
    </div>
  );
} 