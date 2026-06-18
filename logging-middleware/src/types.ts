export type Stack =
  | "backend"
  | "frontend";

export type Level =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

export type Package =
  // Backend
  | "cache"
  | "controller"
  | "cron_job"
  | "db"
  | "domain"
  | "handler"
  | "repository"
  | "route"
  | "service"

  // Frontend
  | "api"
  | "component"
  | "hook"
  | "page"
  | "state"
  | "style"

  // Common
  | "auth"
  | "config"
  | "middleware"
  | "utils";

export interface LogRequest {
  stack: Stack;
  level: Level;
  package: Package;
  message: string;
}

export interface LogResponse {
  logID: string;
  message: string;
}