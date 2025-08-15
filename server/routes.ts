import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage({
        ...validatedData,
        id: randomUUID(),
      });
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Resume download endpoint (placeholder)
  app.get("/api/resume", (req, res) => {
    // This would serve the actual resume PDF file
    res.json({ 
      message: "Resume download endpoint - implement with actual PDF file" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
