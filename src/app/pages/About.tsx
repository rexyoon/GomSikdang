import logo from 'figma:asset/60495ad2ae8c7d589b232abf10a4905ec7205013.png';

export function About() {
  return (
    <div className="bg-amber-50">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-center text-amber-900 mb-6">식당소개</h1>
          <p className="text-xl text-center text-stone-700">곰식당을 소개합니다</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <img src={logo} alt="곰식당 로고" className="w-48 h-48" />
            </div>

            <div className="bg-white rounded-lg p-12 shadow-lg mb-12">
              <h2 className="text-3xl mb-6 text-amber-900">곰식당의 철학</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                곰식당은 정성과 사랑으로 만든 음식을 통해 고객님의 마음을 따뜻하게 만드는 것을 목표로 합니다.
                우리는 신선한 재료와 전통적인 조리법을 고수하며, 모든 요리에 정성을 다합니다.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                곰처럼 강인하고 따뜻한 마음으로, 모든 손님을 가족처럼 맞이합니다.
                "야찐도 반한 맛"이라는 슬로건처럼, 누구나 만족할 수 있는 최고의 맛을 선사하겠습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl mb-3 text-amber-900">신선한 재료</h3>
                <p className="text-stone-600">
                  매일 아침 엄선된 신선한 재료만을 사용합니다
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl mb-3 text-amber-900">정성스러운 조리</h3>
                <p className="text-stone-600">
                  전통 방식을 고수하며 정성껏 요리합니다
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl mb-3 text-amber-900">따뜻한 서비스</h3>
                <p className="text-stone-600">
                  가족같은 따뜻함으로 모든 손님을 대합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
