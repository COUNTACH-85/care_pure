import { useEffect } from "react";

const VoiceflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;

    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: "67e7d2e8b3cadc6ecc951d3b" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        });
      }
    };

    script.onerror = () => {
      console.error("Failed to load Voiceflow script");
    };

    document.body.appendChild(script);

    // Cleanup: Remove script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render any visible UI.
};

export default VoiceflowChatbot;
