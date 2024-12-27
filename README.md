# Mikro Uygulama Entegrasyonu (Module Federation)

Bu proje, Webpack Module Federation kullanarak oluşturulmuş bir mikro uygulama mimarisi içermektedir. `host`, `product`, ve `basket` mikro uygulamaları arasında entegrasyon sağlanmaktadır.

## Kurulum

### 1. Projeyi GitHub'dan Klonlama
Projeyi GitHub'dan klonlayın:
```bash
git clone https://github.com/safasaribek/task.git
cd task
```

### 2. Bağımlılıkları Kurma
Her bir uygulama için gerekli bağımlılıkları kurmamız gerekiyor. Aşağıdaki adımları izleyin:

a. Host Uygulaması İçin Kurulum
host klasörüne gidin:
```bash
cd host
```
Bağımlılıkları kurun:
```bash
npm install
```

b. Product Uygulaması İçin Kurulum
product klasörüne gidin:
```bash
cd product
```
Bağımlılıkları kurun:
```bash
npm install
```

c. Basket Uygulaması İçin Kurulum
basket klasörüne gidin:
```bash
cd basket
```
Bağımlılıkları kurun:
```bash
npm install
```

### 3. Uygulamaları Başlatma
Her bir uygulamayı başlatmak için aşağıdaki adımları izleyin:

a. Host Uygulamasını Başlatma
host klasörüne gidin:
```bash
cd host
```
Uygulamayı başlatın:
```bash
npm run dev
```

b. Product Uygulamasını Başlatma
product klasörüne gidin:
```bash
cd product
```
Uygulamayı başlatın:
```bash
npm run dev
```

c. Basket Uygulamasını Başlatma
basket klasörüne gidin:
```bash
cd basket
```
Uygulamayı başlatın:
```bash
npm run dev
```

### 4. Uygulamaları Tarayıcıda Görüntüleme
Tarayıcınızda aşağıdaki URL'leri ziyaret ederek uygulamaları görüntüleyebilirsiniz:

- Host Uygulaması: [http://localhost:3001](http://localhost:3000)
- Product Uygulaması: [http://localhost:3002](http://localhost:3001)
- Basket Uygulaması: [http://localhost:3003](http://localhost:3002)