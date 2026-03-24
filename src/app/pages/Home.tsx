import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../components/images/hero.mp4'; // ← 여기에 네 경로 넣으면 됨

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* 🔥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* 🔥 어두운 오버레이 (가독성용) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* 🔥 콘텐츠 */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl mb-6">곰식당</h1>
          <p className="text-2xl md:text-3xl mb-12">야찐도 반한 맛</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full transition-colors text-lg"
          >
            메뉴 보기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-amber-900">곰식당에 오신 것을 환영합니다</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              정성과 사랑으로 만든 음식으로 여러분의 마음을 사로잡겠습니다.
              신선한 재료와 전통 방식으로 조리한 특별한 요리를 경험해보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/about" className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors">
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">식당소개</h3>
              <p className="text-stone-600">곰식당의 철학과 가치를 만나보세요</p>
            </Link>

            <Link to="/menu" className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors">
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">메뉴</h3>
              <p className="text-stone-600">다양한 메뉴를 확인하세요</p>
            </Link>

            <Link to="/chef" className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors">
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">주방장</h3>
              <p className="text-stone-600">우리 주방장을 소개합니다</p>
            </Link>

            <Link to="/history" className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors">
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">역사</h3>
              <p className="text-stone-600">곰식당의 이야기를 들어보세요</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}