import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1708675532078-ba3995800f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjB3YXJtJTIwY296eXxlbnwxfHx8fDE3NzQzMjU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="text-center text-white px-6">
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
            <Link
              to="/about"
              className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors"
            >
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">식당소개</h3>
              <p className="text-stone-600">
                곰식당의 철학과 가치를 만나보세요
              </p>
            </Link>

            <Link
              to="/menu"
              className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors"
            >
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">메뉴</h3>
              <p className="text-stone-600">
                다양한 메뉴를 확인하세요
              </p>
            </Link>

            <Link
              to="/chef"
              className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors"
            >
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">주방장</h3>
              <p className="text-stone-600">
                우리 주방장을 소개합니다
              </p>
            </Link>

            <Link
              to="/history"
              className="group bg-amber-50 p-8 rounded-lg hover:bg-amber-100 transition-colors"
            >
              <h3 className="text-2xl mb-4 text-amber-900 group-hover:text-amber-700">역사</h3>
              <p className="text-stone-600">
                곰식당의 이야기를 들어보세요
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
