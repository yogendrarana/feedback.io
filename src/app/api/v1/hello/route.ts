import { UAParser } from "ua-parser-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userAgent = req.headers.get("user-agent");
    let deviceInfo = {};

    if (userAgent) {
        const parser = new UAParser(userAgent);
        deviceInfo = {
            browser: parser.getBrowser(),
            device: parser.getDevice(),
            os: parser.getOS(),
        };
    }

    // Force the response to be JSON
    return new NextResponse(JSON.stringify({
        message: 'Hello, World!',
        deviceInfo
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}