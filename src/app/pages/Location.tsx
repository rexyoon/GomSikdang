import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Location() {
  return (
    <div className="bg-amber-50">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-amber-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-center text-amber-900 mb-6">오시는 길</h1>
          <p className="text-xl text-center text-stone-700">곰식당을 찾아오시는 방법</p>
        </div>
      </section>

      {/* Location Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1736117705462-34145ac33bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFwJTIwbG9jYXRpb24lMjBzdHJlZXR8ZW58MXx8fHwxNzc0MzI1NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                }}
              >
                <div className="w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                    <p className="text-lg text-stone-700">지도는 실제 서비스에서 구현됩니다</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-amber-900 mb-2">주소</h3>
                    <p className="text-stone-700">서울특별시 강남구 테헤란로 123</p>
                    <p className="text-stone-700">곰빌딩 1층</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-amber-900 mb-2">전화번호</h3>
                    <p className="text-stone-700">02-1234-5678</p>
                    <p className="text-stone-600 text-sm mt-1">예약 및 문의 가능</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-amber-900 mb-3">영업시간</h3>
                    <div className="space-y-2 text-stone-700">
                      <p>평일: 11:00 - 22:00 (라스트오더 21:30)</p>
                      <p>주말: 12:00 - 23:00 (라스트오더 22:30)</p>
                      <p className="text-amber-600 mt-3">매주 월요일 휴무</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-amber-900 mb-2">이메일</h3>
                    <p className="text-stone-700">info@gomrestaurant.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl text-amber-900 mb-8">대중교통 이용</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-amber-900 mb-4">🚇 지하철</h3>
                  <div className="space-y-2 text-stone-700">
                    <p>• 2호선 강남역 3번 출구에서 도보 5분</p>
                    <p>• 신분당선 강남역 하차</p>
                    <p className="text-stone-600 text-sm mt-2">
                      출구에서 나오셔서 테헤란로 방향으로 직진하시면 왼쪽에 위치해 있습니다.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-amber-900 mb-4">🚌 버스</h3>
                  <div className="space-y-2 text-stone-700">
                    <p>• 간선버스: 146, 301, 472</p>
                    <p>• 지선버스: 3412, 4412</p>
                    <p>• 광역버스: 9407, 9408</p>
                    <p className="text-stone-600 text-sm mt-2">
                      강남역.강남파이낸스센터 정류장 하차
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl text-amber-900 mb-4">🚗 자가용</h3>
                  <div className="space-y-2 text-stone-700">
                    <p>• 건물 지하 주차장 이용 가능 (2시간 무료)</p>
                    <p>• 주차 확인 도장은 카운터에서 받으실 수 있습니다</p>
                    <p className="text-stone-600 text-sm mt-2">
                      주말에는 주차가 혼잡할 수 있으니 대중교통 이용을 권장드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Notice */}
            <div className="mt-12 bg-amber-100 rounded-lg p-8">
              <h3 className="text-2xl text-amber-900 mb-4">예약 안내</h3>
              <div className="space-y-2 text-stone-700">
                <p>• 4인 이상 방문 시 예약을 권장합니다</p>
                <p>• 예약은 전화로만 가능합니다 (02-1234-5678)</p>
                <p>• 단체 예약은 최소 3일 전 문의해 주세요</p>
                <p>• 예약 변경 및 취소는 방문 1일 전까지 가능합니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
