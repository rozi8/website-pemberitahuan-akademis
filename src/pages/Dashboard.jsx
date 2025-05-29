import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import '../styles/calender.css';

export default function Dashboard() {
  const nim = localStorage.getItem('nim') || 'Mahasiswa';
  const [date, setDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const assignments = [
    { time: "00.00", title: "Pengumpulan Tugas ETS", desc: "Pemrograman Berbasis Objek E081" },
    { time: "00.00", title: "Pengumpulan Tugas Games", desc: "Pemrograman Berbasis Objek E081" },
  ];

  const files = {
    "Kamis, 24 April 2025": [
      { time: "00.00", title: "Materi Bootstrap", type: "PDF", desc: "Pemrograman Web D081" },
      { time: "00.00", title: "Materi Javascript", type: "PDF", desc: "Pemrograman Web D081" },
    ],
    "Jumat, 25 April 2025": [
      { time: "00.00", title: "Aturan Tugas ETS", type: "PDF", desc: "Pemrograman Berbasis Objek E081" },
      { time: "00.00", title: "Pembahasan Games", type: "PDF", desc: "Pemrograman Berbasis Objek E081" },
    ],
  };

  const eventDates = {
    "2025-04-01": { label: "Kelas KCB", color: "bg-green-200" },
    "2025-04-04": { label: "Kelas PBO", color: "bg-red-200" },
    "2025-04-08": { label: "Kelas KCB", color: "bg-yellow-200" },
    "2025-04-14": { label: "Kelas Pemweb dan Jarkom", color: "bg-pink-200" },
    "2025-04-18": { label: "Devon Lane", color: "bg-pink-200" },
    "2025-04-20": { label: "Eleanor Pena", color: "bg-yellow-200" },
    "2025-04-23": { label: "Jane Cooper", color: "bg-green-200" },
    "2025-04-26": { label: "Wade Warren", color: "bg-red-200" },
    "2025-04-29": { label: "Bessie Cooper", color: "bg-yellow-200" },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-teal-100 px-6 py-4 flex justify-between items-center shadow relative">
        <div className="flex items-center space-x-2">
          <img src="img/logo.png" alt="Educube Logo" className="h-12 w-auto" />
        </div>

        <nav className="flex items-center space-x-9">
          <a href="Homeafterlogin" className="text-slate-800 font-medium hover:text-black">Home</a>
          <div className="relative">
            <a href="Dashboard">
              <span className="bg-teal-700 text-white px-7 py-2 rounded-t-full rounded-b-lg shadow text-center">
                Dashboard
              </span>
            </a>
          </div>
          <a href="#" className="text-slate-800 font-medium hover:text-black">My Class</a>
        </nav>

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
                  onClick={() => window.location.href = "/editprofil"}
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

      {/* Content */}
      <main className="flex-grow p-6 flex gap-6 bg-gray-100">
        {/* Left: Assignments & Files */}
        <div className="w-2/5 space-y-6">
          {/* Assignments */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Pengumpulan Tugas</h2>
            {assignments.map((task, index) => (
              <div key={index} className="flex items-start space-x-2 border-b py-2">
                <span className="text-sm font-medium">{task.time}</span>
                <div>
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-sm text-gray-600">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Files */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">File Materi</h2>
            {Object.entries(files).map(([date, items], idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold text-slate-700 mb-1">{date}</p>
                {items.map((file, index) => (
                  <div key={index} className="flex items-start space-x-2 border-b py-2">
                    <span className="text-sm font-medium">{file.time}</span>
                    <div>
                      <p className="font-semibold flex items-center gap-1">
                        {file.type === "PDF" && (
                          <span className="bg-gray-200 px-1 py-0.5 text-xs rounded">PDF</span>
                        )}
                        {file.title}
                      </p>
                      <p className="text-sm text-gray-600">{file.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Calendar */}
        <div className="w-3/5 bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Kalender Kegiatan</h2>
          <Calendar
            value={date}
            onChange={setDate}
            tileContent={({ date }) => {
                const key = date.toISOString().split("T")[0];
                const event = eventDates[key];
                return event ? (
                <div className={`mt-1 text-xs ${event.color} text-gray-800 rounded px-1`}>
                    {event.label}
                </div>
                ) : null;
            }}
            />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-950 text-white text-center py-4">
        <p>Copyright © 2025 Team Educube</p>
        <p>www.educube.com</p>
      </footer>
    </div>
  );
}
