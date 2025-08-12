import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Bonjour. You’ve reached the UrbanStyle Luxe Concierge. How may we assist?" },
  ]);
  const [text, setText] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const userMsg = { role: "user" as const, text };
    setMessages((m) => [...m, userMsg]);
    setText("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "A refined choice. May I suggest our Exclusive Collection for you?" },
      ]);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button aria-label="Open concierge chat" className="fixed bottom-6 right-6 rounded-full p-4 shadow-[var(--shadow-elegant)] bg-[image:var(--gradient-primary)] text-primary-foreground hover:shadow-[var(--shadow-glow)] animate-scale-in">
          <MessageCircle />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">Luxe Concierge</DialogTitle>
        </DialogHeader>
        <div className="h-64 overflow-y-auto space-y-3 pr-2">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "bot" ? "text-sm" : "text-sm text-right"}>
              <span className={m.role === "bot" ? "inline-block bg-secondary text-secondary-foreground px-3 py-2 rounded" : "inline-block bg-primary text-primary-foreground px-3 py-2 rounded"}>
                {m.text}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={send} className="flex gap-2">
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your message…" aria-label="Message" />
          <button className="px-4 rounded bg-primary text-primary-foreground">Send</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
