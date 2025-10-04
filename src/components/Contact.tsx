import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-[hsl(var(--surface-light))] text-[hsl(0_0%_6%)]"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[hsl(0_0%_6%)]">
            Hablemos de tu proyecto
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-3xl bg-white shadow-xl animate-scale-in"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">
              Nombre *
            </label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">
              Correo *
            </label>
            <Input
              id="correo"
              name="correo"
              type="email"
              required
              className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">
              Teléfono o WhatsApp
            </label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]"
              placeholder="+52 123 456 7890"
            />
          </div>

          <div>
            <label htmlFor="tipo" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">
              Tipo de web
            </label>
            <Select name="tipo">
              <SelectTrigger className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)]">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landing">Landing</SelectItem>
                <SelectItem value="institucional">Institucional</SelectItem>
                <SelectItem value="portafolio">Portafolio</SelectItem>
                <SelectItem value="tienda">Tienda</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-[hsl(0_0%_6%)]">
              Cuéntanos sobre tu idea
            </label>
            <Textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              className="rounded-xl border-[hsl(0_0%_80%)] bg-white text-[hsl(0_0%_6%)] resize-none"
              placeholder="Describe brevemente tu proyecto..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full rounded-2xl font-semibold text-base py-6 bg-[hsl(170_100%_37%)] hover:bg-[hsl(170_100%_30%)] text-white"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
