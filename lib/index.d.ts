export type McpServerOptions = {
  apiKey?: string;
  baseURL?: string;
  aliasUser?: string;
  aliasPassword?: string;
};

export class McpServer {
  constructor(options?: McpServerOptions);
  listen(): void;
}
