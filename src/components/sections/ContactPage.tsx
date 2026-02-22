import { Mail, Phone, MapPin, Calendar, User, MessageSquare, Globe, Server, Loader2Icon, Copy, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const services = [
  {
    title: "Web Development",
    desc: "Full-stack web applications using React, Laravel, and modern frameworks",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "API Development",
    desc: "RESTful API design and backend development with PHP/Laravel",
    icon: <Server className="w-5 h-5" />,
  },
];

interface ContactPageProps {
  isLoaded: boolean;
}

export default function ContactPage({ isLoaded }: ContactPageProps) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("parrachristianpersonal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xvzbgbkr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className={`w-full max-w-[850px] bg-white paper-shadow rounded-sm transition-all duration-700 delay-[400ms] ${
        isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.985]"
      }`}>
        <div className="p-6 md:p-14" data-document-content>
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[var(--word-text)]">
            <div>
              <h1 className="font-document text-2xl font-bold text-[var(--word-text)]">Contact Information</h1>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-1">Get in Touch for Collaborations & Opportunities</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-[var(--word-text-secondary)]">Document: Contact.docx</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="font-document text-[15px] text-[var(--word-text)] leading-relaxed">
              I am currently available for <span className="font-bold">freelance projects</span>,
              <span className="font-bold"> full-time positions</span>, and
              <span className="font-bold"> collaborative opportunities</span>.
              Whether you have a project in mind, a position to fill, or just want to connect, I'd love to hear from you.
              I typically respond within 24 hours.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-[1fr_0.9fr] gap-8">
            {/* Left: Contact Form */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-[var(--word-blue)]" />
                <h2 className="section-heading flex-1">Send a Message</h2>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block font-document text-sm text-[var(--word-text)] mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="name" required className="word-input font-document" placeholder="John Doe" />
                </div>

                <div>
                  <label className="block font-document text-sm text-[var(--word-text)] mb-1.5">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" required className="word-input font-document" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block font-document text-sm text-[var(--word-text)] mb-1.5">Subject</label>
                  <input type="text" name="subject" className="word-input font-document" placeholder="Project Inquiry / Job Opportunity" />
                </div>

                <div>
                  <label className="block font-document text-sm text-[var(--word-text)] mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="word-input font-document resize-none"
                    placeholder="Tell me about your project, opportunity, or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[var(--word-blue)] text-white font-document text-sm font-medium rounded hover:bg-[var(--word-blue-dark)] transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2Icon className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <p className="font-document text-xs text-[var(--word-text-secondary)] mt-3 text-center">
                Powered by Formspree — Your message will be sent securely
              </p>
            </div>

            {/* Right: Direct Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-[var(--word-blue)]" />
                <h2 className="section-heading flex-1">Direct Contact</h2>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-[var(--word-bg)] p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-[var(--word-blue)]" />
                    <span className="font-document text-xs font-bold text-[var(--word-text-secondary)] uppercase">Email</span>
                  </div>
                  <p className="font-document text-sm text-[var(--word-text)] mb-2">parrachristianpersonal@gmail.com</p>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--word-border)] rounded text-sm hover:bg-[var(--word-blue-light)] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[var(--word-green)]" />
                        <span className="font-document text-xs">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--word-text-secondary)]" />
                        <span className="font-document text-xs">Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="bg-[var(--word-bg)] p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-[var(--word-blue)]" />
                    <span className="font-document text-xs font-bold text-[var(--word-text-secondary)] uppercase">Phone</span>
                  </div>
                  <p className="font-document text-sm text-[var(--word-text)]">0997-247-9983</p>
                  <p className="font-document text-xs text-[var(--word-text-secondary)] mt-1">Available for calls and SMS</p>
                </div>

                {/* Location */}
                <div className="bg-[var(--word-bg)] p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[var(--word-blue)]" />
                    <span className="font-document text-xs font-bold text-[var(--word-text-secondary)] uppercase">Location</span>
                  </div>
                  <p className="font-document text-sm text-[var(--word-text)]">Tagaytay City, Cavite</p>
                  <p className="font-document text-xs text-[var(--word-text-secondary)] mt-1">Philippines · Open to remote work</p>
                </div>

                {/* Availability */}
                <div className="bg-[var(--word-blue-light)] p-4 rounded border border-[var(--word-blue)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[var(--word-blue)]" />
                    <span className="font-document text-xs font-bold text-[var(--word-blue)] uppercase">Availability</span>
                  </div>
                  <p className="font-document text-sm text-[var(--word-text)]">Currently Available</p>
                  <p className="font-document text-xs text-[var(--word-text-secondary)] mt-1">Open for freelance projects and full-time positions</p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Can Help With */}
          <div className="mt-8 pt-6 border-t border-[var(--word-border)]">
              <h2 className="section-heading text-center mb-4">
              How I Can Help
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((item, idx) => (
                <div key={idx} className="text-center p-4 bg-[var(--word-bg)] rounded">
                  <div className="w-10 h-10 mx-auto mb-3 bg-[var(--word-blue)] text-white rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-1">{item.title}</h3>
                  <p className="font-document text-xs text-[var(--word-text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page Footer */}
          <div className="mt-10 pt-4 border-t border-[var(--word-border)] text-center">
            <p className="font-mono text-xs text-[var(--word-text-secondary)]">Page 5 of 5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
