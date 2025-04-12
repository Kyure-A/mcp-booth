import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// サーバーインスタンスの作成
export const server = new McpServer({
    name: "Booth.pm",
    version: "0.1.0",
});
