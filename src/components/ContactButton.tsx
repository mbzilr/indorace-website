import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ContactButton() {
  const [infoSource, setInfoSource] = useState("social-networks");
  const [open, setOpen] = useState(false); // State to control dialog visibility
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      if (result.includes("Message sent successfully")) {
        setStatus("success");
        setOpen(false); // Close dialog on success
        alert("Message sent successfully!");
      } else {
        setStatus("error");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Contact</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[512px] md:max-w-[1028px]">
        <DialogHeader>
          <DialogTitle className="text-4xl font-extrabold">Contact Form</DialogTitle>
          <DialogDescription className="text-black/50">
            Feel free to contact us if you have any questions.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4" encType="multipart/form-data">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name="name" placeholder="Enter your name..." className="col-span-3" required />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" name="email" type="email" placeholder="Enter email here..." className="col-span-3" required />
          </div>

          {/* FIXED RADIO GROUP */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">How did you find us?</Label>
            <div className="col-span-3">
              <RadioGroup defaultValue={infoSource} onValueChange={setInfoSource}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Social Networks" id="r1" />
                  <Label htmlFor="r1">Social Networks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Web Search" id="r2" />
                  <Label htmlFor="r2">Web Search</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Friends' Recommendation" id="r3" />
                  <Label htmlFor="r3">Recommended by a friend</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Seen at public spaces." id="r4" />
                  <Label htmlFor="r4">Seen at public places</Label>
                </div>
              </RadioGroup>

              {/* Hidden input to ensure form submission */}
              <input type="hidden" name="infoSource" value={infoSource} />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subjectText" className="text-right">
              Subject
            </Label>
            <Input id="subjectText" name="subjectText" placeholder="Enter your subject here..." className="col-span-3" required></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea id="message" name="message" placeholder="Type your message here." className="col-span-3" required />
          </div>

          <DialogFooter>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
