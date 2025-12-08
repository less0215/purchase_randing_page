import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, LineChart } from "lucide-react";

const marketData = [
  {
    icon: TrendingUp,
    model: "Two-tone Datejust",
    stat: "2024년 미국 중고시계 판매 1위",
  },
  {
    icon: BarChart3,
    model: "Two-tone Submariner",
    stat: "스틸 모델보다 더 많이 거래",
  },
  {
    icon: LineChart,
    model: "Two-tone GMT",
    stat: "15년간 288% 가치 상승",
  },
];

export default function MarketDataSection() {
  return (
    <section className="py-12 md:py-20" data-testid="section-market-data">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-muted-foreground mb-2">국내에서 비주류인 모델, 해외에서는 이렇습니다:</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {marketData.map((item, index) => (
            <Card 
              key={index}
              className="text-center"
              data-testid={`card-market-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-market-model-${index}`}>
                  {item.model}
                </h3>
                <p className="text-primary font-medium" data-testid={`text-market-stat-${index}`}>
                  {item.stat}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground" data-testid="text-market-cta">
          "저희가 해외 바이어 네트워크를 통해 글로벌 수요처를 찾아드립니다."
        </p>
      </div>
    </section>
  );
}
