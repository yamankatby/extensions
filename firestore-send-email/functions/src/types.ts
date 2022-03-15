import * as nodemailer from "nodemailer";

export interface Config {
  location: string;
  mailCollection: string;
  smtpConnectionUri?: string;
  smtpPassword?: string;
  defaultFrom: string;
  defaultReplyTo?: string;
  usersCollection?: string;
  templatesCollection?: string;
  testing?: boolean;
}
export interface Attachment {
  filename?: string;
  content?: string;
  path?: string;
  encoding?: string;
  raw?: string;
  href?: string;
  httpHeaders?: any;
  contentDisposition?: string;
  contentType?: string;
  headers?: any;
  cid?: string;
}

export interface TemplateGroup {
  subject?: HandlebarsTemplateDelegate;
  html?: HandlebarsTemplateDelegate;
  text?: HandlebarsTemplateDelegate;
  amp?: HandlebarsTemplateDelegate;
  attachments?: HandlebarsTemplateDelegate;
}

export interface TemplateData {
  name: string;
  subject?: string;
  html?: string;
  text?: string;
  amp?: string;
  partial?: boolean;
  attachments?: Attachment[];
}

export interface QueuePayload {
  delivery?: {
    startTime: FirebaseFirestore.Timestamp;
    endTime: FirebaseFirestore.Timestamp;
    leaseExpireTime: FirebaseFirestore.Timestamp;
    state: "PENDING" | "PROCESSING" | "RETRY" | "SUCCESS" | "ERROR";
    attempts: number;
    error?: string;
    info?: {
      messageId: string;
      accepted: string[];
      rejected: string[];
      pending: string[];
    };
  };
  message?: nodemailer.SendMailOptions;
  template?: {
    name: string;
    data?: { [key: string]: any };
  };
  to: string[] | string;
  toUids?: string[];
  cc: string[];
  ccUids?: string[];
  bcc: string[];
  bccUids?: string[];
  from?: string;
  replyTo?: string;
  headers?: any;
  attachments: Attachment[];
}
