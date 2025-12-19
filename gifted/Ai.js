const { gmd } = require('../gift');
const axios = require('axios');
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================
//======
//========================================================================================================================
//========================================================================================================================
//========================================================================================================================

//======
gmd({
  pattern: "deepseek",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/deepseek-r1?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//========================================================================================================================
gmd({
  pattern: "deepseekv3",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/deepseek-v3?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//========================================================================================================================
gmd({
  pattern: "letmegpt",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/letmegpt?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//========================================================================================================================
gmd({
  pattern: "geminipro",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/geminiaipro?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//=============
gmd({
  pattern: "gemini",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/geminiai?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//========================================================================================================================
gmd({
  pattern: "blackbox",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/blackbox?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//========================================================================================================================
gmd({
  pattern: "mistral",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/mistral?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
//========================================================================================================================
//================
gmd({
  pattern: "openai",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/openai?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});

//========================================================================================================================
gmd({
  pattern: "gpt4o-mini",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/gpt4o-mini?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});

//========================================================================================================================
gmd({
  pattern: "gpt4o",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/gpt4o?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});

//========================================================================================================================
gmd({
  pattern: "gpt4",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/gpt4?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});

//========================================================================================================================
gmd({
  pattern: "gpt",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/gpt?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});

//========================================================================================================================
gmd({
  pattern: "chatai",
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q;
    const apiUrl = `${GiftedTechApi}/api/ai/chat?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});

//===================================================================================
gmd({
  pattern: "giftedai",
  aliases: ["ai"],
  description: "Query AI model information from GiftedTech API",
  category: "Ai",
  filename: __filename
}, async (from, Gifted, conText) => {
  const { q, reply, GiftedTechApi, GiftedApiKey } = conText;

  try {
    const query = q || "Whats Your Model";
    const apiUrl = `${GiftedTechApi}/api/ai/ai?apikey=${GiftedApiKey}&q=${encodeURIComponent(query)}`;

    const res = await axios.get(apiUrl, { timeout: 100000 });
    const data = res.data;

    if (!data.success || !data.result) {
      return reply("❌ Failed to fetch AI model information.");
    }

    // Just reply with the result
    reply(data.result);

  } catch (err) {
    console.error("aimodel error:", err);
    reply("❌ Error fetching AI model info: " + err.message);
  }
});
