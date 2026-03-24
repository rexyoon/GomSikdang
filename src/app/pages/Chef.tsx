export function Chef() {
  return (
    <div className="bg-amber-50">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-center text-amber-900 mb-6">주방장 소개</h1>
          <p className="text-xl text-center text-stone-700">곰식당의 마음과 손맛을 책임지는 주방장</p>
        </div>
      </section>

      {/* Chef Profile */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="h-96 md:h-auto bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://cdn.midjourney.com/68a6723a-7b6b-4ace-8b07-817340f318ee/0_2.png')`
                  }}
                />
                <div className="p-12">
                  <h2 className="text-3xl text-amber-900 mb-4">곰숭덕 주방장</h2>
                  <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                    26년 베테랑 요리사로, 모든 음식의 영역을 확립해 독자적인 熊食이라는 요리 장르를 창조
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg text-amber-900 mb-2">경력</h3>
                      <ul className="space-y-1 text-stone-700">
                        <li>• 서울고등학교 졸업</li>
                        <li>• 대한민국 조리기능장 자격 취득 예정</li>
                        <li>• Hell's Kitchen 수석 셰프 15년</li>
                        <li>• 곰식당 총주방장 (현재)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg text-amber-900 mb-2">수상 경력</h3>
                      <ul className="space-y-1 text-stone-700">
                        <li>• 2000년 대한민국 탄생 금상</li>
                        <li>• 2005년 대한민국 조리기능장 자격 취득</li>
                        <li> 2019년 서울고 졸업</li>
                        <li>• 2019년 홍익대학교 입학</li>
                        <li>• 2026년 미쉐린 선정 맛집</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl text-amber-900 mb-6">요리 철학</h2>
              <blockquote className="text-xl text-stone-700 italic border-l-4 border-amber-500 pl-6 mb-6">
                "우어엉"
              </blockquote>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                우웡어우어웅(저는 요리를 할 때 항상 우리 친구들이 맛있게 먹는 모습을 보기 위해 만듭니다).
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                우어엉(熊食을 창조하고 이를 통해 세계에 신개념 요리를 알리겠습니다).
              </p>
            </div>

            {/* Signature Dishes */}
            <div className="mt-16">
              <h2 className="text-3xl text-amber-900 mb-8 text-center">시그니처 요리</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">🍲</div>
                  <h3 className="text-xl text-amber-900 mb-3">곰식당 특선 정식</h3>
                  <p className="text-stone-600">
                    26년 노하우가 담긴 대표 메뉴
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">🥘</div>
                  <h3 className="text-xl text-amber-900 mb-3">곰파육</h3>
                  <p className="text-stone-600">
                    고된 노력과 긴 시간이 들어간 깊은 맛
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">🍖</div>
                  <h3 className="text-xl text-amber-900 mb-3">곰식당 파스타</h3>
                  <p className="text-stone-600">
                    특제 양념에 볶은 파스타
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
