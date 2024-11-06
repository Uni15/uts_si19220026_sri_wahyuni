import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Tombol from './komponen/atoms/tombol';
import Navbar from './komponen/Navbar';
import Hero from './komponen/Hero';
import Section1 from './komponen/Section';
import Footer from './komponen/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero title="Selamat Datang di Hutan!" desc="Hutan adalah ekosistem alami yang terdiri dari kumpulan pohon, 
      tanaman, hewan, dan organisme lainnya yang hidup berdampingan di area yang luas. Di dalam hutan, pohon-pohon besar menjadi elemen utama dan mendominasi lanskap, 
      dengan berbagai jenis tumbuhan seperti semak, lumut, dan paku-pakuan di bawahnya. Kanopi pohon yang tebal membentuk lapisan atas yang menangkap sebagian besar sinar matahari,
       sehingga membuat lantai hutan lebih teduh dan lembap." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="Orang  Yang Telah Bergabung" desc="Jelaskan Deskripsi"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
