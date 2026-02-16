(function () {
  const cfg = window.LUNEX_CONFIG || {};

  // Wire buttons if present
  const connectBtn = document.querySelectorAll("[data-connect]");
  connectBtn.forEach((b) => b.setAttribute("href", cfg.connectUrl || "#"));

  const discordBtn = document.querySelectorAll("[data-discord]");
  discordBtn.forEach((b) => b.setAttribute("href", cfg.discordUrl || "#"));

  // Apply page form handling
  const form = document.getElementById("applyForm");
  if (form) {
    const status = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "Sender ansøgning...";

      const payload = Object.fromEntries(new FormData(form).entries());

      // Simple anti-spam: honeypot
      if (payload.website && payload.website.trim().length > 0) {
        status.textContent = "✅ Tak! (modtaget)";
        form.reset();
        return;
      }
      delete payload.website;

      if (!cfg.formEndpoint || cfg.formEndpoint.includes("INDSÆT")) {
        status.textContent = "❌ Formularen er ikke sat op endnu (mangler formEndpoint i assets/config.js).";
        return;
      }

      try {
        const res = await fetch(cfg.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${cfg.formToken || ""}`
          },
          body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("Kunne ikke sende ansøgningen. Prøv igen senere.");
        status.textContent = "✅ Ansøgning sendt! Hold øje med Discord.";
        form.reset();
      } catch (err) {
        status.textContent = "❌ Fejl: " + err.message;
      }
    });
  }
})();
