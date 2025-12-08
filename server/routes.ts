import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { appendQuoteToSheet } from "./lib/googleSheets";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Quote submission endpoint - saves to Google Sheets
  app.post("/api/quote", async (req, res) => {
    try {
      const { contact, modelName, stampingYear, hasWarranty, notes } = req.body;

      // Validate required fields
      if (!contact || !modelName || !stampingYear || !hasWarranty) {
        return res.status(400).json({ error: "필수 항목을 모두 입력해주세요" });
      }

      // Append to Google Sheets
      await appendQuoteToSheet({
        contact,
        modelName,
        stampingYear,
        hasWarranty,
        notes: notes || "",
      });

      res.json({ success: true, message: "견적 신청이 완료되었습니다" });
    } catch (error) {
      console.error("Quote submission error:", error);
      res.status(500).json({ error: "견적 신청 중 오류가 발생했습니다" });
    }
  });

  return httpServer;
}
