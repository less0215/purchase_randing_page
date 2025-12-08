import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileCheck, Award, BadgeCheck, ArrowRight } from "lucide-react";

const credentials = [
  {
    icon: Building2,
    title: "홍콩 현지 법인 보유",
    description: "홍콩 정부 규제로 외국인 신규 법인 설립 사실상 불가. 규제 이전 설립된 법인 보유",
    proof: "라이센스 보유",
  },
  {
    icon: FileCheck,
    title: "DPMS License B",
    description: "외국인 취득이 어려운 홍콩 정부 공식 시계 거래 라이센스",
    proof: "공식 인증",
  },
  {
    icon: Award,
    title: "HICC 정식 참가",
    description: "아시아 최대 시계쇼 부스 운영, 유일한 한국인 딜러",
    proof: "부스 참가 인증",
  },
  {
    icon: BadgeCheck,
    title: "Chrono24 검증 딜러",
    description: "글로벌 최대 시계 플랫폼에서 검증된 Trusted Seller",
    proof: "인증 딜러",
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 md:py-20 bg-card/50" data-testid="section-trust">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            data-testid="text-trust-headline"
          >
            왜 저희만 가능할까요?
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-trust-subheadline">
            저희는 직접 해외 수출이 가능하기 때문에 매입할 수 있습니다
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground mb-4">일반 업체</p>
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <span className="px-3 py-1.5 bg-background rounded-md">한국 매입</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="px-3 py-1.5 bg-background rounded-md">수출 대행</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="px-3 py-1.5 bg-background rounded-md">홍콩</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">수수료 발생, 시간 소요</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary mb-4">SUN MOON</p>
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <span className="px-3 py-1.5 bg-background rounded-md">한국 매입</span>
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md font-medium">홍콩 자사 법인</span>
                </div>
                <p className="text-sm text-primary mt-3 font-medium">직접 수출, 수수료 無</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-transform duration-200"
              data-testid={`card-credential-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <cred.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-cred-title-${index}`}>
                  {cred.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed" data-testid={`text-cred-desc-${index}`}>
                  {cred.description}
                </p>
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  {cred.proof}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
