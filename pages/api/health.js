export default function handler(req, res) {
  res.status(200).json({ status: "healthy", service: "dogfood-chat", stack: 5 });
}
