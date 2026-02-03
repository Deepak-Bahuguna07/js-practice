import { handleRequest } from "./handleRequest.js";
import { serve } from "./server.js";

serve(8000, handleRequest);
