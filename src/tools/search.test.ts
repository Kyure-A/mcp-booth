import { describe, it, expect } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { server } from "../index.js";

describe("Booth", () => {
    it("SearchByKeyword", async () => {
        const client = new Client({
            name: "test client",
            version: "0.1.0",
        });
        
        const [clientTransport, serverTransport] =
            InMemoryTransport.createLinkedPair();
        
        await Promise.all([
            client.connect(clientTransport),
            server.connect(serverTransport),
        ]);
        
        const result = await client.callTool({
            name: "search_by_keyword",
            arguments: {
                keyword: "VRChat",
                exceptWords: null,
                tags: null
            },
        });
        
        console.log(JSON.stringify(result));
        
        //expect(result).toBeCalled()
    });
});
