export default async function handler(req, res) {
  try {
    const r = await fetch("https://freeaichathub.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await r.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    res.status(200).send(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
