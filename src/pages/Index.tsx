import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐴</span>
            <span className="text-2xl font-bold text-primary">КАЗЫ</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О продукте</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('order')} className="hover:text-primary transition-colors">Заказ</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 ornament-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 observe">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                🏔️ Из степей Казахстана
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Настоящая <span className="text-primary">КАЗЫ</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Традиционная конская колбаса из натурального мяса с травяным откормом. 
                Вековые рецепты и современное качество.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Info" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="observe relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30">
                <img 
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=800&fit=crop" 
                  alt="Казы" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm">Натуральный продукт</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашей казы</h2>
            <p className="text-xl text-muted-foreground">
              Вековые традиции кочевников в каждом кусочке
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Leaf',
                title: 'Травяной откорм',
                description: 'Кони пасутся на чистых степных пастбищах, питаясь только натуральными травами'
              },
              {
                icon: 'Award',
                title: 'Традиционный рецепт',
                description: 'Приготовлено по старинным казахским рецептам, передающимся из поколения в поколение'
              },
              {
                icon: 'Heart',
                title: 'Польза для здоровья',
                description: 'Богата белком, содержит минимум жира, источник витаминов группы B'
              }
            ].map((item, i) => (
              <Card key={i} className="observe p-8 hover:shadow-xl transition-shadow bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Взгляните на нашу продукцию
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1551881192-dc8f48e99e84?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=600&fit=crop',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop'
            ].map((src, i) => (
              <div key={i} className="observe aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg">
                <img src={src} alt={`Казы ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="observe text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Заказ и доставка</h2>
              <p className="text-xl text-muted-foreground">
                Просто и удобно
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="observe p-8 bg-card">
                <Icon name="Package" size={48} className="text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Варианты упаковки</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span>Вакуумная упаковка — 0,5 кг / 1 кг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span>Подарочная упаковка — от 2 кг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span>Оптовые партии — от 10 кг</span>
                  </li>
                </ul>
              </Card>

              <Card className="observe p-8 bg-card">
                <Icon name="Truck" size={48} className="text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Условия доставки</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span>Доставка по Казахстану — 1-3 дня</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span>Бесплатная доставка от 5 кг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1" />
                    <span>Термоупаковка для сохранения свежести</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="observe mt-8 p-8 bg-primary text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Готовы заказать?</h3>
                  <p className="text-white/90">Свяжитесь с нами удобным способом</p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 observe">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: 'Phone',
                title: 'Телефон',
                content: '+7 (777) 123-45-67'
              },
              {
                icon: 'Mail',
                title: 'Email',
                content: 'info@kazy.kz'
              },
              {
                icon: 'MapPin',
                title: 'Адрес',
                content: 'г. Алматы, Казахстан'
              }
            ].map((item, i) => (
              <Card key={i} className="observe p-6 text-center hover:shadow-xl transition-shadow bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-white ornament-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐴</span>
              <span className="text-2xl font-bold">КАЗЫ</span>
            </div>
            <p className="text-white/80">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Icon name="MessageCircle" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
