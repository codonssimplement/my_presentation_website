import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" size={24} />,
      title: "Email Principal",
      value: "elimaneba786328232@gmail.com",
      link: "mailto:elimaneba786328232@gmail.com"
    },
    {
      icon: <Mail className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" size={24} />,
      title: "Email Professionnel",
      value: "codons.simplement@gmail.com",
      link: "mailto:codons.simplement@gmail.com"
    },
    {
      icon: <Phone className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" size={24} />,
      title: "Téléphone",
      value: "+221 78 632 82 32",
      link: "tel:+221786328232"
    },
    {
      icon: <MapPin className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" size={24} />,
      title: "Localisation",
      value: "Sicap Foire, Dakar - Sénégal",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discutons de vos projets et opportunités de collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Mes Coordonnées</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.link !== "#" ? (
                          <a 
                            href={info.link}
                            className="text-[#6D6BCF] hover:text-[#9E9BF2] transition-colors flex items-center gap-2"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#6D6BCF] flex items-center gap-2">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Disponibilité</h4>
              <div className="space-y-2 text-gray-700">
                <p>• Ouvert aux opportunités d'emploi</p>
                <p>• Disponible pour missions freelance</p>
                <p>• Partenariats et collaborations</p>
                <p>• Consultations en développement web</p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group">
                  <Send className="text-[#6D6BCF] group-hover:text-[#9E9BF2] transition-colors" size={24} />
                  Envoyez-moi un message
                </CardTitle>
                <CardDescription>
                  Je vous répondrai dans les 24 heures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full text-white bg-gradient-to-r from-[#6D6BCF] via-[#9E9BF2] to-[#6D6BCF] animate-gradient hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    <Send className="mr-2" size={16} />
                    {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;