import { cookies } from "next/headers";
import { scalekit } from "./scalekit";

export async function getSession(){
    const session = await cookies();
    const token = session.get("access_token")?.value
    if(!token){
        return null
    }
    try {
                const result = await scalekit.validateToken(token!) as any;
        const user = await scalekit.user.getUser(result.sub)
        return user;
    } catch (error) {
        console.log("Session validation error:", error);
        return null;
    }
    
    
}