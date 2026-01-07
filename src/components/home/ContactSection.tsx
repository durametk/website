import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { industries } from "@/data/industries";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  industry: z.string().min(1, "Please select an industry"),
  requirement: z.string().trim().min(10, "Please describe your requirement (at least 10 characters)").max(1000, "Requirement must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  prefilledIndustry?: string;
  prefilledProduct?: string;
  isProductNotListed?: boolean;
}

const ContactSection = ({ prefilledIndustry, prefilledProduct, isProductNotListed }: ContactFormProps) => {
  const { toast } = useToast();

  const defaultRequirement = prefilledProduct 
    ? isProductNotListed 
      ? `Product not listed - Requirement: ` 
      : `Enquiry for: ${prefilledProduct}\n\nRequirement details: `
    : "";

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      industry: prefilledIndustry || "",
      requirement: defaultRequirement,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
        requirement: data.requirement,
        product: prefilledProduct,
      });
      
      toast({
        title: "Enquiry Submitted Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      reset({
        name: "",
        email: "",
        phone: "",
        industry: prefilledIndustry || "",
        requirement: "",
      });
    } catch (error: any) {
      console.error("Email Error:", error);
      const errorMessage = error?.message || "Please try again or contact us directly.";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-heading font-semibold text-accent text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you have a specific requirement or want to explore how we can support your operations, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="h-5 w-5 text-primary" />,
                  title: "Phone",
                  content: (
                    <>
                      <a href="tel:+919686118846" className="text-muted-foreground hover:text-primary transition-colors">
                        +91-9686118846
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">Office: 080-497238825</p>
                    </>
                  ),
                },
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  title: "Email",
                  content: (
                    <a href="mailto:sales@duramettechnologies.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      sales@duramettechnologies.com
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                  title: "Address",
                  content: (
                    <>
                      <p className="text-muted-foreground">
                        #39, Ejipura Main Road, Near 24th Cross,<br />
                        Ejipura, Bangalore – 560047
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">Working Hours: Monday – Saturday | 10:00 AM – 6:30 PM</p>
                    </>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-xl p-8 shadow-xl border border-border">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                {prefilledProduct ? "Product Enquiry" : "Send Us a Message"}
              </h3>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={!!prefilledIndustry}
                      >
                        <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select an industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.id} value={industry.id}>
                              {industry.name}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.industry && <p className="text-destructive text-sm mt-1">{errors.industry.message}</p>}
                </div>

                <div>
                  <Label htmlFor="requirement">Requirement Details *</Label>
                  <Textarea
                    id="requirement"
                    placeholder="Describe your requirements in detail..."
                    rows={5}
                    {...register("requirement")}
                    className={errors.requirement ? "border-destructive" : ""}
                  />
                  {errors.requirement && <p className="text-destructive text-sm mt-1">{errors.requirement.message}</p>}
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
