export function Menu() {
  const menuItems = [
    {
      category: "대표 메뉴",
      items: [
        {
          name: "곰식당 특선 정식",
          description: "매일 신선한 재료로 만든 정성 가득한 정식",
          price: "15,000원"
        },
        {
          name: "곰식당 파스타",
          description: "깊은 맛의 전통으로 볶은 파스타",
          price: "9,000원"
        },
        {
          name: "곰식당 불고기",
          description: "특제 양념으로 재운 부드러운 불고기",
          price: "18,000원"
        }
      ]
    },
    {
      category: "메인 요리",
      items: [
        {
          name: "제육볶음",
          description: "매콤달콤한 돼지고기 볶음",
          price: "12,000원"
        },
        {
          name: "곰파육",
          description: "부드럽게 익힌 통삼겹조림",
          price: "25,000원"
        },
        {
          name: "삼겹살 구이",
          description: "두툼한 국내산 삼겹살",
          price: "16,000원"
        }
      ]
    },
    {
      category: "전골 & 찌개",
      items: [
        {
          name: "김치찌개",
          description: "묵은지로 만든 깊은 맛의 김치찌개",
          price: "8,000원"
        },
        {
          name: "순두부찌개",
          description: "부드러운 순두부와 해물의 조화",
          price: "8,500원"
        },
        {
          name: "부대찌개",
          description: "각종 재료가 풍성한 부대찌개",
          price: "10,000원"
        }
      ]
    },
    {
      category: "식사 & 면류",
      items: [
        {
          name: "곰밥",
          description: "신선한 곰나물 비빔밥",
          price: "10,000원"
        },
        {
          name: "냉면",
          description: "시원한 육수의 냉면",
          price: "9,000원"
        },
        {
          name: "칼국수",
          description: "손으로 직접 뽑은 칼국수",
          price: "8,000원"
        }
      ]
    }
  ];

  return (
    <div className="bg-amber-50">
      {/* Page Header */}
      <section
        className="pt-32 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1761303506087-9788d0a98e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmb29kJTIwZGlzaGVzJTIwdmFyaWV0eXxlbnwxfHx8fDE3NzQzMjU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-center text-white mb-6">메뉴</h1>
          <p className="text-xl text-center text-white">정성을 담은 곰식당의 메뉴</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {menuItems.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-3xl text-amber-900 mb-8 pb-4 border-b-2 border-amber-300">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl text-amber-900">{item.name}</h3>
                        <span className="text-lg text-amber-600">{item.price}</span>
                      </div>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="max-w-5xl mx-auto mt-16 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl text-amber-900 mb-4">안내사항</h3>
            <ul className="space-y-2 text-stone-700">
              <li>• 모든 가격은 1인분 기준입니다</li>
              <li>• 메뉴와 가격은 변경될 수 있습니다</li>
              <li>• 단체 예약 시 특별 메뉴 구성이 가능합니다</li>
              <li>• 알레르기가 있으신 분은 주문 시 말씀해 주세요</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
