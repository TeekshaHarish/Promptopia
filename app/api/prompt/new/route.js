import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export default POST=async (req,res)=>{
    const {userId,prompt,tag}=await req.json();

    try{
        await connectToDB();
        const newPrompt=new Prompt({
        })
    }
}