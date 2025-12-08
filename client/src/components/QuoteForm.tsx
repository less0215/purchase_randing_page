import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, CheckCircle2, Globe, Clock, MessageCircle } from "lucide-react";

const quoteSchema = z.object({
  contact: z.string().min(1, "연락처를 입력해주세요"),
  modelName: z.string().min(1, "모델명을 입력해주세요"),
  stampingDate: z.string().min(1, "스탬핑 일자를 입력해주세요"),
  hasWarranty: z.string().min(1, "보증서 여부를 선택해주세요"),
  notes: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  onSuccess?: () => void;
}

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      contact: "",
      modelName: "",
      stampingDate: "",
      hasWarranty: "",
      notes: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    // todo: remove mock functionality - integrate with backend
    console.log("Quote form submitted:", { ...data, files: selectedFiles });
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "견적 신청이 완료되었습니다",
      description: "24시간 내 연락드리겠습니다.",
    });

    if (onSuccess) {
      onSuccess();
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto" data-testid="card-quote-success">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4" data-testid="text-success-title">
            견적 신청이 완료되었습니다
          </h2>
          <p className="text-muted-foreground mb-6">
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
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto" data-testid="card-quote-form">
      <CardContent className="p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 
            className="text-2xl md:text-3xl font-bold mb-2"
            data-testid="text-form-headline"
          >
            내 롤렉스 견적 받기
          </h1>
          <p className="text-muted-foreground" data-testid="text-form-subheadline">
            24시간 내 연락드립니다
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="010-0000-0000" 
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
                  <FormLabel>모델명 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="예: Submariner 126610LN" 
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
              name="stampingDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>스탬핑 일자 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="예: 2023년 3월 / 해외(홍콩) / 모름" 
                      {...field}
                      data-testid="input-quote-stamping"
                    />
                  </FormControl>
                  <FormDescription>
                    스탬핑 날짜와 국가를 입력해주세요
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hasWarranty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>보증서 여부 *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-warranty">
                        <SelectValue placeholder="선택해주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">있음</SelectItem>
                      <SelectItem value="no">없음</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>시계 사진 (선택)</FormLabel>
              <FormControl>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    data-testid="input-quote-photos"
                  />
                  <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      클릭하여 파일 업로드
                    </p>
                    {selectedFiles.length > 0 && (
                      <p className="text-sm text-primary mt-2">
                        {selectedFiles.length}개 파일 선택됨
                      </p>
                    )}
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                여러 장 업로드 가능
              </FormDescription>
            </FormItem>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>특이사항 (선택)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="스크래치, 수리 이력, 기타 참고사항"
                      className="min-h-[100px] resize-none"
                      {...field}
                      data-testid="input-quote-notes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              data-testid="button-submit-quote"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  전송 중...
                </>
              ) : (
                "견적 신청하기"
              )}
            </Button>
          </form>
        </Form>

        <div className="mt-6 pt-6 border-t">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              24시간 내 연락드립니다
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              해외 스탬핑 OK
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              텔레그램 비밀 소통
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
