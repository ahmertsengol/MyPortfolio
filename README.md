# 🚀 Modern Portfolio - Next.js

Ahmet Mert Şengöl'ün kişisel portfolio websitesi. Modern teknolojiler ve yaratıcı tasarım ile oluşturulmuş, AI/ML, Computer Vision ve algoritma projelerini sergileyen interaktif bir platform.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop)

## ✨ Özellikler

### 🎨 **Modern Tasarım**
- **Glass Morphism** efektleri
- **Partikül sistemi** ile interaktif arka plan
- **Framer Motion** animasyonları
- **Responsive** tasarım (Mobile-first)
- **Dark theme** optimizasyonu

### 🔧 **Teknoloji Stack**
- **Next.js 15** - App Router
- **React 19** - Modern React özellikleri
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animasyonlar
- **OGL** - WebGL partikül sistemi
- **Lucide React** - Modern ikonlar

### 📱 **Bölümler**
- 🏠 **Hero Section** - Etkileyici giriş
- 👨‍💻 **About** - Kişisel bilgiler ve deneyim
- 🛠️ **Skills** - Teknik yetenekler
- 📂 **Projects** - GitHub entegrasyonlu projeler
- 📧 **Contact** - İletişim formu

## 🛠️ Kurulum

### Gereksinimler
- **Node.js** 18.0.0 veya üzeri
- **npm** veya **yarn** paket yöneticisi

### 1️⃣ Projeyi İndirin
```bash
git clone https://github.com/ahmertsengol/modern-portfolio.git
cd modern-portfolio
```

### 2️⃣ Bağımlılıkları Yükleyin
```bash
npm install
# veya
yarn install
```

### 3️⃣ Geliştirme Sunucusunu Başlatın
```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📜 Mevcut Scripts

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🎯 Kişiselleştirme

### 📝 Kişisel Bilgileri Güncelleme

1. **Layout Metadata** (`app/layout.tsx`):
```tsx
export const metadata: Metadata = {
  title: 'Adınız - Portfolio',
  description: 'Kendi açıklamanız...',
  // ...diğer metadata
}
```

2. **Proje Bilgileri** (`app/components/ProjectsSection.tsx`):
```tsx
const projects: Project[] = [
  {
    title: 'Proje Adınız',
    description: 'Proje açıklamanız...',
    githubUrl: 'https://github.com/kullaniciadi/repo',
    // ...diğer özellikler
  }
]
```

3. **İletişim Bilgileri** (`app/components/ContactSection.tsx`):
- Email adresi
- Sosyal medya linkleri
- İletişim formu ayarları

### 🎨 Tema Özelleştirme

**Renk Paleti** (`tailwind.config.js`):
```js
theme: {
  extend: {
    colors: {
      // Kendi renk paletinizi ekleyin
    }
  }
}
```

**Animasyonlar** (`app/globals.css`):
```css
/* Kendi animasyonlarınızı ekleyin */
@keyframes customAnimation {
  /* ... */
}
```

## 🌐 Deployment

### Vercel (Önerilen)
1. GitHub'a push yapın
2. [Vercel](https://vercel.com) hesabınızla bağlayın
3. Otomatik deployment başlayacak

### Netlify
1. Repository'yi bağlayın
2. Build command: `npm run build`
3. Publish directory: `.next`

### Manuel Deployment
```bash
npm run build
npm run start
```

## 📁 Proje Yapısı

```
modern-portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # React componentleri
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ...
│   ├── utils/             # Utility fonksiyonları
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── public/                # Statik dosyalar
├── next.config.js         # Next.js konfigürasyonu
├── tailwind.config.js     # Tailwind konfigürasyonu
└── package.json          # Proje bağımlılıkları
```

## 🎨 Component Örnekleri

### Glass Effect Card
```tsx
<div className="glass-effect particle-card particle-magnetic">
  <h3 className="gradient-text">Başlık</h3>
  <p>İçerik...</p>
</div>
```

### Partikül Interactive Element
```tsx
<button className="particle-button particle-magnetic">
  Tıkla
</button>
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Commit yapın (`git commit -am 'Yeni özellik eklendi'`)
4. Push yapın (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📱 Browser Desteği

- ✅ Chrome 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Edge 90+

## 🐛 Bilinen Sorunlar

- Safari'de partikül sisteminde performans sorunları olabilir
- iOS Safari'de backdrop-filter desteği sınırlı

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animasyon kütüphanesi
- [Lucide](https://lucide.dev/) - İkon seti
- [Unsplash](https://unsplash.com/) - Görseller

## 📞 İletişim

**Ahmet Mert Şengöl**
- GitHub: [@ahmertsengol](https://github.com/ahmertsengol)
- LinkedIn: [ahmertsengol](https://linkedin.com/in/ahmertsengol)
- Kaggle: [ahmetmertengl](https://www.kaggle.com/ahmetmertengl)
- LeetCode: [Lazzaran](https://leetcode.com/u/Lazzaran/)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
