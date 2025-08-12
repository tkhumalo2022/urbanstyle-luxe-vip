import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SupportForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());

      toast.success("Concierge has received your message. We'll reply soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Could not send right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid gap-4 max-w-xl text-left">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm">Full name</label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm">Email</label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm">Subject</label>
        <Input id="subject" name="subject" placeholder="How can we assist?" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm">Message</label>
        <Textarea id="message" name="message" placeholder="Tell us more…" required rows={5} />
      </div>
      <Button type="submit" disabled={loading} className="justify-center">
        {loading ? "Sending…" : "Send to Concierge"}
      </Button>
    </form>
  );
}
