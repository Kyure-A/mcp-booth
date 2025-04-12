import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createSearchTools } from "./tools/search";

export const server = new McpServer({
    name: "Booth.pm",
    version: "0.1.0",
});

createSearchTools(server);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    
    console.error("MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
