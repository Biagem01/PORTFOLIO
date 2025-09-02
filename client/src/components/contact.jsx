import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // messaggio sotto form
  const { toast } = useToast();
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMessage(""); // reset messaggio precedente

    try {
      await emailjs.sendForm(
        "service_29nvbfg",
        "template_nghzm6h",
        form.current,
        "y05Tay6-nzRQeU80B"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000
      });

      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("🚀 Message sent successfully! Thank you, I'll get back to you soon.");

      // auto-sparizione dopo 5 secondi
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message",
        description: "Sorry, there was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-bounce-slow">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              🚀 Get In Touch
            </span>
          </h2>
          <p className="p-font text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
            Let's discuss your next project or potential collaboration opportunities ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="title text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Let's Connect</h3>
              <p className="p-font text-slate-600 dark:text-slate-300 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                feel free to reach out!
              </p>
            </div>

            <div className="project-description space-y-4">
              {[
                { icon: "fas fa-envelope", label: "Email", value: "biagio.99cubisino@gmail.com" },
                { icon: "fas fa-phone", label: "Phone", value: "+39 3425180540" },
                { icon: "fas fa-map-marker-alt", label: "Location", value: "Comiso, RG" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center shadow-cosmic animate-float glow-pulse">
                    <i className={`${icon} text-primary dark:text-primary-light`}></i>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-100">{label}</p>
                    <p className="text-slate-600 dark:text-slate-300">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="title text-slate-800 dark:text-slate-100 mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                {[
                  { href: "#", icon: "fab fa-linkedin-in" },
                  { href: "#", icon: "fab fa-github" },
                  { href: "#", icon: "fab fa-twitter" },
                  { href: "#", icon: "fas fa-globe" },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 glass-morphism hover:gradient-cosmic hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-cosmic animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <i className={`${icon} text-slate-800 dark:text-slate-200`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-ultra rounded-3xl p-10 shadow-cosmic hover-cosmic">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="title">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="p-font text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="title">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="p-font text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="title">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="p-font text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="title w-full gradient-cosmic text-white py-5 px-8 rounded-2xl hover-cosmic font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-cosmic animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {successMessage && (
                <p className="text-green-500 font-medium mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* service: service_29nvbfg
   template: template_nghzm6h
   public key: y05Tay6-nzRQeU80B
*/
