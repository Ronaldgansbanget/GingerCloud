"use client";

import Image from "next/image";
import { useState } from "react";

type Flavor = "Original Sweet" | "Ginger";

const faqs = [
  {
    question: "Ginger Cloud benar-benar vegan?",
    answer: "Ginger Cloud dikembangkan sebagai marshmallow berbasis bahan nabati tanpa gelatin hewani, susu, telur, atau madu. Informasi bahan dan alergen final tetap perlu mengikuti label pada kemasan produk.",
  },
  {
    question: "Ada rasa apa saja?",
    answer: "Ada dua pilihan: Original Sweet yang manis dan ringan, serta Ginger dengan sentuhan khas wedang jahe yang hangat dan aromatik.",
  },
  {
    question: "Rasa Ginger itu pedas?",
    answer: "Varian Ginger mengutamakan aroma dan kehangatan jahe dalam bentuk camilan manis. Bila ingin rasa yang lebih klasik, coba Original Sweet.",
  },
  {
    question: "Marshmallow-nya dimakan bagaimana?",
    answer: "Langsung dari kemasan juga enak. Kamu juga bisa menambahkannya ke minuman hangat atau menjadikannya topping dessert. Ikuti petunjuk simpan pada kemasan.",
  },
  {
    question: "Bagaimana cara pesan?",
    answer: "Pilih rasa dan jumlah kemasan di bagian pemesanan. Tombol akan mengarahkan ke WhatsApp bisnis ketika nomor resminya telah dikonfigurasi.",
  },
];

function IconArrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5M8 5h11v11" /></svg>
  ) : (
    <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
  );
}

function IconLeaf() {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3C8 3 3 8 3 15a6 6 0 0 0 6 6c7 0 12-5 12-18Z" /><path d="M3 21c2-6 6-10 12-13" /></svg>;
}

function CloudLogo({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-lockup ${small ? "brand-lockup-small" : ""}`}>
      <span className="brand-icon">
        <svg viewBox="0 0 62 54" fill="none" aria-hidden="true">
          <path d="M16.7 42C9.2 42 5 36.7 5 30.4c0-5.8 4-10.6 10-11.4C17 11 23.7 6 31 6c8.8 0 15.5 6.1 16.6 14.2C54 21 58 25.4 58 31c0 6.1-4.8 11-11.4 11H16.7Z" fill="#fffdf5" stroke="#153d4c" strokeWidth="2.8" strokeLinejoin="round" />
          <circle cx="24" cy="29" r="2.1" fill="#153d4c" />
          <circle cx="39" cy="29" r="2.1" fill="#153d4c" />
          <path d="M27 35c3 3 6 3 9 0" stroke="#153d4c" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="18.5" cy="33" r="4" fill="#ffbeaa" opacity=".72" />
          <circle cx="44.5" cy="33" r="4" fill="#ffbeaa" opacity=".72" />
        </svg>
      </span>
      <span className="brand-type">ginger<span>cloud</span><sup>®</sup></span>
    </span>
  );
}

function CloudDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 120" fill="none" aria-hidden="true">
      <path d="M52 103c-28 0-44-18-44-40 0-22 16-38 38-40C56 7 74 3 90 8c21-11 47-1 55 17 35-7 65 10 65 39 0 22-18 39-43 39H52Z" fill="currentColor" />
    </svg>
  );
}

function StarBurst({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M50 2 60 31l27-13-13 27 24 5-24 7 13 25-27-12-10 28-9-28-27 12 13-25-25-7 25-5-13-27 27 13L50 2Z" fill="currentColor" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [flavor, setFlavor] = useState<Flavor>("Ginger");
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  const orderMessage = `Halo Ginger Cloud! Aku mau tanya cara pesan marshmallow vegan varian ${flavor}, ${quantity} kemasan. Apakah tersedia?`;

  function selectFlavor(nextFlavor: Flavor) {
    setFlavor(nextFlavor);
    setCopied(false);
    document.getElementById("pesan")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleOrder() {
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`, "_blank", "noopener,noreferrer");
      return;
    }
    try {
      await navigator.clipboard.writeText(orderMessage);
      setCopied(true);
    } catch {
      setCopied(false);
      window.prompt("Salin pesan ini untuk menghubungi Ginger Cloud:", orderMessage);
    }
  }

  return (
    <>
      <a className="skip-link" href="#konten">Lewati navigasi</a>
      <header className="site-header">
        <div className="nav-wrap page-container">
          <a href="#beranda" className="logo-link" aria-label="Ginger Cloud, kembali ke beranda" onClick={() => setMenuOpen(false)}><CloudLogo /></a>
          <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`} aria-label="Navigasi utama">
            <a href="#rasa" onClick={() => setMenuOpen(false)}>Rasa</a>
            <a href="#cerita" onClick={() => setMenuOpen(false)}>Cerita kami</a>
            <a href="#vegan" onClick={() => setMenuOpen(false)}>Kenapa vegan?</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="mobile-order" href="#pesan" onClick={() => setMenuOpen(false)}>Mau cobain? <IconArrow diagonal /></a>
          </nav>
          <a className="nav-cta" href="#pesan">Mau cobain? <IconArrow diagonal /></a>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main id="konten">
        {/* 1: Split photographic hero */}
        <section id="beranda" className="hero-section">
          <div className="hero-inner page-container">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-dark"><span className="tiny-spark">✳</span> Hello, we&apos;re Ginger Cloud</span>
              <div className="vegan-badge"><IconLeaf /> Camilan vegan, penuh rasa</div>
              <h1>Selembut <em>awan.</em><br />Sehangat <span>jahe.</span></h1>
              <p>Marshmallow vegan berbahan wedang jahe, dibuat untuk camilan manis yang terasa baru tanpa meninggalkan rasa yang familiar.</p>
              <div className="hero-actions">
                <a className="btn btn-dark" href="#rasa">Jelajahi dua rasa <IconArrow diagonal /></a>
                <a className="text-link" href="#cerita">Kenalan dulu <IconArrow /></a>
              </div>
              <div className="hero-small-note"><span className="mini-heart">♥</span> 100% plant-based mindset. 100% cloud-like joy.</div>
            </div>
            <div className="hero-visual">
              <Image src="/images/ginger-cloud-hero.webp" alt="Marshmallow putih dan jingga bersama potongan jahe dengan latar biru pastel" fill priority sizes="(max-width: 760px) 100vw, 58vw" className="hero-photo" />
              <CloudDoodle className="floating-cloud cloud-one" />
              <div className="round-sticker top-sticker">SOFT<br />AS A<br />CLOUD <span>✹</span></div>
              <div className="side-label">MADE FOR HAPPY LITTLE MOMENTS</div>
              <StarBurst className="hero-star" />
            </div>
          </div>
          <div className="hero-bottomline page-container"><span>01 / AN INTRODUCTION TO HAPPY</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        {/* 2: Running text band */}
        <div className="ribbon" aria-label="Vegan friendly, fluffy goodness, ginger love">
          <div className="ribbon-track" aria-hidden="true">{Array.from({ length: 4 }).map((_, i) => <span key={i}>VEGAN FRIENDLY <b>✳</b> FLUFFY GOODNESS <b>✳</b> LITTLE GINGER LOVE <b>✳</b></span>)}</div>
        </div>

        {/* 3: Centered manifesto and mini icon grid */}
        <section id="vegan" className="promise-section section-padding">
          <div className="page-container">
            <div className="section-heading centered"><span className="eyebrow">WHY WE EXIST</span><h2>Camilan kecil.<br /><em>Rasa bahagia besar.</em></h2><p>Siapa bilang camilan vegan nggak bisa seru? Kami percaya tradisi dan kreativitas bisa bertemu dalam satu gigitan yang fluffy.</p></div>
            <div className="promise-grid">
              <article className="promise-item"><span className="promise-icon promise-icon-leaf"><IconLeaf /></span><h3>Plant-based, always.</h3><p>Dibuat dengan pendekatan bahan nabati. Tanpa gelatin hewani dan tanpa bahan nonvegan.</p></article>
              <article className="promise-item"><span className="promise-icon promise-icon-heart">♡</span><h3>Soft is our thing.</h3><p>Tekstur marshmallow yang lembut dan ringan, enak untuk menemani jeda harimu.</p></article>
              <article className="promise-item"><span className="promise-icon promise-icon-sun">✺</span><h3>Tradition, reimagined.</h3><p>Inspirasi wedang jahe yang familiar, dibawa ke dunia camilan dengan cara yang lebih playful.</p></article>
            </div>
          </div>
        </section>

        {/* 4: Two oversized contrasting product cards */}
        <section id="rasa" className="flavours-section section-padding">
          <div className="page-container">
            <div className="flavours-top"><div><span className="eyebrow">MEET THE FLAVOURS</span><h2>Dua rasa.<br /><span>Susah pilih.</span></h2></div><p>Tim yang suka manis klasik atau tim yang suka sensasi jahe? Di sini, dua-duanya dapat tempat.</p></div>
            <div className="flavour-grid">
              <article className="flavour-card flavour-original">
                <div className="card-header"><span className="card-index">01 / THE CLASSIC ONE</span><span className="card-symbol">✳</span></div>
                <div className="flavour-image-wrap"><Image src="/images/original-sweet.webp" alt="Potongan marshmallow warna putih lembut" fill sizes="(max-width: 760px) 90vw, 45vw" className="flavour-image original-image" /><span className="flavour-orbit">SWEET • SWEET • SWEET •</span></div>
                <div className="flavour-info"><div><span className="flavour-tag">SWEET & SIMPLE</span><h3>Original<br />Sweet</h3><p>Manis klasik, fluffy, dan bikin ingin ambil satu lagi.</p></div><button className="round-arrow" type="button" onClick={() => selectFlavor("Original Sweet")} aria-label="Tanya varian Original Sweet"><IconArrow diagonal /></button></div>
              </article>
              <article className="flavour-card flavour-ginger">
                <div className="card-header"><span className="card-index">02 / THE WARM & COZY ONE</span><span className="card-symbol">☀</span></div>
                <div className="flavour-image-wrap"><Image src="/images/ginger-twist.webp" alt="Marshmallow warna hangat dengan jahe segar" fill sizes="(max-width: 760px) 90vw, 45vw" className="flavour-image ginger-image" /><span className="flavour-orbit">GINGER • GINGER • GINGER •</span></div>
                <div className="flavour-info"><div><span className="flavour-tag">A LITTLE SPICY, A LOT COZY</span><h3>Ginger</h3><p>Sentuhan wedang jahe yang aromatik dan hangat, dalam versi paling lembut.</p></div><button className="round-arrow" type="button" onClick={() => selectFlavor("Ginger")} aria-label="Tanya varian Ginger"><IconArrow diagonal /></button></div>
              </article>
            </div>
            <p className="small-disclaimer">Foto produk merupakan visual konsep dan dapat berbeda dari kemasan atau hasil produksi final.</p>
          </div>
        </section>

        {/* 5: Layered editorial ingredient feature */}
        <section className="ginger-section section-padding">
          <div className="page-container ginger-layout">
            <div className="ginger-image-panel"><Image src="/images/ginger-ingredients.webp" alt="Jahe segar di antara marshmallow lembut" fill sizes="(max-width: 760px) 100vw, 46vw" className="ginger-feature-photo" /><div className="photo-caption">THE ROOT OF OUR IDEA <span>↗</span></div><span className="ginger-photo-sticker">a little<br />bit of<br /><strong>ginger!</strong></span></div>
            <div className="ginger-copy"><span className="eyebrow">FROM A WARM CUP TO A SOFT BITE</span><h2>Dari wedang<br />jahe, jadi<br /><em>cloud.</em></h2><p>Wedang jahe punya tempat spesial di banyak rumah Indonesia. Aromanya akrab, rasanya hangat, dan ceritanya selalu dekat.</p><p>Ginger Cloud mengajak rasa tradisional itu bermain dalam bentuk marshmallow vegan yang terasa lebih ringan, modern, dan menyenangkan.</p><a href="#cerita" className="underlined-link">Baca cerita kami <IconArrow diagonal /></a></div>
          </div>
        </section>

        {/* 6: Numbered 3-step process */}
        <section className="steps-section section-padding">
          <div className="page-container"><div className="steps-heading"><span className="eyebrow">SMALL BITES, BIG IDEAS</span><h2>Good things<br />come in <em>soft</em> packages.</h2></div><div className="steps-grid">
            <div className="step"><span className="step-num">01</span><span className="step-mark">☼</span><h3>Mulai dari jahe</h3><p>Terinspirasi dari aroma dan rasa khas wedang jahe Indonesia.</p></div>
            <div className="step"><span className="step-num">02</span><span className="step-mark">♧</span><h3>Pilih jalan nabati</h3><p>Tekstur empuk yang tidak mengandalkan gelatin hewani.</p></div>
            <div className="step"><span className="step-num">03</span><span className="step-mark">♡</span><h3>Bikin momen seru</h3><p>Jadi teman belajar, ngobrol, atau sekadar menikmati hari.</p></div>
          </div></div>
        </section>

        {/* 7: Playful card mosaic use cases */}
        <section className="moments-section section-padding">
          <div className="page-container"><div className="moments-head"><span className="eyebrow">ANYTIME IS CLOUD TIME</span><h2>Little bites,<br /><em>happy moments.</em></h2></div><div className="moment-mosaic">
            <article className="moment-card moment-study"><span className="moment-number">01 / STUDY BREAK</span><div className="moment-illustration book-art"><div className="book-page one"/><div className="book-page two"/><span className="tiny-marshmallow"/></div><h3>Teman nugas</h3><p>Break sebentar jadi jauh lebih manis.</p></article>
            <article className="moment-card moment-share"><span className="moment-number">02 / SHARING TIME</span><div className="moment-illustration share-art"><span className="candy c1"/><span className="candy c2"/><span className="candy c3"/><span className="candy c4"/></div><h3>Enak dibagi</h3><p>Karena cloud yang baik selalu berbagi.</p></article>
            <article className="moment-card moment-drink"><span className="moment-number">03 / COZY MOMENTS</span><div className="moment-illustration cup-art"><div className="cup-steam">〰</div><div className="cup-body"><span>♡</span></div></div><h3>Pair it with a sip</h3><p>Coba jadi topping minuman hangat favoritmu.</p></article>
          </div></div>
        </section>

        {/* 8: Full width story panel */}
        <section id="cerita" className="story-section section-padding"><div className="page-container story-layout"><div className="story-deco"><CloudDoodle className="story-cloud"/><StarBurst className="story-burst"/><span className="story-scribble">made with<br />a little joy ✦</span></div><div className="story-text"><span className="eyebrow">OUR LITTLE STORY</span><h2>Bukan cuma<br />marshmallow.<br /><em>Ini cerita rasa.</em></h2><p>Ginger Cloud lahir dari satu ide sederhana: bagaimana kalau wedang jahe yang kita kenal sejak kecil hadir dalam camilan masa kini?</p><p>Kami ingin memperkenalkan jahe kepada generasi baru lewat sesuatu yang lucu, lembut, dan mudah disukai. Tetap menghargai akar tradisi, sambil berani mencoba cara baru.</p><span className="story-signature">With love, Ginger Cloud ♡</span></div></div></section>

        {/* 9: Accessible accordion FAQ */}
        <section id="faq" className="faq-section section-padding"><div className="page-container faq-layout"><div className="faq-heading"><span className="eyebrow">THE CLOUD HELP DESK</span><h2>Ada yang<br />mau <em>ditanya?</em></h2><p>Tenang, kami sudah siapkan jawaban untuk beberapa pertanyaan yang paling sering muncul.</p><CloudDoodle className="faq-cloud" /></div><div className="faq-list">{faqs.map((faq, index) => <article className={`faq-item ${activeFaq === index ? "is-open" : ""}`} key={faq.question}><h3><button className="faq-question" type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index} aria-controls={`faq-answer-${index}`}><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">{activeFaq === index ? "−" : "+"}</span></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={activeFaq !== index}><p>{faq.answer}</p></div></article>)}</div></div></section>

        {/* 10: Contact configuration and working order copy / WhatsApp flow */}
        <section id="pesan" className="order-section section-padding"><div className="page-container"><div className="order-card"><div className="order-intro"><span className="eyebrow">YOUR CLOUD IS CALLING</span><h2>Siap jatuh<br />cinta sama<br /><em>cloud?</em></h2><p>Pilih rasa favoritmu, lalu tanya ketersediaannya. Bikin hari biasa jadi terasa sedikit lebih fluffy.</p><div className="order-doodle">✳ &nbsp; ♡ &nbsp; ✳</div></div><div className="order-form"><span className="order-form-title">Your happy little order <span>✷</span></span><label htmlFor="flavour-select">Pilih rasa</label><select id="flavour-select" value={flavor} onChange={(event) => { setFlavor(event.target.value as Flavor); setCopied(false); }}><option value="Original Sweet">Original Sweet</option><option value="Ginger">Ginger</option></select><label htmlFor="quantity-select">Jumlah kemasan</label><select id="quantity-select" value={quantity} onChange={(event) => { setQuantity(Number(event.target.value)); setCopied(false); }}>{Array.from({ length: 10 }).map((_, index) => <option key={index + 1} value={index + 1}>{index + 1} kemasan</option>)}</select><button className="btn btn-dark order-button" type="button" onClick={handleOrder}>{whatsappNumber ? "Tanya via WhatsApp" : (copied ? "Pesan tersalin!" : "Salin pesan pemesanan")} <IconArrow diagonal /></button><p className="order-help">{whatsappNumber ? "Kamu akan diarahkan ke WhatsApp untuk menanyakan stok dan harga." : "Kanal WhatsApp belum diaktifkan. Salin pesan ini dan kirim ke kontak resmi Ginger Cloud saat tersedia."}</p></div></div></div></section>
      </main>

      <footer className="footer"><div className="page-container"><div className="footer-top"><div><CloudLogo small /><p>Soft like a cloud.<br />Warm like ginger.</p></div><div className="footer-nav"><a href="#rasa">Our flavours</a><a href="#vegan">Vegan promise</a><a href="#cerita">Our story</a><a href="#faq">FAQ</a></div><div className="footer-letter"><span>LEAVE A LITTLE ROOM</span><strong>for joy. ♡</strong></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ginger Cloud. Dibuat dengan rasa.</span><a href="#beranda">Kembali ke atas ↑</a></div></div></footer>
    </>
  );
}
