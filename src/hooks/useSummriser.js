import { useState } from "react";
import { webSummary } from "../services/ai";
import { fetchWebsiteText } from "../services/fetchTexts";
import { toast } from "react-toastify";

export const useSumeriser =()=>{
  const [url,setUrl] =useState("");
  const [summary,setSummary] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");


  const summaryData = async()=>{
    if(!url){
      toast.info("Enter a valid Url");
      return;
    } ;
    setLoading(true);
    setSummary("");
    setError("");

    try{
      const text = await fetchWebsiteText(url)
      const result = await webSummary(text);
      setSummary(result);
    }catch{
      setError("Opps! Failed to generate summary");
    }finally{
      setLoading(false);
    }
  }

  return {url,setUrl,summary,setSummary,setError,loading,error,summaryData};
}