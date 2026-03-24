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
                    backgroundImage: `url('https://images.unsplash.com/photo-1765448856945-481569592cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNoZWYlMjBjb29raW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDMyNTQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                  }}
                />
                <div className="p-12">
                  <h2 className="text-3xl text-amber-900 mb-4">김곰식 주방장</h2>
                  <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                    30년 경력의 베테랑 요리사로, 전통 한식의 맛을 현대적으로 재해석하는 
                    요리 철학을 가지고 있습니다.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg text-amber-900 mb-2">경력</h3>
                      <ul className="space-y-1 text-stone-700">
                        <li>• 한국조리학교 졸업</li>
                        <li>• 대한민국 조리기능장 자격 취득</li>
                        <li>• 특급호텔 한식당 수석 셰프 15년</li>
                        <li>• 곰식당 총주방장 (현재)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg text-amber-900 mb-2">수상 경력</h3>
                      <ul className="space-y-1 text-stone-700">
                        <li>• 2020년 대한민국 조리기능경기대회 금상</li>
                        <li>• 2018년 전통 한식 요리 대회 대상</li>
                        <li>• 2015년 미쉐린 가이드 추천 셰프</li>
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
                "음식은 단순한 끼니가 아니라, 사람과 사람을 잇는 따뜻한 마음의 표현입니다."
              </blockquote>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                저는 요리를 할 때 항상 우리 가족을 위해 만든다는 마음으로 정성을 다합니다.
                신선한 재료 선택부터 마지막 플레이팅까지, 모든 과정에 정성과 사랑을 담습니다.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                전통 한식의 깊은 맛을 유지하면서도, 현대인의 입맛에 맞는 균형잡힌 요리를
                만들기 위해 항상 연구하고 노력하고 있습니다. 곰식당의 모든 메뉴는 이러한
                철학이 담긴 특별한 한 접시입니다.
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
                    30년 노하우가 담긴 대표 메뉴
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">🥘</div>
                  <h3 className="text-xl text-amber-900 mb-3">전통 된장찌개</h3>
                  <p className="text-stone-600">
                    3년 숙성 된장으로 만든 깊은 맛
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">🍖</div>
                  <h3 className="text-xl text-amber-900 mb-3">곰식당 불고기</h3>
                  <p className="text-stone-600">
                    특제 양념에 48시간 숙성
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
