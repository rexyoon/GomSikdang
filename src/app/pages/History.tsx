export function History() {
  const timeline = [
    {
      year: "2000",
      title: "곰식당의 시작",
      description: "태어나자마자 식칼을 잡고 바로 요리를 시작했습니다"
    },
    {
      year: "2016",
      title: "서울고 입학",
      description: "입소문을 타고 찾아오시는 손님들이 늘어나면서 일이 힘들어지자 서울고 입학을 선택해 도망을 택함."
    },
    {
      year: "2020",
      title: "미쉐린 가이드 등재",
      description: "한국 미쉐린 가이드에 처음으로 등재되며, 곰식당의 맛을 인정받았습니다."
    },
    {
      year: "2021",
      title: "전통 계승",
      description: "2세대 주방장이 합류하며 전통의 맛을 이어가면서도 새로운 메뉴를 개발하기 시작했습니다."
    },
    {
      year: "2022",
      title: "리모델링",
      description: "고객들에게 더 쾌적한 환경을 제공하기 위해 전면 리모델링을 단행했습니다. 현대적이면서도 전통의 멋을 살렸습니다."
    },
    {
      year: "2024",
      title: "온라인 서비스 시작",
      description: "코로나19 시기를 맞아 배달과 포장 서비스를 시작했습니다. 집에서도 곰식당의 맛을 즐길 수 있게 되었습니다."
    },
    {
      year: "2026",
      title: "현재",
      description: "30년이 넘는 시간 동안 한결같은 맛으로 고객님들의 사랑을 받고 있습니다. 앞으로도 변함없이 정성을 다하겠습니다."
    }
  ];

  return (
    <div className="bg-amber-50">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-center text-amber-900 mb-6">식당의 역사</h1>
          <p className="text-xl text-center text-stone-700">26년의 곰식당의 발자취</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
              <h2 className="text-3xl text-amber-900 mb-6">곰식당 이야기</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                2000년, 작은 골목의 10평 남짓한 공간에서 곰식당은 시작되었습니다.
                "곰처럼 강하고 따뜻한 음식을 만들자"는 창업주의 철학으로 시작된 곰식당은
                지난 30여 년간 한결같은 맛과 정성으로 고객님들의 사랑을 받아왔습니다.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                처음에는 단 3가지 메뉴로 시작했지만, 정성스럽게 만든 음식의 맛이 입소문을 타며
                점점 더 많은 손님들이 찾아주셨습니다. 새벽부터 준비한 육수, 직접 담근 김치,
                엄선한 재료들로 만든 요리는 곰식당만의 특별한 맛을 만들어냈습니다.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                전통의 맛을 지키면서도 현대적인 감각을 더하고 있습니다.
                앞으로도 곰식당은 변함없는 정성으로 고객님들께 최고의 맛을 선사하겠습니다.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300" />

              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-20">
                    <div className="absolute left-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                      <div className="text-2xl text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-xl text-amber-900 mb-3">{item.title}</h3>
                      <p className="text-stone-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-4xl text-amber-600 mb-3">30+</div>
                <h3 className="text-xl text-amber-900 mb-2">년의 역사</h3>
                <p className="text-stone-600">1995년부터 현재까지</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-4xl text-amber-600 mb-3">50만+</div>
                <h3 className="text-xl text-amber-900 mb-2">누적 방문객</h3>
                <p className="text-stone-600">30년간 다녀가신 손님들</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="text-4xl text-amber-600 mb-3">20+</div>
                <h3 className="text-xl text-amber-900 mb-2">메뉴 종류</h3>
                <p className="text-stone-600">정성이 담긴 다양한 메뉴</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
