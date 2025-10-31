import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Home as HomeIcon, Leaf, Zap, Clock, Award, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/vista_exterior.jpg" 
            alt="Passive House" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-6">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-3xl mx-auto">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-lg px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero_cta')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-700 text-green-700 hover:bg-green-50 text-lg px-8 py-6"
              onClick={() => scrollToSection('models')}
            >
              {t('hero_secondary_cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('about_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/images/vista_interior.jpg" 
                alt="Interior" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about_text')}
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {t('about_mission_title')}
                </h3>
                <p className="text-gray-700">
                  {t('about_mission_text')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: t('about_value_sustainability') },
              { icon: Award, title: t('about_value_quality') },
              { icon: Users, title: t('about_value_transparency') },
              { icon: HomeIcon, title: t('about_value_service') }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
                <h4 className="font-semibold text-gray-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('founder_title')}
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('founder_subtitle')}
                  </h3>
                  <p className="text-green-700 font-semibold mb-4">
                    {t('founder_role')}
                  </p>
                  <div className="text-left text-sm text-gray-600 space-y-2">
                    <p><strong>Email:</strong> onunosousa@gmail.com</p>
                    <p><strong>Telefoon:</strong> +123-456-7890</p>
                    <p><strong>Locatie:</strong> Wageningen, NL</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('founder_text')}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t('founder_education_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{t('founder_education_text')}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{t('founder_experience_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{t('founder_experience_text')}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Kerncompetenties</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>Houtskeletbouw</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>Ecologische Bouw</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>Projectleiding</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>Zonne-PV Installaties</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>Luchtdichte Systemen</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>Duurzame Renovatie</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passive House Benefits */}
      <section id="passive" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('passive_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('passive_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{t('passive_savings_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('passive_savings_text')}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{t('passive_comfort_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('passive_comfort_text')}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{t('passive_sustainable_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('passive_sustainable_text')}</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle>{t('passive_fast_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('passive_fast_text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('models_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('models_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* T3 Model */}
            <Card className="border-2 hover:border-green-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">{t('model_t3_title')}</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-700">
                  {t('model_t3_size')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t('model_t3_layout')}</p>
                <p className="text-sm text-gray-500 mb-4">{t('model_t3_ideal')}</p>
                <p className="text-2xl font-bold text-green-700">{t('model_t3_price')}</p>
                <Button className="w-full mt-4 bg-green-700 hover:bg-green-800" onClick={() => scrollToSection('contact')}>
                  {t('models_cta')}
                </Button>
              </CardContent>
            </Card>

            {/* T4 Model - Most Popular */}
            <Card className="border-2 border-green-500 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t('model_t4_popular')}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{t('model_t4_title')}</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-700">
                  {t('model_t4_size')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t('model_t4_layout')}</p>
                <p className="text-sm text-gray-500 mb-4">{t('model_t4_ideal')}</p>
                <p className="text-2xl font-bold text-green-700">{t('model_t4_price')}</p>
                <Button className="w-full mt-4 bg-green-700 hover:bg-green-800" onClick={() => scrollToSection('contact')}>
                  {t('models_cta')}
                </Button>
              </CardContent>
            </Card>

            {/* T5 Model */}
            <Card className="border-2 hover:border-green-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">{t('model_t5_title')}</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-700">
                  {t('model_t5_size')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t('model_t5_layout')}</p>
                <p className="text-sm text-gray-500 mb-4">{t('model_t5_ideal')}</p>
                <p className="text-2xl font-bold text-green-700">{t('model_t5_price')}</p>
                <Button className="w-full mt-4 bg-green-700 hover:bg-green-800" onClick={() => scrollToSection('contact')}>
                  {t('models_cta')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Performance Levels */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('performance_title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{t('perf_optimal_title')}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-700">
                    {t('perf_optimal_price')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ {t('perf_optimal_rvalue')}</li>
                    <li>✓ {t('perf_optimal_savings')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">{t('perf_passive_title')}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-700">
                    {t('perf_passive_price')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ {t('perf_passive_rvalue')}</li>
                    <li>✓ {t('perf_passive_savings')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-900">{t('perf_super_title')}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-emerald-700">
                    {t('perf_super_price')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ {t('perf_super_rvalue')}</li>
                    <li>✓ {t('perf_super_savings')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('process_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('process_subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t(`process_step${step}_title` as any)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`process_step${step}_desc` as any)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-green-700">
              {t('process_timeline')}
            </p>
          </div>
        </div>
      </section>

      {/* Senmar Partnership */}
      <section id="senmar" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('senmar_title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('senmar_subtitle')}
              </p>
              <p className="text-gray-700 mb-8">
                {t('senmar_text')}
              </p>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    <span className="text-gray-700">{t(`senmar_benefit${i}` as any)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/project_sweden_1.jpg" alt="Project" className="rounded-lg shadow-lg" />
              <img src="/images/project_iceland.jpg" alt="Project" className="rounded-lg shadow-lg" />
              <img src="/images/project_france_1.jpg" alt="Project" className="rounded-lg shadow-lg" />
              <img src="/images/project_france_2.jpg" alt="Project" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('sustainability_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('sustainability_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t('sustainability_carbon_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('sustainability_carbon_text')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('sustainability_materials_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('sustainability_materials_text')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('sustainability_certs_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-700 mr-2">✓</span>
                      <span>{t(`sustainability_cert${i}` as any)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('contact_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact_info_title')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Groenvastbouw</h4>
                  <p className="text-gray-600">{t('contact_location')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@groenvastbouw.nl</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">KvK</h4>
                  <p className="text-gray-600">75308045</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder={t('contact_name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact_email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('contact_phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact_message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                {t('contact_submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Groenvastbouw</h3>
              <p className="text-gray-400">
                {t('footer_about')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_links')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">{t('nav_about')}</a></li>
                <li><a href="#passive" className="hover:text-white">{t('nav_passive')}</a></li>
                <li><a href="#models" className="hover:text-white">{t('nav_models')}</a></li>
                <li><a href="#process" className="hover:text-white">{t('nav_process')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('footer_contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wageningen, Nederland</li>
                <li>info@groenvastbouw.nl</li>
                <li>KvK: 75308045</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Groenvastbouw. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
