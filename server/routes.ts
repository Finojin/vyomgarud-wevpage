import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          message: validationError.message 
        });
      }

      const contactSubmission = await storage.createContactSubmission(result.data);
      
      return res.status(201).json(contactSubmission);
    } catch (error) {
      console.error("Contact submission error:", error);
      return res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to process contact submission"
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Failed to fetch contact submissions:", error);
      return res.status(500).json({ 
        error: "Internal server error",
        message: "Failed to fetch contact submissions"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
