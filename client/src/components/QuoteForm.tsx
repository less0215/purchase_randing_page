import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Camera, Clock, Globe, Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  contact: z.string().min(1, "연락처를 입력해주세요"),
  modelName: z.string().min(1, "모델명을 입력해주세요"),
  stampingYear: z.string().min(1, "스탬핑 연도를 입력해주세요"),
  hasWarranty: z.enum(["yes", "no"], { required_error: "보증서 유무를 선택해주세요" }),
  notes: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  onSuccess?: () => void;
}

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      contact: "",
      modelName: "",
      stampingYear: "",
      notes: "",
    },
  });

  const watchWarranty = form.watch("hasWarranty");

  const submitMutation = useMutation({
    mutationFn: async (data: QuoteFormValues) => {
      const response = await apiRequest("POST", "/api/quote", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "견적 신청이 완료되었습니다",
        description: "24시간 내 연락드리겠습니다.",
      });
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error: Error) => {
      toast({
        title: "오류가 발생했습니다",
        description: error.message || "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const onSubmit = (data: QuoteFormValues) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center" data-testid="quote-success">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold mb-4" data-testid="text-success-title">
          견적 신청이 완료되었습니다
        </h2>
        <p className="text-muted-foreground mb-6 text-base">
          24시간 내 연락드리겠습니다.<br />
          감사합니다.
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
            setSelectedFiles([]);
          }}
          data-testid="button-new-quote"
        >
          새로운 견적 신청
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]" data-testid="quote-form-container">
      <main className="flex-1 px-4 py-6">
        <h1 
          className="text-3xl font-bold leading-tight tracking-tight text-left pb-2"
          data-testid="text-form-headline"
        >
          내 롤렉스 견적 받기
        </h1>
        <p className="text-muted-foreground text-base font-normal leading-normal pb-8" data-testid="text-form-subheadline">
          24시간 내 연락드립니다
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">연락처*</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="- 없이 입력" 
                      type="tel"
                      className="h-14 text-base"
                      {...field}
                      data-testid="input-quote-contact"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modelName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">모델명*</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="예: 서브마리너 12345AB" 
                      className="h-14 text-base"
                      {...field}
                      data-testid="input-quote-model"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stampingYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">스탬핑 연도*</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="예: 2023" 
                      type="number"
                      className="h-14 text-base"
                      {...field}
                      data-testid="input-quote-stamping"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hasWarranty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">보증서 유무*</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => field.onChange("yes")}
                        className={cn(
                          "flex h-14 items-center justify-center rounded-lg border transition-colors font-medium",
                          watchWarranty === "yes"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card border-border hover:bg-primary/10"
                        )}
                        data-testid="button-warranty-yes"
                      >
                        있음
                      </button>
                      <button
                        type="button"
                        onClick={() => field.onChange("no")}
                        className={cn(
                          "flex h-14 items-center justify-center rounded-lg border transition-colors font-medium",
                          watchWarranty === "no"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card border-border hover:bg-primary/10"
                        )}
                        data-testid="button-warranty-no"
                      >
                        없음
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col">
              <p className="text-base font-semibold pb-2">시계 사진 (선택)</p>
              <label className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed bg-card text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <Camera className="w-5 h-5" />
                <span className="text-base font-medium">
                  {selectedFiles.length > 0 ? `${selectedFiles.length}개 파일 선택됨` : "사진 첨부하기"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  data-testid="input-quote-photos"
                />
              </label>
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">특이사항 (선택)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="스크래치, 수리 이력 등"
                      className="min-h-[120px] resize-none text-base"
                      {...field}
                      data-testid="input-quote-notes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium">24시간 내 연락드립니다</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium">해외 스탬핑 OK · 비인기 모델 OK</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lock className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium">텔레그램으로 비밀 소통</p>
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-background p-4 pt-2 border-t">
        <Button 
          onClick={form.handleSubmit(onSubmit)}
          size="lg"
          className="w-full h-14 rounded-xl text-lg font-bold"
          disabled={submitMutation.isPending}
          data-testid="button-submit-quote"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              전송 중...
            </>
          ) : (
            "견적 신청하기"
          )}
        </Button>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p className="font-bold text-sm mb-1 text-foreground">SUN MOON</p>
          <p>서울특별시 강남구 테헤란로 123, 45층</p>
          <p>사업자등록번호: 123-45-67890 | 대표: 김선문</p>
        </div>
      </footer>
    </div>
  );
}
