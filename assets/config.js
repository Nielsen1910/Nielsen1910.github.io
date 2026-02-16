window.LUNEX_CONFIG = {
  // ✅ HER SÆTTER DU CONNECT LINK:
  // Eksempler:
  // "https://cfx.re/join/abcd12"
  // "fivem://connect/1.2.3.4:30120" (kan virke, men cfx.re/join er klart bedst)
  connectUrl: "INDSÆT_DIT_CONNECT_LINK_HER",

  // Discord:
  // Din kanal-link virker fint for folk der er i serveren.
  // Du kan også sætte en invite link her hvis du har en.
  discordUrl: "https://discord.com/channels/1471383050729422898/1472211024001372303",

  // Ansøgning → Discord (Cloudflare Worker URL)
  // Når du har lavet worker, sæt den her:
  formEndpoint: "INDSÆT_DIN_WORKER_URL_HER",

  // Token til at beskytte endpoint (samme som i Worker env)
  // (Hvis du vil gøre det mere sikkert senere, kan vi ændre til turnstile/captcha)
  formToken: "INDSÆT_FORM_TOKEN_HER"
};
