import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-green-200 shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="img/logo.png" alt="Educube Logo" className="w-40 h-10" />
          <span className="text-xl font-bold text-gray-800">Educube</span>
        </div>
        <nav className="flex items-center space-x-4">
          <span className="text-gray-700">Home</span>
          <Link to="/login">
            <button className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-700">
              Log In
            </button>
          </Link>
        </nav>
      </header>

      {/* Welcome Section */}
      <main className="max-w-5xl mx-auto mt-8 px-4">
        <div className="bg-white shadow p-6 rounded-lg mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang Di Educube!</h1>
          <p className="text-gray-700">
            Educube adalah sistem untuk mengelola jadwal mata kuliah, tugas, hingga pengingat waktu kelas.
            Untuk mata kuliah yang ada di sini, kami mengambil referensi matakuliah jurusan yang ada di
            Universitas Pembangunan Nasional "Veteran" Jawa Timur.
          </p>
        </div>

        {/* Fakultas dan Jurusan */}
        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-bold text-white bg-green-600 px-4 py-2 rounded inline-block mb-4">
            List Fakultas dan Jurusan
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {/* Fakultas Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="/img/fk.png" alt="Kedokteran" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Kedokteran</h3>
              <ul className="text-sm text-gray-600">
                <li>• Kedokteran</li>
              </ul>
            </div>

            {/* Fakultas Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/santika-1-768x509-b9e27e910bbed3f226abae659a228a04.jpg" alt="Ilmu Komputer" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Ilmu Komputer</h3>
              <ul className="text-sm text-gray-600">
                <li>• Informatika</li>
                <li>• Sistem Informasi</li>
                <li>• Bisnis Digital</li>
              </ul>
            </div>

            {/* Fakultas Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://asset-2.tstatic.net/surabaya/foto/bank/images/gedung-fakultas-eekonomi-dan-bisnis-feb-upn-veteran-jatim-ist.jpg" alt="Ekonomi dan Bisnis" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Ekonomi dan Bisnis</h3>
              <ul className="text-sm text-gray-600">
                <li>• Kewirausahaan</li>
                <li>• Akuntansi</li>
              </ul>
            </div>

            {/* Fakultas Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/teknik-2-768x509-cd374a4ea3619f924a0ee8ad1dc10792.jpg" alt="Teknik dan Sains" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Teknik dan Sains</h3>
              <ul className="text-sm text-gray-600">
                <li>• Teknik Kimia</li>
                <li>• Teknik Industri</li>
              </ul>
            </div>

            {/* Fakultas Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/teknik-2-768x509-cd374a4ea3619f924a0ee8ad1dc10792.jpg" alt="Teknik dan Sains" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Teknik dan Sains</h3>
              <ul className="text-sm text-gray-600">
                <li>• Teknik Kimia</li>
                <li>• Teknik Industri</li>
              </ul>
            </div>

            {/* Fakultas Card 6 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/teknik-2-768x509-cd374a4ea3619f924a0ee8ad1dc10792.jpg" alt="Teknik dan Sains" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Teknik dan Sains</h3>
              <ul className="text-sm text-gray-600">
                <li>• Teknik Kimia</li>
                <li>• Teknik Industri</li>
              </ul>
            </div>
            {/* Fakultas Card 7 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/teknik-2-768x509-cd374a4ea3619f924a0ee8ad1dc10792.jpg" alt="Teknik dan Sains" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Teknik dan Sains</h3>
              <ul className="text-sm text-gray-600">
                <li>• Teknik Kimia</li>
                <li>• Teknik Industri</li>
              </ul>
            </div>

            {/* Fakultas Card 8 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/teknik-2-768x509-cd374a4ea3619f924a0ee8ad1dc10792.jpg" alt="Teknik dan Sains" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Teknik dan Sains</h3>
              <ul className="text-sm text-gray-600">
                <li>• Teknik Kimia</li>
                <li>• Teknik Industri</li>
              </ul>
            </div>
            
            {/* Fakultas Card 9 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center min-w-[250px] max-w-[300px]">
              <img src="https://cdn.idntimes.com/content-images/community/2023/02/teknik-2-768x509-cd374a4ea3619f924a0ee8ad1dc10792.jpg" alt="Teknik dan Sains" className="rounded mb-2 h-32 w-full object-cover" />
              <h3 className="font-semibold">Fakultas Teknik dan Sains</h3>
              <ul className="text-sm text-gray-600">
                <li>• Teknik Kimia</li>
                <li>• Teknik Industri</li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white text-center py-4 mt-12 shadow-inner">
        <p className="text-sm">Copyright © 2025 Team Educube</p>
        <p className="text-sm">www.educube.com</p>
      </footer>
    </div>

    
  );
}
