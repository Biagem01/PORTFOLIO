import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const { toast } = useToast();
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = "Name must be at least 2 characters long";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      await emailjs.sendForm("service_29nvbfg", "template_nghzm6h", form.current, "y05Tay6-nzRQeU80B");

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("Message sent successfully! Thank you, I'll get back to you soon.");
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
    <section id="contact" className="p-font py-16 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="p-font text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's discuss your next project or potential collaboration opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="title text-2xl font-semibold text-slate-900 dark:text-white mb-4">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: "fas fa-envelope", label: "Email", value: "biagio.99cubisino@gmail.com" },
                { icon: "fas fa-phone", label: "Phone", value: "+39 3425180540" },
                { icon: "fas fa-map-marker-alt", label: "Location", value: "Comiso, RG" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <i className={icon}></i>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{label}</p>
                    <p className="text-slate-600 dark:text-slate-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-slate-900 dark:text-white font-medium mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/Biagem01?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="mailto:biagio.99cubisino@gmail.com"
                  className="w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
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
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
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
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
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
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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

              {successMessage && <p className="text-green-600 dark:text-green-400 font-medium text-center">{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
